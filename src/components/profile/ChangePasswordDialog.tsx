'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, KeyRound } from 'lucide-react';
import { useState } from 'react';

export function ChangePasswordDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Kata sandi baru tidak cocok!');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Kata sandi baru harus minimal 6 karakter');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || 'Kata sandi berhasil diubah');
        setTimeout(() => {
          setIsOpen(false);
          setFormData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
          });
        }, 2000); // Close dialog after 2 seconds
      } else {
        setError(data.message || 'Gagal mengubah kata sandi');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="w-full">
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setError(null);
            setSuccess(null);
            setFormData({
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
            });
            setShowPasswords({
              current: false,
              new: false,
              confirm: false,
            });
          }
        }}
      >
        <DialogTrigger asChild>
          <button className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <KeyRound className="h-4 w-4 flex-shrink-0" />
            <span className="hidden lg:inline-block">Ubah Kata Sandi</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border bg-background">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Ubah Kata Sandi
            </DialogTitle>
            <DialogDescription>
              Masukkan kata sandi saat ini dan kata sandi baru Anda.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <Alert
              variant="destructive"
              className="border-destructive/50 text-destructive"
            >
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-500/50 text-green-600 bg-green-50/50">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPasswords.current ? 'text' : 'password'}
                  placeholder="Kata Sandi Saat Ini"
                  value={formData.currentPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      currentPassword: e.target.value,
                    }))
                  }
                  className="border-input bg-background"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPasswords.current ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPasswords.new ? 'text' : 'password'}
                  placeholder="Kata Sandi Baru"
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  className="border-input bg-background"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPasswords.new ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPasswords.confirm ? 'text' : 'password'}
                  placeholder="Konfirmasi Kata Sandi Baru"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  className="border-input bg-background"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPasswords.confirm ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-black hover:bg-black/80 text-white"
              >
                {isLoading ? 'Mengubah...' : 'Ubah Kata Sandi'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
