import { Diagnose } from '@/app/models/diagnose';
import { canDeleteDiagnose, canEditDiagnose } from '@/app/utils/auth';
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
import { Card, CardContent } from '@/components/ui/card';
import { Edit, FileDown, Trash2 } from 'lucide-react';

interface DiagnoseCardProps {
  diagnose: Diagnose;
  index: number;
  onView: (id: string) => void;
  onEdit: (id: string, e: React.MouseEvent) => void;
  onDelete: (id: string, e: React.MouseEvent) => void;
  onDownload: (id: string, e: React.MouseEvent) => void;
  userRole: string;
}

export function DiagnoseCard({
  diagnose,
  index,
  onView,
  onEdit,
  onDelete,
  onDownload,
  userRole,
}: DiagnoseCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!diagnose._id) return null;

  return (
    <Card
      className="hover:bg-accent cursor-pointer transition-colors"
      onClick={() => onView(diagnose._id.toString())}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold truncate">{diagnose.dxNumber}</h3>
            <span className="text-sm text-muted-foreground">#{index + 1}</span>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-muted-foreground">Nama Klien</p>
              <p className="font-medium">{diagnose.clientSnapShot?.name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Nama Anjing</p>
              <p>{diagnose.dogSnapShot?.name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Nama Dokter</p>
              <p>{diagnose.doctorName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Tanggal</p>
              <p>{formatDate(diagnose.dxDate)}</p>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              {canEditDiagnose(userRole) && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(diagnose._id.toString(), e);
                  }}
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
                      className="h-8 px-2 text-destructive hover:text-destructive"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tindakan ini tidak dapat dibatalkan. Diagnosa akan
                        dihapus secara permanen.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batal</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(diagnose._id.toString(), e);
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
                className="h-8 px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  onDownload(diagnose._id.toString(), e);
                }}
              >
                <FileDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
