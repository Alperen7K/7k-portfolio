import React, { useEffect } from "react";
import { useStore } from "../zustandStore";
import alpi from "../assets/alpy.png";
import user from "../assets/user.svg";
export const About = () => {
 const { setIsShow } = useStore();
 const infoClass =
  "w-full flex font-normal  items-end text-[16px] md:text-[18px] xl:text-[22px]  py-[2px] gap-x-2";

 useEffect(() => {
  setIsShow("about");
 }, []);

 const historyTitle =
  "w-full  text-[20px] sm:text-[24px] font-bold  text-center";
 const historyDate = "w-full  text-[10px] ";
 const historyJobTitle = "w-full  text-[14px] sm:text-[16px] font-bold";
 const historySubTitle = "w-full mt-0 pt-0 text-[12px] sm:text-[14px]";
 const historyPClass = "text-[10px] sm:text-[12px]";
 return (
  <div className="w-full h-full flex flex-col items-center   px-10 pb-10">
   <h1 className="w-full text-[30px] font-bold mt-0 pt-0 text-center">About</h1>

   <div className="sm:max-w-[700px] flex flex-col items-center gap-y-3 sm:gap-y-6 mt-3 sm:mt-10">
    <p className="text-justify  text-[15px] ">
     Hello my name is <span className="font-bold">Mehmet Alperen YEDİK</span>. I
     was born in Konya, and I decided to stay in my hometown for my university
     education. My hunger for learning constantly motivates me to improve.
    </p>

    <p className=" text-justify  text-[15px]">
     I began my journey of learning software through voluntary work at the
     Kapsül Technology Platform. With diligence over time, I secured my first
     job in my software career. Currently, I am actively engaged in my current
     job, and alongside that, I continue to enhance my skills through voluntary
     internship at Aivisiontech. Additionally, I am involved in freelance
     projects to further diversify my experiences.
    </p>
   </div>
   <div className="mt-6 flex flex-col items-center gap-y-3 w-full py-4 sm:max-w-[700px] border-b-2 border-t-2 border-solid border-white/70">
    <h1 className={historyTitle}>Education</h1>
    <h1 className={historyDate}>2021/2025</h1>
    <h1 className={historyJobTitle}>
     Selcuk University Mechatronic Engineering
    </h1>
    <p className={historyPClass}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur
     neque ex culpa aut totam, nobis quibusdam doloremque porro hic aperiam nam
     ut dignissimos molestiae rerum saepe? Similique, voluptas officiis.
    </p>
   </div>
   <div className="mt-6 flex flex-col items-center gap-y-3 w-full pb-4 sm:max-w-[700px] border-b-2 border-solid border-white/70">
    <h1 className={historyTitle}>Job</h1>
    <h1 className={historyDate}>07/2023 - ...</h1>
    <h1 className={historyJobTitle}>Kapsul Technology Platform</h1>
    <h1 className={historySubTitle}>Frontend Developer</h1>
    <p className={historyPClass}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur
     neque ex culpa aut totam, nobis quibusdam doloremque porro hic aperiam nam
     ut dignissimos molestiae rerum saepe? Similique, voluptas officiis.
    </p>
   </div>
   <div className="mt-6 flex flex-col items-center gap-y-3 w-full pb-4 sm:max-w-[700px] border-b-2 border-solid border-white/70">
    <h1 className={historyTitle}>Internship</h1>
    <h1 className={historyDate}>11/2023 - ...</h1>
    <h1 className={historyJobTitle}>Aivisiontech</h1>
    <h1 className={historySubTitle}>Frontend Developer</h1>
    <p className={historyPClass}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur
     neque ex culpa aut totam, nobis quibusdam doloremque porro hic aperiam nam
     ut dignissimos molestiae rerum saepe? Similique, voluptas officiis.
    </p>
   </div>
   <div className="mt-6 flex flex-col items-center gap-y-3 w-full pb-4 sm:max-w-[700px] border-b-2 border-solid border-white/70">
    <h1 className={historyTitle}>Volunteering</h1>
    <h1 className={historyDate}>02/2023 - 07/2023</h1>
    <h1 className={historyJobTitle}>Kapsul Technology Platform</h1>
    <h1 className={historySubTitle}>Frontend Developer</h1>
    <p className={historyPClass}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur
     neque ex culpa aut totam, nobis quibusdam doloremque porro hic aperiam nam
     ut dignissimos molestiae rerum saepe? Similique, voluptas officiis.
    </p>
   </div>
   <div className="mt-6 flex flex-col items-center gap-y-3 w-full pb-4 sm:max-w-[700px] ">
    <h1 className={historyTitle}>Entreprenaurship</h1>
    <h1 className={historyDate}>08/2023 - ...</h1>
    <h1 className={historyJobTitle}>Linker Company</h1>
    <h1 className={historySubTitle}>Frontend Developer</h1>
    <p className={historyPClass}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur
     neque ex culpa aut totam, nobis quibusdam doloremque porro hic aperiam nam
     ut dignissimos molestiae rerum saepe? Similique, voluptas officiis.
    </p>
   </div>
  </div>
 );
};
