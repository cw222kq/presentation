import ProjectCard from "../components/ProjectCard"

interface ProjectData {
  id: string
  title: string
  description: React.ReactNode
  imageUrl: string
  repoUrl: string
}

const projects: ProjectData[] = [
  {
    id: "pong-go",
    title: "Pong",
    description: (
      <p>
        Pong is the first Go project I have created after taking the course Go:
        The Complete Developer's Guide on Udemy. The project is written in Go
        and uses Raylib for graphics programming.
      </p>
    ),
    imageUrl: "/presentation/pongGo.png",
    repoUrl: "https://github.com/cw222kq/pongGo",
  },
  {
    id: "pong-odin",
    title: "Pong",
    description: (
      <p>
        I also created a Pong game in Odin that uses Raylib for graphics. In
        this version, the ball changes color to clearly show which player
        currently owns it.
      </p>
    ),
    imageUrl: "/presentation/pongOdin.png",
    repoUrl: "https://github.com/cw222kq/pongOdin",
  },
  {
    id: "RandomRecipeGenerator",
    title: "Random Recipe Generator",
    description: (
      <p>
        Random Recipe Generator is a work-in-progress app. The users click a
        button to generate a new recipe and can save their favourites. It uses
        an ASP .NET Core 8 REST API, a Next.js web frontend with TypeScript, and
        a React Native mobile frontend. The purpose of the project is to get
        familiar with ASP.NET Core, Next.js and React Native.
      </p>
    ),
    imageUrl: "",
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
