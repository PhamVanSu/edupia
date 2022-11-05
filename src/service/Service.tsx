import React from 'react'

interface ServiceProps {
  urlImage: string
  title: string
  description: string
}

const Service: React.FC<ServiceProps> = ({ urlImage, title, description }) => {
  return (
    <div className="Service w-[269px] h-[228px] px-[14.5px] py-8 border">
      <img src={urlImage} alt="" />
      <div className="mt-6 mb-1">{title}</div>
      <p>{description}</p>
    </div>
  )
}

export default Service
