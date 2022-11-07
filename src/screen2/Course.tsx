import { FC } from 'react'
import ProgressItem from './ProgressItem'

const Course: FC = () => {
  return (
    <div className="col-span-2">
      {/* tabs */}
      <div className="w-full">
        <ul className="flex border-b border-[#EBF0F4]">
          <li>
            <a className="tabBtn tabBtn-active" href="#introduce">
              Giới thiệu
            </a>
          </li>
          <li>
            <a className="tabBtn" href="#progress">
              Lộ trình học tập
            </a>
          </li>
          <li>
            <a className="tabBtn" href="#teacher">
              Giáo viên
            </a>
          </li>
          <li>
            <a className="tabBtn" href="#rating">
              Đánh giá
            </a>
          </li>
        </ul>
      </div>
      {/* tabs content */}
      <div>
        <div id="introduce">
          <h1 className="heading-3 my-7">Giới thiệu</h1>
          <p className="text-ellipsis text-justify leading-6 font-normal text-base">
            Hello there! Ed here and welcome to the new tutorial. I am a subscriber of @Pencilmation and I laugh and
            enjoy their animation. I thought of making a tutorial just like theirs, and here it is! I have another video
            on the works and hopefully be done on or before Christmas.ve been pushing myself to finish it, but for
            safety, I made this. I hope you guys are doing great and for the upcoming new year. Cheers! -ed
            <a href="" className="text-[#004FC5] ml-1">
              Xem thêm....
            </a>
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
        <div id="teacher">giáo viên</div>
      </div>
    </div>
  )
}

export default Course
