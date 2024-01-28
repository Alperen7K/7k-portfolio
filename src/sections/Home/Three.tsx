import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useStore } from "../../zustandStore";

export const Three = () => {
 const { setIsShow } = useStore();

 return (
  <section
   onMouseEnter={() => setIsShow("skills")}
   id="skills"
   className="relative items-start  w-full bg-açıkGri"
  >
   <Player className="h-[100%] w-[100vw] scale-y-[-1]" autoplay loop src={bg} />
   <div className="w-[100vw] h-[100vh] absolute  bottom-0  flex items-center justify-center">
    3
   </div>
  </section>
 );
};