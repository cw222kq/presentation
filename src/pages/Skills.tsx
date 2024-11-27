import SkillsCategory from "../components/SkillsCategory"

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Programming Languages",
      items: ["JavaScript / TypeScript", "Java", "C# / .NET", "Go"],
      bgClass: "bg-gradient-to-r from-blue-500 to-sky-500",
    },
    {
      title: "Frontend & Mobile",
      items: [
        "HTML",
        "CSS",
        "React",
        "React Native",
        "SASS",
        "Next.js",
        "Bootstrap",
        "TailwindCSS",
        "Expo",
        "GraphQL",
      ],
      bgClass: "bg-gradient-to-r from-teal-500 to-cyan-600",
    },
    {
      title: "Platforms & Backend Technologies",
      items: [
        "Node.js",
        "Express",
        "Spring Boot",
        "Spring MVC",
        "REST API",
        "GraphQL",
        "Firebase",
        "Firebase Functions",
        "Mongoose",
        "Kafka",
        "Docker",
        "Docker-Compose",
        "Kubernetes (K8s)",
        "Vagrant",
        "Openstack",
        "Raylib",
      ],
      bgClass: "bg-gradient-to-r from-purple-600 to-indigo-600",
    },
    {
      title: "Databases",
      items: ["MongoDB", "SQLite", "MySQL", "PostgreSQL", "Firestore"],
      bgClass: "bg-gradient-to-r from-green-500 to-lime-500",
    },
    {
      title: "Build Tools",
      items: ["Maven", "Gradle", "Webpack", "Vite"],
      bgClass: "bg-gradient-to-r from-orange-500 to-red-600",
    },
    {
      title: "Tools & SCM",
      items: [
        "Visual Studio Code",
        "Eclipse",
        "IntelliJ",
        "Git",
        "Gitlab",
        "Github",
        "Gitlab Pipelines",
        "Github Actions",
        "Bash",
        "SQL",
      ],
      bgClass: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      title: "Testing & Frameworks",
      items: [
        "Jest",
        "@testing-library/react",
        "JUnit",
        "Mockito",
        "Playwright",
      ],
      bgClass: "bg-gradient-to-r from-pink-500 to-red-600",
    },
    {
      title: "Methods & Processes",
      items: ["Agile", "Scrum", "SAFe", "Mob Programming", "TDD", "DOD", "OOD"],
      bgClass: "bg-gradient-to-r from-blue-600 to-indigo-700",
    },
    {
      title: "Project Management",
      items: ["Redmine", "Jira", "Confluence"],
      bgClass: "bg-gradient-to-r from-teal-500 to-cyan-600",
    },
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mt-8 border-t sm:mt-24 md:mt-28 lg:mt-40 lg:grid lg:gap-x-24 lg:grid-cols-3 lg:px-16">
        {categories.map((category, id) => (
          <SkillsCategory
            key={id}
            title={category.title}
            items={category.items}
            bgClass={category.bgClass}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
