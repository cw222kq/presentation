import { Link, useLocation } from "react-router-dom"
import { GithubIcon, LinkedinIcon } from "../icons"
import { useRef, useEffect, useCallback } from "react"
import { Icon } from "../icons"

const icons: Icon[] = [GithubIcon, LinkedinIcon]

interface MenuItem {
  id: number
  name: string
  path: string
}

interface SmallDeviceMenuProps {
  menu: MenuItem[]
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SmallDeviceMenu: React.FC<SmallDeviceMenuProps> = ({
  menu,
  setIsMenuOpen,
}) => {
  const smallDeviceMenuRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const closeSmallDeviceMenuHandler = useCallback(
    (event: MouseEvent) => {
      if (
        smallDeviceMenuRef.current &&
        !smallDeviceMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    },
    [setIsMenuOpen],
  )

  useEffect(() => {
    document.addEventListener("mousedown", closeSmallDeviceMenuHandler)
    return () => {
      document.removeEventListener("mousedown", closeSmallDeviceMenuHandler)
    }
  }, [closeSmallDeviceMenuHandler])

  return (
    <>
      <div
        ref={smallDeviceMenuRef}
        className="fixed top-14 sm:top-24 left-0 w-48 bg-white dark:bg-black dark:text-white shadow-lg rounded-md p-4 md:hidden z-70"
      >
        <ul>
          
          {/* Menu Items */}
          {menu.map((item) => (
            <li key={item.id} className="px-4 py-2">
              <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
                <div
                  className={`dark:hover:bg-gray-500 ${location.pathname === item.path ? "underline text-gray-400 cursor-default" : "cursor-pointer hover:scale-110 transition-all ease-in-out"}`}
                >
                  {item.name}
                </div>
              </Link>
            </li>
          ))}

          {/* Social Icons */}
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
                    className="cursor-pointer hover:scale-150 transition-all ease-in-out block"
                  >
                    <IconComponent />
                  </a>
                </li>
              )
            })}
          </div>
        </ul>
      </div>
    </>
  )
}

export default SmallDeviceMenu
