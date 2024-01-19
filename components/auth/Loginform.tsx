"use client";

import { CardWrapper } from "@/app/auth/Card-wrapper";
import { register } from "module";
import { useForm } from "react-hook-form";
// import { useTransition } from "react";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormItem, FormMessage, FormField, FormLabel } from "@/components/ui/form";
import { loginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Button } from "../ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/action/login";


export const Loginform = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchema>>({
  
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
      .then((data) => {
        setError(data.error);
        setSuccess(data.success);
      })
        .catch((error) => {
          // handle any potential error druing login
        setError("An error occured during login")
      })

      
  })
    
  // console.log(values);
};

  console.log("Render login form attributes");
  return (
    <CardWrapper headerLabel="Welcome to the login portal" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} placeholder="********" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError errMsg={error} />
          <FormSuccess successMsg={success} />
          <Button type="submit" disabled={isPending} className="w-full mt-6" variant="login">
            Login
          </Button>
        </form>
      </Form>
      {/* Login Form */}
    </CardWrapper>
  );
};
