import React from 'react'

interface RegisterTheCourseProps {}

const RegisterTheCourse: React.FC<RegisterTheCourseProps> = () => {
  return (
    <section className="pl-[115px] pr-[116px] mb-[89px]">
      <div className="flex flex-col justify-between items-center bg-[#F5F8FE] h-[414px] pt-[43px] pb-[38px] bg-[url('/FAQ.svg')]">
        <h2 className="text-[#1C3965] font-medium text-[44px] leading-[1.2] text-center ">Đăng ký học Edupia Class</h2>
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
  )
}

export default RegisterTheCourse
