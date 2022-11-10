import { NextPage } from 'next'
import Footer from '../../src/footer/Footer'
import Header from '../../src/header/Header'
import Banner from '../../src/sections/banner/Banner'
import Content from '../../src/sections/content/Content'

const AboutPage: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </>
  )
}

export default AboutPage
