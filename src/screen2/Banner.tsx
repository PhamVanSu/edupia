import Image from 'next/image'
import { FC } from 'react'
import RatingStar from './RatingStar'

const Banner: FC = () => {
  return (
    <section className="w-full max-h-[480px] mt-[102px]">
      <div className="w-full h-[480px] grid grid-cols-3 relative">
        <div className="col-span-1"></div>
        <div className="col-span-2 bg-[#F5F8FE] z-30"></div>
        <div className="flex items-center justify-center max-w-[1140px] h-[410px] mx-auto absolute z-40 inset-x-0 top-[35px] bg-[#FFFFFF] rounded shadow-[0px_0px_8px_0px_rgba(0,0,0,0.05)]">
          <div className="flex justify-center items-center w-[474px] h-[315px] bg-[url('/screen2/thumbnail.png')] bg-[#9A9DA0]">
            <div className="ml-16">
              <h2 className="font-bold text-[24px] mb-6 leading-[29px]">
                Chinh phục được <br />
                điểm 9+
              </h2>
              <span className="text-[#FFFFFF] text-[16px] px-[25px] py-[7.5px] bg-[#3350FE] font-[500] rounded-3xl">
                Toán học
              </span>
            </div>
          </div>
          <div className="h-[315px] w-1/2 ml-11">
            <a href="#" className="font-normal text-xl text-[#004FC5]">
              Toán 12 - Chinh phục 8+
            </a>
            <h1 className="font-medium text-2xl color-[#1C1D1F] mt-4">Luyện thi THPT Quốc gia 2023</h1>
            {/* rate */}
            <div className="flex mt-1 mb-3 items-center space-x-1">
              <RatingStar rating={4.5} />
              <span>4.5</span>
              <a href="#">(Xem 231 bài đánh giá)</a>
            </div>
            {/* teacher */}
            <div>
              <ul className="flex items-center">
                <li className="color-[#060606] text-xl font-normal leading-[140%]">
                  <p>Giáo viên Trần Quang Đồng</p>
                </li>
                <div className="w-[6px] h-[6px] rounded-full bg-[#424344] mx-3"></div>
                <li className="color-[#424344] font-normal text-base flex leading-[140%]">
                  <p>Thứ 4 & Thứ 7</p>
                </li>
                <div className="w-[6px] h-[6px] rounded-full bg-[#424344] mx-3"></div>
                <li className="color-[#424344] font-normal text-base leading-[140%]">
                  <p>90 phút/buổi</p>
                </li>
              </ul>
            </div>
            {/* price */}
            <div className="flex items-center my-4">
              <div>
                <h1 className="text-[#EC2E2E] font-bold text-[32px]">2.000.000đ</h1>
              </div>
              <div>
                <del className="font-normal text-xl text-[#747678] ml-2">4.000.000đ</del>
              </div>
              <div className="flex justify-center items-center w-[50px] h-[50px] bg-[url('/screen2/star7.png')] bg-contain bg-no-repeat ml-3">
                <span className="text-[#FFFFFF] font-bold text-xs -rotate-12">-50%</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <button className="px-[110px] py-[14px] bg-[#004FC5] text-[#FFFFFF] font-bold text-lg rounded-full">
                  Đăng ký học ngay
                </button>
              </div>
              <div className="mt-3 ml-[17%]">
                <b>Hotline: 0912.456.789</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
