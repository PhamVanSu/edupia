import React from 'react'

interface Information {
  avatar: string
  name: string
  school: string
  description: string
}

interface StudentProps {
  information: Information
  title: string
  description: string
}

const Student: React.FC<StudentProps> = ({ information, title, description }) => {
  return (
    <div className="">
      <div>
        <div>Nguyễn Duy Tùng</div>
        <div>THPT Lê Quý Đôn</div>
        <div>10đ môn Vật Lý - Á Khoa ĐH Ngoại Thương</div>
      </div>
      <h3>Thật sự tuyệt vời!!</h3>
      <p>
        “I have subscribed to this course for a very long time. Of course I have met many mentors. Almost all of his
        teaching methods”
      </p>
    </div>
  )
}

export default Student
