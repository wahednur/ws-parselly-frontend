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
import { cn } from "@/lib/utils";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import SocialLogin from "./social-login";

const registerZodSchema = z.object({
  businessName: z.string(),
  name: z.string(),
  email: z.email(),
  password: z.string().min(8),
});

export default function SignUpPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof registerZodSchema>>({
    resolver: zodResolver(registerZodSchema),
    defaultValues: {
      businessName: "",
      name: "",
      email: "",
      password: "",
    },
  });
  const [register] = useRegisterMutation();
  const onSubmit = async (data: z.infer<typeof registerZodSchema>) => {
    const userInfo = {
      businessName: data.businessName,
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const result = await register(userInfo).unwrap();
      toast.success(
        <p>
          Welcome to{" "}
          <span className="font-semibold text-primary">WS Parselly</span>
          <br />
          Congratulations Mr./Mrs.{" "}
          <span className="text-primary">{result?.data?.name}</span>! Your
          account was successfully created. Please verify it now.
        </p>
      );
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };
  return (
    <div className="container flex vh flex-col justify-center items-center">
      <div
        className={cn("flex flex-col gap-6 w-full md:w-md ", className)}
        {...props}
      >
        <Card className="border-primary/60 border bg-white/20 backdrop-blur-sm rounded-2xl">
          <CardHeader>
            <Logo lh="h-10" />
            <CardTitle className="text-2xl">Become a Seller</CardTitle>
            <CardDescription>Enter your valid information</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Business Name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="sr-only">
                            This is your business name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name" type="text" {...field} />
                          </FormControl>
                          <FormDescription className="sr-only">
                            This is your display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Business email"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="sr-only">
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
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
                      Register Now
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
            <div className="mt-4 text-center text-sm">
              <SocialLogin />
              <p className="mt-5">
                You have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
