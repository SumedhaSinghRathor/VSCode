import { Link } from "react-router-dom";

function About() {
  const experience = [
    {
      designation: "Graphic Designer Intern",
      company: "Pehchaan the Street School",
      description: [
        "Designed and produced over 84 Instagram stories and posts, maintaining consistency with the company's established brand identity, tone, and visual style.",
        "Collaborated closely with the team by receiving weekly goals, delivering the output that aligned with brand objectives within the designated timeframe.",
        "Tools Used: Figma, Photoshop, Canva",
      ],
    },
    {
      designation: "Summer Trainee",
      company: "GAIL (India) Limited",
      description: [
        "Delved into SAP ABAP and gained valuable insights into applications at GAIL",
        "Learned about the company's upcoming transition from ABAP to S/4 HANA",
        "Created a 35+ page report on the migration analysis of the above topic",
      ],
    },
    {
      designation: "Lead Coordinator of UI/UX Domain",
      company: "E LABS",
      description: [
        "Created 10+ posts using Figma or Photoshop for their Instagram page",
        "Designed and protoyped the official website in Figma within 2 weeks",
        "Taught as an instructor in 'DEZ-I-NIN' 2.0' workshop (which garnered 400+ registrations), teaching over 130+ students about UI/UX principles and responsive web design over the course of 3 weekends",
        "Mentored over 20+ juniors under the UI/UX domain",
      ],
    },
    {
      designation: "Trainee Analyst",
      company: "Wissen Technology",
      description: [
        `As an intern you will be working on some of the any of our company projects.`,
        `You shall also be expected to perform duties which are customarily associated with such positions.`,
        `The assignment details will be shared with you once you join.`,
      ],
    },
  ];

  const skills = [
    {
      content: "Languages",
      list: [
        "C",
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "Java",
        "Python",
        "SQL",
      ],
    },
    {
      content: "Frontend",
      list: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"],
    },
    {
      content: "Backend",
      list: [
        "Express.js",
        "Node.js",
        "Spring Boot",
        "Flask",
        "FastAPI",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      content: "DevOps",
      list: ["Docker", "Kubernetes", "Git", "GitHub", "Jenkins"],
    },
    {
      content: "Tools",
      list: ["Figma", "Power BI", "Tableau"],
    },
  ];

  return (
    <section className="ide p-12">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl">Sumedha Singh Rathor</h1>
          <div className="flex gap-2">
            <a
              href="https://github.com/SumedhaSinghRathor"
              className="flex p-2 group border border-black/60 bg-white/10 rounded-lg hover:bg-blue/40 hover:border-blue/40 transition-all hover:-translate-y-0.5"
            >
              <i className="bx bxl-github text-3xl text-white/70 group-hover:text-blue" />
            </a>
            <Link
              to="/contact"
              className="flex p-2 group border border-black/60 bg-white/10 rounded-lg hover:bg-blue/40 hover:border-blue/40 transition-all hover:-translate-y-0.5"
            >
              <i className="bx bx-envelope text-3xl text-white/70 group-hover:text-blue" />
            </Link>
          </div>
        </div>
        <p className="text-white/80">Trainee Analyst at Wissen Technology</p>
        <div className="flex items-center gap-2">
          <div className="size-3 bg-blue rounded-full" />
          <p className="text-sm leading-8 text-white/60">Bengaluru, India</p>
        </div>
        <hr className="text-black/40 my-8" />
        <div className="flex before:content-['01'] before:text-blue/60 before:text-xl items-start gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">About</h2>
            <p className="text-sm text-white/70">
              I am an enthusiastic and adaptable tech enthusiast with expertise
              in full-stack development, UI/UX design, data analysis, and
              machine learning. I enjoy creating complete digital solutions,
              from designing intuitive and engaging user interfaces to
              engineering robust backend systems.
            </p>
            <p className="text-sm text-white/70">
              My background in data analysis and machine learning helps me to
              develop intelligent applications that not only perform properly
              but also deliver useful insights. I thrive at the convergence of
              design, development, and data, and I am constantly motivated to
              learn and take on new challenges that combine creative with
              technology.
            </p>
          </div>
        </div>
        <div className="flex before:content-['02'] before:text-blue/60 before:text-xl items-start gap-4 my-8">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text-xl">Experience</h2>
            {experience.toReversed().map((p, idx) => (
              <div
                key={p.company}
                className="border border-black/70 rounded-xl w-full p-6 hover:border-blue/60 transition-colors"
              >
                {idx == 0 && (
                  <div className="text-sm text-blue bg-blue/20 w-fit px-2 py-1 rounded mb-2">
                    Current
                  </div>
                )}
                <h2 className="text-xl">{p.designation}</h2>
                <h3 className="text-sm text-white/60 leading-6">{p.company}</h3>
                <ul className="text-sm text-white/60 list-disc list-outside pl-4 pt-4 leading-6 flex flex-col gap-2">
                  {p.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex before:content-['03'] before:text-blue/60 before:text-xl items-start gap-4 my-8">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text-xl">Skills</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {skills.map((s) => (
                <div
                  key={s.content}
                  className="border border-black/40 rounded-xl w-full p-4 hover:bg-white/5 transition-colors duration-200"
                >
                  <p className="uppercase text-white/50 mb-2">{s.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.list.map((l) => (
                      <div className="border border-white/30 hover:bg-blue/30 hover:border-blue hover:text-blue text-white/80 bg-white/5 px-3 py-1 w-fit rounded-lg transition-colors duration-150">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex before:content-['04'] before:text-blue/60 before:text-xl items-start gap-4 my-8">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text-xl">Beyond Code</h2>
            <p className="text-sm text-white/70">
              Aside from programming and writing, I enjoy reading novels and
              manga, listening to music, or just enjoying watching TV and
              movies. I also like to swim and play tennis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
