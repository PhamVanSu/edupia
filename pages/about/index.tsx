import { NextPage } from 'next'
import Layout from '../../src/layout/Layout'
import Banner from '../../src/sections/banner/Banner'
import Content from '../../src/sections/content/Content'

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <Content />
    </Layout>
  )
}

export default AboutPage
