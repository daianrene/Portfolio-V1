/* eslint-disable react/prop-types */
import PictureImg from "../assets/profile.jpg";

const ProjectCard = ({ title, subtitle, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
            {title}
          </div>
          <a href="#">{subtitle}</a>
          <p className="mt-2 text-slate-500">{description}</p>
        </div>
        <div className="md:shrink-0 p-5">
          <img src={PictureImg} alt={title} width={250} height={250} />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Project One",
      subtitle: "Subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore mollitia repellendus saepe, voluptatum repudiandae eos fugiat sed quia veritatis soluta dignissimos fugit autem expedita eligendi doloremque ea tempora eaque.",
    },
    {
      title: "Project One",
      subtitle: "Subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore mollitia repellendus saepe, voluptatum repudiandae eos fugiat sed quia veritatis soluta dignissimos fugit autem expedita eligendi doloremque ea tempora eaque.",
    },
    {
      title: "Project One",
      subtitle: "Subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore mollitia repellendus saepe, voluptatum repudiandae eos fugiat sed quia veritatis soluta dignissimos fugit autem expedita eligendi doloremque ea tempora eaque.",
    },
    {
      title: "Project One",
      subtitle: "Subheading",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore mollitia repellendus saepe, voluptatum repudiandae eos fugiat sed quia veritatis soluta dignissimos fugit autem expedita eligendi doloremque ea tempora eaque.",
    },
    // Agrega aquí más objetos con datos de proyectos según sea necesario
  ];

  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
