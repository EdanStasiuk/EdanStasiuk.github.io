import Header from "./Header";

type ExperienceItemProps = {
  role: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
};

function ExperienceItem({
  role,
  org,
  location,
  date,
  bullets,
}: ExperienceItemProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-semibold text-[18px] sm:text-[20px]">
          {role} · <span className="opacity-80">{org}</span>
        </h3>
        <span className="text-sm opacity-60 mt-1 sm:mt-0">
          {date} · {location}
        </span>
      </div>

      <ul className="mt-3 ml-4 list-disc space-y-2 font-light">
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="text-white roboto-flex-800 scroll-mt-24"
    >
      <Header title="Experience" />

      <div className="font-roboto text-[16px] sm:text-[18px] md:text-[20px]">
        <ExperienceItem
          role="Automation Engineer (Co-op)"
          org="Motorola Solutions"
          location="Vancouver, BC"
          date="May 2025 – Dec 2025"
          bullets={[
            "Built ~7 end-to-end test suites with 150+ assertions using Python and pytest to validate application behavior",
            "Designed reusable, object-oriented Selenium modules to standardize UI testing and accelerate team workflows",
            "Resolved ~8 critical C++ security vulnerabilities, improving backend stability and security posture",
            "Maintained CI/CD pipelines in Atlassian Bamboo, restoring nightly automation reliability across 70+ test cases",
            "Collaborated on an MCP server during a company-wide hackathon that was greenlit for product development",
            // "Performed end-to-end, functional, and regression testing during validation for new releases, reporting, and fixing critical bugs",
          ]}
        />

        <ExperienceItem
          role="Backend Developer"
          org="SFU Satellite Design / UBC Orbit (ALEASAT)"
          location="Vancouver, BC"
          date="Jan 2025 – Present"
          bullets={[
            "Developed and maintained ground station infrastructure enabling command, telemetry, and image downlink for a CubeSat mission",
            "Implemented a REST API using TypeScript, Express.js, Prisma ORM, and OpenAPI to serve Earth image requests, with \
            automated test coverage through Mocha and Chai",
            "Simulated over 4,000 missions using the European Space Agency's (ESA) Debris Risk Assessment and Mitigation Analysis (DRAMA) program and it's associated Python package, pyDRAMA, to determine viable launch epochs and maximum orbit altitudes meeting mission duration requirements",
          ]}
        />
      </div>
    </section>
  );
}
