import { Player } from "@lottiefiles/react-lottie-player";
import menu from "../assets/menu.svg";
import { ConfigProvider, Drawer, Popover } from "antd";
import { useState } from "react";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import close from "../assets/close.svg";
import { CloseOutlined } from "@ant-design/icons";

export const Navbar = () => {
 const [open, setOpen] = useState(false);
 let labelClass =
  "m-2  px-1 text-[18px] md:text-[24px]  hover:border-b-[4px] text-white border-solid hover:border-white box-border duration-200";
 let draverLabelClass = "mx-2  text-[22px] text-white font-bold ";
 const iconClass =
  "w-10 shadow rounded-lg  hover:bg-antrasit duration-300 hover:scale-[1.04] ";

 return (
  <div className="sticky top-0 z-40 right-0 left-0 navbar-font text-white">
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
     closeIcon={<img src={close} className="p-1 w-12" />}
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
         <img src={phone} className={" w-[15px] "} />
         546 434 60 08
        </a>
        <a
         className="flex items-center gap-2 cursor-pointer text-[10px] font-bold text-white"
         href="mailto:mehmetalperenyedik@gmail.com"
        >
         <img src={mail} className={" w-[15px] "} />
         mehmetalperenyedik@gmail.com
        </a>
       </div>
       <div className="w-full justify-center flex gap-4 my-6">
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
     }
     keyboard
     className="text-black flex flex-col items-center"
    >
     <div className="w-full h-[80vh] text-black flex flex-col items-start">
      <div className="flex flex-col justify-between gap-6 items-start">
       <label className={draverLabelClass}>Becerilerim</label>
       <label className={draverLabelClass}>Çalışmalarım</label>
       <label className={draverLabelClass}>Hedeflerim</label>
      </div>
     </div>
    </Drawer>
   </ConfigProvider>
   <div className="h-[100px] w-full   flex items-center justify-center">
    <div className="w-[100vw] sm:w-[95vw] lg:w-[85vw] h-full  rounded-b-full pb-4 px-10   flex items-center justify-between">
     <label className="text-[35px] hidden">Mehmet Alperen Yedik</label>
     <label className="text-[45px]">7K's</label>
     <div className="sm:block hidden">
      <a className={labelClass}>Becerilerim</a>
      <a className={labelClass}>Çalışmalarım</a>
      <a className={labelClass}>Hedeflerim</a>
     </div>
     <img
      onClick={() => {
       setOpen(true);
       console.log(open);
      }}
      className="w-9 sm:hidden"
      src={menu}
     />
    </div>
   </div>
  </div>
 );
};
