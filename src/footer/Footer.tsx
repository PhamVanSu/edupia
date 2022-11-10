import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="col-1">
          <div>
            <h3 className="logo">Edupia Class</h3>
            <div className="information">
              Công ty cổ phần giáo dục Educa Corporation <br />
              <ul className="list-disc ml-7">
                <li>MST: 0108156933 do Sở KH và ĐT</li>
              </ul>
              TP.Hà Nội cấp ngày 05/02/2018 <br />
              <ul className="list-disc ml-7">
                <li>Đại diện: Ông Trần Đức Hùng</li>
              </ul>
            </div>
          </div>
          <div>
            <Image src="/RegisterWebTmdt.svg" width={147} height={55} alt="register web" />
          </div>
        </div>
        <div className="col-2">
          <button>Hà Nội</button>
          <div className="mt-[10px]">
            <Image src="/Vector.svg" width={12.5} height={16} alt="vector" /> Tầng 6, Tòa nhà Báo Sinh Viên - Hoa Học
            Trò, <br /> Yên Hòa, Cầu Giấy, Hà Nội
          </div>
          <div className="mt-[29px] mb-[27px]">
            <Image src="/Vector.svg" width={12.5} height={16} alt="vector" /> Tầng 6, Tòa Comatce Tower, 61 Ngụy Như Kon
            Tum, <br /> Nhân Chính, Thanh Xuân, Hà Nội
          </div>
          <button>TP Hồ Chí Minh</button>
          <div className="mt-[10px]">
            <Image src="/Vector.svg" width={12.5} height={16} alt="vector" /> Tầng 2, Tòa Mach Office, 127 Ung Văn
            Khiêm, <br /> Phường 25, Quận Bình Thạnh, TPHCM
          </div>
        </div>
        <div className="col-3">
          <div>
            <div className="introduce">Giới thiệu</div>
            <ul className="font-normal text-base leading-[1.6]">
              <li className="mb-[6px]">Giới thiệu chung</li>
              <li className="mb-[6px]">Nhà sáng lập Edupia</li>
              <li className="mb-[6px]">Các khóa học</li>
              <li className="mb-[6px]">Đội ngũ giáo viên</li>
            </ul>
          </div>
          <div className="social-media">
            <Image src="/facebook.svg" width={9} height={17.5} alt="" />
            <Image src="/twitter.svg" width={17.5} height={17.5} alt="" />
            <Image src="/linkedin.svg" width={17.5} height={17.5} alt="" />
            <Image src="/instagram.svg" width={17.5} height={17.5} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
