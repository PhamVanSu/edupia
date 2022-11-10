import Image from 'next/image'
import { FC, useState } from 'react'
import ProgressItem from './ProgressItem'

const Course: FC = () => {
  const [isExpand, setIsExpand] = useState(false)
  const [a1, setA1] = useState<boolean>(true)
  const [a2, setA2] = useState<boolean>(false)
  const [a3, setA3] = useState<boolean>(false)
  const [a4, setA4] = useState<boolean>(false)
  const handleActive = (a: string) => {
    if (a === 'a1') {
      setA1(true)
      setA2(false)
      setA3(false)
      setA4(false)
    }
    if (a === 'a2') {
      setA1(false)
      setA2(true)
      setA3(false)
      setA4(false)
    }
    if (a === 'a3') {
      setA1(false)
      setA2(false)
      setA3(true)
      setA4(false)
    }
    if (a === 'a4') {
      setA1(false)
      setA2(false)
      setA3(false)
      setA4(true)
    }
  }
  return (
    <div className="col-span-2">
      {/* tabs */}
      <div className="w-full">
        <ul className="flex border-b border-[#EBF0F4]">
          <li onClick={() => handleActive('a1')}>
            <a className={`tabBtn ${a1 ? 'tabBtn-active' : ''}`} href="#introduce">
              Giới thiệu
            </a>
          </li>
          <li onClick={() => handleActive('a2')}>
            <a className={`tabBtn ${a2 ? 'tabBtn-active' : ''}`} href="#progress">
              Lộ trình học tập
            </a>
          </li>
          <li onClick={() => handleActive('a3')}>
            <a className={`tabBtn ${a3 ? 'tabBtn-active' : ''}`} href="#teacher">
              Giáo viên
            </a>
          </li>
          <li onClick={() => handleActive('a4')}>
            <a className={`tabBtn ${a4 ? 'tabBtn-active' : ''}`} href="#rating">
              Đánh giá
            </a>
          </li>
        </ul>
      </div>
      {/* tabs content */}
      <div>
        <div id="introduce">
          <h1 className="heading-3 my-7">Giới thiệu</h1>
          <span
            style={
              isExpand
                ? {}
                : {
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                  }
            }
            className="leading-6 font-normal text-base"
          >
            Hello there! Ed here and welcome to the new tutorial. I am a subscriber of @Pencilmation and I laugh and
            enjoy their animation. I thought of making a tutorial just like theirs, and here it is! I have another video
            on the works and hopefully be done on or before Christmas.ve been pushing myself to finish it, but for
            safety, I made this. I hope you guys are doing great and for the upcoming new year. Cheers! -ed
          </span>
          <p className="cursor-pointer text-[#004FC5] ml-1" onClick={() => setIsExpand(!isExpand)}>
            {isExpand ? 'Ẩn bớt' : 'Xem thêm'}
          </p>
        </div>
        <div id="progress">
          <div className="flex justify-between mt-6 mb-4">
            <h1 className="heading-3">Lộ trình học tập</h1>
            <span className="text-[#004FC5] font-normal text-xl pr-5">29 buổi</span>
          </div>
          <div>
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
            <ProgressItem />
          </div>
        </div>
        <div id="teacher" className="mt-8">
          <h1 className="font-bold text-2xl text-[#060606] mb-4">Giáo viên</h1>
          <div className="flex items-center">
            <div>
              <Image alt="avatar-teacher" width={240} height={240} src="/avatar1.png" className="rounded-full" />
            </div>
            <div className="ml-4">
              <h2 className="font-normal text-2xl text-[#060606]">Thầy Trần Quang Đồng</h2>
              <p className="font-normal text-base text-[#060606] mt-4">
                Hello there! Ed here and welcome to the new tutorial. I am a subscriber of @Pencilmation and I laugh and
                enjoy their animation. I thought of making a tutorial just like theirs, and here it is! I have another
                video on the works and
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
