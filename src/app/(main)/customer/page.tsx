'use client';

import {
  canCreateCustomer,
  canDeleteCustomer,
  canEditCustomer,
} from '@/app/utils/auth';
import { CustomerTable } from '@/components/cms/customer/CustomerTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableSkeleton } from '@/components/ui/skeleton-table';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function CustomerPage() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [userRole, setUserRole] = useState<string>('');
  const { toast } = useToast();

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

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customers');
        if (!response.ok) throw new Error('Failed to fetch customers');
        const data = await response.json();
        setCustomers(data);
        setFilteredCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        toast({
          title: 'Error',
          description: 'Failed to fetch customers',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [toast]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCustomers(customers);
      return;
    }

    const searchLower = searchQuery.toLowerCase();
    const filtered = customers.filter(
      (customer: Customer) =>
        customer.name.toLowerCase().includes(searchLower) ||
        customer.phone.toLowerCase().includes(searchLower)
    );
    setFilteredCustomers(filtered);
  }, [searchQuery, customers]);

  if (loading) return <TableSkeleton />;

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">Manajemen Pelanggan</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
        <div className="relative w-full sm:w-64">
          <Input
            placeholder="Cari pelanggan..."
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
        {canCreateCustomer(userRole) && (
          <Button asChild className="flex-1 sm:flex-none">
            <Link href="/customer/add">Tambah Pelanggan</Link>
          </Button>
        )}
      </div>

      <CustomerTable
        customers={filteredCustomers}
        canEdit={canEditCustomer(userRole)}
        canDelete={canDeleteCustomer(userRole)}
        onCustomerUpdated={() => {
          // Refresh the customer list
          window.location.reload();
        }}
      />
    </div>
  );
}
