import React, { useState } from "react"
import {
  MenuIcon,
  ClosingCrossIcon,
  ReactLogo,
  LargeEmailIconRedBackground,
} from "../icons"
import BigDeviceMenu from "./BigDeviceMenu"
import SmallDeviceMenu from "./SmallDeviceMenu"
import BackgroundOverlay from "./BackgroundOverlay"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menu = [
    {
      id: 1,
      name: "HOME",
      path: "/presentation/",
    },
    {
      id: 2,
      name: "SKILLS",
      path: "/presentation/skills/",
    },
    {
      id: 3,
      name: "PROJECTS",
      path: "/presentation/projects/",
    },
    {
      id: 4,
      name: "CONTACT",
      path: "/presentation/contact/",
    },
  ]
  return (
    <div
      className="flex items-center fixed
    w-full justify-between border-b bg-white dark:bg-[#242424] h-14 sm:h-24 z-50"
    >
      <div
        className="w-14 h-14 border-b bg-black flex justify-center items-center sm:w-24 sm:h-24 md:hidden"
        onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
      >
        {isMenuOpen && (
          <ClosingCrossIcon className="w-8 h-8 text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />
        )}
        {!isMenuOpen && (
          <MenuIcon className="w-8 h-8 text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />
        )}
      </div>
      <ReactLogo />
      {/* Small device menu &  Background overlay*/}
      {isMenuOpen && (
        <>
          <BackgroundOverlay setIsMenuOpen={setIsMenuOpen} />
          <SmallDeviceMenu menu={menu} setIsMenuOpen={setIsMenuOpen} />
        </>
      )}
      {/* Big device menu */}
      <BigDeviceMenu menu={menu} />
      <LargeEmailIconRedBackground />
    </div>
  )
}

export default Header
