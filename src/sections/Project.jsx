function Project() {
  const projects = [
    // {
    //   title: "what-is-shoujo",
    //   description: `What-is-Shoujo? is MERN stack web app that serves as a searchable database for Shoujo manga (demographic aimed at young women) with genre filters. It also acts as a personal reading tracker, letting users log progress, manage lists, and view detailed info.`,
    //   skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    // },
    {
      title: "AI Code Optimizer",
      description: `This FastAPI project integrates the GitHub API to fetch source code and utilizes DeepSeek’s reasoning capabilities to analyze performance bottlenecks. It provides developers with automated, actionable refactoring suggestions specifically aimed at reducing algorithmic time and space complexity.`,
      skills: ["Streamlit", "FastAPI", "DeepSeek", "Langchain"],
      link: "https://github.com/SumedhaSinghRathor/AI-CodeOptimizer",
    },
    {
      title: "random-react-projects",
      description: `A collection of diverse web projects brought to life with smooth, expressive animations using Framer Motion.`,
      skills: ["React.js", "Tailwind CSS", "Framer Motion"],
      link: "https://random-react-projects.vercel.app/",
    },
    // {
    //   title: "personal-music",
    //   description: `An animated music showcase that elegantly presents my favorite albums using smooth transitions and motion effects, powered by real-time data from the Spotify API. It blends visual flair with dynamic content to create an immersive listening-inspired experience.`,
    //   skills: ["React.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    // },
    {
      title: "personal-portfolio",
      description: `Contains the the code and necessary items used in the portfolio. This website is made using only React.js (using the GSAP library for animations).`,
      skills: ["React.js", "GSAP", "Tailwind CSS"],
      link: "https://sumedhasinghrathor.vercel.app/",
    },
    // {
    //   title: "notes-ki-dukaan",
    //   description: `A new note sharing app called "Notes Ki Dukaan" where students can upload their own notes as well as view, rate and download notes from other faculties. Our powerful sorting and searching features will help students in organizing their notes and being prepared for their exams and sessionals.`,
    //   skills: ["MongoDB", "Spring Boot", "React.js", "Tailwind CSS"],
    // },
    // {
    //   title: "Stock Predictor",
    //   description:
    //     "A full-stack web application that fetches historical stock data, stores it in a database, and uses an LSTM (Long Short-Term Memory) deep learning model to predict future stock prices. Built with Flask for the backend, React for the frontend, and TensorFlow/Keras for the prediction logic.",
    //   skills: ["Flask", "React.js", "LSTM", "Tailwind CSS", "PostgreSQL"],
    // },
    {
      title: "Tetris Game",
      description:
        "Tetris Game Clone created with p5.js, players complete lines by moving differently shaped pieces, which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the uncleared lines reach the top of the playing field.",
      skills: ["HTML/CSS", "JavaScript", "p5.js"],
      link: "https://sumedhasinghrathor.github.io/TetrisGame/",
    },
    {
      title: "Weather App",
      description:
        "This weather app, built with the OpenWeatherMap API and React.js, features allows users to easily access current conditions, humidity, and temperature for any location.",
      skills: ["React.js", "Tailwind CSS"],
      link: "https://sumedhasinghrathor-weatherdashboard.vercel.app/",
    },
    {
      title: "Sliding Puzzle",
      description:
        "Created with Java, a sliding puzzle is a combination puzzle that challenges a player to slide pieces along certain routes to establish a certain end-configuration. The pieces to be moved consist of numbers from 1 to 15.",
      skills: ["Java", "Swing Framework"],
      link: "",
    },
  ];

  return (
    <div className="ide p-12">
      <div className="w-2xl mx-auto flex flex-col gap-5">
        <div className="w-2xl flex items-center gap-4">
          <div className="flex justify-center items-center w-fit border border-blue hover:bg-blue/10 p-2 rounded-lg">
            <i className="bx bx-folder-open text-2xl text-blue" />
          </div>
          <div className="border border-black/70 bg-white/10 px-3 py-1 rounded-full">
            {projects.length} project{projects.length !== 1 && "s"}
          </div>
        </div>
        <div className="text-3xl font-bold">All Projects</div>
        <p className="text-white/70">
          A curated collection of projects I've built. Each represents a unique
          challenge and learning experience.
        </p>
        <div
          className="pl-4"
          style={{
            borderLeft: "1px solid",
            borderImage:
              "linear-gradient(to bottom, transparent, #007acc, #007acc, #007acc, transparent) 1",
          }}
        >
          {projects.map((p, i) => (
            <div key={i}>
              <div className="flex gap-4">
                <div className="text-white/40 border text-sm w-fit h-fit p-2 border-black/50 rounded-full flex items-center justify-center">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className="flex flex-col">
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-xl my-1.5 hover:underline"
                  >
                    {p.title}
                  </a>
                  <p className="text-sm text-white/60">{p.description}</p>
                  <div className="text-sm flex gap-2 mt-2">
                    {p.skills.sort((a, b) => a.localeCompare(b)).join(" • ")}
                  </div>
                </div>
              </div>
              <hr className="opacity-20 my-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
