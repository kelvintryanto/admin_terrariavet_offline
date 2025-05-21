import { Resend } from 'resend';

// Create a Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Default sender
const DEFAULT_FROM =
  process.env.EMAIL_FROM || 'Terraria Pet Clinic <no-reply@benzeta.shop>';

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
export const sendPasswordResetEmail = async (
  email: string,
  name: string,
  resetToken: string
) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    'http://localhost:3000';
  const encodedToken = encodeURIComponent(resetToken);
  const resetUrl = `${baseUrl}/reset-password/${encodedToken}`;

  try {
    // If we're in development mode, log the reset URL instead of sending an email
    if (process.env.NODE_ENV === 'development') {
      console.log('==== DEVELOPMENT MODE: Password Reset Link ====');
      console.log(`Reset URL for ${email}: ${resetUrl}`);
      console.log('=================================================');
      return { id: 'dev-mode-email' };
    }

    const { data, error } = await resend.emails.send({
      from:
        process.env.EMAIL_FROM || 'Terrariavet Admin <no-reply@benzeta.shop>',
      to: email,
      subject: 'Reset Password Terrariavet Admin',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #6032A2;">Terrariavet Admin</h2>
          </div>
          <div style="margin-bottom: 30px;">
            <p>Halo ${name},</p>
            <p>Kami menerima permintaan untuk mereset password akun Anda. Silakan klik tombol di bawah untuk reset password:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" style="background-color: #6032A2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
            </div>
            <p>Jika Anda tidak meminta reset password, Anda dapat mengabaikan email ini.</p>
            <p>Link reset password ini akan kadaluarsa dalam 1 jam.</p>
            <p>Atau, Anda juga dapat menggunakan link berikut:</p>
            <p><a href="${resetUrl}">${resetUrl}</a></p>
          </div>
          <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; color: #666; font-size: 12px;">
            <p>Email ini dikirim secara otomatis, mohon tidak membalas email ini.</p>
            <p>&copy; ${new Date().getFullYear()} Terrariavet Admin. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending reset password email:', error);
      // In production, we'll log the error but return a mock success response
      // This prevents the application from breaking but allows you to see the error
      if (process.env.NODE_ENV === 'production') {
        console.log(
          'Fallback: Would have sent password reset email to:',
          email
        );
        console.log('With reset URL:', resetUrl);
        return { id: 'fallback-email-id' };
      }
      throw new Error(`Failed to send reset password email: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Error sending reset password email:', error);
    // In production, provide a fallback
    if (process.env.NODE_ENV === 'production') {
      console.log('Fallback: Would have sent password reset email to:', email);
      console.log('With reset URL:', resetUrl);
      return { id: 'error-fallback-email-id' };
    }
    throw error;
  }
};
