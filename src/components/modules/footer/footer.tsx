import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegPaperPlane,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../branding/logo/logo";

export default function Footer() {
  return (
    <div className="bg-white/20 pt backdrop-blur-lg">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo & Address section start  */}
        <div>
          <Link to="/">
            <Logo lh="h-12" />
          </Link>
          <p>2281/1 Naiany Samaj, Sherpur Sadar, 2100, Bangladesh</p>
          <p>Email: contact@wahednur.com</p>
          <p>Hotline:01917-839303</p>
        </div>
        {/* Logo & Address section end  */}
        {/* Company menu start  */}
        <div>
          <h2 className="text-xl font-bold mb-6">Company</h2>
          <div className="flex flex-col gap-2">
            <Link to="#">Contact us</Link>
            <Link to="#">Terms and condition</Link>
          </div>
        </div>
        {/* Company menu end  */}
        {/* Company menu start  */}
        <div>
          <h2 className="text-xl font-bold mb-6">Important links</h2>
          <div className="flex flex-col gap-2">
            <Link to="#">Courier</Link>
            <Link to="#">Merchant</Link>
            <Link to="#">Receiver</Link>
          </div>
        </div>
        {/* Company menu end  */}
        {/* Social link start */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-6">Social links</h2>
          <div className="flex gap-2 items-center fo-social">
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
            <Link to="/">
              <FaXTwitter />
            </Link>
          </div>
          <div>
            <h4 className="text-lg mt-5 font-semibold">Subscribe Now</h4>
            <div className="flex items-center">
              <Input className="rounded-r-none rounded-l-full" />
              <Button className="rounded-none rounded-r-full cursor-pointer dark:hover:bg-primary/60 hover:bg-black duration-300">
                <FaRegPaperPlane />
              </Button>
            </div>
          </div>
        </div>
        {/* Social link end */}
      </div>
      <div className="bg-primary text-center">
        <p className="py-3 mt">
          &copy;2025 | "All rights reserved WS-Parselly | Developed by:{" "}
          <a
            href="http://wahednur.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wahed Nur
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
