import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
export const Navbar = () => {
  const [isTurkish, setIsTurkish] = useState(true);

  let labelClass =
    "m-2 px-1 text-[18px]  hover:border-b-[4px] text-white border-solid hover:border-white box-border duration-200";

  return (
    <div className="fixed top-0 z-20 right-0 left-0 navbar-font text-white">
      <div className="h-[100px] w-full   flex items-center justify-center">
        <div className="w-[100vw] lg:w-[85vw] h-full bg-gri rounded-b-full pb-4 px-16 lg:px-20 border-solid border-b-4  border-white flex items-center justify-between">
          <label className="text-[35px]">7K's</label>
          {/* <img src={hamburger} /> */}
          <div className="lg:block hidden">
            <label className={labelClass}>Çalışmalarım</label>
            <label className={labelClass}>Becerilerim</label>
            <label className={labelClass}>Hakkımda</label>
            <label className={labelClass}>Hedeflerim</label>
          </div>
        </div>
      </div>
    </div>
  );
};
