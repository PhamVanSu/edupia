import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import ExcellentStudent from './ExcellentStudent'

interface ExcellentStudentsProps {}

const ExcellentStudents: React.FC<ExcellentStudentsProps> = () => {
  return (
    <section className="flex flex-col items-center mt-[60px] relative h-[526px]">
      <h2 className="text-[#004FC5] font-medium text-[44px] leading-[1.2] text-center">Học sinh ưu tú</h2>
      <p className="text-2xl font-normal text-[#616364] text-center">
        <span className="text-[#004FC5]">80%</span> học sinh đạt{' '}
        <span className="text-[#EC2E2E] text-[28px] font-bold">8+</span>, <span className="text-[#004FC5]">65%</span>{' '}
        học sinh đạt <span className="text-[#EC2E2E] text-[28px] font-bold">9+</span>
      </p>
      <div style={{ backgroundImage: `url("/bg3.svg")` }} className="w-[776px] h-[149px] absolute top-[90px] z-10" />
      <div className="mt-11 overflow-hidden z-20 grid grid-cols-4 gap-8">
        <div>
          <ExcellentStudent
            urlImage="/excellent.svg"
            name="Nguyễn Duy Tùng"
            school="THPT Lê Quý Đôn"
            achievement="10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương"
            title="Thật sự tuyệt vời!!"
            description="“I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his teaching methods” "
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <ExcellentStudent
            urlImage="/excellent.svg"
            name="Nguyễn Duy Tùng"
            school="THPT Lê Quý Đôn"
            achievement="10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương"
            title="Thật sự tuyệt vời!!"
            description="“I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his teaching methods” "
          />
        </div>
        <div>
          <ExcellentStudent
            urlImage="/excellent.svg"
            name="Nguyễn Duy Tùng"
            school="THPT Lê Quý Đôn"
            achievement="10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương"
            title="Thật sự tuyệt vời!!"
            description="“I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his teaching methods” "
          />
        </div>
      </div>
      <div className="w-full h-[151px] flex justify-center items-center">
        <button className="w-[47px] h-[47px] rounded-full border flex justify-center items-center border-[#004FC5] mr-[10px]">
          <ChevronLeftIcon className="w-[21px] text-[#004FC5]" />
        </button>
        <button className="w-[47px] h-[47px] rounded-full border flex justify-center items-center border-[#004FC5]">
          <ChevronRightIcon className="w-[18px] text-[#004FC5]" />
        </button>
      </div>
    </section>
  )
}

export default ExcellentStudents
