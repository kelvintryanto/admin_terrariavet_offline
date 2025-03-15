"use client";

import { Diagnose } from "@/app/models/diagnose";
import { jsPDF } from "jspdf";

export async function CreateDiagnosePDFTemplate(
  data: Diagnose
): Promise<jsPDF> {
  if (typeof window === "undefined") {
    throw new Error("PDF generation is only available in the browser");
  }

  return new Promise<jsPDF>(async (resolve, reject) => {
    try {
      // Dynamically import jsPDF
      const jsPDFModule = await import("jspdf").catch((err) => {
        console.error("Error importing jsPDF:", err);
        throw new Error("Failed to load PDF generator");
      });

      // Get the constructor (works with both ESM and CommonJS)
      const JsPDF =
        jsPDFModule.default?.jsPDF || jsPDFModule.default || jsPDFModule.jsPDF;

      if (!JsPDF) {
        throw new Error("Failed to load PDF generator constructor");
      }

      let pdf: jsPDF;
      try {
        pdf = new JsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });
      } catch (error) {
        console.error("Error creating PDF instance:", error);
        throw new Error("Failed to initialize PDF generator");
      }

      if (!pdf) {
        throw new Error("Failed to create PDF instance");
      }

      // Ensure invoice number format is correct for display
      const ensureCorrectFormat = (invoiceNo: string) => {
        return invoiceNo.replace(/_/g, "/");
      };

      // Wrap text operations with error handling
      const safePdfOperation = (operation: () => void) => {
        try {
          operation();
        } catch (error) {
          console.error("Error in PDF operation:", error);
        }
      };

      // Wrap text operations with error handling
      const safeText = (
        text: string,
        x: number,
        y: number,
        options?: { align?: "left" | "center" | "right" }
      ) => {
        safePdfOperation(() => {
          pdf.text(text, x, y, options);
        });
      };

      // Wrap line operations with error handling
      const safeLine = (x1: number, y1: number, x2: number, y2: number) => {
        safePdfOperation(() => {
          pdf.line(x1, y1, x2, y2);
        });
      };

      const pageWidth = pdf.internal.pageSize.width;
      const pageHeight = pdf.internal.pageSize.height;
      const margin = 20;
      let yPos = margin;
      let pageNumber = 1;

      // Function to add a new page if needed
      const checkAndAddPage = (height: number) => {
        if (yPos + height > pageHeight - margin) {
          safePdfOperation(() => {
            pdf.addPage();
          });
          pageNumber++;
          yPos = margin;
          // Add header line on new page
          safeLine(margin, 15, pageWidth - margin, 15);
        }
      };

      // Function to draw a line
      const drawLine = (y: number) => {
        safeLine(margin, y, pageWidth - margin, y);
      };

      // Load and add logo
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        try {
          // Add logo with error handling
          pdf.addImage(img, "PNG", margin, yPos, 32, 24);
        } catch (error) {
          console.error("Error adding logo to PDF:", error);
        }
        continueWithPDF();
      };

      img.onerror = () => {
        console.warn("Logo image failed to load, continuing without logo");
        continueWithPDF();
      };

      // Try to load logo with full URL in production
      const logoUrl = "/logo/logo_with_text.png";

      img.src = logoUrl;

      function continueWithPDF() {
        // Add clinic information
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.text("TerrariaVet", pageWidth - margin, yPos + 5, {
          align: "right",
        });
        pdf.text(
          "Jl.Platina 2 No.18 Desa Curug, Kec.Gunung Sindur, Parung",
          pageWidth - margin,
          yPos + 10,
          { align: "right" }
        );
        pdf.text(
          "Kabupaten Bogor - Jawa Barat 16340",
          pageWidth - margin,
          yPos + 15,
          { align: "right" }
        );
        pdf.text(
          "0811 1901 755   |   0811 800 790",
          pageWidth - margin,
          yPos + 20,
          {
            align: "right",
          }
        );

        // Add header line
        pdf.line(margin, 45, pageWidth - margin, 45);

        // Header
        yPos += 35;
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        pdf.text("HASIL DIAGNOSA", pageWidth / 2, yPos, { align: "center" });

        // Add invoice number with correct format
        yPos += 7;
        pdf.setFontSize(12);
        pdf.text(ensureCorrectFormat(data.dxNumber), pageWidth / 2, yPos, {
          align: "center",
        });

        // Client Information
        yPos += 10;
        pdf.setFontSize(12);
        pdf.text("Klien", margin, yPos);
        pdf.setFont("helvetica", "normal");

        const addField = (label: string, value: string) => {
          // Starting X position for the content (after the label)
          const contentX = margin + 40;
          // Maximum width calculation - from content start to right margin
          const maxWidth = pageWidth - margin - contentX;
          const lineHeight = 5; // Line spacing

          yPos += 4; // Add space before text

          // Write the label
          pdf.text(`${label}:`, margin, yPos);

          // Process text with manual line breaks
          let allLines: string[] = [];

          // First split by manual line breaks
          const paragraphs = value.split("\n");

          // Then apply wrapping to each paragraph and collect all lines
          paragraphs.forEach((paragraph) => {
            // @ts-expect-error - splitTextToSize exists in jsPDF but TypeScript definitions might be outdated
            const wrappedLines = pdf.splitTextToSize(paragraph, maxWidth);
            allLines = allLines.concat(wrappedLines);
          });

          // Check if we need a page break based on the number of lines
          checkAndAddPage(allLines.length * lineHeight + 4);

          // Render each line
          allLines.forEach((line: string, index: number) => {
            // Check if this specific line will cause a page overflow
            if (yPos + index * lineHeight > pageHeight - margin) {
              pdf.addPage();
              pageNumber++;
              // Reset to top of page with some margin
              yPos = margin;
            }

            pdf.text(line, contentX, yPos + index * lineHeight);
          });

          // Add a line below the text - ensure it spans the full width from left to right margin
          drawLine(yPos + allLines.length * lineHeight);

          // Update yPos for the next field
          yPos += allLines.length * lineHeight + 3;
        };

        yPos += 5;
        addField("Nama", data.clientSnapShot?.name || "-");
        addField("Kontak", data.clientSnapShot?.phone || "-");
        addField("Pet", data.dogSnapShot?.name || "-");

        // Medical Information
        yPos += 10;
        checkAndAddPage(20);
        pdf.setFont("helvetica", "bold");
        pdf.text("Informasi Perawatan", margin, yPos);
        pdf.setFont("helvetica", "normal");

        yPos += 5;
        addField(
          "Tanggal Perawatan",
          `${new Date(data.dxDate).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}` || "-"
        );
        addField("Dokter", `${data.doctorName}` || "-");
        // Add temperature with one decimal place
        const temperatureText =
          data.temperature !== undefined && data.temperature !== null
            ? `${data.temperature.toFixed(1)} °C`
            : "Tidak ada data";
        addField("Suhu", temperatureText);
        addField("Gejala", `${data.symptom}` || "-");
        addField("Hasil Pemeriksaan", `${data.description}` || "-");

        // Add page number
        for (let i = 1; i <= pageNumber; i++) {
          safePdfOperation(() => {
            pdf.setPage(i);
            pdf.setFontSize(10);
            safeText(String(i), pageWidth - 10, pageHeight - 10, {
              align: "right",
            });
          });
        }

        // When saving in production, use blob approach
        const originalSave = pdf.save;
        pdf.save = function (filename: string) {
          try {
            const blob = this.output("blob");
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          } catch (error) {
            console.error("Error in PDF save:", error);
            originalSave.call(this, filename);
          }
        };

        resolve(pdf);
      }
    } catch (error) {
      console.error("Error in PDF generation:", error);
      reject(error);
    }
  });
}
