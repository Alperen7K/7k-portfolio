import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const Three = () => {
  return (
   <section id="three">
    <div className="relative flex w-full  items-start h-full bg-açıkGri">
     <div className="h-[20%]  w-full bg-gri" />

     <Player
      className="h-[80%] w-[100vw] scale-y-[-1]"
      autoplay
      loop
      src={bg}
     />
     <div className="w-[100vw] h-[100vh] absolute  bottom-0  "></div>
    </div>
   </section>
  );
};
