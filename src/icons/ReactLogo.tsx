import React from "react"

const ReactLogo: React.FC = () => (
  <div className="w-14 h-14 border-b bg-black justify-center items-center sm:w-24 sm:h-24 hidden md:flex">
    <img
      src="/presentation/react.svg"
      alt="React logo"
      className="w-16 h-16 animate-pulse"
    />
  </div>
)

export default ReactLogo
