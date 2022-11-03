import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../src/footer/Footer'
import Header from '../src/header/Header'

const HomePage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-[102px]">
        <section className="h-[658px] flex relative] container">
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
          <div></div>
          <div className="absolute top-[144px] right-[150px]">
            <Image src="/Group3.png" width={456} height={500} alt="" />
          </div>
        </section>
        {/* <section id="featured-services" className="featured-services">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity icon" />
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Khóa học THPT
                    </a>
                  </h4>
                  <p>Các khóa học luyện thi, tổng ôn, chữa đề live hàng tuần</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={200}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles icon" />
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Kho bài tập, đề thi
                    </a>
                  </h4>
                  <p>Kho học liệu khổng lồ được cập nhật liên tục</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={400}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week icon" />
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Phòng thi thử
                    </a>
                  </h4>
                  <p>Tự đánh giá năng lực và tham gia các kỳ thi thử trực tuyến</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay={600}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast icon" />
                  </div>
                  <h4>
                    <a href="" className="stretched-link">
                      Hỏi đáp, hỗ trợ
                    </a>
                  </h4>
                  <p>Tự đánh giá năng lực và tham gia các kỳ thi thử trực tuyến</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Chương trình học</h2>
              <p>Chúng tôi có hàng trăm khóa học nổi bật</p>
              <button>Lớp 12 - Ôn thi THPT Quốc gia 2023</button> <span>Ôn luyện kiến thức Lớp 10-11</span>
            </div>
            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-5">
                <div className="about-img">
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">Chinh phục điểm 9+ Toán</h3>
                <button>Đăng ký tham gia</button>
              </div>
            </div>
            <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-5">
                <div className="about-img">
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <h3 className="pt-0 pt-lg-5">Chinh phục điểm 9+ Toán</h3>
              </div>
            </div>
            <button>Xem tất cả khóa học</button>
          </div>
        </section> */}
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
