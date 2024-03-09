export const Experience = ({
 data: { date = "", type = "", jobTitle = "", description = "", company = "" },
}: {
 data: {
  date: string;
  type: string;
  jobTitle: string;
  description: string;
  company: string;
 };
}) => {
 return (
  <div className="mt-6 flex flex-col items-center gap-y-3 w-full pb-4 sm:max-w-[700px] border-b-2 border-solid border-white/70">
   <h1 className="w-full  text-[20px] sm:text-[24px] font-bold  text-center">
    {type}
   </h1>
   <h1 className="w-full  text-[10px] ">{date}</h1>
   <h1 className="w-full  text-[14px] sm:text-[16px] font-bold">{company}</h1>
   <h1 className="w-full mt-0 pt-0 text-[12px] sm:text-[14px]">{jobTitle} </h1>
   <p className="text-[10px] sm:text-[12px]">{description}</p>
  </div>
 );
};
