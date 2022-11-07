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
      {/* <img src={urlImage} alt="" /> */}
      <div
        className="w-[364px] h-[247px] bg-no-repeat bg-[length:100%_100%] relative"
        style={{ backgroundImage: `url(${urlImage})` }}
      >
        <div className="absolute top-[78.5px] left-[133px]">
          <h2 className="font-bold text-2xl">Chinh phục được điểm 9+</h2>
          <button className="px-3 py-1 rounded-[36px] bg-[#3350FE] text-[#ffffff] font-medium text-base mt-[5px]">
            Toán học
          </button>
        </div>
      </div>
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
