import React from "react";
import { Helmet } from "react-helmet";

export const PageTitle = ({ children }: { children: string }) => {
 return (
  <Helmet>
   <title>{children}</title>
  </Helmet>
 );
};
