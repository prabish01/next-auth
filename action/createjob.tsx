"use server";

import { db } from "@/lib/db";
import { CreateJobSchema } from "@/schemas";
import * as z from "zod";

export const createjob = async (values: z.infer<typeof CreateJobSchema>) => {
  // values.lastDate = values.lastDate.toString();
  // console.log("lastdate: ", values.lastDate);
  const validateFields = CreateJobSchema.safeParse(values);
  console.log({ values });
  console.log(validateFields);

  if (!validateFields.success) {
    // console.log("validation has failed");

    return { error: "Invalid fields !" };
  }

  const { companyName, companyLocation, companyWebsite, jobTitle, jobSalary, jobType, jobCategory, lastDate, jobDescription } = validateFields.data;
  console.log("validatefields.data: ", validateFields.data);

  const existingJobs = await db.job.findMany({
    where: {
      jobTitle: jobTitle,
    },
  });

  if (existingJobs.length > 0) {
    return { error: "This job already exists." };
  }
  try {
    await db.job.create({
      data: {
        companyName,
        companyLocation,
        companyWebsite,
        jobTitle,
        jobSalary,
        jobType,
        jobCategory,
        lastDate,
        jobDescription,
      },
    });
    console.log("i am inside await: ");
    console.log("Job created successfully");
    return { success: "Job created successfully" };
  } catch (error) {
    console.error("Error creating job:", error);
    return { error: "An error occurred while creating the job." };
  }
};
