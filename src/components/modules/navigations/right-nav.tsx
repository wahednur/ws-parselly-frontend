import { Button } from "@/components/ui/button";
import { LocateFixedIcon } from "lucide-react";
import { Link } from "react-router";

export default function RightNav() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3">
      <Link className="flex items-center text-primary" to="/tracking">
        <LocateFixedIcon />
        Track Parcel
      </Link>
      <Button variant="outline">
        <Link to="/login">Login</Link>
      </Button>
      <Button variant="default">
        <Link to="/register">Sign Up</Link>
      </Button>
    </div>
  );
}
