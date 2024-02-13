'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailCheck } from "lucide-react";
import { FormSchema } from "@/lib/types";

const SingUpFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "invalid Email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "password should be minimum 6 characters"),
    confirmPassword: z
      .string()
      .describe("confirm password")
      .min(6, "password should be minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
const Singup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(
    () =>
      clsx("bg-primary", {
        "bg-red-500/10": codeExchangeError,
        "border-red-500/50": codeExchangeError,
        "text-red-700": codeExchangeError,
      }),
    []
  );

  const form = useForm<z.infer<typeof SingUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SingUpFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = () => {};

  const isLoading = form.formState.isSubmitting;
  const signUpHandler = async ({ email, password }:z.infer<typeof FormSchema>) => {};

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
          Where Minimal Meets Real-Time Collaboration – Keeping Your Workspace
          Clean and Productivity High!"
        </FormDescription>
        {!confirmation &&
          (!codeExchangeError && (
            <>
            <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
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
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          disabled={isLoading}
          control={form.control}
          name="confirmPassword"
          render={(field) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Confirm Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
              <Button type="submit" className="w-full p-6" disabled={isLoading}>
                Create Account
              </Button>
            </>
          ))}
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <span className="self-container">
          Already have an account?{" "}
          <Link href="/login" className=" underline">
            LogIn
          </Link>
        </span>
        {(confirmation || codeExchangeError) && <>
          <Alert className={confirmationAndErrorStyles}>{
            !codeExchangeError && <MailCheck className="h-4 w-4"/>
          }
          <AlertTitle> 
            {codeExchangeError ? "Invalid link" : "Check you email"}
            </AlertTitle>
            <AlertDescription>
              {codeExchangeError || "Email confirmation sent successfully"}
            </AlertDescription>
          </Alert>
        </>}
      </form>
    </Form>
  );
};

export default Singup;
