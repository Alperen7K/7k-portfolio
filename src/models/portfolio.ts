import binance1 from "../assets/binance-bot/binance-1.png";
import binance2 from "../assets/binance-bot/binance-2.png";
import binance3 from "../assets/binance-bot/binance-3.png";

import press1 from "../assets/press-ui/press-1.png";
import press2 from "../assets/press-ui/press-2.png";
import press3 from "../assets/press-ui/press-3.png";
import press4 from "../assets/press-ui/press-4.png";
import press5 from "../assets/press-ui/press-5.png";

import react from "../assets/technologies/react.svg";
import antd from "../assets/technologies/antd.svg";
import tailwind from "../assets/technologies/tailwind.svg";

//   technology: {
//    react: { logo: react, name: "ReactJs", link: "" },
//    antd: { logo: antd, name: "Ant Design", link: "" },
//    tailwind: { logo: tailwind, name: "TailwindCss", link: "" },
//   },

export const data: any = [
 {
  path: "binance-bot",
  name: "Binance Bot",
  duty: "Freelance",
  techs: ["react", "typescript", "flawCharts", "antd", "tailwind", "axios"],
  detail:
   "It is a system where the user can add and change the functions they want and also manage opening and closing bots with these functions.",
  photos: [binance2, binance1, binance3],
 },
 {
  path: "press",
  name: "Kapsül Basında Biz",
  duty: "Kapsül Teknoloji Platformu",
  techs: ["react", "typescript", "antd", "tailwind", "axios"],
  detail:
   "An interface used to display the news published in the press for the Capsule Technology Platform by adding news, editing the news and displaying the news that is on the air.",
  photos: [press2, press1, press3, press4, press5],
 },
];
