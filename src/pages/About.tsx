import { useEffect } from "react";
import { scrollToTop } from "../helper";
import { useStore } from "../zustandStore";
import { data } from "../models/experience";
import { Experience, PageTitle } from "../components";

export const About = () => {
 const { setIsShow } = useStore();

 useEffect(() => {
  setIsShow("about");
  scrollToTop();
 }, []);

 const historyTitle =
  "w-full  text-[20px] sm:text-[24px] font-bold  text-center";
 const historyDate = "w-full  text-[10px] ";
 const historyJobTitle = "w-full  text-[14px] sm:text-[16px] font-bold";

 return (
  <>
   <PageTitle>About - Alperen7K</PageTitle>
   <div className="w-full h-full flex flex-col items-center   px-10 pb-10">
    <h1 className="w-full text-[30px] font-bold mt-0 pt-0 text-center">
     About
    </h1>

    <div className="sm:max-w-[700px] flex flex-col items-center gap-y-3 sm:gap-y-6 mt-3 sm:mt-10">
     <p className="text-justify  text-[15px] ">
      Hello my name is <span className="font-bold">Mehmet Alperen YEDİK</span>.
      I was born in Konya, and I decided to stay in my hometown for my
      university education. My hunger for learning constantly motivates me to
      improve.
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
    </div>
    {data.map((exp: any) => {
     return <Experience data={exp} />;
    })}
   </div>
  </>
 );
};
