import React from "react";
import { useStore } from "../../zustandStore";

export const Five = () => {
 const { setIsShow } = useStore();

 return (
  <section
   onMouseEnter={() => setIsShow("resume")}
   id="resume"
   className=" w-full      bg-açıkGri"
  >
   5
  </section>
 );
};
