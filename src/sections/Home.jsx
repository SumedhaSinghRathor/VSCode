import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="ide p-12">
      <div className="w-2xl mx-auto flex flex-col gap-5 items-center">
        <i className="bx text-xl bx-code-alt text-blue" />
        <h3 className="uppercase">Hello, I'm</h3>
        <h1 className="text-4xl font-bold">Sumedha Singh Rathor</h1>
        <h2 className="text-blue font-bold">Full Stack Developer</h2>
        <hr className="w-3xs h-1 bg-linear-to-r from-transparent via-blue to-transparent border-none" />
        <p className="text-center text-white/70">
          I craft clean, performant web applications with modern technologies.
          Specialized in Spring Boot, React, Node.js, and building products that
          users love.
        </p>
        <div className="flex gap-4">
          <Link
            to="/projects"
            className="py-2 px-4 shadow-2xl shadow-blue bg-blue rounded-lg hover:-translate-y-0.5 transition-transform"
          >
            View Projects
          </Link>
          <Link
            to="/about"
            className="py-2 px-4 border border-white/20 rounded-lg hover:-translate-y-0.5 transition-transform"
          >
            Learn More
          </Link>
        </div>
        <hr className="w-3xs my-4 border-white/20" />
        <div className="flex w-3xs items-center justify-between text-white/60">
          <a
            href="https://github.com/SumedhaSinghRathor"
            target="_blank"
            className="flex justify-between items-center gap-2 rounded px-2 py-1 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <i className="bx text-xl bxl-github" /> Github
          </a>
          <p className="flex justify-between items-center">/</p>
          <Link
            to="/contact"
            className="flex justify-between items-center gap-2 rounded px-2 py-1 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <i className="bx text-xl bx-envelope" /> Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
