import { Routes, Route, Link, NavLink } from "react-router-dom";
import VsCode from "/Visual_Studio_Code_1.35_icon.png";
import React from "./assets/react.svg";
import Html from "./assets/html.png";
import Css from "./assets/css.png";
import Js from "./assets/js.png";
import Json from "./assets/json.svg";
import MD from "./assets/Markdown.png";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Project from "./sections/Project";
import Articles from "./sections/Articles";
import Github from "./sections/Github";
import Terminal from "./components/Terminal";
import { useState } from "react";

function App() {
  const files = [
    { file: React, link: "/", fileName: "home.jsx" },
    { file: Html, link: "/about", fileName: "about.html" },
    { file: Css, link: "/contact", fileName: "contact.css" },
    { file: Js, link: "/projects", fileName: "project.js" },
    { file: Json, link: "/articles", fileName: "articles.json" },
    { file: MD, link: "/github", fileName: "github.md" },
  ];

  const [terminal, setTerminal] = useState(false);

  return (
    <section className="w-screen h-screen flex flex-col overflow-hidden justify-between">
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
          <div className="size-3 bg-green-400 rounded-full" />
          <div className="size-3 bg-yellow-400 rounded-full" />
          <div className="size-3 bg-red-400 rounded-full" />
        </div>
      </section>
      <section className="flex flex-1 min-h-0">
        <section className="bg-[#333333] text-white w-fit flex flex-col">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              borderLeft: isActive ? "1px solid white" : "",
            })}
            className="p-2"
          >
            <i className="bx bx-folder text-4xl" />
          </NavLink>
          <NavLink
            to="/github"
            style={({ isActive }) => ({
              borderLeft: isActive ? "1px solid white" : "",
            })}
            className="p-2"
          >
            <i className="bx bxl-github text-4xl" />
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              borderLeft: isActive ? "1px solid white" : "",
            })}
            className="p-2"
          >
            <i className="bx bx-code-alt text-4xl" />
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              borderLeft: isActive ? "1px solid white" : "",
            })}
            className="p-2"
          >
            <i className="bx bx-envelope text-4xl" />
          </NavLink>
          <NavLink
            to="/articles"
            style={({ isActive }) => ({
              borderLeft: isActive ? "1px solid white" : "",
            })}
            className="p-2"
          >
            <i className="bx bx-pencil text-4xl" />
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              borderLeft: isActive ? "1px solid white" : "",
            })}
            className="p-2"
          >
            <i className="bx bx-user-circle text-4xl" />
          </NavLink>
        </section>
        <section className="bg-grey text-white w-fit">
          <div className="uppercase font-light px-4 py-2 text-sm">EXPLORER</div>
          <div className="flex items-center w-48">
            <i className="bx bx-chevron-right" />{" "}
            <span className="uppercase">Portfolio</span>
          </div>
          <div className="text-[15px]">
            {files.map((f, i) => (
              <Link
                to={f.link}
                key={i}
                className="flex items-center px-2 gap-2 hover:bg-white/10 cursor-pointer"
              >
                <div className="size-4 flex items-center">
                  <img src={f.file} alt={f.fileName} className="object-cover" />
                </div>
                <span>{f.fileName}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="bg-dark-grey text-white w-full flex flex-col flex-1 min-h-0">
          <nav className="bg-grey flex">
            {files.map((f, i) => (
              <NavLink
                to={f.link}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#1e1e1e" : "#2d2d2d",
                  borderTop: isActive ? "1px solid #1f8ad2" : "",
                })}
                key={i}
                className="flex items-center py-2 px-4 gap-2 w-fit cursor-pointer"
              >
                <div className="size-5 flex items-center justify-between">
                  <img src={f.file} alt="" />
                </div>
                <span>{f.fileName}</span>
              </NavLink>
            ))}
          </nav>
          <main
            className="bg-dark-grey flex-1 min-h-0 relative flex flex-col"
            style={{ scrollbarColor: "#3c3c3c #1e1e1e" }}
          >
            <div className="flex-1 min-h-0 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/github" element={<Github />} />
              </Routes>
            </div>
            <Terminal terminal={terminal} setTerminal={setTerminal} />
          </main>
        </section>
      </section>
      <footer className="bg-blue text-white w-full text-sm px-2 flex items-center justify-between z-10">
        <div className="flex gap-2">
          <a
            href="https://github.com/SumedhaSinghRathor/VSCode"
            target="_blank"
            className="flex items-center hover:bg-light-blue w-fit h-full px-1.5 py-0.5 gap-1"
          >
            <i className="bx bx-git-branch" /> main
          </a>
          <div className="flex items-center gap-0.5 hover:bg-light-blue px-1.5 py-0.5">
            <i className="bx bx-x-circle" /> 0<i className="bx bx-error" /> 0
          </div>
        </div>
        <div className="flex gap-1">
          <div
            onClick={() => setTerminal(!terminal)}
            className={`hover:bg-light-blue px-1.5 py-0.5 flex items-center justify-center text-base ${terminal && "bg-light-blue"}`}
          >
            <i className="bx bx-terminal" />
          </div>
          <div className="hover:bg-light-blue px-1.5 py-0.5 flex items-center gap-1">
            <i className="bx bxl-react" /> Powered with React
          </div>
        </div>
      </footer>
    </section>
  );
}

export default App;
