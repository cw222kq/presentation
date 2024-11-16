import React, { useState, useEffect } from "react"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

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
        className="w-14 h-14 bg-black flex justify-center items-center hover:scale-110 transition-all ease-in-out sm:w-24 sm:h-24 md:hidden"
        onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 cursor-pointer text-white"
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
        <div className="absolute top-12 left-0 w-48 bg-white shadow-lg rounded-md p-4 z-50">
          <button
            onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul>
            {menu.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden md:flex gap-14">
        {menu.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:underline font-medium"
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
