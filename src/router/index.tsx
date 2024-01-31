import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";
import { About, Home, Portfolio, PortfolioInfo, Skills } from "../pages";
export const Router = () => {
 return useRoutes([
  {
   path: "",
   element: <MainLayout />,
   children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/skills", element: <Skills /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/portfolio/:project", element: <PortfolioInfo /> },
    { path: "*", element: <Navigate to="/" replace /> },
   ],
  },
 ]);
};
