import Image from 'next/image'
import React from 'react'

interface TeacherInformationProps {
  urlImage: string
  occupation: string
  teacherName: string
  position: string
  description: string
}

const TeacherInformation: React.FC<TeacherInformationProps> = ({
  urlImage,
  occupation,
  teacherName,
  position,
  description,
}) => {
  return (
    <div className="teacher-information">
      <Image src={urlImage} width={284} height={288} alt="" />
      <div className="text-base font-bold text-[#1C3965]">{occupation}</div>
      <h3 className="text-[32px] font-bold text-[#1C3965]">{teacherName}</h3>
      <div className="font-medium text-[#060606] text-xl">{position}</div>
      <p className="text-xl text-[#424344] font-normal">{description}</p>
    </div>
  )
}

export default TeacherInformation
