import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Banknote,
  BanknoteArrowDown,
  History,
  MapPinned,
  Monitor,
  TruckElectricIcon,
} from "lucide-react";

export default function Why() {
  return (
    <div className="container">
      <h1 className="text-5xl font-bold text-center">
        Why you should choose WS Parselly?
      </h1>
      <div className="mt grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <TruckElectricIcon className="text-primary" size={50} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-4xl">Daily pickup, no limits</CardTitle>
          </CardContent>
          <CardFooter>
            <p>WS Parselly gives you the opportunity of unlimited pickup.</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <BanknoteArrowDown className="text-primary" size={50} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-4xl">Cash on Delivery</CardTitle>
          </CardContent>
          <CardFooter>
            <p>WS Parselly we will collect the cash on behalf of you</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Banknote className="text-primary" size={50} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-4xl">Faster Payment Service</CardTitle>
          </CardContent>
          <CardFooter>
            <p>
              We provides multiple payment methods such as cash, Bank or Mobile
              Banking
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Monitor className="text-primary" size={50} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-4xl">Online Management</CardTitle>
          </CardContent>
          <CardFooter>
            <p>
              You can get all the information you need in your own user
              dashboard.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <MapPinned className="text-primary" size={50} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-4xl">Real-Time Tracking</CardTitle>
          </CardContent>
          <CardFooter>
            <p>
              WS Parselly provides an unique tracking code for your every
              consignments.
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <History className="text-primary" size={50} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-4xl">24/7 Customer Service</CardTitle>
          </CardContent>
          <CardFooter>
            <p>
              Our Call Center Executives are always ready 24/7 to help you with
              your problems.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
