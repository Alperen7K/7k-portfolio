import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const One = () => {
  return (
    <section>
      <div className="relative flex  items-end h-full bg-açıkGri">
        <Player className="h-[100%]" autoplay loop src={bg} />
        <div className="w-[100vw] h-[100vh] absolute  bottom-0  "></div>
      </div>
    </section>
  );
};
