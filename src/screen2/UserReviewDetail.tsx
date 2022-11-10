import Image from 'next/image'
import { FC } from 'react'
import RatingStar from './RatingStar'

const UserReviewDetail: FC = () => {
  return (
    <div className="mb-7">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3">
            <Image width={60} height={60} src="/screen2/dantruong.png" alt="" className="rounded-full" />
          </div>
          <div>
            <h2 className="font-bold text-base text-[#004FC5]">Đan Trường</h2>
            <h3 className="font-medium text-base text-[#060606]">Khóa 2022 - Chinh phục 8+</h3>
          </div>
        </div>
        <div className="flex items-center">
          <RatingStar size={16} rating={5} />
          <p className="font-medium text-base text-[#060606]">Cực kỳ hài lòng</p>
        </div>
      </div>
      <div>
        <p className="font-medium text-sm text-[#747678] mt-[10px]">
          Character Scuplting, Property, Sets, and High Quality Texturing. Project: Guda, Nussa Rara, D.O.A, Lilly The
          Little Hope, Jin Kepepet, Reechick
        </p>
      </div>
    </div>
  )
}

export default UserReviewDetail
