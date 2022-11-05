import type { NextPage } from 'next'
import Image from 'next/image'
import Class from '../src/class/Class'
import Footer from '../src/footer/Footer'
import Header from '../src/header/Header'
import Service from '../src/service/Service'
import TeacherInformation from '../src/teacherInformation/TeacherInformation'
import Utility from '../src/utility/Utility'

const serviceData = [
  {
    urlImage: '/THPT.svg',
    title: 'Khóa học THPT',
    description: 'Các khóa học luyện thi, tổng ôn, chữa đề live hàng tuần',
  },
  {
    urlImage: '/KhoDeThi.svg',
    title: 'Kho bài tập, đề thi',
    description: 'Kho học liệu khổng lồ được cập nhật liên tục',
  },
  {
    urlImage: '/DeThiThu.svg',
    title: 'Phòng thi thử',
    description: 'Tự đánh giá năng lực và tham gia các kỳ thi thử trực tuyến',
  },
  {
    urlImage: '/HoiDap.svg',
    title: 'Hỏi đáp, hỗ trợ',
    description: 'Liên hệ đọi ngũ giáo viên chủ nhiệm hoặc CSKH để được hỗ trợ',
  },
]

const utilityData = [
  {
    urlImage: '/zalo.svg',
    title: 'Học nhóm Zalo',
    description: 'Tương tác & giải đáp qua nhóm lớp 30 học sinh',
  },
  {
    urlImage: '/schedule.svg',
    title: 'Theo sát lộ trình',
    description: 'Xây dựng và nhắc nhở kế hoạch học tập cho từng học sinh',
  },
  {
    urlImage: '/like.svg',
    title: 'Đánh giá kết quả',
    description: 'Phản hồi kết quả học tập kịp thời, liên tục',
  },
  {
    urlImage: '/time.svg',
    title: 'Quản lý thời gian',
    description: 'Giám sát và nhắc nhở việc tham gia học & ôn luyện',
  },
]

const classData = [
  {
    urlImage: '/class.svg',
    status: 'Đang tuyển sinh',
    title: 'Chinh phục điểm 9+ Toán',
    teacherName: 'Thầy Trần Quang Đồng',
    reviews: '2,890',
  },
  {
    urlImage: '/class.svg',
    status: 'Đang tuyển sinh',
    title: 'Chinh phục điểm 9+ Toán',
    teacherName: 'Thầy Trần Quang Đồng',
    reviews: '2,890',
  },
  {
    urlImage: '/class.svg',
    status: 'Đang tuyển sinh',
    title: 'Chinh phục điểm 9+ Toán',
    teacherName: 'Thầy Trần Quang Đồng',
    reviews: '2,890',
  },
  {
    urlImage: '/class.svg',
    status: 'Đang tuyển sinh',
    title: 'Chinh phục điểm 9+ Toán',
    teacherName: 'Thầy Trần Quang Đồng',
    reviews: '2,890',
  },
  {
    urlImage: '/class.svg',
    status: 'Đang tuyển sinh',
    title: 'Chinh phục điểm 9+ Toán',
    teacherName: 'Thầy Trần Quang Đồng',
    reviews: '2,890',
  },
  {
    urlImage: '/class.svg',
    status: 'Đang tuyển sinh',
    title: 'Chinh phục điểm 9+ Toán',
    teacherName: 'Thầy Trần Quang Đồng',
    reviews: '2,890',
  },
]

const HomePage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="body container mx-auto">
        <section className="hero h-[658px] flex relative">
          <div className="w-[960px] h-full bg-[#F5F8FE]">
            <div className="mt-[109px] ml-[150px]">
              <h2 className="text-[58px] text-[#1C3965]">
                <span className="text-[#004FC5]">Edupia</span>Class <br /> Lớp học trực tuyến <br />
                <span className="text-[#004FC5]">chất lượng cao</span>
              </h2>
              <p className="text-[#616364] text-2xl font-normal">
                Lớp học dual teacher chất lượng cao đầu tiên tại
                <br /> Việt Nam
              </p>
              <button className="px-[84px] py-4 rounded-[69px] bg-[#004FC5] text-[#ffffff] font-bold text-[20px] mt-[30px]">
                Đăng ký khóa học
              </button>
            </div>
          </div>
          <div className="bg-[#ffffff]" />
          <div className="absolute top-[35px] right-[150px]">
            <Image src="/Group3.png" width={456} height={500} alt="" />
          </div>
        </section>
        <section className="py-[60.5px] pl-[147.5px] pr-[148.5px] flex justify-between">
          {serviceData.map(({ urlImage, title, description }, index) => (
            <Service key={index} urlImage={urlImage} title={title} description={description} />
          ))}
        </section>
        <section className="h-[654px] bg-[#F0F5FF] flex flex-col items-center py-10">
          <h2 className="text-[#004FC5] font-medium text-[44px]">Đội ngũ giáo viên giảng dạy trực tiếp</h2>
          <p className="text-2xl font-normal text-[#616364]">
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
        <section className="flex flex-col items-center pt-[88.5px]">
          <h2 className="text-[#004FC5] font-medium text-[44px]"> Giáo viên chủ nhiệm hỗ trợ tận tình</h2>
          <p className="text-2xl font-normal text-[#616364]">
            Theo sát, hỗ trợ, nhắc nhở học tập hàng tuần, tư vấn, chữa bài và giải đáp 24/7
          </p>
          <div className="pt-[44px] flex">
            <div className="w-[477px] h-[330px]">
              <img src="/student.svg" alt="" />
            </div>
            <div className="flex">
              {utilityData.map(({ urlImage, title, description }, index) => (
                <Utility key={index} urlImage={urlImage} title={title} description={description} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-[#004FC5] font-medium text-[44px] text-center">
            Mô hình dual teacher lần đầu tiên
            <br /> triển khai tại Việt Nam
          </h2>
          <p className="text-2xl font-normal text-[#616364] text-center">
            Mô hình học tập tương tác trực tuyến hiệu quả đã được khẳng định
            <br /> tại nhiều quốc gia cho kỳ thi THPT Quốc gia
          </p>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-[#004FC5] font-medium text-[44px] text-center">Chương trình học</h2>
          <p className="text-2xl font-normal text-[#616364] text-center">
            Các khóa học được xây dựng bám sát mục tiêu học tập của học sinh
          </p>
          <div className="mt-10 mb-[30px]">
            <button className="rounded-3xl bg-[#E6EDF9] py-2 px-4 text-base text-[#004FC5] font-bold">
              Lớp 12 - Ôn thi THPT Quốc gia 2023
            </button>
            <button className="rounded-3xl bg-[#ffffff]  py-2 px-4 text-base text-[#9A9DA0] font-medium">
              Ôn luyện kiến thức Lớp 10-11
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
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
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-[#004FC5] font-medium text-[44px] text-center">Học sinh ưu tú</h2>
          <p className="text-2xl font-normal text-[#616364] text-center">80% học sinh đạt 8+, 65% học sinh đạt 9+</p>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-[#004FC5] font-medium text-[44px] text-center">Đăng ký học Edupia Class</h2>
          <p className="text-2xl font-normal text-[#616364] text-center">80% học sinh đạt 8+, 65% học sinh đạt 9+</p>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
