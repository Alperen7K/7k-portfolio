import bg from "../../assets/blowing-gray.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const Three = () => {
  return (
    <section>
      <div className="relative flex  items-start h-full bg-açıkGri">
        <Player
          className="h-[100%] w-[100vw] scale-y-[-1]"
          autoplay
          loop
          src={bg}
        />
        <div className="w-[100vw] h-[100vh] absolute  bottom-0  "></div>
      </div>
    </section>
  );
};
