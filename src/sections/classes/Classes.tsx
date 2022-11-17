import React from 'react'
import Class from './Class'
import { classData } from '../../constants/data'

interface ClassesProps {}

const Classes: React.FC<ClassesProps> = () => {
  return (
    <section className="classes">
      <h2 className="title">Chương trình học</h2>
      <p className="description">Các khóa học được xây dựng bám sát mục tiêu học tập của học sinh</p>
      <div className="mt-10 mb-[30px]">
        <button className="button bg-[#E6EDF9] text-[#2BB4A0] font-bold">Lớp 12 - Ôn thi THPT Quốc gia 2023</button>
        <button className="button bg-[#ffffff] text-[#9A9DA0] font-medium">Ôn luyện kiến thức Lớp 10-11</button>
      </div>
      <div className="class-area">
        {classData.map(({ urlImage, status, title, teacherName, reviews }, index) => (
          <Class
            key={index}
            urlImage={urlImage}
            status={status}
            title={title}
            teacherName={teacherName}
            reviews={reviews}
          />
        ))}
      </div>
      <button className="expand-button">Xem tất cả các khóa học</button>
    </section>
  )
}

export default Classes
