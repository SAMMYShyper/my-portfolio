import { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Titanic Machine Learning from Disaster",
    description: "Predicted Titanic passenger survival. Applied data cleaning, feature engineering, and analysis to the Titanic dataset. Built machine learning models using Python and scikit-learn. Enhanced predictive performance through model selection and hyperparameter tuning.",
    technologies: ["Python", "Pandas", "scikit-learn", "NumPy", "Matplotlib", "Seaborn", "Machine Learning", "Data Analysis"],
    githubUrl: "https://github.com/SammysHyper/titanic_machine_learning",
  },
  {
    id: 2,
    title: "Orbit - Discord Bot",
    description: "Developed an autonomous Discord chatbot in Python that centralized shared prompts and responses in one collaborative channel, reducing group decision-making time.",
    technologies: ["Python", "Discord API", "OpenAI API"],
    githubUrl: "https://github.com/SammysHyper/sam_discord_bot",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Ribbit - Autonomous Robot",
    description: "Designed and built a 3D-printed autonomous robot frog capable of following objects using ultrasonic sensors, with all control logic programmed in C++ for Arduino components.",
    technologies: ["C++", "Arduino", "Ultrasonic Sensors", "3D Printing"],
    liveUrl: "https://youtu.be/OMRBRlsXD_Q?si=KGbRw5iiSUkhO-XG",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(p => p.technologies))
  );

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {allTechnologies.map(tech => (
          <button
            key={tech}
            className={filter === tech ? 'active' : ''}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub &rarr;
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
