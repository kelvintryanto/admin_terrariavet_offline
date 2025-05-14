import { Resend } from 'resend';

// Create a Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender
const DEFAULT_FROM =
  process.env.EMAIL_FROM || 'Terraria Pet Clinic <noreply@terrariavet.com>';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

/**
 * Sends an email using Resend
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = DEFAULT_FROM,
  replyTo,
}: SendEmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in sendEmail function:', error);
    throw error;
  }
}

/**
 * Sends a password reset email
 */
export async function sendPasswordResetEmail(
  email: string,
  name: string,
  resetUrl: string
) {
  const subject = 'Reset Password - Terraria Pet Clinic';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #6032A2;">Terraria Pet Clinic</h1>
      </div>

      <div style="background-color: #f9f9f9; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #6032A2; margin-top: 0;">Reset Password</h2>
        <p>Halo ${name},</p>
        <p>Anda menerima email ini karena Anda (atau seseorang) telah meminta reset password untuk akun Anda.</p>
        <p>Silakan klik tombol di bawah untuk melanjutkan proses reset password:</p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #FF7A00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
        </div>

        <p>Jika Anda tidak meminta reset password, abaikan email ini dan password Anda akan tetap tidak berubah.</p>
        <p>Link reset password ini akan kedaluwarsa dalam 1 jam.</p>
      </div>

      <div style="font-size: 12px; color: #666; text-align: center;">
        <p>Email ini dikirim otomatis, mohon jangan membalas email ini.</p>
        <p>&copy; ${new Date().getFullYear()} Terraria Pet Clinic. All rights reserved.</p>
      </div>
    </div>
  `;

  return sendEmail({
    to: email,
    subject,
    html,
  });
}
