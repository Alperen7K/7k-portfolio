import React from "react";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import close from "../assets/close.svg";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
 const iconClass =
  "w-8 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";
 const navigate = useNavigate();
 return (
  <div className="w-full bg-gri flex items-center justify-center">
   <div className="w-[80vw] py-5 flex flex-col sm:flex-row sm:justify-between items-center gap-y-4 ">
    <div className="flex flex-col items-center gap-y-2 sm:gap-y-0">
     <div
      onClick={() => navigate("/")}
      className="text-[45px] hover:scale-[1.03] font-bold duration-300"
     >
      7K's
     </div>
     <div className="w-full justify-center flex gap-4 ">
      <a href="https://www.instagram.com/alperenyedik/" target="_blank">
       <img className={iconClass} src={instagram} />
      </a>
      <a href="https://www.linkedin.com/in/alperen7k/" target="_blank">
       <img className={iconClass} src={linkedin} />
      </a>
      <a href="https://github.com/Alperen7K" target="_blank">
       <img className={iconClass} src={github} />
      </a>
     </div>
    </div>

    <div className="flex flex-col gap-2 mt-4">
     <a
      className="flex items-center gap-2 cursor-pointer text-[15px] font-bold text-white"
      href="tel:+90 546 434 60 08"
     >
      <img src={phone} className={" w-[20px] "} />
      546 434 60 08
     </a>
     <a
      className="flex items-center gap-2 cursor-pointer text-[15px] font-bold text-white"
      href="mailto:mehmetalperenyedik@gmail.com"
     >
      <img src={mail} className={" w-[20px] "} />
      mehmetalperenyedik@gmail.com
     </a>
    </div>
   </div>
  </div>
 );
};
