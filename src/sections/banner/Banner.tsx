import { FC } from 'react'
import RatingStar from '../content/ratingSection/RatingStar'

const Banner: FC = () => {
  return (
    <section className="banner">
      <div className="col-span-1"></div>
      <div className="col-span-2 bg-[#F5F8FE] z-30"></div>
      <div className="banner-content-wrapper">
        <div className="banner banner-image">
          <div className="ml-16">
            <h2 className="font-bold text-[24px] mb-6 leading-[29px]">
              Chinh phục được <br />
              điểm 9+
            </h2>
            <span className="banner-image-button">Toán học</span>
          </div>
        </div>
        <div className="h-[315px] w-1/2 ml-11">
          <a href="#" className="font-normal text-xl text-[#004FC5]">
            Toán 12 - Chinh phục 8+
          </a>
          <h1 className="font-medium text-2xl color-[#1C1D1F] mt-4">Luyện thi THPT Quốc gia 2023</h1>
          {/* rate */}
          <div className="flex mt-1 mb-3 items-center space-x-1">
            <RatingStar rating={4.5} size={16} />
            <span>4.5</span>
            <a href="#">(Xem 231 bài đánh giá)</a>
          </div>
          {/* teacher */}
          <div>
            <ul className="flex items-center">
              <li className="color-[#060606] text-xl font-normal">Giáo viên Trần Quang Đồng</li>
              <div className="banner dot"></div>
              <li className="color-[#424344] font-normal text-base">Thứ 4 & Thứ 7</li>
              <div className="banner dot"></div>
              <li className="color-[#424344] font-normal text-base">90 phút/buổi</li>
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
            <div className="banner wrapper-discount">
              <span className="text-[#FFFFFF] font-bold text-xs -rotate-12">-50%</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <button className="register-button">Đăng ký học ngay</button>
            </div>
            <div className="mt-3 ml-[17%]">
              <b>Hotline: 0912.456.789</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
