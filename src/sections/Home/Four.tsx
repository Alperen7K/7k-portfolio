import { useStore } from "../../zustandStore";

export const Four = () => {
 const { setIsShow } = useStore();
 return (
  <section
   onMouseEnter={() => setIsShow("portfolio")}
   id="portfolio"
   className=" w-full      bg-açıkGri"
  >
   4{" "}
  </section>
 );
};
