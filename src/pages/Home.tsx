import { useEffect } from "react";
import { Five, Four, One, Three, Two } from "../sections/Home";
import { useStore } from "../zustandStore";

export const Home = () => {
 const { setIsShow } = useStore();

 useEffect(() => {
  setIsShow("about");
 }, []);
 return (
  <div className="m-0 p-0 w-[100vw] h-[100%] text-white">
   <One />
   {/* <Two /> */}
   {/* <Three /> */}
   {/* <Four /> */}
   {/* <Five /> */}
  </div>
 );
};
