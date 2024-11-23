import { useLocation } from "react-router-dom"

const Hero: React.FC = () => {
  const location = useLocation()

  const getHeroText = (): JSX.Element => {
    switch (location.pathname) {
      case "/presentation/skills/":
        return <span>SKILLS</span>
      case "/presentation/projects/":
        return <span>PROJECTS</span>
      case "/presentation/contact/":
        return <span>CONTACT</span>
      default:
        return (
          <>
            <span className="flex sm:inline md:inline lg:flex">CHARLOTTE</span>
            {" "}
            <span className="flex sm:inline md:inline lg:flex">WESTERBERG</span>
          </>
        )
    }
  }

  return (
    <div className="flex flex-col text-center items-center">
      <img
        src="/presentation/coloredLaptopMod.jpg"
        alt="colored laptop"
      />
      <div className="sm:mt-[-100px] md:mt-[-120px] lg:mt-[-180px]">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black dark:text-white sm:text-white tracking-widest text-shadow">
          {getHeroText()}
        </h2>
      </div>
    </div>
  )
}

export default Hero
