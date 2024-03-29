// "use client";
// // import { useState } from "react";
// // import { Switch } from "@headlessui/react";
// import { getStrapiURL } from "@/app/utlis/api-helpers";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import * as z from "zod";

// import Swal from "sweetalert2";
// import ContactFormSchema from "@/schemas";
// import CreateJobSchema from "@/schemas";
// import { useForm } from "react-hook-form";
// // import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }

// // const ContactFormSchema = Yup.object().shape({
// //   //     companyName: Yup.string().required("Name is required"),
// //   //  companyLocation
// //   //   companyWebsite: Yup.string().email("Invalid email").required("Email is equired"),
// //   //     jobDescription: Yup.string().required("Message is required"),
// //   //    jobTitle
// //   //  jobSalary
// //   //        jobType parttime or full time or contract
// //   //     lastDate

// //   companyName: Yup.string().required("Company name is required"),
// //   companyLocation: Yup.string().required("Company location is required"),
// //   companyWebsite: Yup.string().url("Invalid email").required("Company website is required"),
// //   jobTitle: Yup.string().required("Job title is required"),
// //   jobSalary: Yup.number().positive("Salary must be positive").required("Job salary is required"),
// //   jobType: Yup.string().oneOf(["Full-time", "Part-time", "Contract"], "Invalid job type").required("Job type is required"),
// //   jobCategory: Yup.string().oneOf(["Agriculture", "Construction", "Hospitality and Tourism", "Retail and Consumer Goods", "Facility Management and Support Services", "Transportation and Logistics"], "Invalid job category").required("Job Category is required"),
// //   lastDate: Yup.date().required("Last date is required").min(new Date(), "Last date must be in the future"),
// //   jobDescription: Yup.string().required("Job description is required"),
// // });

// // privacyPolicy: Yup.boolean().oneOf([true], 'Privacy Policy must be accepted'),
// export const Jobform = () => {
//   // const [agreed, setAgreed] = useState(false);

//   // const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

//   const Toast = Swal.mixin({
//     toast: true,
//     position: "top-end",
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener("mouseenter", Swal.stopTimer);
//       toast.addEventListener("mouseleave", Swal.resumeTimer);
//     },
//   });

//    const {
//      createj,
//      handleSubmit,
//      formState: { errors },
//    } = useForm({
//      resolver: zodResolver(CreateJobSchema),
//    });
//    const [error, setError] = useState<string | undefined>("");
//    const [success, setSuccess] = useState<string | undefined>("");

//    const onSubmit = async (data: any) => {
//      setError("");
//      setSuccess("");

//      try {
//        const response = await createJob(data);
//        if (response.success) {
//          setSuccess(response.success);
//          Swal.fire({
//            icon: "success",
//            title: "Success",
//            text: response.success,
//          });
//        } else {
//          setError(response.error);
//          Swal.fire({
//            icon: "error",
//            title: "Oops...",
//            text: response.error,
//          });
//        }
//      } catch (error) {
//        setError("An error occurred while creating the job");
//        Swal.fire({
//          icon: "error",
//          title: "Oops...",
//          text: "An error occurred while creating the job",
//        });
//      }
//    };

//     onSubmit: async (values, { resetForm }) => {
//       setError("");
//       setSuccess("");
//       startTransition(() => {
//         createj(values)
//           .then((data) => {
//             setError(data.error);
//             setSuccess(data.success);
//           })
//           .catch((error) => {
//             // handle any potential error druing login
//             setError("An error occured during login");
//           });
//       });
//       // // const res = await fetch(getStrapiURL() + "/api/contact-forms", {
//       // //   method: "POST",
//       // //   headers: {
//       // //     "Content-Type": "application/json",
//       // //     Authorization: `Bearer ${token}`,
//       // //   },
//       // //   body: JSON.stringify({ data: values }),
//       // // });
//       // if (res.status === 200) {
//       //   Toast.fire({
//       //     icon: "success",
//       //     text: "Your message has been sent!",
//       //   });
//       //   resetForm();
//       // } else {
//       //   Toast.fire({
//       //     title: "Oops...",
//       //     text: "Something went wrong!",
//       //     icon: "error",
//       //   });
//       // }
//     },
//   });

//   return (
//     // // <div className="bg-black max-w-6xl ">
//     //       <form onSubmit={formik.handleSubmit} method="POST" className=" bg-red-500">

//     // </form>

