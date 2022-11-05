import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

interface ClassProps {
  urlImage: string
  status: string
  title: string
  reviews: string
  teacherName: string
  onClick?: () => void
}

const Class: React.FC<ClassProps> = ({ urlImage, status, title, teacherName, reviews, onClick }) => {
  return (
    <div className="w-[364px] h-[457px] border border-[#D8DDE0] rounded-[15px]">
      <img src={urlImage} alt="" />
      <div className="py-[21px] px-[19px] flex flex-col justify-between h-[210px]">
        <div>
          <button className="flex items-center py-1 px-2 bg-[#FFE4E1] rounded-[32px]">
            <div className="w-[9px] h-[9px] rounded-full bg-[#FF422D] mr-1" /> {status}
          </button>
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm font-medium text-[#616364]">{teacherName}</p>
        <div className="flex items-center">
          <StarIcon className="w-[13px] h-[13px] text-[#FFC700]" />
          <StarIcon className="w-[13px] h-[13px] text-[#FFC700]" />
          <StarIcon className="w-[13px] h-[13px] text-[#FFC700]" />
          <StarIcon className="w-[13px] h-[13px] text-[#FFC700]" />
          <StarIcon className="w-[13px] h-[13px] text-[#FFC700]" />
          <span className="text-xs font-medium text-[#747678]"> ( {reviews} )</span>
        </div>
        <button
          className="py-[6px] px-6 rounded-3xl border border-[#004FC5] bg-[#004FC5] text-[#ffffff] font-semibold text-sm"
          onClick={onClick}
        >
          Đăng ký tham gia
        </button>
      </div>
    </div>
  )
}

export default Class
