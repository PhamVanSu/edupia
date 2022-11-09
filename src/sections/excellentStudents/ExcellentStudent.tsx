import React from 'react'

interface ExcellentStudentProps {
  urlImage: string
  name: string
  school: string
  achievement: string
  title: string
  description: string
}

const ExcellentStudent: React.FC<ExcellentStudentProps> = ({
  urlImage,
  name,
  school,
  achievement,
  title,
  description,
}) => {
  return (
    <div className="w-[613px] h-[289px] rounded-[15px] bg-[#F5F8FE] px-[30px] pl-[30px] pr-[97px]">
      <div className="flex items-center">
        <img src={urlImage} alt="" className="w-12 h-12 rounded-full mr-[10px]" />
        <div>
          <div className="font-medium text-xl">{name}</div>
          <div className="font-medium text-base text-[#616364]">{school}</div>
          <div className="font-medium text-base text-[#00378A]">{achievement}</div>
        </div>
      </div>
      <h3 className="font-bold text-xl text-[#1C3965] mt-7 mb-[18px]">{title}</h3>
      <p className="font-medium text-base text-[#616364]">{description}</p>
    </div>
  )
}

export default ExcellentStudent
