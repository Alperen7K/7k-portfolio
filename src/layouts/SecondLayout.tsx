/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, October 2023
 */
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { SecondNavbar } from ".";

export const SecondLayout = () => {
 return (
  <>
   <Helmet>
    <html className="m-0 p-0" />
    <body className="min-h-full overflow-x-hidden text-white  box-border select-none  bg-açıkGri " />
   </Helmet>
   <SecondNavbar />
   <Outlet />
  </>
 );
};
