'use client';

import { InvoiceCard } from '@/components/cards/InvoiceCard';
import { createPDFTemplate } from '@/components/pdfgenerator';
import { InvoiceTable } from '@/components/tables/InvoiceTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableSkeleton } from '@/components/ui/skeleton-table';
import { InvoiceData } from '@/data/types';
import { toast } from '@/hooks/use-toast';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Debounce hook to prevent excessive filtering
const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function InvoicePage() {
  const [invoices, setInvoices] = useState<(InvoiceData & { _id?: string })[]>(
    []
  );
  const [filteredInvoices, setFilteredInvoices] = useState<
    (InvoiceData & { _id?: string })[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);
  const router = useRouter();

  const fetchInvoices = async () => {
    try {
      const response = await fetch('/api/invoices');
      const data = await response.json();
      setInvoices(data);
      setFilteredInvoices(data);
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to fetch invoices',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  // Filter invoices when search query changes
  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setFilteredInvoices(invoices);
      return;
    }

    const searchLower = debouncedSearch.toLowerCase();
    const filtered = invoices.filter(
      (invoice) =>
        invoice.invoiceNo.toLowerCase().includes(searchLower) ||
        invoice.clientName.toLowerCase().includes(searchLower) ||
        (invoice.subAccount &&
          invoice.subAccount.toLowerCase().includes(searchLower)) ||
        (invoice.contact && invoice.contact.toLowerCase().includes(searchLower))
    );
    setFilteredInvoices(filtered);
  }, [debouncedSearch, invoices]);

  const handleView = (id: string) => {
    router.push(`/invoice/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/invoice/${id}/edit`);
  };

  const handleDownload = async (id: string) => {
    try {
      const response = await fetch(`/api/invoices/${id}`);
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

  if (loading) return <TableSkeleton />;

  return (
    <div className="w-full">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Halaman Invoice</h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-64">
            <Input
              placeholder="Cari invoice, client, nama anjing, kontak..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Button asChild className="flex-1 sm:flex-none">
            <Link href="/invoice/add" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Buat Invoice
            </Link>
          </Button>
        </div>
      </div>

      {filteredInvoices.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <svg
            className="h-12 w-12 text-muted-foreground mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="font-semibold text-lg mb-1">
            {searchQuery.trim()
              ? 'Tidak ada invoice yang cocok'
              : 'Belum ada invoice'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {searchQuery.trim()
              ? 'Coba gunakan kata kunci yang berbeda'
              : 'Mulai dengan membuat invoice baru'}
          </p>
          {!searchQuery.trim() && (
            <Button asChild>
              <Link href="/invoice/add">Buat Invoice</Link>
            </Button>
          )}
        </div>
      ) : (
        <>
          {/* Desktop View - Table */}
          <div className="hidden md:block">
            <div className="w-full rounded-md border">
              <InvoiceTable
                invoices={filteredInvoices}
                onView={handleView}
                onDownload={handleDownload}
                onEdit={handleEdit}
              />
            </div>
          </div>

          {/* Mobile View - Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {filteredInvoices.map((invoice, index) => (
              <InvoiceCard
                key={invoice._id}
                invoice={invoice}
                index={index}
                onView={handleView}
                onDownload={handleDownload}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
