import menu from "../assets/menu.svg";
import { ConfigProvider, Drawer } from "antd";
import { useState } from "react";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import close from "../assets/close.svg";
import { useStore } from "../zustandStore";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
 const { isShow } = useStore();
 const navigate = useNavigate();
 const [open, setOpen] = useState(false);
 let labelClass = `m-2   px-2 text-[16px] md:text-[20px] rounded-b-lg hover:border-b-[3px] text-white border-solid hover:border-white box-border duration-200  `;
 let draverLabelClass = "mx-2  text-[22px] text-white font-bold ";
 const iconClass =
  "w-10 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

 return (
  <div className="sticky top-0 z-50 py-1 right-0 left-0 bg-gray-900 navbar-font backdrop-blur-sm text-white border-b-2 border-solid border-white/70 ">
   {/* Side Bar */}
   <ConfigProvider
    theme={{
     token: {
      colorIcon: "#fff",
      colorBgElevated: "#393D46",
     },
    }}
   >
    <Drawer
     // title="Basic Drawer"
     onClose={() => setOpen(false)}
     open={open}
     closeIcon={<img src={close} alt="close" className="p-1 w-12" />}
     width={250}
     footer={
      <div>
       <h1 className="text-[18px] font-bold text-white mb-4">
        Mehmet Alperen YEDİK
       </h1>
       <div className="flex flex-col gap-2 mt-4">
        <a
         className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
         href="tel:+90 546 434 60 08"
        >
         <img src={phone} className={" w-[15px] "} alt="Phone logo" />
         +90 546 434 60 08
        </a>
        <a
         className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
         href="mailto:mehmetalperenyedik@gmail.com"
        >
         <img src={mail} className={" w-[15px] "} alt="mail logo" />
         mehmetalperenyedik@gmail.com
        </a>
       </div>
       <div className="w-full justify-center flex gap-4 my-6">
        <a href="https://www.instagram.com/alperenyedik/" target="_blank">
         <img className={iconClass} src={instagram} alt="instagram logo" />
        </a>
        <a href="https://www.linkedin.com/in/alperen7k/" target="_blank">
         <img className={iconClass} src={linkedin} alt="linkedin logo" />
        </a>
        <a href="https://github.com/Alperen7K" target="_blank">
         <img className={iconClass} src={github} alt="github logo" />
        </a>
       </div>
      </div>
     }
     keyboard
     className="text-black flex flex-col items-center"
    >
     <div className="w-full  text-black flex flex-col items-start">
      <div className="flex flex-col justify-between gap-6 items-start">
       <a
        // href="#about"

        onClick={() => {
         setOpen(false);
         navigate("/about");
        }}
        className={draverLabelClass}
       >
        About
       </a>
       <a
        // href="#skills"
        onClick={() => {
         setOpen(false);
         navigate("/skills");
        }}
        className={draverLabelClass}
       >
        Skills
       </a>
       <a
        // href="#portfolio"
        onClick={() => {
         setOpen(false);
         navigate("/portfolio");
        }}
        className={draverLabelClass}
       >
        Portfolio
       </a>
       {/* <a
        href="#resume"
        onClick={() => setOpen(false)}
        className={draverLabelClass}
       >
        Resume
       </a> */}
      </div>
     </div>
    </Drawer>
   </ConfigProvider>
   <div className="h-[60px] w-full   flex items-center justify-center">
    <div className="w-[100vw] sm:w-[95vw] lg:w-[85vw] h-full  rounded-b-full  px-10   flex items-center justify-between">
     <label
      onClick={() => {
       scrollToTop();
       navigate("/");
      }}
      className="text-[35px] hover:scale-[1.03] font-bold duration-300"
     >
      7K's
     </label>
     <div className="sm:block hidden">
      <a
       //    href="#about"
       onClick={() => navigate("/about")}
       className={
        labelClass + `${isShow === "about" ? "border-b-[4px]" : "border-b-0"}`
       }
      >
       About
      </a>
      <a
       //    href="#skills"
       onClick={() => navigate("/skills")}
       className={
        labelClass +
        `${isShow === "skills" ? "border-b-[4px] " : "border-b-0 "}`
       }
      >
       Skills
      </a>
      <a
       //    href="#portfolio"
       onClick={() => navigate("/portfolio")}
       className={
        labelClass +
        `${isShow === "portfolio" ? "border-b-[4px] " : "border-b-0"}`
       }
      >
       Portfolio
      </a>
      {/* <a
       href="#resume"
       className={
        labelClass + `${isShow === "resume" ? "border-b-[4px]" : "border-b-0"}`
       }
      >
       Resume
      </a> */}
     </div>
     <img
      onClick={() => {
       setOpen(true);
       console.log(open);
      }}
      alt="menu icon"
      className="w-9 sm:hidden"
      src={menu}
     />
    </div>
   </div>
  </div>
 );
};
