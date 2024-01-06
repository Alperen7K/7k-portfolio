import sun from "../assets/sun.svg";

export const Navbar = () => {
  let labelClass =
    "m-2 p-1 text-[18px]  hover:border-b-[3px] rounded-b-md border-solid hover:border-[#76453B] box-border hover:scale-105 duration-200";

  return (
    <div className="h-[125px] w-full bg-[#297061] text-[#f8f9eb] flex items-center justify-center">
      <div className="h-full w-[85vw] flex items-center justify-between">
        <div>
          <label className="text-[22px] font-bold">Mehmet Alperen Yedik</label>
        </div>
        <div className="flex items-center">
          <label className={labelClass}>Projeler</label>
          <label className={labelClass}>Hakkımda</label>
          <label className={labelClass}>İletişim</label>
          <label className={labelClass}>Hedeflerim</label>
          <div className="ml-10">
            <img
              src={sun}
              className={` h-[25px] border-solid rounded-full box-border  p-1 border-[2px] border-[#ffffffb0]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
