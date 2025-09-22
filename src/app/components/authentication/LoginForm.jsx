
"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { signIn } from "next-auth/react";


// Zod schema validation for login form
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginForm({
  className,
  ...props
}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

const router = useRouter();

  // Handle login submission
  // const onSubmit = async (data) => {
  //   try {
  //     // Make a POST request to the login API endpoint
  //     const res = await fetch("/api/auth/callback/credentials", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await res.json();

  //     if (!res.ok) {
  //       throw new Error(result.message || "Failed to login");
  //     }

  //     // Handle successful login (store token, etc.)
  //     toast.success("Login successful!");
  //     router.push("/"); // Redirect to the dashboard or other page after successful login
  //   } catch (error) {
  //     toast.error(error.message || "Login failed");
  //     console.error(error);
  //   }
  // };

  // const mutation = useMutation({
  //   mutationFn: async (data) => {
  //     const res = await axios.post("/api/auth/callback/credentials", data);  // Post to credentials API
  //     return res.data;
  //   },
  //   onSuccess: (data) => {
  //     toast.success("Login successful!", data);
  //     router.push("/");  // Redirect to dashboard after successful login
  //   },
  //   onError: (error) => {
  //     const errorMessage =
  //       error.response?.data?.message || error.message || "Login failed";
  //     toast.error(errorMessage);
  //   },
  // });

  // const onSubmit = (data) => {
  //   console.log("Form Data:", data); // Check if data is coming through
  //   mutation.mutate(data);  // Trigger login mutation
  // };


// Handle login submission
  const onSubmit = async (data) => {
    console.log("Form Data:", data); // Check if data is coming through
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/", // Redirect to the home page after login
    });

    // If the login is successful, redirect the user
    if (res?.error) {
      toast.error("Login failed: " + res.error);
    } else {
      toast.success("Login successful!");
      router.push("/");  // Redirect to dashboard after successful login
    }
  };



  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
        

                 <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormControl><Input {...field} /></FormControl>
          )}
        />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormControl><Input {...field} /></FormControl>
          )}
        />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" >
                    login
                </Button>

                     <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>

                   <Button variant="outline" className="w-full" onClick={() => signIn("github")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Login with GitHub
        </Button>
                <Button variant="outline" className="w-full" onClick={() => signIn("google")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
          </Form>
          
        </CardContent>
      </Card>
    </div>
  )
}
