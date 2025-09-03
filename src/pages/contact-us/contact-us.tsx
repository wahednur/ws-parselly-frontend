import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaHeadset, FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import z from "zod";
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  phoneNumber: z.string(),
  email: z.email(),
  subject: z.string(),
  message: z.string(),
});
export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-primary/10 backdrop-blur-xs py drop-shadow-md">
        <h1 className="text-3xl lg:text-5xl font-bold text-center ">
          Get in Touch with Us
        </h1>
      </div>
      <div className="container flex flex-col md:flex-row justify-center items-center mt py gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-6">
          <div className="p-5 rounded-2xl border text-center flex flex-col justify-center items-center space-y-3.5">
            <LuMapPin />
            <h4 className="text-2xl">Address</h4>
            <p>228/1 Chackpathak, Sherpur, Dhaka-2100</p>
          </div>
          <div className="p-5 rounded-2xl border text-center flex flex-col justify-center items-center space-y-3.5">
            <FaHeadset />
            <h4 className="text-2xl">Call Us</h4>
            <p>+88 01917 83 93 03</p>
          </div>
          <div className="p-5 rounded-2xl border text-center flex flex-col justify-center items-center space-y-3.5">
            <FaRegEnvelope />
            <h4 className="text-2xl">Email</h4>
            <p>info@wsparselly.com</p>
          </div>
          <div className="p-5 rounded-2xl border text-center flex flex-col justify-center items-center space-y-3.5">
            <FaPhoneVolume />
            <h4 className="text-2xl">Registration</h4>
            <p>+88 01917 83 93 03</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enter your phone number</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
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
                        <Input placeholder="Email Address" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject Address" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message Address" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
