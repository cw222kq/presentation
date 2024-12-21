import React from "react"
import { GithubIcon, LinkedinIcon, Icon } from "../icons"

const icons: Icon[] = [GithubIcon, LinkedinIcon]

const SideBar: React.FC = () => {
  return (
    <div className="w-14 hidden border-r h-screen fixed flex-col justify-around mt-14 items-center md:flex md:w-24 md:mt-24">
      <div className="flex flex-col gap-7 text-xl pt-72 mt-48">
        <ul className="flex flex-col gap-7">
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
        </ul>
      </div>
    </div>
  )
}

export default SideBar
