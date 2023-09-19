import{
  SiCsharp
}from "react-icons/si"

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiDotnet,
} from "react-icons/di";


import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id : "csharp", nome: "Csharp", icon: <SiCsharp/>},
  { id: "donet", name: "Dotnet", icon: <DiDotnet /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "react", name: "React", icon: <DiReact /> },
  

];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
