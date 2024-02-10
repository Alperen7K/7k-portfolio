/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, October 2023
 */
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
   <>
    <Helmet>
     <html className="m-0 p-0" />
     <body className="min-h-full overflow-x-hidden text-white  box-border select-none  bg-açıkGri " />
    </Helmet>
    <Navbar />
    <div className="w-full pt-10 h-[100vh-100px]">
     <Outlet />
    </div>
    <Footer />
   </>
  );
};