import NavBar from "@/components/created/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/created/Footer";

const Layout = () => {
  return (
    <div className="">
      <NavBar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;