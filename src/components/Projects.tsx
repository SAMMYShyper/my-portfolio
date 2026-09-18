import { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  websiteUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Titanic Machine Learning from Disaster",
    description: "Engineered an ensemble learning model for Titanic survivorship with Python, scikit-learn, and seaborn; conducted data cleaning, feature engineering, & cross validation; achieved 77% prediction accuracy.",
    technologies: ["Python", "Pandas", "scikit-learn", "NumPy", "Matplotlib", "Seaborn", "Machine Learning"],
    githubUrl: "https://github.com/SammysHyper/titanic_machine_learning",
  },
  {
    id: 2,
    title: "Orbit - Discord Bot",
    description: "Centralized shared prompts, reducing group decision making time. Integrated Discord’s Developer and OpenAI’s GPT Mini API for commands & response generation for 80+ users.",
    technologies: ["Python", "Discord API", "OpenAI API"],
    githubUrl: "https://github.com/SammysHyper/sam_discord_bot",
  },
  {
    id: 3,
    title: "Ribbit - Autonomous Robot",
    description: "Designed and built a 3D-printed autonomous robot frog capable of following objects using ultrasonic sensors, with all control logic programmed in C++ for Arduino components.",
    technologies: ["C++", "Arduino", "Ultrasonic Sensors", "3D Printing"],
    liveUrl: "https://youtu.be/OMRBRlsXD_Q?si=KGbRw5iiSUkhO-XG",
  },
    
  {
    id: 4,
    title: "Movie Store",
    description: "Developed Movie Store, a web application that allows users to browse from a selection of movies, add them to cart, and purchase them. Features include: reviews, admin store management, and sign-up/login.",
    technologies: ["PythonAnywhere", "Django (5.0)", "HTML", "CSS", "Bootstrap", "SQLite"],
    githubUrl: "https://github.com/SAMMYShyper/moviesstores",
    liveUrl: "https://youtu.be/oQV14NAYSbA",
    websiteUrl: "https://sammyhi.pythonanywhere.com/",
  },
  {
    id: 5,
    title: "Amigos House Buyer",
    description: "Developed Amigos HouseBuyer, a simple web app created for a real estate client. Features include: contact form, property listings, and mobile friendly design.",
    technologies: ["HTML", "CSS", "Astro", "JavaScript", "Vercel"],
    websiteUrl: "https://amigoshousebuyer.com/",
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
              {project.websiteUrl && (
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  Website &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
