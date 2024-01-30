import Marquee from "react-fast-marquee";
import PortfolioCard from "../../components/PortfolioCard";
import { useStore } from "../../zustandStore";
import { data } from "../../models/portfolio";
import { useNavigate } from "react-router-dom";

export const Four = () => {
 const { setIsShow } = useStore();
 const navigate = useNavigate();
 return (
  <section
   onMouseEnter={() => setIsShow("portfolio")}
   id="portfolio"
   className=" w-full pt-12 flex flex-col     bg-açıkGri"
  >
   <div className="w-full flex items-center justify-end  px-5">
    <button
     onClick={() => navigate("/portfolio")}
     className="py-5 hover:text-gri duration-300"
    >
     Show All
    </button>
   </div>
   <Marquee pauseOnHover className="">
    <div className="flex gap-10 mx-5 pb-20">
     {data.map((product: any, index: number) => {
      console.log(product);

      return <PortfolioCard product={product} key={index} />;
     })}
    </div>
   </Marquee>
  </section>
 );
};
