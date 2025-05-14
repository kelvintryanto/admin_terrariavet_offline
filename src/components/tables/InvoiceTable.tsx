import { canEditInvoice } from "@/app/utils/auth";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InvoiceData } from "@/data/types";
import { Edit, FileDown } from "lucide-react";
import { useEffect, useState } from "react";

interface InvoiceTableProps {
  invoices: (InvoiceData & { _id?: string })[];
  onView: (id: string) => void;
  onDownload: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function InvoiceTable({
  invoices,
  onView,
  onDownload,
  onEdit,
}: InvoiceTableProps) {
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch("/api/users/me");
        const data = await response.json();
        if (data.user) {
          setUserRole(data.user.role);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };
    fetchUserRole();
  }, []);

  return (
    <div className="rounded-md border">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-10">No</TableHead>
              <TableHead style={{ width: "15%" }}>No. Invoice</TableHead>
              <TableHead style={{ width: "15%" }}>Nama Klien</TableHead>
              <TableHead style={{ width: "15%" }}>Nama Anjing</TableHead>
              <TableHead style={{ width: "15%" }}>Kontak</TableHead>
              <TableHead style={{ width: "20%" }}>Tanggal Masuk</TableHead>
              <TableHead className="text-center" style={{ width: "110px" }}>
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow
                key={invoice._id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => onView(invoice._id || "")}
              >
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="truncate">{invoice.invoiceNo}</TableCell>
                <TableCell className="truncate">{invoice.clientName}</TableCell>
                <TableCell className="truncate">
                  {invoice.subAccount &&
                  invoice.subAccount !== "Tidak ditemukan"
                    ? invoice.subAccount
                    : "-"}
                </TableCell>
                <TableCell className="truncate">{invoice.contact}</TableCell>
                <TableCell className="truncate">
                  {new Date(invoice.inpatientDate).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-1">
                    {canEditInvoice(userRole) && onEdit && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEdit(invoice._id || "");
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDownload(invoice._id || "");
                      }}
                    >
                      <FileDown className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
