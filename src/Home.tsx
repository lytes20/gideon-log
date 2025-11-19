import { NavLink } from "react-router";

function Home() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
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
