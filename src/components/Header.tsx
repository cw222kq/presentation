import React, { useState, useEffect, useRef } from "react"
import {
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  ReactLogo,
  LargeEmailIconRedBackground,
  ClosingCrossIcon,
  Icon,
} from "../icons"
import { useLocation, Link } from "react-router-dom"

const icons: Icon[] = [GithubIcon, LinkedinIcon]

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const smallDeviceMenuRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const closeSmallDeviceMenuHandler = (event: MouseEvent) => {
    if (
      smallDeviceMenuRef.current &&
      !smallDeviceMenuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeSmallDeviceMenuHandler)
    return () => {
      document.removeEventListener("mousedown", closeSmallDeviceMenuHandler)
    }
  }, [])

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
        {isMenuOpen && <ClosingCrossIcon className="w-8 h-8 text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />}
        {!isMenuOpen && <MenuIcon className="w-8 h-8 text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />}
      </div>

      <ReactLogo />

       {/* Background overlay */}
       {isMenuOpen && (
        <div
          className="fixed top-14 sm:top-24 left-0 w-full h-full bg-black bg-opacity-70 z-60"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Small device menu */}
      {isMenuOpen && (
        <div
          ref={smallDeviceMenuRef}
          className="fixed top-14 sm:top-24 left-0 w-48 bg-white dark:bg-black dark:text-white shadow-lg rounded-md p-4 md:hidden"
        >
          <ul>
            {menu.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                onClick={() => setIsMenuOpen(false)}
              >
                <li
                  className={`px-4 py-2 dark:hover:bg-gray-500 ${location.pathname === item.path ? "underline text-gray-400 cursor-default" : "cursor-pointer hover:scale-110 transition-all ease-in-out"}`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
            <div className="border-t mt-2 pt-4 flex justify-center items-center gap-x-8">
              {icons.map((icon) => {
                const IconComponent = icon.component
                return (
                  <li key={icon.url}>
                    <a
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={icon.label}
                      className="cursor-pointer hover:scale-110 transition-all ease-in-out"
                    >
                      <IconComponent />
                    </a>
                  </li>
                )
              })}
            </div>
          </ul>
        </div>
      )}

      {/* Big device menu */}
      <div className="hidden md:flex gap-x-16 lg:gap-x-24">
        {menu.map((item) => (
          <Link to={item.path} key={item.id}>
            <div
              className={`font-medium ${location.pathname === item.path ? "underline text-gray-400 cursor-default" : "cursor-pointer hover:scale-110 transition-all ease-in-out"}`}
            >
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <LargeEmailIconRedBackground />
    </div>
  )
}

export default Header
