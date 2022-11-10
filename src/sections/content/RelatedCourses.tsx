import { FC } from 'react'

const RelatedCourses: FC = () => {
  return (
    <div className="col-span-1">
      <div className="related-course-wrapper">
        <h2 className="related-course-title">Khóa học liên quan</h2>
        <div>
          <div className="wrapper-course">
            <div className="course-image-green1"></div>
            <div>
              <h2 className="course-name">Toán - Luyện thi 8+</h2>
              <span className="course-time">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="course-price">2.000.000đ (-50%)</span>
            </div>
          </div>
          <div className="wrapper-course">
            <div className="course-image-red"></div>
            <div>
              <h2 className="course-name">Toán - Luyện thi 8+</h2>
              <span className="course-time">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="course-price">2.000.000đ (-50%)</span>
            </div>
          </div>
          <div className="wrapper-course">
            <div className="course-image-green2"></div>
            <div>
              <h2 className="course-name">Toán - Luyện thi 8+</h2>
              <span className="course-time">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="course-price">2.000.000đ (-50%)</span>
            </div>
          </div>
          <div className="wrapper-course">
            <div className="course-image-yellow"></div>
            <div>
              <h2 className="course-name">Toán - Luyện thi 8+</h2>
              <span className="course-time">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="course-price">2.000.000đ (-50%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedCourses
