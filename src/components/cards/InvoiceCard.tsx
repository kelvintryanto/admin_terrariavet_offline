import { canEditInvoice } from '@/app/utils/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { InvoiceData } from '@/data/types';
import { formatRupiah } from '@/lib/utils';
import { Edit, FileDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface InvoiceCardProps {
  invoice: InvoiceData & { _id?: string };
  index: number;
  onView: (id: string) => void;
  onDownload: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function InvoiceCard({
  invoice,
  index,
  onView,
  onDownload,
  onEdit,
}: InvoiceCardProps) {
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

  return (
    <Card
      className="hover:bg-accent cursor-pointer transition-colors"
      onClick={() => onView(invoice._id || '')}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold truncate">{invoice.invoiceNo}</h3>
            <span className="text-sm text-muted-foreground">#{index + 1}</span>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-muted-foreground">Nama Klien</p>
              <p className="font-medium">{invoice.clientName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Nama Anjing</p>
              <p className="font-medium">
                {invoice.subAccount && invoice.subAccount !== 'Tidak ditemukan'
                  ? invoice.subAccount
                  : '-'}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Kontak</p>
              <p>{invoice.contact}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Tanggal Masuk</p>
              <p>
                {new Date(invoice.inpatientDate).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="font-medium">{formatRupiah(invoice.total)}</p>
            </div>
            <div className="flex justify-center gap-1 pt-2">
              {canEditInvoice(userRole) ? (
                <>
                  {onEdit && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit(invoice._id || '');
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
                      onDownload(invoice._id || '');
                    }}
                  >
                    <FileDown className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDownload(invoice._id || '');
                  }}
                >
                  <FileDown className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
