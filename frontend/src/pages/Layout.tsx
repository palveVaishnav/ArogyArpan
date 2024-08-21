import NavBar from "@/pages/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="">
      <NavBar />
      <div className="min-h-[70vh] scroll-smooth">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;