//     <div className="d1 container w-full mx-auto items-center flex flex-col justify-center sm:w-[500px] ">
//       <div className="d2 mt-9 rounded-lg">
//         <form action="" className="bg-gray-700 rounded-lg shadow-lg">
//           <div className="p-10 lg:mr-0 lg:max-w-lg">
//             <div className="space-y-2 ">
//               <div className="grid grid-cols-2 grid-rows-1 gap-5">
//                 <div className="">
//                   <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-100">
//                     Company Name
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       value={formik.values.companyName}
//                       onChange={formik.handleChange}
//                       autoComplete="given-name"
//                       placeholder={formik.errors.companyName ? formik.errors.companyName : "Enter company's name"}
//                       className={classNames(
//                         formik.errors.companyName ? "ring-red-600" : "",
//                         formik.errors.companyName ? "placeholder:text-red-600" : "placeholder:text-slate-400",
//                         "block w-full rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                       )}
//                     />
//                   </div>
//                 </div>
//                 <div className="">
//                   <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-100">
//                     Company Website
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       value={formik.values.companyWebsite}
//                       onChange={formik.handleChange}
//                       autoComplete="given-name"
//                       placeholder={formik.errors.companyWebsite ? formik.errors.companyWebsite : "Enter company's url"}
//                       className={classNames(
//                         formik.errors.companyWebsite ? "ring-red-600" : "",
//                         formik.errors.companyWebsite ? "placeholder:text-red-600" : "placeholder:text-slate-400",
//                         "block w-full rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                       )}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-100">
//                   Location
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formik.values.companyLocation}
//                     onChange={formik.handleChange}
//                     autoComplete="email"
//                     placeholder={formik.errors.companyLocation ? formik.errors.companyLocation : "Enter company's location"}
//                     className={classNames(
//                       formik.errors.companyLocation ? "ring-red-600" : "",
//                       formik.errors.companyLocation ? "placeholder:text-red-600" : "placeholder:text-slate-400",
//                       "block w-full rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 grid-rows-1 gap-5">
//                 <div className="">
//                   <label htmlFor="company-name" className="block text-sm font-semibold leading-6 text-slate-100">
//                     Job Title
//                   </label>
//                   <div className="mt-2.5">
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       value={formik.values.jobTitle}
//                       onChange={formik.handleChange}
//                       autoComplete="given-name"
//                       placeholder={formik.errors.jobTitle ? formik.errors.jobTitle : "Enter job title"}
//                       className={classNames(
//                         formik.errors.jobTitle ? "ring-red-600" : "",
//                         formik.errors.jobTitle ? "placeholder:text-red-600" : "placeholder:text-slate-400",
//                         "block w-full rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                       )}
//                     />
//                   </div>
//                 </div>
//                 <div className="">
//                   <label htmlFor="type" className="block text-sm font-semibold leading-6 text-slate-100">
//                     Type
//                   </label>
//                   <div className="mt-2.5 ">
//                     <select
//                       name="jobCategory"
//                       id="jobCategory"
//                       value={formik.values.jobCategory}
//                       onChange={formik.handleChange}
//                       className={classNames(formik.errors.jobCategory ? "ring-red-600" : "", "block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 sm:w-full md:w-full")}
//                     >
//                       <option value="">Agriculture</option>
//                       <option value="">Construction</option>
//                       <option value="">Hospitality and Tourism</option>
//                       <option value="">Retail and Consumer Goods</option>
//                       <option value="">Facility Management and Support Services</option>
//                       <option value="">Transportation and Logistics</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="company-name" className="block text-sm font-semibold leading-6 text-slate-100">
//                   Salary
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={formik.values.jobSalary}
//                     onChange={formik.handleChange}
//                     autoComplete="given-name"
//                     placeholder={formik.errors.jobSalary ? formik.errors.jobSalary : "Rs 30000 - Rs 50000 "}
//                     className={classNames(
//                       formik.errors.jobSalary ? "ring-red-600" : "",
//                       formik.errors.jobSalary ? "placeholder:text-red-600" : "placeholder:text-slate-400",
//                       "block w-full rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 grid-rows-1 gap-5">
//                 <div className="">
//                   <label htmlFor="type" className="block text-sm font-semibold leading-6 text-slate-100">
//                     Type
//                   </label>
//                   <div className="mt-2.5 ">
//                     <select
//                       name="jobType"
//                       id="jobType"
//                       value={formik.values.jobType}
//                       onChange={formik.handleChange}
//                       className={classNames(formik.errors.jobType ? "ring-red-600" : "", "block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 sm:w-full md:w-full")}
//                     >
//                       <option value="">Full-Time</option>
//                       <option value="">Part-time</option>
//                       <option value="">Contract</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="">
//                   <label htmlFor="date" className="block text-sm font-semibold leading-6 text-slate-100">
//                     Last Date
//                   </label>
//                   <div className="mt-2 5">
//                     <input value={formik.values.lastDate} type="date" name="lastdate" id="date" className={classNames(formik.errors.lastDate ? "ring-red-600" : "", "block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 sm:w-full md:w-full")}></input>
//                   </div>
//                 </div>
//               </div>

