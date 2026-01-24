import Header from './Header';
import Project from './Project';

export default function Projects() {
  return (
    <div id="projects" className="text-white roboto-flex-800">
      <Header title={"Projects"}/> 
      <Project
        projectName="SnowQuery"
        projectDescription={`An AI-powered assistant that converts natural language into optimized Snowflake SQL queries using MCP and agentic reasoning.

        SnowQuery integrates schema-aware context through MCP to generate accurate, executable SQL, execute queries against Snowflake, and visualize results directly in a web interface. The project supports both CLI and Streamlit-based workflows, enabling interactive querying, charting, and resilient data exploration.`}
        projectImageUrl="/snowquery.png"
        githubUrl="https://github.com/EdanStasiuk/SnowQuery"
      />
      <Project
        projectName="LiteCode"
        projectDescription={`A LeetCode-style backend system focused on scalable API design and asynchronous submission processing.

        LiteCode exposes 24 RESTful API endpoints built with Go (Gin), using GORM for data access and Postman for API testing. The system supports user authentication, problem management, tagging, and code submissions. Submissions are processed asynchronously via a RabbitMQ-backed queue with worker services running in Docker. A hybrid data architecture combines PostgreSQL (Neon) for relational data, Cassandra for high-throughput submission records, and Redis for caching and session management.`}
        githubUrl="https://github.com/EdanStasiuk/LiteCode"
      />
      <Project
        projectName="AI Jet Simulation"
        projectDescription={`An AI-piloted 3D jet simulation with C# and Unity using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm.
            
            The AI navigates through waypoints while optimizing its path using sensor inputs and rewards for alignment and efficiency. This project demonstrates the application of evolutionary algorithms to complex navigation tasks, achieving successful waypoint navigation in approximately 13 generations.`}
        projectImageUrl="/ai-jet-simulation.png"
        githubUrl="https://github.com/EdanStasiuk/NEAT-Jet-Simulation"
        websiteUrl={'https://edanstasiuk.github.io/NEAT-Jet-Simulation/'}
      />
      <Project
        projectName="Hash Vault"
        projectDescription={`A client-side cryptocurrency wallet desktop and web GUI for the Hedera Hashgraph network, designed and developed using Figma, React with TypeScript, Vite, Tailwind CSS, Electron, and Jest. The wallet allows users to view their account balances, transaction history, and easily send and receive cryptocurrency, providing a comprehensive and secure interface for managing Hedera assets.
            
            Keeping with the ethos of crypto, all of the code is open-source and users' private keys are encrypted with their password using AES-256-GCM before being stored locally within their browser. This ensures that you and only you can use your private key.`}
        projectImageUrl="/hash-vault.png"
        githubUrl="https://github.com/EdanStasiuk/Hash-Vault"
      />
      <Project
        projectName="Bytelink"
        projectDescription={`An IP Grabber that captures and logs essential user information, including Date & Time, IP Address, Location, and ISP. Built using HTML/CSS, Bootstrap, JavaScript, Jest, and integrated with Firebase's REST API and a Firestore NoSQL database for secure and efficient data storage.`}
        projectImageUrl="/bytelink.png"
        githubUrl="https://github.com/EdanStasiuk/Bytelink"
        websiteUrl={'https://bytelink-ipg.web.app'}
      />
      <Project
        projectName="EMOTIC"
        projectDescription={`EMOTIC: EEG Monitoring of Thoughts and Individual Conditions. A project using EEG to analyze and interpret users' emotional states through neural signal processing and machine learning. Created with technologies like Next.js, TypeScript, Tailwind CSS, Flask, and Python-based machine learning libraries. I worked in a team of 5 and was in charge of developing the front and back ends.

            I designed and implemented the frontend using Figma, Next.js, TypeScript, and Tailwind CSS, collaborating with teammates to ensure a seamless user interface for visualizing data.  
            
            I also integrated the backend services with Flask, creating endpoints for data processing and enabling full-stack functionality.`}            
        projectImageUrl="/EMOTIC.png"
        githubUrl="https://github.com/EdanStasiuk/EMOTIC"
      />
    </div>
  );
}
