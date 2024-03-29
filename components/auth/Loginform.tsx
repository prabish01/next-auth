"use client";

import { CardWrapper } from "@/app/auth/Card-wrapper";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormItem, FormMessage, FormField, FormLabel } from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Button } from "../ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/action/login";
import Link from "next/link";
import { request, gql } from "graphql-request";
import { useQuery, useMutation } from "@tanstack/react-query";

const Logquery = gql`
  mutation Login($email: String!, $username: String!, $password: String!) {
    tokenAuth(email: $email, username: $username, $password: String!) {
      token
      refreshToken
      success
      errors
    }
  }
`;

interface vari {
  email: string;
  username: string;
  password: string;
}
let variab: vari = {
  email: "example@example.com",
  username: "username",
  password: "password",
};

export const Loginform = () => {
  const mutation = useMutation({
    mutationKey: ["loginTokenAuth"],
    mutationFn: async (variab) => {
      try {
        // Execute mutation using graphql-request and return the result
        const response = await request("http://backend-speed.centralindia.cloudapp.azure.com:8000/graphql/", Logquery, variab);
        return response;
      } catch (error) {
        throw new Error("Failed to mutate data");
      }
    },
    onSuccess: (data) => {
      // Handle mutation success here if needed
      console.log("Mutation successful:", data);
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      console.log(values);
      login(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch((error) => {
          // handle any potential error druing login
          setError("An error occured during login");
        });
    });
    variab = {
      email: values.email,
      username: values.name,
      password: values.password,
    };
    mutation.mutate(variab);

    console.log(values);
  };

  console.log("Render login form attributes");
  return (
    <CardWrapper headerLabel="Welcome to the login portal" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial  jobHeaderLabel={""}>
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
                  <Button variant="link" size="sm" className="text-slate-400">
                    <Link href="/auth/reset">Forgot Password ?</Link>
                  </Button>

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
            Login
          </Button>
        </form>
      </Form>
      {/* Login Form */}
    </CardWrapper>
  );
};
