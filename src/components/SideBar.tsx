import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const SideBar: React.FC = () => {
  return (
    <div className="w-14 border-r h-screen fixed flex flex-col justify-around mt-14 items-center sm:w-24 sm:mt-24">
      <div className="flex flex-col gap-7 text-xl pt-72 mt-48">
        <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
      </div>
    </div>
  )
}



export default SideBar
