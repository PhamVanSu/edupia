import React from 'react'
import Menu from '../menu/Menu'

const contentMenu = [
  {
    label: 'Trang chủ',
    active: false,
  },
  {
    label: 'Giới thiệu',
    active: false,
  },
  {
    label: 'Khóa học',
    active: false,
  },
  {
    label: 'Thư viện',
    active: false,
  },
  {
    label: 'Phòng thi',
    active: false,
  },
  {
    label: 'Bảng vàng',
    active: false,
  },
]

const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 block z-50 bg-[#ffffff]">
      <div className="container flex items-center justify-between mx-auto pt-[29px] pb-[24px]">
        <a href="#" className="w-1/6">
          <h1 className="home-link">
            <span className="text-[#004FC5]">Edupia</span>Class
          </h1>
        </a>
        <div className="w-4/6">
          <Menu content={contentMenu} />
        </div>

        <div className="w-1/6 flex justify-end">
          <button className="rounded-3xl w-[143px] h-[49px] py-3 px-6 bg-[#004FC5] text-[#ffffff] text-lg font-bold">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header