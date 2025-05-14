'use client';

import { Diagnose } from '@/app/models/diagnose';
import { canDeleteDiagnose, canEditDiagnose } from '@/app/utils/auth';
import { DiagnoseCard } from '@/components/cards/DiagnoseCard';
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
import { toast } from '@/hooks/use-toast';
import { Edit, FileDown, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CreateDiagnosePDFTemplate } from './diagnosePdfGenerator';

export default function DiagnoseTable({
  filteredDiagnoses,
  onDiagnoseUpdated,
}: {
  filteredDiagnoses: Diagnose[];
  onDiagnoseUpdated: () => void;
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

  const handleDiagnoseClick = (diagnoseId: string) => {
    router.push(`/diagnose/${diagnoseId}`);
  };

  const handleEdit = (diagnoseId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/diagnose/${diagnoseId}/edit`);
  };

  const handleDelete = async (diagnoseId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/diagnoses/${diagnoseId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete diagnose');
      }

      toast({
        title: 'Success',
        description: 'Diagnose deleted successfully',
      });

      onDiagnoseUpdated();
    } catch (error) {
      console.error('Error deleting diagnose:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete diagnose',
        variant: 'destructive',
      });
    }
  };

  const handleDownload = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(`/api/diagnoses/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch diagnose data');
      }

      const diagnoseData = await response.json();
      const pdf = await CreateDiagnosePDFTemplate(diagnoseData);
      pdf.save(`${diagnoseData.dxNumber}.pdf`);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {/* Desktop View - Table */}
      <div className="hidden md:block">
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center w-10">No</TableHead>
                  <TableHead style={{ width: '15%' }}>Nomor Diagnosa</TableHead>
                  <TableHead style={{ width: '15%' }}>Nama Klien</TableHead>
                  <TableHead style={{ width: '15%' }}>Nama Anjing</TableHead>
                  <TableHead style={{ width: '15%' }}>Nama Dokter</TableHead>
                  <TableHead style={{ width: '20%' }}>Tanggal</TableHead>
                  <TableHead className="text-center" style={{ width: '110px' }}>
                    Aksi
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDiagnoses.map((diagnose, index) => {
                  if (!diagnose._id) return null;
                  return (
                    <TableRow
                      key={diagnose._id.toString()}
                      onClick={() =>
                        handleDiagnoseClick(diagnose._id.toString())
                      }
                      className="cursor-pointer"
                    >
                      <TableCell className="text-center">{index + 1}</TableCell>
                      <TableCell className="truncate">
                        {diagnose.dxNumber}
                      </TableCell>
                      <TableCell className="truncate">
                        {diagnose.clientSnapShot?.name}
                      </TableCell>
                      <TableCell className="truncate">
                        {diagnose.dogSnapShot?.name}
                      </TableCell>
                      <TableCell className="truncate">
                        {diagnose.doctorName}
                      </TableCell>
                      <TableCell className="truncate">
                        {formatDate(diagnose.dxDate)}
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center gap-1">
                          {canEditDiagnose(userRole) && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={(e) =>
                                handleEdit(diagnose._id.toString(), e)
                              }
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          )}
                          {canDeleteDiagnose(userRole) && (
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
                                    Tindakan ini tidak dapat dibatalkan.
                                    Diagnosa akan dihapus secara permanen.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Batal</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDelete(diagnose._id.toString(), e);
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
                              handleDownload(diagnose._id.toString(), e)
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
      </div>

      {/* Mobile View - Cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredDiagnoses.map((diagnose, index) => (
          <DiagnoseCard
            key={diagnose._id?.toString()}
            diagnose={diagnose}
            index={index}
            onView={handleDiagnoseClick}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onDownload={handleDownload}
            userRole={userRole}
          />
        ))}
      </div>
    </>
  );
}
