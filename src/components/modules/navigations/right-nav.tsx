import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";

import { useGetMeQuery } from "@/redux/features/auth/auth.api";
import { LocateFixedIcon } from "lucide-react";
import { Link } from "react-router";
import ProfileNav from "./profile-nav";

export default function RightNav() {
  const { data } = useGetMeQuery(undefined);
  const user = data?.data;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-3">
      <Link className="flex items-center text-primary" to="/tracking">
        <LocateFixedIcon />
        Track Parcel
      </Link>
      {user ? (
        <>
          <ModeToggle />
          {user && <ProfileNav />}
        </>
      ) : (
        <>
          <Button variant="outline">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="default">
            <Link to="/register">Sign Up</Link>
          </Button>
        </>
      )}
    </div>
  );
}
