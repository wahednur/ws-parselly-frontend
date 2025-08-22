import HorizontalTimeline from "@/components/modules/timeline/HorizontalTimeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function TrackingPage() {
  return (
    <div className="flex flex-col vh justify-center items-center">
      <Card className="w-full md:w-9/12 py-14 bg-primary/10 dark:bg-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl lg:text-5xl">
            Track Your Order
          </CardTitle>
          <p>Now you can easily track your order</p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center relative">
            <Search className="bg-primary w-9 h-9 p-1 absolute top-[2px] left-[2px] rounded-full" />
            <Input
              type="text"
              placeholder="Enter your tracking code"
              className="rounded-full h-10  pl-10"
            />
            <Button className="absolute right-[0px] rounded-full cursor-pointer px-10">
              Track
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="container flex flex-col justify-center items-center mt gap-10">
        <div className="flex flex-col md:flex-row justify-between w-full bg-primary/20 dark:bg-white/10 p-5 rounded-xl items-center">
          <div>
            <h4 className="text-3xl font-semibold">Booking info</h4>
          </div>
          <div className="flex-1 text-right">
            <h4 className="text-xl">
              Tracking ID: <span className="font-bold">403934084723025</span>
            </h4>
            <h5 className="text-lg">Status: Shipped</h5>
          </div>
        </div>
        <HorizontalTimeline currentStep="Shipped" />
        <hr className="mt bg-gray-400 text-gray-300 w-full " />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt">
          <div className="w-full bg-accent p-5">
            <h4>Sender info</h4>
            <p>ekhaneikini.com</p>
            <p>Address: 228/1, Nayani Samaj, chalkpathak, sherpur</p>
          </div>
          <div className="w-full bg-primary/10 p-5">
            <h4>Receiver</h4>
            <p>Sadika Sabrin</p>
            Bagherhat
          </div>
        </div>
      </div>
    </div>
  );
}
