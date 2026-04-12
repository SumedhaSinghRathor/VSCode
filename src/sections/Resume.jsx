import ResumePDF from "../assets/Sumedha_Singh_Rathor_RESUME.pdf";

function Resume() {
  return (
    <object
      data={ResumePDF}
      type="application/pdf"
      width="100%"
      height="100%"
      className="ide"
    >
      {ResumePDF}
    </object>
  );
}

export default Resume;
