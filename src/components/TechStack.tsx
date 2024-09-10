export default function TechStack() {
  return (
    <div id="stack" className="text-white roboto-flex-italic-800">
      <div className="text-[38px] mb-2">
        Tech Stack
      </div>
      <div className="font-robotoFlex font-light text-[18px] sm:text-[20px] md:text-[22px]">
        <div className="mb-4">
          <h2 className="underline">Programming Languages:</h2>
          <p>
            JavaScript, TypeScript, Python, C/C++, Java, C#, MATLAB, SQL,
            HTML/CSS
          </p>
        </div>
        <div className="mb-4">
          <h2 className="underline">Frameworks & Libraries:</h2>
          <p>React, Electron, Spring Boot, Bootstrap, Jest, Cypress</p>
        </div>
        <div className="mb-4">
          <h2 className="underline">Tools & Platforms:</h2>
          <p>Node.js, Git/GitHub, Docker, REST API, Express</p>
        </div>
        <div className="mb-4">
          <h2 className="underline">Databases:</h2>
          <p>NoSQL (MongoDB, Firebase), PostgreSQL, SQLite</p>
        </div>
      </div>
    </div>
  );
}
