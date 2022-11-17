import React from 'react'
import Menu from '../menu/Menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Header: React.FC = () => {
  const router = useRouter()
  const [_, path] = router.asPath.split('/')

  console.log(path, 'path')

  const contentMenu = [
    {
      label: 'Trang chủ',
      active: path === '',
      path: '/',
    },
    {
      label: 'Giới thiệu',
      active: path === 'about',
      path: '/about',
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
  return (
    <header className="header">
      <div className="navbar">
        <Link href="/">
          <h1 className="home-link">
            <Image src="/logo.svg" width={73} height={62} alt="" />
            <span className="text-[#2BB4A0]">Edupia</span>Class
          </h1>
        </Link>
        <div>
          <Menu content={contentMenu} />
        </div>
        <button className="login-button">Đăng nhập</button>
      </div>
    </header>
  )
}

export default Header
