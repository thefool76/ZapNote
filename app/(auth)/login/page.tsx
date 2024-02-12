"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { actionLoginUser } from "@/lib/server-action/auth-action";
import { Button } from "@/components/ui/button";
import { LightningBoltIcon } from "@radix-ui/react-icons";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {
    const { error } = await actionLoginUser(formData);
    if (error) {
      form.reset()
      setSubmitError(error.message);
    }
    router.replace('/dashboard')
  };
  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className=" sm:justify-center sm:[400px] space-y-6 flex flex-col"
      >
        <Link href="/" className="w-full  flex justify-center items-center">
        <LightningBoltIcon className="w-10 h-10" />
        <h1 className=" text-4xl font-bold">ZapNote</h1>
        </Link>
        <FormDescription className="text-center text-foreground/60 text-xl">
        Where Minimal Meets Real-Time Collaboration – Keeping Your Workspace Clean and Productivity High!"
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email"
                {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password"
                {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button type='submit' className='w-full p-6 text-lg' size='lg' disabled={isLoading} >
            Login
        </Button>
        <span className="self-container">Dont have an account?{' '}
        <Link href='/signup' className="underline">Sign Up</Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;
