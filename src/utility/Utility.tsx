import React from 'react'

interface UtilityProps {
  urlImage: string
  title: string
  description: string
}

const Utility: React.FC<UtilityProps> = ({ urlImage, title, description }) => {
  return (
    <div className="px-3 py-8 w-[176px] h-[244px] text-center border-[0.5px] border-[#E6EDF9] rounded-xl">
      <img src={urlImage} alt="" />
      <div className="mt-5 mb-1">{title}</div>
      <p>{description}</p>
    </div>
  )
}

export default Utility
