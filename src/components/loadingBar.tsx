import React, { useEffect, useState } from "react";

export const LoadingBar = ({
 name,
 rate,
 wait,
}: {
 name: string;
 rate: number;
 wait: number;
}) => {
 const [width, setWidth] = useState(0);

 useEffect(() => {
  setTimeout(() => {
   const intervalId = setInterval(() => {
    setWidth((prevWidth) => {
     const increment = 1; // İlerleme artış miktarı
     const nextWidth = prevWidth + increment;

     if (nextWidth >= rate) {
      clearInterval(intervalId);
      return rate;
     }

     return nextWidth;
    });
   }, 30); // Animasyonun hızı (milisaniye cinsinden)

   return () => clearInterval(intervalId);
  }, wait);
 }, [rate]);

 return (
  <div>
   <div className="flex items-end justify-between px-2 text-[20px]">
    <span className="text-[24px]">{name}</span>
    <span className="text-[16px] text-white/70">%{width}</span>
   </div>
   <div className="w-[90vw] max-w-[700px] bg-white rounded-md border-2 border-white-border-solid">
    <div
     style={{ width: `${width}%` }}
     className={` ${
      width === rate ? "" : "animate-pulse"
     } h-full text-transparent bg-green-700 rounded-md`}
    >
     .
    </div>
   </div>
  </div>
 );
};
