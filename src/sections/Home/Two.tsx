import { useStore } from "../../zustandStore";
import birthday from "../../assets/birthday.svg";
import phone from "../../assets/phone.svg";
import alpi from "../../assets/alpy.png";
import user from "../../assets/user.svg";

export const Two = () => {
 const { setIsShow } = useStore();

 const infoClass =
  "w-full flex font-normal  items-end text-[16px] md:text-[18px] xl:text-[22px]  py-[2px] gap-x-2";

 return (
  <section
   onMouseEnter={() => setIsShow("about")}
   id="about"
   className=" w-full   h-[100vh]   bg-gri"
  >
   <div className="w-full h-full flex pt-[90px] sm:pt-[70px] px-6 flex-col justify-around sm:justify-start sm:mt-20 md:mt-0 md:justify-evenly items-start md:items-center">
    <div className="w-full">
     <h1 className="w-full text-[30px] mt-0 pt-0 text-center sm:hidden">
      About
     </h1>
     <p className="text-justify pt-1 text-[15px] sm:hidden">
      I was born in Konya, and I decided to stay in my hometown for my
      university education. My hunger for learning constantly motivates me to
      improve.
     </p>
    </div>
    <div className="w-full ">
     <div className="w-full flex items-center justify-center my-1 border-b-2 border-solid border-white md:hidden">
      <img src={user} className="w-10 " />
     </div>
     <div className="sm:flex w-full items-center justify-center sm:gap-x-8 lg:gap-x-20">
      <div
       className="hidden sm:block w-[25vh] h-[25vh] md:w-[40vh] md:h-[40vh] bg-center bg-no-repeat bg-cover rounded-full border-[2px] border-solid border-white"
       style={{ backgroundImage: `url(${alpi})` }}
      />
      <div className="w-full sm:w-fit my-1 flex flex-col gap-2">
       <div className={infoClass}>
        <b className="text-white text-[18px] md:text-[20px]">Birthday : </b>{" "}
        21/06/2002
       </div>
       <div className={infoClass}>
        <b className="text-white text-[18px] md:text-[20px]">City : </b> Konya,
        Turkey
       </div>
       <div className={infoClass}>
        <b className="text-white text-[18px] md:text-[20px]">Degree : </b>{" "}
        Bachelor's
       </div>
       <div className={infoClass}>
        <b className="text-white text-[18px] md:text-[20px]">Phone : </b> 546
        434 60 08
       </div>
       <div className="w-full flex  items-center text-[13px] sm:tex-[18px] md:text-[20px] xl:text-[22px]   py-[2px] gap-2">
        <b className="text-white text-[18px] md:text-[20px] xl:text-[22px]">
         E-mail :{" "}
        </b>
        mehmetalperenyedik@gmail.com
       </div>
      </div>
     </div>
    </div>
    <div className="mb-8 w-[80vw] sm:mt-10 md:mt-0 flex flex-col gap-y-5 justify-evenly items-start ">
     <p className="text-justify pt-1 text-[15px] md:text-[18px] sm:block hidden ">
      I was born in Konya, and I decided to stay in my hometown for my
      university education. My hunger for learning constantly motivates me to
      improve.
     </p>
     <p className="sm:mt-10 md:mt-0 text-justify pt-1 text-[14px] md:text-[18px] overflow-y-auto ">
      I began my journey of learning software through voluntary work at the
      Kapsül Technology Platform. With diligence over time, I secured my first
      job in my software career. Currently, I am actively engaged in my current
      job, and alongside that, I continue to enhance my skills through voluntary
      internship at Aivisiontech. Additionally, I am involved in freelance
      projects to further diversify my experiences.
     </p>
    </div>
   </div>
  </section>
 );
};