//               <div className="">
//                 <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-100">
//                   Job Description
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     name="message"
//                     id="message"
//                     value={formik.values.jobDescription}
//                     onChange={formik.handleChange}
//                     rows={4}
//                     placeholder={formik.errors.jobDescription ? formik.errors.jobDescription : "Enter your job description"}
//                     className={classNames(
//                       formik.errors.jobDescription ? "ring-red-600" : "",
//                       formik.errors.jobDescription ? "placeholder:text-red-600" : "placeholder:text-slate-400",
//                       "block w-full rounded-md border-0 bg-white px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
//                     )}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="-mt-5 w-full p-10">
//             <button type="submit" className="rounded-md w-full bg-orange-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//               Create Job
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // export default Jobform;
// ---------------------------------------------------------------------------------------------------------------------------------

"use client";

import { JobCardWrapper } from "@/app/auth/Card-wrapper";
// import { register } from "module";
import { useForm } from "react-hook-form";
// import { useTransition } from "react";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { toast } from "@/components/ui/use-toast";
import { CreateJobSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Button } from "../ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { createjob } from "@/action/createjob";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Jobform = () => {
  const [date, setDate] = useState<Date>();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof CreateJobSchema>>({
    resolver: zodResolver(CreateJobSchema),
    defaultValues: {
      companyName: "",
      companyLocation: "",
      companyWebsite: "",
      jobTitle: "",
      jobSalary: "",
      jobCategory: "Agriculture",
      jobType: "Contract",
      // lastDate: new Date(),
      lastDate: "",
      // lastDate: "",
      jobDescription: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CreateJobSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      console.log(`data: ${values.companyName}`);
      console.log(`data: ${values.jobType}`);
      console.log(`data: ${values.companyLocation}`);
      console.log(`data: ${values.companyWebsite}`);
      console.log(`data: ${values.jobCategory}`);
      console.log(`data: ${values.jobDescription}`);
      console.log(`data: ${values.jobTitle}`);
      console.log(`data: ${values.lastDate}`);
      console.log(values.lastDate);
      console.log(`data: ${values.jobSalary}`);
      console.log("---------------------------------------------");
      console.log(typeof values.companyName);
      console.log(typeof values.jobType);
      console.log(typeof values.companyLocation);
      console.log(typeof values.companyWebsite);
      console.log(typeof values.jobCategory);
      console.log(typeof values.jobDescription);
      console.log(typeof values.jobTitle);
      console.log(typeof values.lastDate);
      console.log(typeof values.jobSalary);
      createjob(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch((error) => {
          console.error("Error creating job:", error);
          // setError("An error occurred while creating the job.");
        });
    });

    // Log values after form submission
    // console.log(data);
    console.log(values);
    // console.error(error);

    // console.log(values);
  };

  // console.log("Render login form attributes");
  return (
    <div className=" container mt-10 w-full mx-auto items-center flex flex-col justify-center sm:w-[500px]">
      <JobCardWrapper headerLabel="Let's Create A Job" backButtonLabel="Already have an account ?" backButtonHref="/auth/login" showSocial>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="XYZ company" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>last date</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="mm-dd-yyyy" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Location</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="XYZ 123 st, Washington" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="www.companyName.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Description</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="write about you job" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="Job Title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Salary</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isPending} placeholder="30,000 - 50,000" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="lastDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Last Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type</FormLabel>

                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a job type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FullTime">Full-time</SelectItem>
                        <SelectItem value="PartTime">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Category</FormLabel>

                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Agriculture">Agriculture</SelectItem>
                        <SelectItem value="Construction">Construction</SelectItem>
                        <SelectItem value="HospitalityAndTourism">Hospitality and Tourism</SelectItem>
                        <SelectItem value="RetailAndConsumerGoods">Retail and Consumer Goods</SelectItem>
                        <SelectItem value="FacilityManagementAndSupportServices">Facility Management and Support Services</SelectItem>
                        <SelectItem value="TransportationAndLogistics">Transportation and Logistics</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError errMsg={error} />
            <FormSuccess successMsg={success} />
            <Button type="submit" disabled={isPending} className="w-full mt-6 bg-blue-500 hover:bg-blue-400" variant="login">
              Create Job
            </Button>
          </form>
        </Form>
        {/* Login Form */}
      </JobCardWrapper>
    </div>
  );
};
