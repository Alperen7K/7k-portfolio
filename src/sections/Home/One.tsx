import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";
import alpi from "../../assets/alpy.png";
import { useStore } from "../../zustandStore";
export const One = () => {
 const { setIsShow } = useStore();

 return (
  <section onMouseEnter={() => setIsShow("main")} id="" className="">
   <div className="relative flex  h-[100vh] flex-col justify-end items-start text-white  bg-açıkGri">
    <Player className="w-full p-0 m-0" autoplay loop src={bg} />
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
       <h1 className=" text-center text-[25px] ">Frontend Developer</h1>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};
