import React from 'react'
import { serviceData } from '../../constants/data'
import Service from './Service'

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <section className="services">
      {serviceData.map(({ urlImage, title, description }, index) => (
        <Service key={index} urlImage={urlImage} title={title} description={description} />
      ))}
    </section>
  )
}

export default Services
