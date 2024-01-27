import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const One = () => {
  return (
   <section>
    <div className="relative flex h-[100vh] flex-col justify-end items-start  bg-açıkGri">
     {/* <div className="flex flex-col-reverse"> */}
     <Player className=" w-full pb-0 mb-0" autoplay loop src={bg} />
     <div className="h-[20%] mt-0 pt-0 border-solid border-gri border-t-[50px] w-full bg-gri" />
     {/* </div> */}
     {/* <div className="w-[100vw] h-[100vh] absolute  bottom-0  "></div> */}
    </div>
   </section>
  );
};
