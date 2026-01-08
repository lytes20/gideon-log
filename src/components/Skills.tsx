function Skills() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl w-full">
      <div className="mb-8 prose dark:prose-dark leading-6">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Skills
        </h3>
        <h4>Languages</h4>
        <ul>
          <li>Javascript, Typescript, Java, Python, HTML/CSS </li>
        </ul>
        <h4>Frameworks, Libraries</h4>
        <ul>
          <li>React, Next, Angular, Node, Express, Spring Boot</li>
        </ul>
        <h4>Databases</h4>
        <ul>
          <li>Mongo, Postgresql, Firebase Firestore, Redis </li>
        </ul>

        <h4>Platforms and services</h4>
        <ul>
          <li>
            GitHub, AWS, Heroku, Firebase, Sentry, Bitbucket, Jira, Trello,
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
