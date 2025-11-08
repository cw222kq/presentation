import ProjectCard from "../components/ProjectCard"

interface ProjectData {
  id: string
  title: string
  description: string
  imageUrl: string
  repoUrl: string
}

const projects: ProjectData[] = [
  {
    id: "pong-go",
    title: "Pong",
    description: 
        "Pong is the first Go project I have created after taking the course Go: The Complete Developer's Guide on Udemy. The project is written in Go and uses Raylib for graphics programming.", 
    imageUrl: "/presentation/pongGo.png",
    repoUrl: "https://github.com/cw222kq/pongGo",
  },
  {
    id: "pong-odin",
    title: "Pong",
    description: 
        "I also created a Pong game in Odin that uses Raylib for graphics. In this version, the ball changes color to clearly show which player currently owns it.",
    imageUrl: "/presentation/pongOdin.png",
    repoUrl: "https://github.com/cw222kq/pongOdin",
  },
  {
    id: "RandomRecipeGenerator",
    title: "Random Recipe Generator",
    description:
          "A work-in-progress app for generating random recipes and saving favorites. Features an ASP.NET Core 8 REST API with Spoonacular integration, Next.js TypeScript web frontend, and React Native mobile app. Built to learn ASP.NET Core, Next.js, and React Native.",
    imageUrl: "/presentation/randomRecipeGeneratorStart.png",
    repoUrl: "https://github.com/cw222kq/randomRecipeGenerator",
  },
]

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center border-t space-y-8 mt-8 sm:mt-24 md:mt-28 lg:mt-40">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  )
}

export default Projects
