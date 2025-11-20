import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/Home.css";
import Typewriter from "./components/Typewriter";

const myAdjectives = ["software engineer", "builder", "problem solver"];
function Home() {
  // const [typedText, setTypedText] = useState("");
  // useEffect(() => {
  //   const text = "software engineer";
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     const nextChar = text.charAt(i);
  //     setTypedText((prev) => prev + nextChar);
  //     i++;
  //     if (i >= text.length) {
  //       clearInterval(interval);
  //     }
  //   }, 50);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <Header />
      <div className="main">
        <div>
          <h1>Hi, my name is Gideon Bamuleseyo</h1>
          <div className="typewriter-container">
            <h2>I am a</h2>
            {/* <h2 id="typewriter" className="">
              {typedText}
            </h2> */}
            <Typewriter words={myAdjectives} />
            <h2 className="caret">_</h2>
          </div>
        </div>
        <div>Javascript | Typescript | Java | Python</div>
      </div>
    </div>
  );
}

export default Home;
