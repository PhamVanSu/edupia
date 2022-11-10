import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
