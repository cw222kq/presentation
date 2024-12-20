import React from "react"

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col text-center items-center">
      <img
        src="/presentation/profile.png"
        alt="profile picture"
        className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 p-4 rounded-full mt-1"
      />
      <h3 className="mt-8 px-4">FULLSTACKUTVECKLARE MED BAKRUND INOM MEDICIN</h3>
    </div>
  )
}

export default Introduction
