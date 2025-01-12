import Header from './Header';
import Project from './Project';

export default function AcademicProjects() {
  return (
    <div id="projects" className="text-white roboto-flex-800">
      <Header title={"Academic Projects"}/>
      <Project
        projectName="EMOTIC"
        projectDescription={`EEG Monitoring of Thoughts and Individual Conditions. A project using EEG to analyze and interpret users' emotional states through neural signal processing and machine learning. Created with technologies like Next.js, TypeScript, Tailwind CSS, Flask, and Python-based machine learning libraries. I worked in a team of 5 and was in charge of developing the front and back ends.

            I designed and implemented the frontend using Figma, Next.js, TypeScript, and Tailwind CSS, collaborating with teammates to ensure a seamless user interface for visualizing data.  
            
            I also integrated the backend services with Flask, creating endpoints for data processing and enabling full-stack functionality.`}            
        projectImageUrl="/EMOTIC.png"
        githubUrl="https://github.com/EdanStasiuk/EMOTIC"
      />
    </div>
  );
}
