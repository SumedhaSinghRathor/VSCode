import { useRef, useState } from "react";

function Terminal({ terminal, setTerminal }) {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleCommand = (cmd) => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output = "";

    switch (command) {
      case "help":
        output = `Available commands:
  help      - Show this help message
  about     - About me
  skills    - My technical skills
  projects  - View my projects
  contact   - Contact Information
  date      - Show current date
  echo      - Echo text (usage: echo <text>)
  clear     - Clear terminal`;
        break;

      case "about":
        output = `Hi! I'm Sumedha Singh Rathor!
A passionate full-stack developer who loves building beautiful,
functional web applications. This portfolio is styled like VS Code 
because I spend the most of time here anyway.`;
        break;

      case "skills":
        output = `Technical Skills:
  Languages: C, HTML/CSS, JavaScript, TypeScript, Java, Python, SQL
  Frontend: React, Next.js, Angular, Tailwind CSS, Bootstrap
  Backend: Express.js, Node.js, Spring Boot, Flask, FastAPI, MongoDB, PostgreSQL
  DevOps: Docker, Kubernetes, Git, GitHub, Jenkins
  Tools: Figma, Power BI, Tableau`;
        break;

      case "projects":
        output = `- what-is-shoujo
- personal-portfolio
- Stock Predictor
- Tetris Game
Navigate to the projects section to find more`;
        break;

      case "contact":
        output: `Contact Information:
- Email: sumedharathor@gmail.com
- Website: sumedhasinghrathor.vercel.app
- Github: github.com/SumedhaSinghRathor
Navigate to the contacts section to find more`;
        break;

      case "date":
        output = new Date().toString();
        break;

      case "echo":
        output = args.join(" ") || "";
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        output = (
          <p className="text-red-500">
            Command not found: ${command}. Type "help" for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className={`ide text-sm absolute w-full h-48 bottom-0 border border-dark-grey bg-grey z-10 ${!terminal && "hidden"}`}
    >
      <div className="h-0.5 cursor-row-resize bg-white/20 hover:bg-white/40" />
      <div className="p-1 flex justify-between border-b border-dark-grey">
        <span className="flex items-center gap-2 grow">
          <i className="bx bx-terminal text-xl" /> Terminal
        </span>
        <i
          className="bx bx-x text-xl"
          onClick={() => {
            setTerminal(false);
            setHistory([]);
          }}
        />
      </div>
      <div
        className="text-[13px] p-1.5 overflow-y-auto h-[calc(100% - 32px)] h-full"
        onClick={handleClick}
      >
        <p>Welcome to the interactive terminal!</p>
        <p>Type "help" for available commands.</p>
        {history.map((item, i) => (
          <div key={i} className="mb-2 w-full">
            <div className="text-blue">$ {item.command}</div>
            <div className="text-white/80 whitespace-pre">{item.output}</div>
          </div>
        ))}
        <div className="flex">
          <span className="text-blue pr-2">$</span>{" "}
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            className="outline-none caret-blue w-full mb-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
