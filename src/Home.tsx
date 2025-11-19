import Header from "./components/Header";
import "./styles/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <div>
          <h1>Hi, my name is Gideon Bamuleseyo</h1>
          <h2>I am a builder/software engineer</h2>
        </div>
        <div>Javascript | Typescript | Java | Python</div>
      </div>
    </div>
  );
}

export default Home;
