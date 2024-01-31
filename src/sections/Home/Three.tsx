import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useStore } from "../../zustandStore";
import { motion } from "framer-motion";
import { useState } from "react";
import { LoadingBar } from "../../components/loadingBar";
import { wait } from "@testing-library/user-event/dist/utils";

export const Three = () => {
 const { setIsShow, isShow } = useStore();

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
  <section
   onMouseEnter={() => {
    setIsShow("skills");
   }}
   onScroll={() => {
    setIsShow("skills");
   }}
   id="skills"
   className="relative items-start  w-full bg-açıkGri"
  >
   <Player className="h-[100%] w-[100vw] scale-y-[-1]" autoplay loop src={bg} />
   <div className="w-[100vw] h-[100vh] absolute pt-[90px]  bottom-0  flex flex-col  justify-start items-center">
    <h1 className="w-full text-[35px] my-0 py-0  text-center sm:hidden">
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
  </section>
 );
};

