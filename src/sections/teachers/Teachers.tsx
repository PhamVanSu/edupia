import React from 'react'
import TeacherInformation from './TeacherInformation'

interface TeachersProps {}

const Teachers: React.FC<TeachersProps> = () => {
  return (
    <section className="teachers">
      <h2 className="title">Đội ngũ giáo viên giảng dạy trực tiếp</h2>
      <p className="description">
        Giáo viên giỏi nhiều năm kinh nghiệm ôn luyện thi, có hệ thống & phương pháp hiệu quả
      </p>
      <div className="flex mt-10">
        <TeacherInformation
          urlImage="/teacher.svg"
          occupation="Giáo viên"
          teacherName="Nguyễn Phương Thúy"
          position="Giáo viên Toán - THPT Amsterdam"
          description="Giáo viên dạy giỏi 10 năm liên tiếp"
        />
        <TeacherInformation
          urlImage="/teacher.svg"
          occupation="Giáo viên"
          teacherName="Nguyễn Phương Thúy"
          position="Giáo viên Toán - THPT Amsterdam"
          description="Giáo viên dạy giỏi 10 năm liên tiếp"
        />
        <TeacherInformation
          urlImage="/teacher.svg"
          occupation="Giáo viên"
          teacherName="Nguyễn Phương Thúy"
          position="Giáo viên Toán - THPT Amsterdam"
          description="Giáo viên dạy giỏi 10 năm liên tiếp"
        />
      </div>
    </section>
  )
}

export default Teachers
