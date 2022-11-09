import React from 'react'

interface ServiceProps {
  urlImage: string
  title: string
  description: string
}

const Service: React.FC<ServiceProps> = ({ urlImage, title, description }) => {
  return (
    <div className="service">
      <img src={urlImage} alt="" />
      <div className="title">{title}</div>
      <p>{description}</p>
    </div>
  )
}

export default Service
