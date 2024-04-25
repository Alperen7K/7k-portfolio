import React, { useEffect } from "react";
import { data } from "../models/portfolio";
import PortfolioCard from "../components/PortfolioCard";
import { useStore } from "../zustandStore";
import { scrollToTop } from "../helper";
import { PageTitle } from "../components";

export const Portfolio = () => {
 const { setIsShow } = useStore();

 useEffect(() => {
  setIsShow("portfolio");
  scrollToTop();
 }, []);
 return (
  <>
   <PageTitle>Portfolio - Alperen7K</PageTitle>

   <div className="w-full flex flex-col items-center">
    <h1 className="w-full text-[30px] font-bold mt-0 pt-0 mb-10 text-center">
     My Portfolio
    </h1>
    <div className="grid w-fit grid-cols-1 lg:grid-cols-2  gap-14 pb-10">
     {data.map((product: any) => {
      return <PortfolioCard product={product} />;
     })}
    </div>
   </div>
  </>
 );
};
