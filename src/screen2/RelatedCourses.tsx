import Image from 'next/image'
import { FC } from 'react'

const RelatedCourses: FC = () => {
  return (
    <div className="col-span-1">
      <div className="w-full border rounded-md p-4">
        <h2 className="font-bold text-lg text-[#000000]">Khóa học liên quan</h2>
        <div>
          <div className="cursor-pointer py-2 my-[10px] flex gap-4">
            <div className="w-[72px] h-[72px] bg-[url('/screen2/girl.png')] bg-cover bg-no-repeat rounded-xl bg-[#3E58FE]"></div>
            <div>
              <h2 className="font-bold text-lg text-[#000000]">Toán - Luyện thi 8+</h2>
              <span className="font-normal text-base text-[#424344]">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="font-bold text-sm text-[#EC2E2E]">2.000.000đ (-50%)</span>
            </div>
          </div>
          <div className="cursor-pointer py-2 my-[10px] flex gap-4">
            <div className="w-[72px] h-[72px] bg-[url('/screen2/girl.png')] bg-cover bg-no-repeat rounded-xl bg-[#FE3E3E]"></div>
            <div>
              <h2 className="font-bold text-lg text-[#000000]">Toán - Luyện thi 8+</h2>
              <span className="font-normal text-base text-[#424344]">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="font-bold text-sm text-[#EC2E2E]">2.000.000đ (-50%)</span>
            </div>
          </div>
          <div className="cursor-pointer py-2 my-[10px] flex gap-4">
            <div className="w-[72px] h-[72px] bg-[url('/screen2/girl.png')] bg-cover bg-no-repeat rounded-xl bg-[#2FC46B]"></div>
            <div>
              <h2 className="font-bold text-lg text-[#000000]">Toán - Luyện thi 8+</h2>
              <span className="font-normal text-base text-[#424344]">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="font-bold text-sm text-[#EC2E2E]">2.000.000đ (-50%)</span>
            </div>
          </div>
          <div className="cursor-pointer py-2 my-[10px] flex gap-4">
            <div className="w-[72px] h-[72px] bg-[url('/screen2/girl.png')] bg-cover bg-no-repeat rounded-xl bg-[#FEB13E]"></div>
            <div>
              <h2 className="font-bold text-lg text-[#000000]">Toán - Luyện thi 8+</h2>
              <span className="font-normal text-base text-[#424344]">12 buổi • 90 phút/buổi</span>
              <br />
              <span className="font-bold text-sm text-[#EC2E2E]">2.000.000đ (-50%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedCourses
