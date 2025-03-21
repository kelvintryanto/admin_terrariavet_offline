'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InvoiceData } from '@/data/types';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const InvoiceForm = dynamic(() => import('@/components/invoice-form'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Loading...</h2>
        <p className="text-muted-foreground">Memuat formulir invoice...</p>
      </div>
    </div>
  ),
});

export default function EditInvoicePage() {
  const router = useRouter();
  const params = useParams();
  const invoiceId = params.id as string;
  const [invoice, setInvoice] = useState<InvoiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('inpatient');

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/invoices/${invoiceId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch invoice');
        }
        const data = await response.json();
        setInvoice(data);
        setActiveTab(data.type || 'inpatient');
      } catch (error) {
        console.error('Error fetching invoice:', error);
        toast({
          title: 'Error',
          description: 'Gagal mengambil data invoice',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    if (invoiceId) {
      fetchInvoice();
    }
  }, [invoiceId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Loading...</h2>
          <p className="text-muted-foreground">Memuat data invoice...</p>
        </div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Error</h2>
          <p className="text-muted-foreground">Invoice tidak ditemukan</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => router.push('/invoice')}
          >
            Kembali ke Halaman Invoice
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 sm:py-4 gap-2 sm:gap-0">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="shrink-0 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold truncate">
                Edit Invoice
              </h1>
              <p className="text-xs text-muted-foreground truncate">
                Edit data invoice {invoice.invoiceNo}
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-36 sm:w-48"></div>{' '}
          {/* Spacer div for balance, hidden on mobile */}
        </nav>
      </header>

      <main className="flex-1 h-[calc(100vh-88px)] overflow-y-auto">
        {/* Tabs placed below header, centered */}
        <div className="flex justify-center mt-3 sm:mt-4 px-2 sm:px-0">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-[400px]"
          >
            <TabsList className="grid w-full grid-cols-2 bg-muted h-9">
              <TabsTrigger
                value="inpatient"
                className="text-xs sm:text-sm text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                disabled={invoice.type !== 'inpatient'}
              >
                Rawat Inap
              </TabsTrigger>
              <TabsTrigger
                value="outpatient"
                className="text-xs sm:text-sm text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                disabled={invoice.type !== 'outpatient'}
              >
                Rawat Jalan
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mx-auto w-full px-2 sm:px-4 pt-0 pb-16 sm:pb-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <TabsContent value="inpatient" className="space-y-3 sm:space-y-4">
              <div className="flex flex-col gap-1 sm:gap-2 px-2 sm:px-3">
                <h2 className="text-base sm:text-lg font-semibold">
                  Edit Form Rawat Inap
                </h2>
                <p className="text-xs text-muted-foreground">
                  Edit formulir berikut untuk memperbarui invoice rawat inap.
                  Tanggal masuk dan tanggal keluar wajib diisi.
                </p>
              </div>
              <div className="w-full">
                <InvoiceForm
                  type="inpatient"
                  initialData={invoice}
                  editMode={true}
                />
              </div>
            </TabsContent>

            <TabsContent value="outpatient" className="space-y-3 sm:space-y-4">
              <div className="flex flex-col gap-1 sm:gap-2 px-2 sm:px-3">
                <h2 className="text-base sm:text-lg font-semibold">
                  Edit Form Rawat Jalan
                </h2>
                <p className="text-xs text-muted-foreground">
                  Edit formulir berikut untuk memperbarui invoice rawat jalan.
                  Hanya tanggal masuk yang perlu diisi.
                </p>
              </div>
              <div className="w-full">
                <InvoiceForm
                  type="outpatient"
                  initialData={invoice}
                  editMode={true}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
