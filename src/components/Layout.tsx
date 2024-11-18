import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import Footer from "./Footer"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1"> 
        <SideBar />
        <main className="flex-1 flex flex-col items-center lg:items-start lg:justify-center w-full pt-14 sm:pt-24 px-4 sm:px-8 md:px-28 lg:px-32">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
