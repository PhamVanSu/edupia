import React from 'react'

interface UtilityProps {
  urlImage: string
  title: string
  description: string
}

const Utility: React.FC<UtilityProps> = ({ urlImage, title, description }) => {
  return (
    <div className="utility">
      <img src={urlImage} alt="" />
      <div className="mt-5 mb-1">{title}</div>
      <p>{description}</p>
    </div>
  )
}

export default Utility
