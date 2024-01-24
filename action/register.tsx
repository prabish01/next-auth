"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt                              from "bcrypt";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema >) => {
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields !" };
  }
  
    const { email, password, name } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10); 

    const existingUser = await db.user.findUnique({
        where: {
            email,
        }
    })

     if (existingUser) {
        return {error : 'This user already exists.'};
    }
    
    await db.user.create({
        data: { 
            email,
            name,
            password: hashedPassword,
        }
    })
//   else {
    return { success: "Email sent !" };
  }
  // console.log("\n -------- Login values --------\n");
  // console.log(values)
  // console.log("\n ------------------------------\n");
// };
