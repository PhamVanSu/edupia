import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00378A] h-[375px] w-full text-[#ffffff] flex justify-center">
      <div className="container flex pt-[43px] pb-[37.5px]">
        <div className="w-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-[32px] font-bold my-[9.5px]">Edupia Class</h3>
            <p>
              Công ty cổ phần giáo dục Educa Corporation <br />
              MST: 0108156933 do Sở KH và ĐT <br />
              TP.Hà Nội cấp ngày 05/02/2018 <br />
              Đại diện: Ông Trần Đức Hùng
            </p>
          </div>
          <div>
            <Image src="/RegisterWebTmdt.svg" width={147} height={55} alt="register web" />
          </div>
        </div>
        <div className="w-1/2">
          <button className="bg-[#F5F8FE] rounded-[30px] text-[#00378A] px-4 py-1 text-[14px] font-normal leading-[18px]">
            Hà Nội
          </button>
          <div className="mt-[10px]">
            <Image src="/Vector.svg" width={12.5} height={16} alt="vector" /> Tầng 6, Tòa nhà Báo Sinh Viên - Hoa Học
            Trò, <br /> Yên Hòa, Cầu Giấy, Hà Nội
          </div>
          <div className="mt-[29px] mb-[27px]">
            <Image src="/Vector.svg" width={12.5} height={16} alt="vector" /> Tầng 6, Tòa Comatce Tower, 61 Ngụy Như Kon
            Tum, <br /> Nhân Chính, Thanh Xuân, Hà Nội
          </div>
          <button className="bg-[#F5F8FE] rounded-[30px] text-[#00378A] px-4 py-1 text-[14px] font-normal leading-[18px]">
            TP Hồ Chí Minh
          </button>
          <div className="mt-[10px]">
            <Image src="/Vector.svg" width={12.5} height={16} alt="vector" /> Tầng 2, Tòa Mach Office, 127 Ung Văn
            Khiêm, <br /> Phường 25, Quận Bình Thạnh, TPHCM
          </div>
        </div>
        <div className="w-1/6 flex justify-between flex-col">
          <div>
            <div className="mt-[9.5px] mb-[25px] font-bold text-lg">Giới thiệu</div>
            <ul>
              <li className="mb-[6px]">Giới thiệu chung</li>
              <li className="mb-[6px]">Nhà sáng lập Edupia</li>
              <li className="mb-[6px]">Các khóa học</li>
              <li className="mb-[6px]">Đội ngũ giáo viên</li>
            </ul>
          </div>
          <div className="flex justify-between w-[150px]">
            <Image src="/facebook.svg" width={8} height={16} alt="" />
            <Image src="/twitter.svg" width={16} height={16} alt="" />
            <Image src="/linkedin.svg" width={16} height={16} alt="" />
            <Image src="/instagram.svg" width={16} height={16} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
