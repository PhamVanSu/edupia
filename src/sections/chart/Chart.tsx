import React from 'react'
import Arrow from './Arrow'
import Rectangle from './Rectangle'

interface ChartProps {}

const Chart: React.FC<ChartProps> = () => {
  return (
    <section className="chart">
      <h2 className="title">
        Mô hình dual teacher lần đầu tiên <br /> triển khai tại Việt Nam
      </h2>
      <p className="description">
        Mô hình học tập tương tác trực tuyến hiệu quả đã được khẳng định <br />
        tại nhiều quốc gia cho kỳ thi THPT Quốc gia
      </p>

      <div className="chart-area">
        <div className="left">
          <div className="line line-left" />
          <div className="rectangular-border left-[5.5px]">Khóa học</div>
        </div>
        <div className="center">
          <div className="w-[752px] h-[120px] rounded-xl bg-gradient-to-b from-white to-[#DAE6FF] flex items-center mx-auto">
            <div className="h-[99px] w-1/2 flex justify-center items-center font-medium text-xl text-[#060606]">
              Giáo viên chính
            </div>
            <div className="h-[99px] w-1/2 border-l-[1px] border-[#B6CDF3] flex justify-center items-center font-medium text-xl text-[#060606]">
              Giáo viên chủ nhiệm
            </div>
          </div>

          <Arrow />
          <div className="row">
            <Rectangle label="Giáo viên giỏi, nhiều kinh nghiệm giảng dạy ôn thi THPT Quốc gia" />
            <Rectangle label="Chủ nhiệm quản lý 30 học sinh" />
          </div>
          <Arrow />
          <div className="row">
            <Rectangle label="Dạy và học qua tương tác trực tiếp" />
            <Rectangle label="Theo sát lộ trình, nhắc nhở và hỗ trợ học tập hàng tuần" />
          </div>
          <Arrow />
          <div className="row">
            <Rectangle label="Lộ trình học bứt phá 8+ và 9+ với nhiều phương pháp độc quyền" />
            <Rectangle label="Tư vấn học tập cho từng học sinh Chữa bài, hỏi đáp 24/7" />
          </div>
        </div>
        <div className="right">
          <div className="line line-right" />
          <div className="rectangular-border left-[-2px]">Lớp học</div>
        </div>
      </div>
    </section>
  )
}

export default Chart
