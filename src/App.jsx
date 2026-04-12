// function App() {
//   const contacts = [
//     {
//       linkTo: "website",
//       link: "https://sumedhasinghrathor.vercel.app/",
//       content: "sumedhasinghrathor.vercel.app",
//     },
//     {
//       linkTo: "email",
//       link: "mailto:sumedharathor@gmail.com",
//       content: "sumedharathor@gmail.com",
//     },
//     {
//       linkTo: "linkedin",
//       link: "https://www.linkedin.com/in/sumedha-singh-rathor-93874726a/",
//       content: "Sumedha Singh Rathor",
//     },
//     {
//       linkTo: "behance",
//       link: "https://www.behance.net/sumedhasinghrathor",
//       content: "SumedhaSinghRathor",
//     },
//     {
//       linkTo: "hackerrank",
//       link: "https://www.hackerrank.com/profile/sumedharathor",
//       content: "Sumedha Rathor",
//     },
//     {
//       linkTo: "github",
//       link: "https://github.com/SumedhaSinghRathor",
//       content: "SumedhaSinghRathor",
//     },
//     {
//       linkTo: "leetcode",
//       link: "https://leetcode.com/u/sumedharathor/",
//       content: "SumedhaRathor",
//     },
//   ];

//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-black gap-8">
//       <h1 className="text-[#f9826c] font-bold text-4xl">Contact Me</h1>
//       <p className="text-[#ffffffb3] w-xl text-center leading-7">
//         Feel free to reach out to me through any of the social platforms below.
//         I'm always open to new opportunities and connections.
//       </p>
//       <div className="text-2xl p-6 border border-white/30 border-t-4 border-t-[#f9826c] rounded bg-[#1f2428] text-white">
//         <span className="text-[#f9826c]">.contacts</span> &#123;
//         {contacts.map((c, i) => (
//           <p className="pl-9 font-bold">
//             {c.linkTo}:{" "}
//             <a
//               href={c.link}
//               target="_blank"
//               className="hover:underline font-normal text-[#f9826c]"
//             >
//               {c.content}
//             </a>
//             <span className="font-normal">;</span>
//           </p>
//         ))}
//         &#125;
//       </div>
//     </section>
//   );
// }

// export default App;

import VsCode from "/Visual_Studio_Code_1.35_icon.png";
import React from "./assets/react.svg";
import Html from "./assets/html.png";
import Css from "./assets/css.png";
import Js from "./assets/js.png";
import Json from "./assets/json.svg";
import MD from "./assets/Markdown.png";
import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";

function App() {
  const files = [
    { file: React, fileName: "home.jsx" },
    { file: Html, fileName: "about.html" },
    { file: Css, fileName: "contact.css" },
    { file: Js, fileName: "project.js" },
    { file: Json, fileName: "articles.json" },
    { file: MD, fileName: "github.md" },
  ];

  return (
    <section className="w-screen h-screen flex flex-col justify-between">
      <section className="flex justify-between items-center px-2 py-1 bg-[#3c3c3c] text-white text-sm">
        <div className="flex items-center">
          <img src={VsCode} alt="VsCode img" className="size-4" />
          <ul className="flex pl-2 gap-2">
            {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map(
              (f) => (
                <li className="hover:bg-slate-100/30 px-1 rounded cursor-pointer">
                  {f}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="">Sumedha Singh Rathor - Visual Studio Code</div>
        <div className="flex gap-2">
          <div className="size-3 bg-green-400 rounded-full"></div>
          <div className="size-3 bg-yellow-400 rounded-full"></div>
          <div className="size-3 bg-red-400 rounded-full"></div>
        </div>
      </section>
      <section className="flex grow">
        <section className="bg-[#333333] text-white w-fit">
          <div className="border-l-2 border-l-white p-2">
            <i class="bx bx-folder text-4xl"></i>
          </div>
          <div className="p-2">
            <i class="bx bxl-github text-4xl"></i>
          </div>
          <div className="p-2">
            <i class="bx bx-code-alt text-4xl"></i>
          </div>
          <div className="p-2">
            <i class="bx bx-envelope text-4xl"></i>
          </div>
          <div className="p-2">
            <i class="bx bx-pencil text-4xl"></i>
          </div>
        </section>
        <section className="bg-[#252526] text-white w-fit">
          <div className="uppercase font-light px-4 py-2 text-sm">EXPLORER</div>
          <div className="flex items-center w-48">
            <i class="bx bx-chevron-right"></i>{" "}
            <span className="uppercase">Portfolio</span>
          </div>
          <div className="text-[15px]">
            {files.map((f, i) => (
              <div
                key={i}
                className="flex items-center px-2 gap-2 hover:bg-white/10 cursor-pointer"
              >
                <div className="size-4 flex items-center">
                  <img src={f.file} alt={f.fileName} className="object-cover" />
                </div>
                <span>{f.fileName}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#1e1e1e] text-white w-full flex flex-col">
          <nav className="bg-[#252526] flex">
            {files.map((f, i) => (
              <div
                key={i}
                className="flex items-center py-2 px-4 gap-2 w-fit bg-[#2d2d2d] cursor-pointer"
              >
                <div className="size-5 flex items-center justify-between">
                  <img src={f.file} alt="" />
                </div>
                <span>{f.fileName}</span>
              </div>
            ))}
          </nav>
          <section className="bg-[#1e1e1e] grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </section>
        </section>
      </section>
      <footer className="bg-[#007acc] text-white w-full text-sm px-2 flex items-center">
        <div className="flex gap-2">
          <a
            href="https://github.com/SumedhaSinghRathor"
            className="flex items-center hover:bg-[#1f8ad2] w-fit h-full px-1.5 py-0.5 gap-1"
          >
            <i className="bx bx-git-branch"></i> main
          </a>
          <div className="flex items-center gap-0.5 hover:bg-[#1f8ad2] px-1.5 py-0.5">
            <i className="bx bx-x-circle"></i> 0<i className="bx bx-error"></i>{" "}
            0
          </div>
          <div className="hover:bg-[#1f8ad2] px-1.5 py-0.5 flex items-center justify-center text-base">
            <i class="bx bx-terminal"></i>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;
