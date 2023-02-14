import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      dataContent: "Tip Calculator",
      link: "https://ptp-calculators.netlify.app/",
      id: "tip-link",
      key: "tip-link",
      alt: "Tip Calculator",
      image: "./img/tip.png",
    },
    {
      dataContent: "JoJo's Stand Name Mixer",
      link: "https://pphongsavan.github.io/jojo-stand-name-mixer/",
      id: "jojo-link",
      key: "jojo-link",
      alt: "JoJo's Stand Name Mixer",
      image: "./img/jojo.png",
    },
  ];

  return (
    <section id="projects" className="section">
      <div id="porfolioTitle" className="section-title">
        <h2 className="bold">Projects</h2>
      </div>
      <div id="tiles">
        {projects.map((project) => (
          <Project key={project.key} projectItem={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
