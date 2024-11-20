import React from "react"

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col text-center items-center">
      <div className="pb-0">
        <img src="/presentation/coloredLaptopMod.jpg" alt="colored laptop" className="w-full object-cover" />
        
      </div>
      <div className="sm:mt-[-100px] md:mt-[-120px] lg:mt-[-180px]">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black dark:text-white sm:text-white md:text-white lg:text-white tracking-widest text-shadow">
        <span className="flex sm:inline md:inline lg:flex">CHARLOTTE</span>
        <span className="flex sm:inline md:inline lg:flex"> WESTERBERG</span>
        </h2>
        
      </div>
      <img
          src="/presentation/profile.png" alt="profile picture"
          className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 p-4 rounded-full mt-1"
        />
      <h3 className="mt-8">FULLSTACKUTVECKLARE MED BAKRUND INOM MEDICIN</h3>
    </div>
  )
}

export default Introduction
