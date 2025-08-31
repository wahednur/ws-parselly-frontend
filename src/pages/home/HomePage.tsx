import { Faq } from "@/components/modules/according/Faq";
import Services from "@/components/modules/services/Services";
import HomeSlider from "@/components/modules/sliders/HomeSlider";
import Why from "@/components/modules/why/Why";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      {/* Slider start  */}
      <div className="mt-[65px]">
        <HomeSlider />
      </div>
      {/* Slider end  */}
      <div className="mt">
        <h1 className="text-4xl text-center">Our Services</h1>
        <Services />
      </div>
      <div className="mt bg-white/30 py">
        <Why />
      </div>
      <div className="container mt">
        <Faq />
      </div>
      <div className="container rounded-2xl mt bg-primary">
        <div className="py text-center space-y-5">
          <h1 className="text-3xl font-bold">
            Grow Your Business with WS Parselly
          </h1>
          <p>Start Your first step with WS Parselly</p>
          <Button variant="secondary" size="lg">
            <Link to="/register">Become a Seller</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
