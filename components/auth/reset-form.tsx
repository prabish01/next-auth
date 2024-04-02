"use client";

import { CardWrapper } from "@/app/auth/Card-wrapper";
import { useForm } from "react-hook-form";
// import { useTransition } from "react";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormItem, FormMessage, FormField, FormLabel } from "@/components/ui/form";
import { RegisterSchema, ResetSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Button } from "../ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { reset } from "@/action/reset";
import Link from "next/link";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    console.log(values)
    startTransition(() => {
      console.log(values);
      reset(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        // .catch((error) => {
        //   // handle any potential error druing login
        //   setError("An error occured during login");
        // });
    });
  };

  // console.log("Render login form attributes");
  return (
    <CardWrapper
      headerLabel="Welcome to the login portal"
      backButtonLabel="Already Have an Account ?"
      backButtonHref="/auth/login">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} placeholder="abc@example.com" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <FormError errMsg={error} />
          <FormSuccess successMsg={success} />

          {/* <FormError errMsg={error} />
          <FormSuccess successMsg={success} /> */}
          <Button type="submit" disabled={isPending} className="w-full mt-6" variant="login">
            Reset Password
          </Button>
        </form>
      </Form>
      {/* Login Form */}
    </CardWrapper>
  );
};
