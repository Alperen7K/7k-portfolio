import { useLocation } from "react-router-dom";
import { data } from "../models/portfolio";
import { Carousel, ConfigProvider } from "antd";

export const PortfolioInfo = () => {
 const location = useLocation();
 const product = location.state;

 console.log(product);
 return (
  <div className="w-[100vw] overflow-x-hidden flex flex-col items-center">
   <h1 className="w-full text-center text-[30px] xl:text-[40px] my-5 mt-10">
    {product.name}
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
     <Carousel autoplaySpeed={2000} className="" autoplay infinite>
      {product.photos.map((photo: any, index: number) => {
       return (
        <div className="w-full md:px-20 lg:px-40 xl:px-60">
         <img
          src={photo}
          className=" md:border-2 border-solid border-white md:rounded-xl  "
          alt={product.name + index}
         />
        </div>
       );
      })}
     </Carousel>
    </ConfigProvider>
   </div>
   <div className="w-full p-5">
    <h1>{product.detail}</h1>
   </div>
  </div>
 );
};
