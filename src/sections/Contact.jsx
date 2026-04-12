function Contact() {
  const contacts = [
    {
      linkTo: "website",
      link: "https://sumedhasinghrathor.vercel.app/",
      content: "sumedhasinghrathor.vercel.app",
    },
    {
      linkTo: "email",
      link: "mailto:sumedharathor@gmail.com",
      content: "sumedharathor@gmail.com",
    },
    {
      linkTo: "linkedin",
      link: "https://www.linkedin.com/in/sumedha-singh-rathor-93874726a/",
      content: "Sumedha Singh Rathor",
    },
    {
      linkTo: "behance",
      link: "https://www.behance.net/sumedhasinghrathor",
      content: "SumedhaSinghRathor",
    },
    {
      linkTo: "hackerrank",
      link: "https://www.hackerrank.com/profile/sumedharathor",
      content: "Sumedha Rathor",
    },
    {
      linkTo: "github",
      link: "https://github.com/SumedhaSinghRathor",
      content: "SumedhaSinghRathor",
    },
    {
      linkTo: "leetcode",
      link: "https://leetcode.com/u/sumedharathor/",
      content: "SumedhaRathor",
    },
  ];

  return (
    <div className="ide flex flex-col gap-8 items-center p-12">
      <h1 className="text-blue font-bold text-3xl">Contact Me</h1>
      <p className="text-center w-xl">
        Feel free to reach out to me through any of the social platforms below.
        I'm always open to new opportunities and connections.
      </p>
      <div className="bg-grey w-lg border border-blue/30 border-t-4 border-t-blue rounded p-4">
        <p className="before:content-['1'] before:pr-8 before:text-sm before:text-white/40">
          <span className="text-blue">.socials</span> &#123;
        </p>
        {contacts.map((c, index) => (
          <p
            key={c.linkTo}
            data-index={index + 2}
            className="before:content-[attr(data-index)] before:pr-16 before:text-sm before:text-white/40"
          >
            <span>{c.linkTo}:</span>{" "}
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              {c.content}
            </a>
          </p>
        ))}
        <p
          data-index={contacts.length + 2}
          className="before:content-[attr(data-index)] before:pr-8 before:text-sm before:text-white/40"
        >
          &#125;
        </p>
      </div>
    </div>
  );
}

export default Contact;
