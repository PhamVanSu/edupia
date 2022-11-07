import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import type { NextPage } from 'next'
import Image from 'next/image'
import Class from '../src/class/Class'
import Excellent from '../src/excellent/Excellent'
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
            <div className="mt-[109px] ml-[150px] leading-[1.2]">
              <h2 className="text-[58px] text-[#1C3965] ">
                <span className="text-[#004FC5]">Edupia</span>Class <br /> Lớp học trực tuyến <br />
                <span className="text-[#004FC5]">chất lượng cao</span>
              </h2>
              <p className="text-[#616364] text-2xl font-normal mt-[18px]">
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
          <div className="mt-7 h-[600px] flex items-center mx-auto">
            <div className=" w-[89px] h-[475.5px] flex justify-end relative">
              <div className="w-[36.5px] h-full border border-[#004FC5] rounded-l-[15px] border-r-0" />
              <div className="absolute w-[89px] h-[72px] py-2 px-5 rounded-[10px] border border-[#004FC5] bg-[#ffffff] top-1/2 translate-y-[-50%] left-[5.5px] text-xl font-medium text-center">
                Khóa học
              </div>
            </div>
            <div className=" w-[789px] h-full">
              <div className="w-[752px] h-[120px] rounded-xl bg-gradient-to-b from-white to-gray-400 flex items-center mx-auto">
                <div className="h-[99px] w-1/2 flex justify-center items-center font-medium text-xl text-[#060606]">
                  Giáo viên chính
                </div>
                <div className="h-[99px] w-1/2 border-l-[1px] border-[#B6CDF3] flex justify-center items-center font-medium text-xl text-[#060606]">
                  Giáo viên chủ nhiệm
                </div>
              </div>

              <div className="h-[36px] w-[752px] mx-auto flex justify-between">
                <div className="w-[326px] text-center">
                  <img src="/double-down.svg" alt="" />
                </div>
                <div className="w-[326px] text-center">
                  <img src="/double-down.svg" alt="" />
                </div>
              </div>

              <div className="w-[752px] h-[120px] flex justify-between mx-auto">
                <div className="w-[326px] h-[120px] bg-gradient-to-b from-white to-gray-400 rounded-[12px] flex justify-center items-center font-medium text-xl text-[#060606] text-center">
                  Giáo viên giỏi, nhiều kinh nghiệm giảng dạy ôn thi THPT Quốc gia
                </div>
                <div className="w-[326px] h-[120px] bg-gradient-to-b from-white to-gray-400 rounded-[12px] flex justify-center items-center font-medium text-xl text-[#060606] text-center">
                  Chủ nhiệm quản lý 30 học sinh
                </div>
              </div>

              <div className="h-[36px] w-[752px] mx-auto flex justify-between">
                <div className="w-[326px] text-center">
                  <img src="/double-down.svg" alt="" />
                </div>
                <div className="w-[326px] text-center">
                  <img src="/double-down.svg" alt="" />
                </div>
              </div>

              <div className="w-[752px] h-[120px] flex justify-between mx-auto">
                <div className="w-[326px] h-[120px] bg-gradient-to-b from-white to-gray-400 rounded-[12px] flex justify-center items-center font-medium text-xl text-[#060606] text-center">
                  Giáo viên giỏi, nhiều kinh nghiệm giảng dạy ôn thi THPT Quốc gia
                </div>
                <div className="w-[326px] h-[120px] bg-gradient-to-b from-white to-gray-400 rounded-[12px] flex justify-center items-center font-medium text-xl text-[#060606] text-center">
                  Chủ nhiệm quản lý 30 học sinh
                </div>
              </div>

              <div className="h-[36px] w-[752px] mx-auto flex justify-between">
                <div className="w-[326px] text-center">
                  <img src="/double-down.svg" alt="" />
                </div>
                <div className="w-[326px] text-center">
                  <img src="/double-down.svg" alt="" />
                </div>
              </div>

              <div className="w-[752px] h-[120px] flex justify-between mx-auto">
                <div className="w-[326px] h-[120px] bg-gradient-to-b from-white to-gray-400 rounded-[12px] flex justify-center items-center font-medium text-xl text-[#060606] text-center">
                  Giáo viên giỏi, nhiều kinh nghiệm giảng dạy ôn thi THPT Quốc gia
                </div>
                <div className="w-[326px] h-[120px] bg-gradient-to-b from-white to-gray-400 rounded-[12px] flex justify-center items-center font-medium text-xl text-[#060606] text-center">
                  Chủ nhiệm quản lý 30 học sinh
                </div>
              </div>
            </div>
            <div className="w-[89px] h-[475.5px] flex justify-start relative">
              <div className="w-[36.5px] h-full border border-[#004FC5] rounded-r-[15px] border-l-0" />
              <div className="absolute w-[76px] h-[72px] py-2 px-5 rounded-[10px] border border-[#004FC5] bg-[#ffffff] top-1/2 translate-y-[-50%] left-[-2px] text-xl font-medium text-center">
                Lớp học
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center mt-10">
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
          <button className="mt-10 py-[14px] px-6 bg-[#ffffff] border border-[#004FC5] rounded-3xl text-[#004FC5] text-lg font-bold">
            Xem tất cả các khóa học
          </button>
        </section>
        <section className="flex flex-col items-center mt-[60px] relative h-[526px]">
          <h2 className="text-[#004FC5] font-medium text-[44px] text-center">Học sinh ưu tú</h2>
          <p className="text-2xl font-normal text-[#616364] text-center">
            <span className="text-[#004FC5]">80%</span> học sinh đạt{' '}
            <span className="text-[#EC2E2E] text-[28px] font-bold">8+</span>,{' '}
            <span className="text-[#004FC5]">65%</span> học sinh đạt{' '}
            <span className="text-[#EC2E2E] text-[28px] font-bold">9+</span>
          </p>
          <div
            style={{
              backgroundImage: `url("/bg3.svg")`,
            }}
            className="w-[776px] h-[149px] absolute top-[90px] z-10"
          />
          <div className="mt-11 flex z-20  overflow-hidden">
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
          <div className="w-full h-[151px] flex justify-center items-center">
            <button className="w-[47px] h-[47px] rounded-full border flex justify-center items-center border-[#004FC5] mr-[10px]">
              <ChevronLeftIcon className="w-[21px] text-[#004FC5]" />
            </button>
            <button className="w-[47px] h-[47px] rounded-full border flex justify-center items-center border-[#004FC5]">
              <ChevronRightIcon className="w-[18px] text-[#004FC5]" />
            </button>
          </div>
        </section>
        <section className="pl-[115px] pr-[116px]">
          <div className="flex flex-col justify-between items-center bg-[#F5F8FE] h-[414px] pt-[43px] pb-[38px] ">
            <h2 className="text-[#004FC5] font-medium text-[44px] text-center">Đăng ký học Edupia Class</h2>
            <div className="h-[136px] grid grid-cols-2 gap-x-7 gap-y-4">
              <div className="w-[311px] h-[60px] rounded-lg border border-[#EFEFEF] pt-[10px] pb-[5px] px-4">
                <div className="text-xs">Họ và tên</div>
                <input type="text" placeholder="Nguyen Duy Tung" className="w-full h-[26px] outline-0" />
              </div>
              <div className="w-[311px] h-[60px] rounded-lg border border-[#EFEFEF] pt-[10px] pb-[5px] px-4">
                <div className="text-xs">Lớp</div>
                <select
                  name="class"
                  id="class"
                  className="w-full h-[26px] bg-[url('/polygonDown.svg')] bg-no-repeat  outline-0 appearance-none bg-[100%_center] bg-[length:16px_16px]"
                >
                  <option value="10">Lớp 10</option>
                  <option value="11">Lớp 11</option>
                  <option value="12">Lớp 12</option>
                </select>
              </div>
              <div className="w-[311px] h-[60px] rounded-lg border border-[#EFEFEF] pt-[10px] pb-[5px] px-4">
                <div className="text-xs">Môn học</div>
                <select
                  name="class"
                  id="class"
                  className="w-full h-[26px] bg-[url('/polygonDown.svg')] bg-no-repeat  outline-0 appearance-none bg-[100%_center] bg-[length:16px_16px]"
                >
                  <option value="toan">Môn Toán</option>
                  <option value="ly">Môn Lý</option>
                  <option value="hoa">Môn Hóa</option>
                </select>
              </div>
              <div className="w-[311px] h-[60px] rounded-lg border border-[#EFEFEF] pt-[10px] pb-[5px] px-4">
                <div className="text-xs">Khóa đăng ký</div>
                <select
                  name="class"
                  id="class"
                  className="w-full h-[26px] bg-[url('/polygonDown.svg')] bg-no-repeat  outline-0 appearance-none bg-[100%_center] bg-[length:16px_16px]"
                >
                  <option value="abc">Khóa ABC</option>
                  <option value="def">Khóa DEF</option>
                  <option value="ght">Khóa GHT</option>
                </select>
              </div>
            </div>
            <button className="bg-[#004FC5] py-4 px-[84px] rounded-[69px] text-[#ffffff] text-xl font-bold">
              Đăng ký khóa học
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
