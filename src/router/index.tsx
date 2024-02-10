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
    // { path: "/portfolio/:project", element: <PortfolioInfo /> },
    {
     path: "/portfolio/kapsul-forms",
     element: <PortfolioInfo path={"kapsul-forms"} />,
    },
    {
     path: "/portfolio/news-automation",
     element: <PortfolioInfo path={"news-automation"} />,
    },
    {
     path: "/portfolio/kapsul-scanner",
     element: <PortfolioInfo path={"kapsul-scanner"} />,
    },
    {
     path: "/portfolio/binance-bot",
     element: <PortfolioInfo path={"binance-bot"} />,
    },
    {
     path: "/portfolio/press",
     element: <PortfolioInfo path={"press"} />,
    },
    {
     path: "/portfolio/kapsul-web",
     element: <PortfolioInfo path={"kapsul-web"} />,
    },
    {
     path: "/portfolio/kapsul-overtime",
     element: <PortfolioInfo path={"kapsul-overtime"} />,
    },
    {
     path: "/portfolio/kapsul-login",
     element: <PortfolioInfo path={"kapsul-login"} />,
    },
    {
     path: "/portfolio/tp2ae",
     element: <PortfolioInfo path={"tp2ae"} />,
    },
    {
     path: "/portfolio/voice-asistant",
     element: <PortfolioInfo path={"voice-asistant"} />,
    },
    {
     path: "/portfolio/e-commerce",
     element: <PortfolioInfo path={"e-commerce"} />,
    },
    { path: "*", element: <Navigate to="/" replace /> },
   ],
  },
 ]);
};
