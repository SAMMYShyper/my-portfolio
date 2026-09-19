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
  gtDescription?: string;
  processDescription?: string;
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
    gtDescription: "All of the user stories for the required project have been implemented. Here I’ll walk through them and how they are displayed. The website features a navigation menu with an “About” section, where users learn about the app and purpose. On the top right of the navigation menu, users have the option to register (“Sign Up”) or log into their existing accounts with their stored account data. If a user wants to view the list of movies available, they may select the “Movies” option in the navigation bar and once there, they could search for their movie’s title of interest via the search bar. Whether a user is logged-in or not, they could add to cart, accessing their cart in the “Cart” navigation bar option. Additionally, a user can add to their shopping cart, log out, and return to their saved selections if they’d like to purchase in the future. However, before purchasing from the cart, the user must log in or register an account. The cart also allows users to delete the movies placed in their cart if they are not interested anymore. If a user is feeling something towards a movie, they can also leave a review by navigating to the “Movies” option in the navigation bar, select their movie, and add a comment in the open text box. The reviews left by users could be seen by all users and removed by the author, the intention of public reviews is to help the user in their decision of whether or not they’d like to purchase. Additionally, reviews are flexible and could be updated at any time by the author, therefore giving users flexibility to change their mind. Regarding the movie description, each movie (navigating to “Movies”->select movie) comes with a brief description of its plot, giving users details of the movie to help their purchase decision. We also value order history, therefore in the “Orders” navigation bar option, users can look at their past orders containing the movie(s) purchased, price, date, and time, this is intended so the user can track their purchases and expenses.",
    processDescription: "The methodology for this development project didn't follow a strict regiment, rather a relatively quick timeline of short sprints over the course of 4 days. Each day I would dedicate about 2-4 hours to writing code and documenting my process via video. Each of these sprints, led and reviewed by myself, would include a three-step process: read documentation prior to writing a single line of code (to ensure understanding), write code, and debug. Debugging took the most time, and in retrospect, most debugging was avoidable had I taken more time on understanding code better before writing. By the fourth day I deployed onto Python Anywhere. The project was straightforward and followed ordered procedures and practices outlined by “Django 5 for the Impatient:” by D. Correra & G. Lim. Most of my questions I had while writing code were answered well by the book and I rarely had to research online.  If I had a question that wasn’t answered by the book, then I’d do a browser search on the framework, syntax, or tool I was using.",
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

            {(project.gtDescription || project.processDescription) && (
              <div className="project-details">
                {project.gtDescription && (
                  <details className="project-detail">
                    <summary>GT Movie Store Description</summary>
                    <p>{project.gtDescription}</p>
                  </details>
                )}
                {project.processDescription && (
                  <details className="project-detail">
                    <summary>Process Description</summary>
                    <p>{project.processDescription}</p>
                  </details>
                )}
              </div>
            )}

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
