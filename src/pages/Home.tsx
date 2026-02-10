import Header from "../components/Header";
import "../styles/home.css";
import Typewriter from "../components/Typewriter";
import WindowButton from "../components/WindowButton";

const MY_ADJECTIVES = ["software engineer", "builder", "problem solver"];

function Home() {
  return (
    <div>
      <Header parent="home" />
      <div className="main border border-gray-500 rounded-md">
        <div className="border-b border-gray-500">
          <div className="flex gap-1 p-1">
            {["", "", ""].map((btn, index) => (
              <WindowButton key={index} />
            ))}
          </div>
        </div>
        <div className="p-2">
          <div>
            <h1>Hi, my name is Gideon Bamuleseyo</h1>
            <div className="typewriter-container">
              <h2>I am a</h2>

              <Typewriter words={MY_ADJECTIVES} />
              <h2 className="caret">_</h2>
            </div>
          </div>
          <div>Javascript | Typescript | Java | Python</div>
        </div>
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
