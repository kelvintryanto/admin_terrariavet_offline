"use client";

import type { jsPDF } from "jspdf";
import { InvoiceData } from "../data/types";

export async function createPDFTemplate(data: InvoiceData): Promise<jsPDF> {
  // Ensure we're in the browser
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

      // Add error handling for PDF operations
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
          // Add logo with error handling - move it down by 10 units
          pdf.addImage(img, "PNG", margin, yPos + 5, 20, 20);
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
      const logoUrl = "/logo.png";

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
        // Add phone numbers
        pdf.text(
          "0811 1901 755   |   0811 800 790",
          pageWidth - margin,
          yPos + 20,
          {
            align: "right",
          }
        );
        // Add bank account information (account name is required)
        pdf.text(
          "BANK BCA : 4970343771 a.n Yudhiyanto Tasma",
          pageWidth - margin - 1.3, // Adjust X position by moving 3mm to the left
          yPos + 25,
          {
            align: "right",
          }
        );

        // Add header line - make it relative to yPos instead of fixed at 40
        pdf.line(margin, yPos + 28, pageWidth - margin, yPos + 28);

        // Header - adjust starting position based on the new line position
        // Increased from 35 to 45 to add more space after the line
        yPos += 40; // This now means yPos + 30 (line) + 15 (space)
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text("INVOICE PERAWATAN", pageWidth / 2, yPos, { align: "center" });

        // Add invoice number with correct format - reduced from 5 to 4
        yPos += 5;
        pdf.setFontSize(12);
        pdf.text(ensureCorrectFormat(data.invoiceNo), pageWidth / 2, yPos, {
          align: "center",
        });

        // Client Information - reduced from 10 to 8
        yPos += 8;
        pdf.setFontSize(12);
        pdf.text("Klien", margin, yPos);
        pdf.setFont("helvetica", "normal");

        const addField = (label: string, value: string) => {
          yPos += 8;
          checkAndAddPage(12);

          // Fixed positions for better alignment
          const labelX = margin;
          const colonX = margin + 45; // Position for the colon
          const valueX = margin + 50; // Position for the value

          pdf.setFontSize(10);
          pdf.text(label, labelX, yPos);
          pdf.text(":", colonX, yPos);
          pdf.text(value || "-", valueX, yPos);

          // Reduce spacing between text and line from 3 to 2
          drawLine(yPos + 2);
        };

        addField("Nama", data.clientName || "-");
        addField("Kontak", data.contact || "-");
        addField("Nama Anjing", data.subAccount || "-");

        // Booking Information - reduced from 15 to 12
        yPos += 12;
        checkAndAddPage(20);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text("Informasi Perawatan", margin, yPos);
        pdf.setFont("helvetica", "normal");

        addField(
          "Tanggal Masuk",
          `${data.inpatientDate} ${data.inpatientTime}` || "-"
        );
        if (data.type === "inpatient") {
          addField(
            "Tanggal Keluar",
            `${data.dischargeDate} ${data.dischargeTime}` || "-"
          );
        }
        addField("Total", `Rp ${data.total.toLocaleString()}`);
        if (data.type === "inpatient") {
          addField("Deposit", `Rp ${data.deposit.toLocaleString()}`);
          addField("Sisa", `Rp ${data.balance.toLocaleString()}`);
        }
        addField("Status", data.status);

        // Services - reduced from 25 to 15
        yPos += 15;
        checkAndAddPage(20);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text("Servis", margin, yPos);
        pdf.setFont("helvetica", "normal");

        // Services table - more compact spacing
        yPos += 6; // Reduced from 8

        // Check if services array is empty
        if (!data.services || data.services.length === 0) {
          // Show "No data" message instead of table headers
          yPos += 4; // Reduced from 8 to 4 to be closer to the header
          pdf.text("Tidak ada data", margin, yPos);
        } else {
          const serviceHeaders = ["Nama", "Tanggal", "Harga"];
          // Calculate total available width and distribute it evenly for 3 columns
          const availableWidth = pageWidth - 2 * margin;
          const serviceColWidths = [
            availableWidth / 3, // 1/3 for service name
            availableWidth / 3, // 1/3 for date
            availableWidth / 3, // 1/3 for price
          ];
          const startX = margin;
          const maxServiceNameWidth = serviceColWidths[0] - 5; // Leave some padding

          // Draw header line with more compact spacing - reduce spacing before headers
          drawLine(yPos - 0.5); // Reduced from -1

          // Print headers with reduced spacing
          yPos += 3; // Reduced from 4 to bring headers closer to the line

          // Use normal font with slightly larger size instead of bold for a semi-bold effect
          pdf.setFont("helvetica", "normal");
          // Set consistent font size 10 for headers
          pdf.setFontSize(10);

          // Fixed positions for better alignment - evenly distributed
          let posX = startX;
          pdf.text(serviceHeaders[0], posX, yPos); // Left align first column

          posX += serviceColWidths[0];
          pdf.text(serviceHeaders[1], posX + serviceColWidths[1] / 2, yPos, {
            align: "center",
          }); // Center align middle column

          posX += serviceColWidths[1];
          // Right align last column - align with the end of the line
          pdf.text(serviceHeaders[2], pageWidth - margin, yPos, {
            align: "right",
          });

          // Keep font size at 10 for content
          pdf.setFontSize(10);

          // Draw line after headers with more compact spacing
          yPos += 1.5; // Reduced from 2 to bring line closer to headers
          drawLine(yPos);
          yPos += 1.5; // Reduced from 2 to bring content closer to line

          // Print service items with more compact spacing
          data.services.forEach((service) => {
            yPos += 4; // Reduced from 6
            checkAndAddPage(10); // Reduced from 12
            let itemX = startX;

            // Explicitly set font size to 10 for all service items
            pdf.setFontSize(10);

            // Service name - keep on single line by adjusting font size if needed
            const serviceNameWidth = pdf.getTextWidth(service.name);
            if (serviceNameWidth > maxServiceNameWidth) {
              // Calculate and set a smaller font size to fit the text
              const scaleFactor = maxServiceNameWidth / serviceNameWidth;
              const newFontSize = Math.max(7, Math.floor(10 * scaleFactor)); // Don't go smaller than 7pt

              // Set smaller size, render text, then restore
              pdf.setFontSize(newFontSize);
              pdf.text(service.name, itemX, yPos);
              pdf.setFontSize(10); // Restore to exactly 10
            } else {
              pdf.text(service.name, itemX, yPos);
            }

            // Move to date column position
            itemX += serviceColWidths[0];

            // Date centered
            const formattedDate = new Date(service.date).toLocaleDateString(
              "id-ID",
              {
                day: "2-digit",
                month: "short",
              }
            );
            pdf.text(formattedDate, itemX + serviceColWidths[1] / 2, yPos, {
              align: "center",
            });

            // Price right aligned - align with the end of the line
            pdf.text(
              `Rp ${service.price.toLocaleString()}`,
              pageWidth - margin,
              yPos,
              { align: "right" }
            );

            // Consistent spacing after text and before line
            yPos += 2; // Adjusted for symmetry
            drawLine(yPos);
            yPos += 2; // Adjusted for symmetry
          });
        }

        // Cart Items - more compact spacing
        yPos += 10; // Consistent spacing between sections
        checkAndAddPage(15); // Reduced from 20
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text("Keranjang Pasien", margin, yPos);
        pdf.setFont("helvetica", "normal");

        // Cart Items section with more compact spacing
        yPos += 6; // Reduced from 8

        // Check if cart items array is empty
        if (!data.cartItems || data.cartItems.length === 0) {
          // Show "No data" message instead of table headers
          yPos += 4; // Reduced from 8 to 4 to be closer to the header
          pdf.text("Tidak ada data", margin, yPos);
          // yPos += 3; // Reduced from 6 to 3 to decrease spacing below the message
        } else {
          const headers = ["Nama", "Tanggal", "Harga", "Kuantitas", "Total"];
          // Distribute cart columns width evenly for 5 columns
          const availableWidth = pageWidth - 2 * margin;
          const colWidths = [
            availableWidth / 5, // 1/5 for name
            availableWidth / 5, // 1/5 for date
            availableWidth / 5, // 1/5 for price
            availableWidth / 5, // 1/5 for quantity
            availableWidth / 5, // 1/5 for total
          ];
          const cartStartX = margin;
          const maxNameWidth = colWidths[0] - 5; // Leave some padding

          // Draw header line with more compact spacing - reduce spacing before headers
          drawLine(yPos - 0.5); // Reduced from -1

          // Print headers with reduced spacing
          yPos += 3; // Reduced from 4 to bring headers closer to the line

          // Use normal font with slightly larger size instead of bold for a semi-bold effect
          pdf.setFont("helvetica", "normal");
          // Set consistent font size 10 for headers
          pdf.setFontSize(10);

          // Fixed positions for better alignment - evenly distributed
          let posX = cartStartX;
          pdf.text(headers[0], posX, yPos); // Left align name column

          posX += colWidths[0];
          pdf.text(headers[1], posX + colWidths[1] / 2, yPos, {
            align: "center",
          }); // Center align date

          posX += colWidths[1];
          pdf.text(headers[2], posX + colWidths[2] / 2, yPos, {
            align: "center",
          }); // Center align price

          posX += colWidths[2];
          pdf.text(headers[3], posX + colWidths[3] / 2, yPos, {
            align: "center",
          }); // Center align quantity

          // Right align total column - align with the end of the line
          pdf.text(headers[4], pageWidth - margin, yPos, {
            align: "right",
          });

          // Keep font size at 10 for content
          pdf.setFontSize(10);

          // Draw line after headers with more compact spacing
          yPos += 1.5; // Reduced from 2 to bring line closer to headers
          drawLine(yPos);
          yPos += 1.5; // Reduced from 2 to bring content closer to line

          // Print cart items with more compact spacing
          data.cartItems.forEach((item) => {
            yPos += 4; // Reduced from 6
            checkAndAddPage(10); // Reduced from 12
            let itemX = cartStartX;

            // Explicitly set font size to 10 for all cart items
            pdf.setFontSize(10);

            // Name - keep on single line by adjusting font size if needed
            const nameWidth = pdf.getTextWidth(item.name);
            if (nameWidth > maxNameWidth) {
              // Calculate and set a smaller font size to fit the text
              const scaleFactor = maxNameWidth / nameWidth;
              const newFontSize = Math.max(7, Math.floor(10 * scaleFactor)); // Don't go smaller than 7pt

              // Set smaller size, render text, then restore
              pdf.setFontSize(newFontSize);
              pdf.text(item.name, itemX, yPos);
              pdf.setFontSize(10); // Restore to exactly 10
            } else {
              pdf.text(item.name, itemX, yPos);
            }

            // Move to date column position
            itemX += colWidths[0];

            // Date centered
            const formattedDate = new Date(item.date).toLocaleDateString(
              "id-ID",
              {
                day: "2-digit",
                month: "short",
              }
            );
            pdf.text(formattedDate, itemX + colWidths[1] / 2, yPos, {
              align: "center",
            });

            // Move to price column position
            itemX += colWidths[1];

            // Price centered
            pdf.text(
              `Rp ${item.harga.toLocaleString()}`,
              itemX + colWidths[2] / 2,
              yPos,
              {
                align: "center",
              }
            );

            // Move to quantity column position
            itemX += colWidths[2];

            // Quantity centered
            pdf.text(item.quantity.toString(), itemX + colWidths[3] / 2, yPos, {
              align: "center",
            });

            // Total right aligned - align with the end of the line
            pdf.text(
              `Rp ${item.total.toLocaleString()}`,
              pageWidth - margin,
              yPos,
              {
                align: "right",
              }
            );

            // Consistent spacing after text and before line
            yPos += 2; // Adjusted for symmetry
            drawLine(yPos);
            yPos += 2; // Adjusted for symmetry
          });
        }

        // Financial Breakdown
        // Reduced space check from 60 to 40
        const remainingSpace = pageHeight - (yPos + 40);
        if (remainingSpace < 40) {
          pdf.addPage();
          yPos = margin;
        } else {
          // Reduced from 20 to 15
          yPos += 15;
        }

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text("Rincian Biaya", pageWidth - margin - 80, yPos);
        pdf.setFont("helvetica", "normal");

        // Reduced from 8 to 6
        const lineHeight = 6;
        const breakdownLeft = pageWidth - margin - 80;
        yPos += 6;

        // Function to add breakdown line
        const addBreakdownLine = (
          label: string,
          value: number,
          isTotal: boolean = false
        ) => {
          if (isTotal) {
            yPos += lineHeight;
            pdf.setFont("helvetica", "bold");
            // Reduce spacing between text and line
            pdf.line(breakdownLeft, yPos - 2, pageWidth - margin, yPos - 2); // Reduced from -3
          }
          yPos += lineHeight;
          pdf.text(label, breakdownLeft, yPos);
          pdf.text(`Rp ${value.toLocaleString()}`, pageWidth - margin, yPos, {
            align: "right",
          });
          if (isTotal) {
            pdf.setFont("helvetica", "normal");
            yPos += lineHeight / 2;
          }
        };

        // Add breakdown items
        addBreakdownLine("Subtotal", data.subtotal);
        const taxAmount = (data.subtotal * (data.tax || 0)) / 100;
        addBreakdownLine(`Pajak (${data.tax || 0}%)`, taxAmount);
        addBreakdownLine("Total", data.total, true);
        if (data.type === "inpatient") {
          addBreakdownLine("Deposit", data.deposit);
          addBreakdownLine("Sisa", data.balance, true);
        } else {
          // For outpatient invoices, show the total as the balance
          addBreakdownLine("Sisa", data.total, true);
        }

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
