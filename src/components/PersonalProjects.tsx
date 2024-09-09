import Project from './Project';

export default function PersonalProjects() {
  return (
    <div className="text-white roboto-flex-italic-800">
      <div className="text-[38px] mb-2">Personal Projects</div>
      <Project
        projectName="AI-Piloted Jet Simulation"
        projectDescription={`AI-piloted 3D jet simulation with C# and Unity using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm.
            
            The AI navigates through waypoints while optimizing its path using sensor inputs and rewards for alignment and efficiency. This project demonstrates the application of evolutionary algorithms to complex navigation tasks, achieving successful waypoint navigation in approximately 13 generations.`}
        projectImageUrl="/ai-jet-simulation.png"
        githubUrl="https://github.com/EdanStasiuk/NEAT-Jet-Simulation"
      />
      <Project
        projectName="Hash Vault"
        projectDescription={`A cryptocurrency wallet desktop and web GUI for the Hedera Hashgraph network, designed and developed using Figma, React with TypeScript, Vite, Tailwind CSS, Electron, and Jest. The wallet allows users to view their account balances, transaction history, and easily send and receive cryptocurrency, providing a comprehensive and secure interface for managing Hedera assets.
            
            Keeping with the ethos of crypto, all of the code is open source and users' private keys are encrypted with their password using AES-256-GCM encryption before being stored locally within their browser. This ensures that you and only you can use your private key.
            
            I started this project with the goal of providing a valuable tool for the Hedera community.`}
        projectImageUrl="/hash-vault.png"
        githubUrl="https://github.com/EdanStasiuk/Hash-Vault"
      />
      <Project
        projectName="Bytelink"
        projectDescription={`An IP Grabber that captures and logs essential user information, including Date & Time, IP Address, Location, and ISP. Built using HTML/CSS, JavaScript, Jest, and integrated with Firebase's NoSQL Firestore database for secure and efficient data storage.`}
        projectImageUrl="/bytelink.png"
        githubUrl="https://github.com/EdanStasiuk/Bytelink"
        websiteUrl={'https://bytelink-ipg.web.app '}
      />
    </div>
  );
}
