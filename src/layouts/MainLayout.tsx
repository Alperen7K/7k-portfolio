/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, October 2023
 */
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <>
      <Helmet>
        <html className="m-0 p-0" />
        <body className="min-h-full  box-border   bg-[#f8f9eb] " />
      </Helmet>
      <Navbar />
      <Outlet />
    </>
  );
};

// beyazımsı f8f9eb
// yeşil 43766C
// açık kahverengi B19470
// koyu kahverengi 76453B