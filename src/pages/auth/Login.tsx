/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/components/modules/branding/logo/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Password from "@/components/ui/password";
import { useUser } from "@/context/UserContext";
import { cn } from "@/lib/utils";
import {
  useGetMeQuery,
  useUserLoginMutation,
} from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";
import SocialLogin from "./social-login";

const loginZodSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export default function LoginPage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginZodSchema>>({
    resolver: zodResolver(loginZodSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [userLogin] = useUserLoginMutation();
  const { data } = useGetMeQuery(undefined);
  const { user } = useUser();
  console.log("Login get me", data);
  const onSubmit = async (data: z.infer<typeof loginZodSchema>) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      await userLogin(userInfo).unwrap();
      toast.success(
        <p>
          Welcome to{" "}
          <span className="font-semibold text-primary">WS Parselly</span>
          <br />
          You successfully login
        </p>
      );
    } catch (error: any) {
      if (error?.status === 401) {
        const errorMessage = error?.data?.message || "";

        if (errorMessage.includes("User not verified")) {
          navigate("/verify", { state: data.email });
        } else {
          toast.error("Invalid email or password");
        }
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
    console.log("User info", userInfo);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <div className="container flex vh flex-col justify-center items-center">
      <div
        className={cn("flex flex-col gap-6 w-full md:w-md ", className)}
        {...props}
      >
        <Card className="border-primary/60 border bg-white/20 backdrop-blur-sm rounded-2xl">
          <CardHeader>
            <Logo lh="h-8" />
            <h4 className="text-lg">Welcome back to WS Parselly</h4>
            <CardTitle className="text-3xl">Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Password {...field} />
                          </FormControl>
                          <FormDescription className="sr-only">
                            This is your public display Password.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
            <div className="mt-6">
              <SocialLogin />
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
