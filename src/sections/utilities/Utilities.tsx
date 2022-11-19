import React, { useRef } from 'react'
import { utilityData } from '../../constants/data'
import Utility from './Utility'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import Image from 'next/image'
import { Navigation } from 'swiper'
import SwiperCore from 'swiper'

SwiperCore.use([Navigation])

interface UtilitiesProps {}

const Utilities: React.FC<UtilitiesProps> = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <section className="utilities">
      <h2 className="title"> Giáo viên chủ nhiệm hỗ trợ tận tình</h2>
      <p className="description">Theo sát, hỗ trợ, nhắc nhở học tập hàng tuần, tư vấn, chữa bài và giải đáp 24/7</p>
      <div className="pt-[44px] flex w-full z-20">
        <div className="w-[477px] h-[330px] mr-6">
          <img src="/student.svg" alt="" />
        </div>
        <div className="utility-area">
          <Swiper
            slidesPerView={4}
            loop
            navigation={{
              prevEl: prevRef.current ? prevRef.current : undefined,
              nextEl: nextRef.current ? nextRef.current : undefined,
            }}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
          >
            {utilityData.map(({ urlImage, title, description }, index) => (
              <SwiperSlide key={index}>
                <Utility urlImage={urlImage} title={title} description={description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <button ref={prevRef} className="px-6 py-3 bg-[#2BB4A0] mr-4">
          <Image src="/arrow-left.png" alt="prev" width={10} height={20} />
        </button>
        <button ref={nextRef} className="px-6 py-3 bg-[#2BB4A0]">
          <Image src="/arrow-right.png" alt="next" width={10} height={20} />
        </button>
      </div>

      <div className="background" />
    </section>
  )
}

export default Utilities
