import { useLocation } from "react-router-dom";
import { data } from "../models/portfolio";
import { Carousel, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import { useStore } from "../zustandStore";
import { scrollToTop } from "../helper";

export const PortfolioInfo = ({ path }: { path: string }) => {
 //  const location = useLocation();
 const { setIsShow } = useStore();
 //  const product = location.state;
 const [Project, setProject] = useState<any>({
  path: "",
  name: "",
  duty: "",
  techs: [""],
  detail: "",
  photos: [],
 });

 useEffect(() => {
  const FindProject = () => {
   let proj = data.filter((e: any) => e.path === path);
   setProject(proj[0]);
  };
  FindProject();
 }, [data]);

 useEffect(() => {
  scrollToTop();
  setIsShow("portfolio");
 }, []);

 return (
  <div className="w-[100vw] overflow-x-hidden flex flex-col items-center">
   <h1 className="w-full font-bold text-center text-[30px] xl:text-[40px] mb-5 ">
    {Project.name}
   </h1>
   <div className="w-full ">
    <ConfigProvider
     theme={{
      components: {
       Carousel: {
        dotActiveWidth: 36,
        dotHeight: 6,
        dotWidth: 24,
       },
      },
     }}
    >
     <Carousel autoplaySpeed={4000} className="" autoplay infinite>
      {Project.photos.map((photo: any, index: number) => {
       return (
        <div className="w-full md:px-20 lg:px-40 xl:px-60">
         <img
          loading="lazy"
          src={photo}
          className=" md:border-2 border-solid border-white md:rounded-xl  "
          alt={Project.name}
         />
         <div className="w-full h-[30px]" />
        </div>
       );
      })}
     </Carousel>
    </ConfigProvider>
   </div>
   <div className="w-full p-5 py-10 flex flex-col items-center">
    <h1 className="w-full md:px-20 lg:px-40 xl:px-60 text-justify">
     {Project.detail}
    </h1>
    <div className="py-5">
     <h1 className="text-center text-[24px] font-bold mb-2">
      Used Technologies
     </h1>
     <div className="w-full flex items-center justify-center">
      <span className="w-full text-center">{Project.techs.join(" / ")}</span>
     </div>
    </div>
   </div>
  </div>
 );
};
