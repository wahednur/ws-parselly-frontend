import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  useSendOTPMutation,
  useVerifyOTPMutation,
} from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function VerifyPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email] = useState(location.state);
  const [confirmed, setConfirmed] = useState(false);
  const [time, setTime] = useState(10);

  const [sendOTP] = useSendOTPMutation();
  const [verifyOTP] = useVerifyOTPMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  useEffect(() => {
    if (!email || !confirmed) {
      navigate("/");
      return;
    }
    const timeId = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timeId);
  }, [confirmed, email, navigate]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const toastId = toast.loading("Sending OTP...");
    const otpInfo = {
      email: email,
      otp: data.pin,
    };
    try {
      const res = await verifyOTP(otpInfo).unwrap();
      if (res.success) {
        toast.success("You are now verified", { id: toastId });
      }
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleConfirm = async () => {
    const tostId = toast.loading("Sending OTP");
    try {
      const res = await sendOTP({ email: email }).unwrap();
      console.log(email);
      if (res.success) {
        toast.success("OTP sent", { id: tostId });
        setConfirmed(true);
        setTime(120);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center vh">
      <div
        className=" w-full max-w-md flex flex-col justify-center box-border
"
      >
        {confirmed ? (
          <div className="border glass p-20">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p>Time count: {time}</p>
                <Button type="submit" className="cursor-pointer">
                  Verify Now
                </Button>
              </form>
            </Form>
          </div>
        ) : (
          <div>
            <Card className="border glass p-20">
              <CardHeader>
                <CardTitle>Verify your email address</CardTitle>
                <CardDescription>
                  We will send you an OTP at {email}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  type="submit"
                  className="cursor-pointer"
                  onClick={handleConfirm}
                >
                  Send OTP
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
