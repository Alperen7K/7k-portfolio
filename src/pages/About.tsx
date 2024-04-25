import React, { useEffect } from "react";
import { useStore } from "../zustandStore";
import { scrollToTop } from "../helper";
import { data } from "../models/experience";
import { Experience, PageTitle } from "../components";
export const About = () => {
 const { setIsShow } = useStore();
 const infoClass =
  "w-full flex font-normal  items-end text-[16px] md:text-[18px] xl:text-[22px]  py-[2px] gap-x-2";

 useEffect(() => {
  setIsShow("about");
  scrollToTop();
 }, []);

 const historyTitle =
  "w-full  text-[20px] sm:text-[24px] font-bold  text-center";
 const historyDate = "w-full  text-[10px] ";
 const historyJobTitle = "w-full  text-[14px] sm:text-[16px] font-bold";
 const historySubTitle = "w-full mt-0 pt-0 text-[12px] sm:text-[14px]";
 const historyPClass = "text-[10px] sm:text-[12px]";

 let bla = [
  {
   type: "Job",
   date: "07/2023 - ...",
   company: "Kapsul Technology Platform",
   jobTitle: "Frontend Developer",
   description:
    "After approximately 4.5 months of voluntary work, I developed successful projects and seized job opportunities. While honing my skills in React.js, I leveraged various libraries and worked on numerous projects. Sensing repetition, I led the transition to Next.js with my teammates to explore new technologies. Throughout the project development process, I aimed to employ the most suitable methods. Alongside these endeavors, I had the opportunity to teach web courses to high school students, adding teachingto my repertoire alongside project development.",
  },
  {
   type: "Internship",
   date: "11/2023 - ...",
   company: "Aivisiontech",
   jobTitle: "Frontend Developer",
   description:
    "     During this process, I took care of Aivisiontech's website and due to my desire for the site to be as up-to-date and dynamic as possible, I decided to create a site with Threejs, and I am still working on the website.",
  },
  {
   type: "Voluntering",
   date: "02/2023 - 07/2023",
   company: "Kapsul Technology Platform",
   jobTitle: "Frontend Developer",
   description:
    "After the schools were closed due to the earthquake in my country, I started this process without any prior knowledge to utilize my free time. I began my learning journey with Html, Css, Javascript, and Reactjs on the path to becoming a Frontend Developer.",
  },
  {
   type: "Entreprenaurship",
   date: "08/2023 - ...",
   company: "Linker Company",
   jobTitle: "Frontend Developer & Mobile Developer",
   description:
    "This initiative started with my close circle of friends. I developed an artificial intelligence-based voice assistant interface for the project. Throughout the project, I was interested in speech-to-text libraries, but since the web was inadequate for this project, we transitioned to embedded systems, and now I am managing the company's website.",
  },
 ];
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
