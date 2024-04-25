import React, { useEffect } from "react";
import { useStore } from "../zustandStore";
import { LoadingBar } from "../components/loadingBar";
import { scrollToTop } from "../helper";
import { PageTitle } from "../components";

export const Skills = () => {
 const { setIsShow, isShow } = useStore();

 useEffect(() => {
  setIsShow("skills");
  scrollToTop();
 }, []);

 const skills = [
  { name: "JavaScript", rate: 80, wait: 50 },
  { name: "TypeScript", rate: 70, wait: 100 },
  { name: "ReactJS", rate: 75, wait: 150 },
  { name: "NEXT.js", rate: 50, wait: 200 },
  { name: "Node.js", rate: 50, wait: 250 },
  { name: "HTML", rate: 90, wait: 300 },
  { name: "CSS", rate: 80, wait: 350 },
 ];
 return (
  <>
   <PageTitle>Skills - Alperen7K</PageTitle>

   <div className="w-full flex flex-col justify-center items-center pb-10 min-h-[80vh]">
    <h1 className="w-full text-[30px] font-bold mt-0 pt-0  text-center">
     Skills
    </h1>

    <div className="my-2 flex flex-col gap-y-2 overflow-y-auto sm:mt-10">
     {isShow === "skills" ? (
      skills.map((skill: any, index: number) => {
       return (
        <LoadingBar
         key={index}
         name={skill.name}
         rate={skill.rate}
         wait={skill.wait}
        />
       );
      })
     ) : (
      <div className="w-full h-[70vh] flex items-center justify-center animate-pulse ">
       <span className="text-[20px]">Touch the screen</span>
      </div>
     )}
    </div>
   </div>
  </>
 );
};
