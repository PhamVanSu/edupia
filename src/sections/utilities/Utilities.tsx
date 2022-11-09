import React from 'react'
import { utilityData } from '../../constants/data'
import Utility from './Utility'

interface UtilitiesProps {}

const Utilities: React.FC<UtilitiesProps> = () => {
  return (
    <section className="utilities">
      <h2 className="title"> Giáo viên chủ nhiệm hỗ trợ tận tình</h2>
      <p className="description">Theo sát, hỗ trợ, nhắc nhở học tập hàng tuần, tư vấn, chữa bài và giải đáp 24/7</p>
      <div className="pt-[44px] flex w-full z-20">
        <div className="w-[477px] h-[330px] mr-6">
          <img src="/student.svg" alt="" />
        </div>
        <div className="utility-area">
          {utilityData.map(({ urlImage, title, description }, index) => (
            <Utility key={index} urlImage={urlImage} title={title} description={description} />
          ))}
        </div>
      </div>
      <div className="background" />
    </section>
  )
}

export default Utilities
