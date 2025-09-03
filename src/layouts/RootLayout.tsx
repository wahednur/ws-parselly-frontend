import Footer from "@/components/modules/footer/footer";
import MainNav from "@/components/modules/navigations/main-nav";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <header>
        <MainNav />
      </header>
      <main className="vh mt-[65px]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
