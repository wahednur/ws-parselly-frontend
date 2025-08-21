import { ModeToggle } from "@/components/theme/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router";
import Logo from "../branding/logo/logo";

export default function MainNav() {
  const navList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Tracking",
      link: "/tracking",
    },
  ];

  return (
    <>
      {/* Desktop navigation start  */}
      <div className="bg-white/10 backdrop-blur-sm py-3 dek-nav border-b border-primary/20 drop-shadow-md sticky">
        <div className="container flex justify-between">
          <Link className="text-xl font-bold text-blue-600" to="/">
            <Logo lh="h-10" />
          </Link>
          <ul className="flex items-center">
            {navList.map((item, idx) => (
              <li key={idx}>
                <NavLink to={`${item.link}`}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
      {/* Desktop navigation end  */}
      {/* Mobile navigation start  */}
      <div className="mbl-nav bg-white/10 backdrop-blur-sm py-3 border-b border-primary/20 drop-shadow-md">
        <div className="container flex justify-between items-center gap-3">
          <Link to="/">
            <Logo lh="h-6" />
          </Link>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                {navList.map((item, idx) => (
                  <DropdownMenuItem className="mbl-active">
                    <NavLink key={idx} to={`${item.link}`}>
                      {item.name}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      {/* Mobile navigation end  */}
    </>
  );
}
