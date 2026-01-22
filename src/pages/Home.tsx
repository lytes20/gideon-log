import Header from "../components/Header";
import "../styles/home.css";
import Typewriter from "../components/Typewriter";

const myAdjectives = ["software engineer", "builder", "problem solver"];
function Home() {
  return (
    <div>
      <Header parent="home" />
      <div className="main">
        <div>
          <h1>Hi, my name is Gideon Bamuleseyo</h1>
          <div className="typewriter-container">
            <h2>I am a</h2>

            <Typewriter words={myAdjectives} />
            <h2 className="caret">_</h2>
          </div>
        </div>
        <div>Javascript | Typescript | Java | Python</div>
      </div>
      <div className="mx-auto w-[80%] text-center mt-16">
        <h1 className="text-lg">
          I am building my own operating system{" "}
          <a
            className="underline cursor-ne-resize"
            href="https://os.gideonb.dev/"
            target="_blank"
          >
            here
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
