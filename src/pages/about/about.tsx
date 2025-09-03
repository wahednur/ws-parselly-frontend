import { CardTitle } from "@/components/ui/card";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FcBusinessman, FcHome } from "react-icons/fc";
import { GiCheckMark, GiHillFort, GiOnTarget } from "react-icons/gi";
import { LuBike } from "react-icons/lu";
export default function AboutPage() {
  return (
    <div>
      <div className="bg-primary/10 backdrop-blur-xs py drop-shadow-md">
        <h1 className="text-3xl lg:text-5xl font-bold text-center ">
          Grow with WS Parselly
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center container py mt">
        <div className="flex-1 space-y-5">
          <CardTitle>About Us</CardTitle>
          <h1 className="text-3xl lg:text-5xl font-bold">
            We Provide The Best Quality Courier Services
          </h1>
          <p>
            WS Parselly courier is a leading courier service company in
            Bangladesh dedicated to delivering reliable and efficient e-
            commerce logistics solutions in time.
          </p>
          <ul>
            <li className="flex items-center gap-5">
              <GiCheckMark /> <p>Daily pickups, no limitations</p>
            </li>
            <li className="flex items-center gap-5">
              <GiCheckMark /> <p>Faster Payment Service</p>
            </li>
            <li className="flex items-center gap-5">
              <GiCheckMark /> <p>Cash on Delivery</p>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img className="rounded-xl" src="/group.jpg" alt="" />
        </div>
      </div>
      <div className="bg-primary dark:bg-purple-500 mt py text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 border-r border-black pr-8">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-xl p-3 flex justify-center items-center rounded-xl">
                <GiOnTarget className="text-3xl lg:text-6xl dark:text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mt-6">
                Our Mission
              </h2>
              <p>
                To put a smile on your face by providing fast, secure, and
                hassle-free deliveries. We're here to connect people and
                e-commerce businesses worldwide with fast, secure, and top-notch
                service.
              </p>
            </div>
            <div className="flex-1">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-xl p-3 flex justify-center items-center rounded-xl">
                <GiHillFort className="text-3xl lg:text-6xl dark:text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mt-6">Our Vision</h2>
              <p>
                Redefine the future of e-commerce logistics in Bangladesh
                through innovative solutions powered by modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt py">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col justify-center items-center bg-white/10 p-10 rounded-2xl space-y-2.5">
            <FcBusinessman className="text-6xl" />
            <h1 className="text-4xl font-bold">70K +</h1>
            <p>Registered Merchant</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/10 p-10 rounded-2xl space-y-2.5">
            <LuBike className="text-6xl" />
            <h1 className="text-4xl font-bold">5K +</h1>
            <p>Delivery Man</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/10 p-10 rounded-2xl space-y-2.5">
            <FcHome className="text-6xl" />
            <h1 className="text-4xl font-bold">1K +</h1>
            <p>Delivery Point</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white/10 p-10 rounded-2xl space-y-2.5">
            <FaTruckArrowRight className="text-6xl" />
            <h1 className="text-4xl font-bold">5700K +</h1>
            <p>Parcels Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
