import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import Hero from "./Hero"
import Footer from "./Footer"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 flex flex-col lg:items-start w-full pt-14 sm:pt-24 px-0 md:px-28 lg:px-32">
          <Hero />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
