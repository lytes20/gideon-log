import Header from "../components/Header";
// import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

function Experience() {
  return (
    <div>
      <Header parent="experience" />
      <div className="container">
        {/* <Skills /> */}
        <Timeline />
      </div>
    </div>
  );
}

export default Experience;
