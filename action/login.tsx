"use server";

import { loginSchema } from "@/schemas";
import * as z from "zod";

export const login =  async(values: z.infer<typeof loginSchema>) => {
    const validateFields = loginSchema.safeParse(values);
    if (!validateFields.success) {
        return{error:"Invalid fields !"}
    }
    else {
        return{success:"Email sent !"}
    }
    // console.log("\n -------- Login values --------\n");
    // console.log(values)
    // console.log("\n ------------------------------\n");
    
}