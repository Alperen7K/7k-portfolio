import binance1 from "../assets/binance-bot/binance-1.png";
import binance2 from "../assets/binance-bot/binance-2.png";
import binance3 from "../assets/binance-bot/binance-3.png";

import press1 from "../assets/press-ui/press-1.png";
import press2 from "../assets/press-ui/press-2.png";
import press3 from "../assets/press-ui/press-3.png";
import press4 from "../assets/press-ui/press-4.png";
import press5 from "../assets/press-ui/press-5.png";

import kapsulweb1 from "../assets/kapsul-web/main.png";

import form1 from "../assets/form/main.png";
import form2 from "../assets/form/create.png";
import form3 from "../assets/form/submit-L.png";
import form4 from "../assets/form/submit-S.png";
import form5 from "../assets/form/response.png";
import form6 from "../assets/form/cv.png";

import shift1 from "../assets/shift-export/main.png";
import shift2 from "../assets/shift-export/month-shift.png";
import shift3 from "../assets/shift-export/month-break.png";

import login1 from "../assets/login/main.png";
import login2 from "../assets/login/second.png";

import tp2ae1 from "../assets/tp2ae/third.png";
import tp2ae2 from "../assets/tp2ae/main.png";
import tp2ae3 from "../assets/tp2ae/second.png";

import dark from "../assets/voice-asistant/dark.png";
import light from "../assets/voice-asistant/light.png";

import commerce from "../assets/e-commerce/main.png";

import aa1 from "../assets/aa-hackathon/main-page.png";
import aa2 from "../assets/aa-hackathon/inspect-1.png";
import aa3 from "../assets/aa-hackathon/inspect-2.png";
import aa4 from "../assets/aa-hackathon/fikir-ver.png";
import aa5 from "../assets/aa-hackathon/ppk.png";

import scanner1 from "../assets/scanner/main.png";
import scanner2 from "../assets/scanner/shift.png";
import scanner3 from "../assets/scanner/feedback.png";
import scanner4 from "../assets/scanner/not-found.png";

