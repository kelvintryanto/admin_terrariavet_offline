'use client';

import { Diagnose } from '@/app/models/diagnose';
import AddDiagnose from '@/components/cms/diagnose/AddDiagnose';
import DiagnoseTable from '@/components/cms/diagnose/DiagnoseTable';
import { Input } from '@/components/ui/input';
import { TableSkeleton } from '@/components/ui/skeleton-table';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';

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

export default function DiagnosePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDiagnoses, setFilteredDiagnoses] = useState<Diagnose[]>([]);
  const [diagnoses, setDiagnoses] = useState<Diagnose[]>([]);
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(searchQuery, 300);
  const { toast } = useToast();

  const refreshPage = () => {
    fetchDiagnoses();
  };

  const fetchDiagnoses = async () => {
    try {
      const response = await fetch('/api/diagnoses');
      const data = await response.json();
      setDiagnoses(data);
      setFilteredDiagnoses(data);
    } catch {
      toast({
        title: 'Error',
        description: 'Gagal mengambil data diagnosa',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Filter diagnoses when search query changes
  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setFilteredDiagnoses(diagnoses);
      return;
    }

    const searchLower = debouncedSearch.toLowerCase();
    const filtered = diagnoses.filter(
      (diagnose) =>
        diagnose.doctorName.toLowerCase().includes(searchLower) ||
        diagnose.clientSnapShot.name.toLowerCase().includes(searchLower) ||
        diagnose.dogSnapShot.name.toLowerCase().includes(searchLower) ||
        diagnose.description.toLowerCase().includes(searchLower)
    );
    setFilteredDiagnoses(filtered);
  }, [debouncedSearch, diagnoses]);

  useEffect(() => {
    fetchDiagnoses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <TableSkeleton />;

  return (
    <div className="w-full">
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Diagnosa</h1>
          <AddDiagnose onDiagnoseAdded={refreshPage} />
        </div>

        <div className="relative w-full max-w-sm mb-4">
          <Input
            placeholder="Cari diagnosa..."
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
      </div>

      {filteredDiagnoses.length === 0 ? (
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
          <h3 className="font-semibold text-lg mb-1">Belum ada diagnosa</h3>
          <p className="text-muted-foreground mb-4">
            Mulai dengan membuat diagnosa baru
          </p>
          <AddDiagnose onDiagnoseAdded={refreshPage} />
        </div>
      ) : (
        <DiagnoseTable
          filteredDiagnoses={filteredDiagnoses}
          onDiagnoseUpdated={refreshPage}
        />
      )}
    </div>
  );
}
