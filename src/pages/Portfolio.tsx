import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../models/portfolio";
import PortfolioCard from "../components/PortfolioCard";
import { useStore } from "../zustandStore";

export const Portfolio = () => {
 const { setIsShow } = useStore();

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

 useEffect(() => {
  setIsShow("portfolio");
  scrollToTop();
 }, []);
 return (
  <div className="w-full flex flex-col items-center">
   <h1 className="w-full text-[30px] font-bold mt-0 pt-0 mb-10 text-center">
    Portfolio
   </h1>
   <div className="grid w-fit grid-cols-1 lg:grid-cols-2  gap-14 pb-10">
    {data.map((product: any) => {
     return <PortfolioCard product={product} />;
    })}
   </div>
  </div>
 );
};
