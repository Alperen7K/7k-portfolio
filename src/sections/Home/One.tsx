import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const One = () => {
  return (
   <section className="">
    <div className="relative flex  h-[100vh] flex-col justify-end items-start  bg-açıkGri">
     <Player className="w-full p-0 m-0" autoplay loop src={bg} />
     <div className="w-[100vw] z-20 h-[100vh] absolute  bottom-0  "></div>
    </div>
   </section>
  );
};
