import { Resend } from "resend";
import { db } from "@/lib/db";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetByEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send;
  ({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset Your Password",
    html: `
      <h1>You are receiving this because you have requested to
      reset your password for  your account.</h1>
      
      <p>Please click on the following link, or paste it into
        the address bar of your browser to complete the process:</p>
        
        <a href="${resetLink}">${resetLink}</a><br /><br />
          
          If you did not request a password reset, please ignore
            this email and no changes will be made.<br />
            
              Regards,<br />
                Test Mail

    `,
  });
};
