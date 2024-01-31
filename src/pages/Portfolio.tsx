import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../models/portfolio";
import PortfolioCard from "../components/PortfolioCard";
import { useStore } from "../zustandStore";

export const Portfolio = () => {
 const { setIsShow } = useStore();

 useEffect(() => {
  setIsShow("portfolio");
 }, []);
 return (
  <div className="w-full pt-[20px] lg:pt-[50px] flex  justify-center">
   <div className="grid grid-cols-1 lg:grid-cols-2  gap-14 pb-10">
    {data.map((product: any) => {
     return <PortfolioCard product={product} />;
    })}
    {data.map((product: any) => {
     return <PortfolioCard product={product} />;
    })}
    {data.map((product: any) => {
     return <PortfolioCard product={product} />;
    })}
    {data.map((product: any) => {
     return <PortfolioCard product={product} />;
    })}
   </div>
  </div>
 );
};
