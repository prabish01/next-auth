"use client";

import { CardWrapper } from "@/app/auth/Card-wrapper";
// import { register } from "module";
import { useForm } from "react-hook-form";
// import { useTransition } from "react";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormItem, FormMessage, FormField, FormLabel } from "@/components/ui/form";
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Button } from "../ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/action/register";
import { request, gql } from "graphql-request";
import { useQuery, useMutation } from "@tanstack/react-query";

const Regquery = gql`
  mutation Register($email: String!, $username: String!, $role: String!, $password1: String!, $password2: String!) {
    register(email: $email, username: $username, role: $role, password1: $password1, password2: $password2) {
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
  role: string;
  password1: string;
  password2: string;
}

let variab: vari = {
  email: "example@example.com",
  username: "username",
  role: "role",
  password1: "password1",
  password2: "password2",
};
export const RegisterForm = () => {
  const mutation = useMutation({
    mutationKey: ["landing"],
    mutationFn: async (variab) => {
      try {
        // Execute mutation using graphql-request and return the result
        const response = await request("http://backend-speed.centralindia.cloudapp.azure.com:8000/graphiql/", Regquery, variab);
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
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch((error) => {
          // handle any potential error druing login
          setError("An error occured during login");
          console.error("error registering", error);
        });
    });
    variab = {
      email: values.email,
      username: values.name,
      role: "employee",
      password1: values.password,
      password2: values.password,
    };
    mutation.mutate(variab);

    console.log(values);
  };

  // console.log("Render login form attributes");
  return (
    <CardWrapper headerLabel="Welcome to the reigster portal" backButtonLabel="Already have an account ?" backButtonHref="/auth/login" showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            {/* <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} placeholder="********" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <FormError errMsg={error} />
          <FormSuccess successMsg={success} />
          <Button type="submit" disabled={isPending} className="w-full mt-6" variant="login">
            Register
          </Button>
        </form>
      </Form>
      {/* Login Form */}
    </CardWrapper>
  );
};
