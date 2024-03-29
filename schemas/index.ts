import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  // confirmPassword: z.string().min(8),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Password don't match",
//   path: ["confirm"],
// });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const CreateJobSchema = z.object({
  companyName: z.string().min(1).max(255),
  companyLocation: z.string().min(1).max(255),
  companyWebsite: z.string(),
  jobTitle: z.string().min(1).max(255),
  jobSalary: z.string(),
  jobType: z.enum(["FullTime", "PartTime", "Contract"]),
  jobCategory: z.enum(["Agriculture", "Construction", "HospitalityAndTourism", "RetailAndConsumerGoods", "FacilityManagementAndSupportServices", "TransportationAndLogistics"]),
  // lastDate: z.date().min(new Date()),
  lastDate: z.string(),
  // lastDate: z.date().optional(),
  jobDescription: z.string().min(1),
});
// export default CreateJobSchema;

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
