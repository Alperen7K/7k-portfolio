import { useEffect } from "react";
import alpi from "../assets/alpy.webp";
import { scrollToTop } from "../helper";
import bg from "../assets/blowing.json";
import { PageTitle } from "../components";
import { useStore } from "../zustandStore";
import { Player } from "@lottiefiles/react-lottie-player";

export const Home = () => {
 const { setIsShow } = useStore();

 useEffect(() => {
  scrollToTop();
  setIsShow("");
 }, []);

 return (
  <>
   <PageTitle>Alperen7K</PageTitle>

   <div className="relative flex  h-[90vh] flex-col justify-end items-start text-white  bg-açıkGri">
    <Player className="w-full p-0 m-0 scale-x-[-1]" autoplay loop src={bg} />
    <div className="w-[100vw] z-20 h-[100vh] absolute pt-[100px] flex  justify-center bottom-0">
     <div className="flex flex-col h-full pb-20 lg:flex-row-reverse items-center lg:items-center lg:justify-evenly  w-full   ">
      <div
       className=" w-[40vh] lg:w-[30vw]  h-[40vh] lg:h-[30vw] bg-center mt-20 bg-no-repeat bg-cover rounded-full border-[15px] border-solid border-gri lg:border-gri"
       style={{ backgroundImage: `url(${alpi})` }}
      />
      <div className="lg:px-8 lg:py-4 lg:bg-gri rounded-full lg:border-2 border-solid border-white">
       <h1 className="text-center mt-16 lg:mt-0  text-[28px] font-bold">
        Mehmet Alperen YEDİK
       </h1>
       <h1 className=" text-center text-[25px] ">Web Developer</h1>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};
