import { Link, useLocation } from "react-router-dom"

interface MenuItem {
  id: number
  name: string
  path: string
}

interface BigDeviceMenuProps {
  menu: MenuItem[]
}

const BigDeviceMenu: React.FC<BigDeviceMenuProps> = ({ menu }) => {
  const location = useLocation()

  return (
    <>
      <div className="hidden md:flex gap-x-16 lg:gap-x-24">
        {menu.map((item) => (
          <Link to={item.path} key={item.id}>
            <div
              className={`font-medium ${location.pathname === item.path ? "underline text-gray-400 cursor-default" : "cursor-pointer hover:scale-110 transition-all ease-in-out"}`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default BigDeviceMenu
