import React, { useState, useEffect, useRef } from "react"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const smallDeviceMenuRef = useRef<HTMLDivElement>(null)

  const closeSmallDeviceMenuHandler = (event: MouseEvent) => {
    if (smallDeviceMenuRef.current && !smallDeviceMenuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    
    document.addEventListener("mousedown", closeSmallDeviceMenuHandler)
    return () => {
      document.removeEventListener("mousedown", closeSmallDeviceMenuHandler)
    }
  }, [])
  
  useEffect(() => {
    console.log(isMenuOpen ? "opened" : "closed")
  }, [isMenuOpen])

  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "SKILLS",
    },
    {
      id: 3,
      name: "PROJECTS",
    },
    {
      id: 4,
      name: "CONTACT",
    },
  ]
  return (
    <div
      className="flex items-center fixed
    w-full justify-between border-b bg-white h-14 sm:h-24"
    >
      <div
        className="w-14 h-14 bg-black flex justify-center items-center sm:w-24 sm:h-24 md:hidden"
        onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white cursor-pointer hover:scale-110 transition-all ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="w-14 h-14 bg-black justify-center items-center sm:w-24 sm:h-24 hidden md:flex">
        <img src="/presentation/react.svg" alt="React logo" className="w-16 h-16 animate-pulse" />
      </div>

      {isMenuOpen && (
        <div ref={smallDeviceMenuRef} className="absolute top-12 left-0 w-48 bg-white shadow-lg rounded-md p-4 md:hidden">
          <ul>
            {menu.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:scale-110 transition-all ease-in-out"
              >
                {item.name}
              </li>
            ))}
            <div className="border-t mt-2 pt-4 flex justify-center items-center gap-x-8">
            <li><IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" /></li>
            <li><IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" /></li>
            </div>
          </ul>
        </div>
      )}

      <div className="hidden md:flex gap-x-16 lg:gap-x-24">
        {menu.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer font-medium hover:scale-110 transition-all ease-in-out"
          >
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      <div className="w-14 h-14 bg-red-500 flex justify-center items-center sm:w-24 sm:h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-white cursor-pointer hover:scale-110 transition-all ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>
  )
}

export default Header
