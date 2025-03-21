'use client';

import { canDeleteInvoice, canEditInvoice } from '@/app/utils/auth';
import { createPDFTemplate } from '@/components/pdfgenerator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { InvoiceData } from '@/data/types';
import { toast } from '@/hooks/use-toast';
import { Edit, FileDown, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function InvoiceTable({
  filteredInvoices,
  onInvoiceUpdated,
}: {
  filteredInvoices: InvoiceData[];
  onInvoiceUpdated: () => void;
}) {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('/api/users/me');
        const data = await response.json();
        if (data.user) {
          setUserRole(data.user.role);
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };
    fetchUserRole();
  }, []);

  const handleInvoiceClick = (invoiceId: string) => {
    router.push(`/invoice/${invoiceId}`);
  };

  const handleEdit = (invoiceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/invoice/${invoiceId}/edit`);
  };

  const handleDownload = async (invoiceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/invoices/${invoiceId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch invoice data');
      }

      const invoiceData = await response.json();
      const pdf = await createPDFTemplate(invoiceData);
      pdf.save(`${invoiceData.invoiceNo}.pdf`);

      toast({
        title: 'Success',
        description: 'PDF berhasil diunduh',
      });
    } catch (error) {
      console.error('Error downloading PDF:', error);
      toast({
        title: 'Error',
        description: 'Gagal mengunduh PDF',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (invoiceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/invoices/${invoiceId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete invoice');
      }

      toast({
        title: 'Success',
        description: 'Invoice deleted successfully',
      });

      onInvoiceUpdated();
    } catch (error) {
      console.error('Error deleting invoice:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete invoice',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="rounded-md border">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-10">No</TableHead>
              <TableHead style={{ width: '15%' }}>Invoice No</TableHead>
              <TableHead style={{ width: '15%' }}>Client Name</TableHead>
              <TableHead style={{ width: '15%' }}>Nama Anjing</TableHead>
              <TableHead style={{ width: '15%' }}>Type</TableHead>
              <TableHead style={{ width: '20%' }}>Status</TableHead>
              <TableHead className="text-center" style={{ width: '110px' }}>
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((invoice, index) => {
              if (!invoice._id) return null;
              return (
                <TableRow
                  key={invoice._id}
                  onClick={() => handleInvoiceClick(invoice._id as string)}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="truncate">
                    {invoice.invoiceNo}
                  </TableCell>
                  <TableCell className="truncate">
                    {invoice.clientName}
                  </TableCell>
                  <TableCell className="truncate">
                    {invoice.subAccount &&
                    invoice.subAccount !== 'Tidak ditemukan'
                      ? invoice.subAccount
                      : '-'}
                  </TableCell>
                  <TableCell className="truncate">
                    {invoice.type === 'inpatient'
                      ? 'Rawat Inap'
                      : 'Rawat Jalan'}
                  </TableCell>
                  <TableCell className="truncate">{invoice.status}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-1">
                      {canEditInvoice(userRole) && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={(e) => handleEdit(invoice._id as string, e)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                      {canDeleteInvoice(userRole) && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent
                            onClick={(e) => e.stopPropagation()}
                          >
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Apakah anda yakin?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Tindakan ini tidak dapat dibatalkan. Invoice
                                akan dihapus secara permanen.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Batal</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(invoice._id as string, e);
                                }}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Hapus
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={(e) =>
                          handleDownload(invoice._id as string, e)
                        }
                      >
                        <FileDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
