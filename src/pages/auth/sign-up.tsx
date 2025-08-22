import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import SocialLogin from "./social-login";

export default function SignUpPage({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="container flex vh flex-col justify-center items-center">
      <div
        className={cn("flex flex-col gap-6 w-full md:w-md ", className)}
        {...props}
      >
        <Card className="border-primary/60 border bg-white/20 backdrop-blur-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Become a Merchant</CardTitle>
            <CardDescription>Enter your valid information</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Business Name</Label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Your Business Name"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
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
                  <Input id="password" type="password" required />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <SocialLogin />
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                You have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
