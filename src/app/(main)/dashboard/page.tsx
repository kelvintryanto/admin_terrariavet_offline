'use client';

import {
  Folder,
  Receipt,
  Shield,
  ShoppingBag,
  Stethoscope,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface StatsData {
  customers: number;
  categories: number;
  products: number;
  services: number;
  diagnoses: number;
  invoices: number;
  admins: number;
}

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string>('');
  const [stats, setStats] = useState<StatsData>({
    customers: 0,
    categories: 0,
    products: 0,
    services: 0,
    diagnoses: 0,
    invoices: 0,
    admins: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // First get current user to check permissions
        const userResponse = await fetch('/api/users/me');
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user');
        }

        const userData = await userResponse.json();
        const currentUserRole = userData.user?.role || '';
        setUserRole(currentUserRole);

        const isSuperAdmin = currentUserRole === 'super_admin';

        // Prepare API requests
        const apiRequests = [
          fetch('/api/customers'),
          fetch('/api/categories'),
          fetch('/api/products'),
          fetch('/api/services'),
          fetch('/api/diagnoses'),
          fetch('/api/invoices'),
        ];

        // Only fetch admin users if super admin
        if (isSuperAdmin) {
          apiRequests.push(fetch('/api/cms/users'));
        }

        // Fetch all data simultaneously
        const responses = await Promise.all(apiRequests);

        // Check if main endpoints returned ok
        if (
          !responses[0].ok ||
          !responses[1].ok ||
          !responses[2].ok ||
          !responses[3].ok ||
          !responses[4].ok ||
          !responses[5].ok
        ) {
          throw new Error('Failed to fetch data');
        }

        // Parse all responses
        const customers = await responses[0].json();
        const categories = await responses[1].json();
        const products = await responses[2].json();
        const services = await responses[3].json();
        const diagnoses = await responses[4].json();
        const invoices = await responses[5].json();

        // Parse admin users if super admin
        let adminUsers = [];
        if (isSuperAdmin && responses.length > 6 && responses[6].ok) {
          adminUsers = await responses[6].json();
        }

        setStats({
          customers: Array.isArray(customers) ? customers.length : 0,
          categories: Array.isArray(categories) ? categories.length : 0,
          products: Array.isArray(products) ? products.length : 0,
          services: Array.isArray(services) ? services.length : 0,
          diagnoses: Array.isArray(diagnoses) ? diagnoses.length : 0,
          invoices: Array.isArray(invoices) ? invoices.length : 0,
          admins: Array.isArray(adminUsers) ? adminUsers.length : 0,
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get quick actions excluding admin management if not super_admin
  const getQuickActions = () => {
    const baseActions = [
      {
        title: 'Kelola Pelanggan',
        icon: Users,
        color: 'bg-blue-500',
        url: '/customer',
      },
      {
        title: 'Kelola Kategori Produk',
        icon: Folder,
        color: 'bg-yellow-500',
        url: '/category',
      },
      {
        title: 'Kelola Produk & Layanan',
        icon: ShoppingBag,
        color: 'bg-green-500',
        url: '/products',
      },
      {
        title: 'Diagnosa',
        icon: Stethoscope,
        color: 'bg-purple-500',
        url: '/diagnose',
      },
      {
        title: 'Invoice',
        icon: Receipt,
        color: 'bg-red-500',
        url: '/invoice',
      },
    ];

    // Add admin management only for super_admin
    if (userRole === 'super_admin') {
      baseActions.push({
        title: 'Kelola Admin',
        icon: Shield,
        color: 'bg-indigo-500',
        url: '/admin',
      });
    }

    return baseActions;
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-600">Selamat datang di panel admin</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {getQuickActions().map((action, index) => (
          <Link
            key={index}
            href={action.url}
            className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className={`${action.color} p-3 rounded-lg mr-3`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">{action.title}</span>
          </Link>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          // Loading skeleton
          [...Array(userRole === 'super_admin' ? 6 : 5)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))
        ) : (
          <>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500">Total Pelanggan</h3>
                  <p className="text-2xl font-bold">{stats.customers}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500">Total Kategori</h3>
                  <p className="text-2xl font-bold">{stats.categories}</p>
                </div>
                <Folder className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500">Total Produk & Layanan</h3>
                  <p className="text-2xl font-bold">
                    {stats.products + stats.services}
                  </p>
                </div>
                <ShoppingBag className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500">Total Diagnosa</h3>
                  <p className="text-2xl font-bold">{stats.diagnoses}</p>
                </div>
                <Stethoscope className="w-8 h-8 text-indigo-500" />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500">Total Invoice</h3>
                  <p className="text-2xl font-bold">{stats.invoices}</p>
                </div>
                <Receipt className="w-8 h-8 text-red-500" />
              </div>
            </div>
            {userRole === 'super_admin' && (
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-500">Total Admin</h3>
                    <p className="text-2xl font-bold">{stats.admins}</p>
                  </div>
                  <Shield className="w-8 h-8 text-indigo-500" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
