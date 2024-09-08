import Project from './Project';

export default function Projects() {
  return (
    <div className="text-white roboto-flex-italic-800">
      <div className="text-[38px] mb-2">Projects</div>
      <Project
        projectName="AI-Piloted Jet Simulation"
        projectDescription={`AI-piloted 3D jet simulation with C# and Unity using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm.
            
            The AI navigates through waypoints while optimizing its path using sensor inputs and rewards for alignment and efficiency. This project explores the application of evolutionary algorithms to complex navigation tasks.
            
            Waypoint navigation was achieved in ~13 generations.`}
        projectImageUrl="/ai-jet-simulation.png"
        githubUrl="https://github.com/EdanStasiuk/NEAT-Jet-Simulation"
      />
      <Project
        projectName="Hash Vault"
        projectDescription={`A cryptocurrency wallet desktop and web GUI for the Hedera Hashgraph network, designed and developed using Figma, React with TypeScript, Vite, Tailwind CSS, Electron, Jest, and ESLint. 
            
            Keeping with the ethos of crypto, all of the code is open source and users' keys are solely stored locally within their browser using AES-256-GCM encryption.`}
        projectImageUrl="/hash-vault.png"
        githubUrl="https://github.com/EdanStasiuk/Hash-Vault"
      />
    </div>
  );
}
