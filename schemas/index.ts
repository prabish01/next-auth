import * as z from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
    // confirmPassword: z.string().min(8),
  })
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Password don't match",
  //   path: ["confirm"],
  // });

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
 
});







export const registerUserSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    userName: z.string(),
    email: z.string().email(),
    phone: z.string().transform((data) => Number(data)),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
    avatar: z.string().optional(),
    isVerified: z.boolean().optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });