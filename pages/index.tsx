import type { NextPage } from 'next'
import Hero from '../src/sections/hero/Hero'
import Teachers from '../src/sections/teachers/Teachers'
import Services from '../src/sections/services/Services'
import Utilities from '../src/sections/utilities/Utilities'
import Chart from '../src/sections/chart/Chart'
import Classes from '../src/sections/classes/Classes'
import ExcellentStudents from '../src/sections/excellentStudents/ExcellentStudents'
import RegisterTheCourse from '../src/sections/registerTheCourse/RegisterTheCourse'
import Layout from '../src/layout/Layout'
import SlideShow from '../src/slideShow/SlideShow'
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <Hero />
      <Services />
      <Teachers />
      <Utilities />
      <Chart />
      <Classes />
      {/* <ExcellentStudents /> */}
      <SlideShow />
      <RegisterTheCourse />
    </Layout>
  )
}

export default HomePage
