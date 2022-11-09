import React from 'react'
import Menu from '../menu/Menu'
import { contentMenu } from '../constants/data'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="navbar">
        <Link href="/">
          <h1 className="home-link">
            <span className="text-[#004FC5]">Edupia</span>Class
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
