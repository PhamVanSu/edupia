import { FC } from 'react'
import Course from './course/Course'
import RatingSection from './ratingSection/RatingSection'
import RelatedCourses from './RelatedCourses'

const Content: FC = () => {
  return (
    <section className="grid grid-cols-3 gap-7 max-w-[1140px] mx-auto mt-10">
      <Course />
      <RelatedCourses />
      <RatingSection />
    </section>
  )
}

export default Content
