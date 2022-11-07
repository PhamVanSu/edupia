import { FC } from 'react'
import Footer from '../../src/footer/Footer'
import Header from '../../src/header/Header'
import Banner from '../../src/screen2/Banner'
import Content from '../../src/screen2/Content'

const Screen2: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </>
  )
}

export default Screen2
