import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";
import { Home, Portfolio, PortfolioInfo } from "../pages";
import { SecondLayout } from "../layouts/SecondLayout";
export const Router = () => {
 return useRoutes([
  {
   path: "",
   element: <MainLayout />,
   children: [
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate to="/" replace /> },
   ],
  },
  {
   path: "",
   element: <SecondLayout />,
   children: [
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/portfolio/:project", element: <PortfolioInfo /> },
    { path: "*", element: <Navigate to="/" replace /> },
   ],
  },
 ]);
};
