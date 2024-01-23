// "use server";

// import { RegisterSchema } from "@/schemas";
// import * as z from "zod";

// export const register = async (values: z.infer<typeof RegisterSchema >) => {
//   const validateFields = RegisterSchema.safeParse(values);
//   if (!validateFields.success) {
//     return { error: "Invalid fields !" };
//   } else {
//     return { success: "Email sent !" };
//   }
//   // console.log("\n -------- Login values --------\n");
//   // console.log(values)
//   // console.log("\n ------------------------------\n");
// };
