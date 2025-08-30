import Services from "@/components/modules/services/Services";
import HomeSlider from "@/components/modules/sliders/HomeSlider";

export default function HomePage() {
  return (
    <div>
      {/* Slider start  */}
      <HomeSlider />
      {/* Slider end  */}
      <div className="mt">
        <h1 className="text-4xl text-center">Our Services</h1>
        <Services />
      </div>
    </div>
  );
}