export const data: any = [
 //  Forms
 {
  path: "kapsul-forms",
  name: "Kapsul Forms",
  duty: "Kapsul Technology Platform",
  techs: [
   "React.js",
   "Javascript",
   "Antd",
   "Tailwindcss",
   "Axios",
   "React-pdf",
  ],
  detail:
   "Kapsul Forms, developed for managing applications in my workplace, allows dynamic creation and editing of forms. It ensures mandatory field checks during form completion. Within the completed forms, there is a page where each response is displayed in a table according to question titles. Users can search among the responses and also sort them alphabetically. Additionally, there are predefined template questions on the form creation screen, and users can add their own questions below these templates. After using these templates, on the page displaying responses, users can view or print all the information of the respondent neatly arranged in a PDF format. Kapsul Technology Platform Website.",
  photos: [form3, form1, form2, form4, form5, form6],
 },
 //  News Automation
 {
  path: "news-automation",
  name: "News Writing Automation",
  duty: "Hackathon",
  techs: ["Next.js", "Typescript", "Antd", "Tailwindcss", "GrapQL"],
  detail:
   "This project is a result of the initial steps taken in a venture initiated with my circle of friends. I delved into speech-to-text and text-to-speech libraries to develop a voice assistant on the web. At the end of this project, there is a messaging interface available. Users can activate the assistant by placing the necessary keywords at the beginning of their sentences (for example: 'Hey Ema'), and all the questions they ask will be displayed on the screen. These questions are then directed to our backend where our AI processes them and sends back responses, which are then displayed in the response box for the user.",
  photos: [aa1, aa2, aa3, aa4, aa5],
 },
 //  Scanner
 {
  path: "kapsul-scanner",
  name: "Kapsul Scanner",
  duty: "Kapsul Technology Platform",
  techs: [
   "Next.js",
   "Typescript",
   "Antd",
   "Tailwindcss",
   "Use-Scan-Detection",
   "Zustand",
   "Axios",
  ],
  detail:
   "This project is developed for both tracking working hours and event attendance. We use a computer with a touchscreen and a barcode scanner as hardware. Based on these hardware specifications, this project I've developed operates for two different purposes from a single homepage. Upon scanning the barcode on the homepage, the system confirms which project it belongs to and redirects accordingly. For tracking working hours, it retrieves the individual's recent transactions and displays the operations they can perform accordingly. For the event system, it identifies the person from the data obtained through the barcode, records their attendance in the background, and provides brief information about where the event is located. When the person scans their barcode again at the end of the event, the system records their attendance again and prompts them with a panel where they can anonymously provide feedback about the event.",
  photos: [scanner1, scanner2, scanner3, scanner4],
 },
 // Binance
 {
  path: "binance-bot",
  name: "Binance Bot",
  duty: "Freelance",
  techs: [
   "React.js",
   "Typescript",
   "Antd",
   "Tailwindcss",
   "React-Apexcharts",
   "Axios",
  ],
  detail:
   "In this project, I developed an interface for a bot with a buy-sell decision mechanism based on the formulas selected by the user. The interface consists of two pages. The first interface provides a platform where users can view and edit the formulas. The second interface displays a table based on the formulas set by the user. Additionally, the user can initiate the bot for the selected currency pair, along with a graph showing trends based on the selected currency pair and table data.",
  photos: [binance2, binance1, binance3],
 },
 //  Basindabiz
 {
  path: "press",
  name: "Kapsül Basında Biz",
  duty: "Kapsul Technology Platform",
  techs: [
   "React.js",
   "Typescript",
   "Antd",
   "Tailwindcss",
   "Formik",
   "Yup",
   "Axios",
  ],
  detail:
   "In this project, we developed a single website to showcase news articles featuring the Capsule Technology Platform. The project consists of one backend and one frontend component. I managed the frontend part of the project. The frontend includes an admin panel protected by an authorization system, allowing users to view published posts and edit, delete, or create new ones according to their preferences. Additionally, there is a section where published posts are displayed, and I implemented a responsive structure to showcase all news articles efficiently.",
  photos: [press2, press1, press3, press4, press5],
 },
 //  Kapsül Web
 {
  path: "kapsul-web",
  name: "Kapsul Technology Platform Website",
  duty: "Kapsul Technology Platform",
  techs: ["React.js", "Javascript", "Antd", "Tailwindcss", "Axios"],
  detail:
   "An interface used to display the news published in the press for the Capsule Technology Platform by adding news, editing the news and displaying the news that is on the air.",
  photos: [kapsulweb1],
 },
 //  Shift Export
 {
  path: "kapsul-overtime",
  name: "Kapsul Overtime Tracking System",
  duty: "Kapsul Technology Platform",
  techs: [
   "React.js",
   "Typescript",
   "Antd",
   "Tailwindcss",
   "Axios",
   "React-Table",
  ],
  detail:
   "This project is an admin page developed for tracking working hours. The admin page consists of three pages. The first one is the daily work schedule, where we display the entry, exit, and break times of individuals who have working hours during the day. The second page displays a monthly table of past work entries and exits, allowing individuals to select a month and review their work entries and exits for that month. The third page is similar to the second one, but it displays monthly break information.",
  photos: [shift1, shift2, shift3],
 },
 //  Login
 {
  path: "kapsul-login",
  name: "Kapsul Login",
  duty: "Kapsul Technology Platform",
  techs: ["React.js", "Typecript", "Antd", "Tailwindcss", "Axios"],
  detail:
   "An interface used to display the news published in the press for the Capsule Technology Platform by adding news, editing the news and displaying the news that is on the air.",
  photos: [login2, login1],
 },
 //  TP2AE
 {
  path: "tp2ae",
  name: "Trendyol to AliExpress",
  duty: "Freelance",
  techs: ["React.js", "Javascript", "Antd", "Tailwindcss", "Axios"],
  detail:
   "In this project, we addressed the challenge of transferring products from Trendyol to AliExpress, which was cumbersome for the person performing the transfer. We solved this problem with a product transfer automation system. In this project, users first log into Trendyol and select the products they want to transfer using our extension. Then, through the 'Transfer Products' button on the extension, they are directed to our automation system. In our automation application, product information is retrieved via the Trendyol API and directed to the second page. On this page, we can categorize the products in bulk and ask category-related questions. After all products are processed, on the next page, we adjust the pricing and change names before transferring the products to AliExpress. Capsule Technology Platform Website - A corporate and dynamic website describing the Capsule Technology Platform.",
  photos: [tp2ae3, tp2ae1, tp2ae2],
 },
 //  Linker
 {
  path: "voice-asistant",
  name: "Linker Company Voice Asistant",
  duty: "Linker Company",
  techs: [
   "React.js",
   "Typecript",
   "Antd",
   "Tailwindcss",
   "Axios",
   "React-Speech-Recognation",
   "Socket.io",
  ],
  detail:
   "This project is a result of the initial steps taken in a venture initiated with my circle of friends. I delved into speech-to-text and text-to-speech libraries to develop a voice assistant on the web. At the end of this project, there is a messaging interface available. Users can activate the assistant by placing the necessary keywords at the beginning of their sentences (for example: 'Hey Ema'), and all the questions they ask will be displayed on the screen. These questions are then directed to our backend where our AI processes them and sends back responses, which are then displayed in the response box for the user.",
  photos: [dark, light],
 },
 //  E-Commerce
 {
  path: "e-commerce",
  name: "Özteknik Rekor E-Commerce",
  duty: "Freelance",
  techs: ["Next.js", "Typescript", "Antd", "Tailwindcss", "GrapQL"],
  detail:
   "This project emerged as a result of a freelance job. Overall, the project meets most of the requirements of a typical e-commerce website.",
  photos: [commerce],
 },
];
