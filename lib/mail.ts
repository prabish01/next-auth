import email from "next-auth/providers/email";
import { Resend } from "resend";

export const sendPasswordResetByEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send;
  ({
    from: "",
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
