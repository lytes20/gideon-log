import Header from "../components/Header";

function Contact() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex flex-col justify-center items-start max-w-2xl w-full">
          <div className="mb-8 prose dark:prose-dark leading-6">
            <h2>Links</h2>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:gideonbamuleseyo@gmail.com">
                  gideonbamuleseyo@gmail.com
                </a>
              </li>
              <li>
                GitHub: <a href="https://github.com/lytes20">@lytes20</a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/gideon-bamuleseyo-07b574119/">
                  Gideon Bamuleseyo
                </a>
              </li>
              <li>
                Website: <a href="https://gideonb.dev/">gideonb.dev</a>
              </li>
              <li>
                Stackoverflow:{" "}
                <a href="https://stackoverflow.com/users/6653241/gideon-bamuleseyo/">
                  Gideon Bamuleseyo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
