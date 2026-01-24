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
            "Created automated test suites in Python and pytest with over 150 assertions to ensure reliable application behavior.",
            "Built reusable Selenium modules to streamline UI testing and accelerate team development workflows.",
            "Fixed critical C++ security vulnerabilities, improving system stability and safety.",
            "Maintained and improved CI/CD pipelines in Atlassian Bamboo, ensuring nightly automation reliability.",
            "Contributed to an MCP server project during a company hackathon, which was greenlit for further product development.",
          ]}
        />

        <ExperienceItem
          role="Backend Developer"
          org="SFU Satellite Design / UBC Orbit (ALEASAT)"
          location="Vancouver, BC"
          date="Jan 2025 – Present"
          bullets={[
            "Developed ground station infrastructure to reliably command and receive telemetry and images from a CubeSat mission.",
            "Built a REST API with TypeScript, Express.js, Prisma ORM, and OpenAPI to serve Earth image requests, including automated tests using Mocha and Chai.",
            "Ran simulations for over 4,000 satellite missions using ESA's DRAMA program and pyDRAMA, helping determine optimal launch windows and orbit parameters.",
          ]}
        />
      </div>
    </section>
  );
}
