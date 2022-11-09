import React, { useEffect, useRef, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Excellent from '../sections/excellentStudents/ExcellentStudent'

let timeout: ReturnType<typeof setTimeout>
const resetTimeout = () => {
  if (timeout) {
    clearTimeout(timeout)
  }
}

const SlideShow = () => {
  const slideRef = useRef<any>(null)

  const properties = {
    duration: 2000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: 'ease',
  }
  const slideImages = [
    'https://res.cloudinary.com/di404qols/image/upload/v1658914844/sugnee/Sugnee_djqi0o.png',
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://res.cloudinary.com/di404qols/image/upload/v1658914844/sugnee/Sugnee_djqi0o.png',
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  ]

  return (
    <div className="slide-container">
      <Slide ref={slideRef} {...properties}>
        {/* {slideImages.map((each, index) => (
            <div key={index} className="each-slide">
              <img className="lazy" src={each} alt="sample" />
            </div>
          ))} */}
        <div className="each-slide ">
          <div className="flex w-[10000px]">
            <Excellent
              urlImage="/excellent.svg"
              name="Nguyễn Duy Tùng"
              school="THPT Lê Quý Đôn"
              achievement="10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương"
              title="Thật sự tuyệt vời!!"
              description="“I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his teaching methods” "
            />
            <Excellent
              urlImage="/excellent.svg"
              name="Nguyễn Duy Tùng"
              school="THPT Lê Quý Đôn"
              achievement="10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương"
              title="Thật sự tuyệt vời!!"
              description="“I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his teaching methods” "
            />
            <Excellent
              urlImage="/excellent.svg"
              name="Nguyễn Duy Tùng"
              school="THPT Lê Quý Đôn"
              achievement="10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương"
              title="Thật sự tuyệt vời!!"
              description="“I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his teaching methods” "
            />
            <Excellent
              urlImage="/excellent.svg"
              name="Nguyễn Duy Tùng"
              school="THPT Lê Quý Đôn"
              achievement="10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương"
              title="Thật sự tuyệt vời!!"
              description="“I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his teaching methods” "
            />
          </div>
        </div>
      </Slide>

      <button onClick={() => slideRef.current?.goBack()} type="button">
        Go Back
      </button>
      <button onClick={() => slideRef.current?.goTo(0.5)} type="button">
        Go To
      </button>
      <button onClick={() => slideRef.current?.goNext()} type="button">
        Go Next
      </button>
    </div>
  )
}

export default SlideShow
