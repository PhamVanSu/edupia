import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="w-[960px] h-full bg-[#F0FCFA]">
        <div className="mt-[109px] ml-[150px]">
          <h2 className="title">
            <span className="text-[#2BB4A0]">Edupia</span>Class <br /> Lớp học trực tuyến <br />
            <span className="text-[#2BB4A0]">chất lượng cao</span>
          </h2>
          <p className="description">
            Lớp học luyện thi THPT Quốc Gia với mô hình
            <br />2 giáo viên đầu tiên tại Việt Nam
          </p>
          <button className="register-button">Đăng ký khóa học</button>
        </div>
      </div>
      <div className="bg-[#ffffff]" />
      <div className="absolute top-[35px] right-[150px]">
        <Image src="/teacherHero.svg" width={456} height={500} alt="" />
      </div>
      <div className="flex absolute w-[248px] h-[69px] border border-[#EBF0F4] rounded-[10px] px-3 py-3 top-[191px] right-[440px] bg-[#ffffff]">
        <div>
          <Image src="/avatar.svg" width={45} height={45} alt="" />
        </div>
        <div className="ml-[7px]">
          <div className="font-bold text-sm text-[#2BB4A0]">Cô Nguyễn Phương Thúy</div>
          <div className="text-xs font-normal text-[#747678]">Giáo viên Toán</div>
          <div className="flex">
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
          </div>
        </div>
      </div>
      <div className="w-[162px] h-[89px] bg-[#ffffff] border border-[#A3E4D9] rounded-[10px] px-3 py-3 text-center bottom-[79px] right-[133px] absolute">
        <div className="font-bold text-sm text-[#2BB4A0]">Các chuyên gia</div>
        <div className="mt-2 flex justify-between">
          <Image src="/avatar1.svg" width={31} height={31} alt="" />
          <Image src="/avatar2.svg" width={31} height={31} alt="" />
          <Image src="/avatar3.svg" width={31} height={31} alt="" />
          <Image src="/avatar4.svg" width={31} height={31} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
