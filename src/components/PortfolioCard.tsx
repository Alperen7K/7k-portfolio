import inspect from "../assets/inspect.svg";
import { useNavigate } from "react-router-dom";
export default function PortfolioCard({ product }: any) {
 const navigate = useNavigate();

 return (
  <div
   onClick={() => navigate(`/portfolio/${product.path}`, { state: product })}
   className={`rounded-[25px] shadow-2xl border-4 flex items-center justify-center border-solid bg-gri hover:bg-açıkGri border-white hover:scale-[1.03] duration-300`}
  >
   {/* Ana Bölüm */}
   <div className={` relative`}>
    <img
     className=" absolute top-3 right-3 bg-gri/70 p-1 rounded-xl border-2 border-white border-solid  z-40"
     src={inspect}
    />
    <div className="w-[90vw] h-[50.5vw]  sm:w-[60vw] sm:h-[33.75vw] md:w-[50vh] md:h-[28.125vh] overflow-y-hidden rounded-b-[20px]">
     <img
      className="w-full  rounded-t-[20px] border-solid border-white border-b-4"
      alt={product.name}
      src={product.photos[0]}
     />
    </div>
    <h1 className="w-full absolute bottom-0 z-40 bg-gri rounded-b-[20px] text-center py-1 text-[18px] font-normal">
     {product.name}
    </h1>
   </div>
  </div>
 );
}
