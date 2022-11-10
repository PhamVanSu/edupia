import Image from 'next/image'
import { FC, useState } from 'react'

type ProgressItemProps = {}

const ProgressItem: FC<ProgressItemProps> = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="mb-2 px-5 py-4 border border-[#E0E0E0]" onClick={handleToggle}>
      {/* title */}
      <div className="flex justify-between cursor-pointer">
        <div className="flex gap-4">
          <div>
            {toggle ? (
              <Image alt="icon" width={19} height={19} src="/arrow-down.png" />
            ) : (
              <Image alt="icon" width={19} height={19} src="/arrow-up.png" />
            )}
          </div>
          <h2 className="heading-4">Chương 1: Hàm số</h2>
        </div>
        <div>
          <span>2 buổi</span>
        </div>
      </div>
      {/* content */}
      <div className={`p-3 border-t-[1.2px] border-[#F6F6F6] mt-4 ${toggle ? 'block' : 'hidden'}`}>
        {/*start item */}
        <div className="flex justify-between items-center mb-9 mt-3">
          {/* left */}
          <div className="flex items-center pl-5 pr-2  gap-5">
            <div>
              <Image alt="play" width={21} height={21} src="/play.png" />
            </div>
            <div className="leading-[160%] max-w-[373px]">
              <p className="font-normal text-base">
                <span className="text-[#004FC5]">Bài 1: </span>Số tự nhiên và các phép tính cộng trừ trong pham vi 10000
              </p>
              <p className="text-[#747678] font-normal text-base">20h - 15/11/2022</p>
            </div>
          </div>
          {/* right */}
          <div>
            <button className="font-normal text-base text-[#060606] px-4 py-1 border border-[#060606] rounded-full">
              Tài liệu
            </button>
            <button className="font-normal text-base text-[#F0F0F0] px-4 py-1 bg-[#004FC5] rounded-full ml-2 w-[96px]">
              Xem lại
            </button>
          </div>
        </div>
        {/*end item */}

        {/*start item */}
        <div className="flex justify-between items-center">
          {/* left */}
          <div className="flex items-center pl-5 pr-2  gap-5">
            <div>
              <Image alt="play" width={21} height={21} src="/play.png" />
            </div>
            <div className="leading-[160%] max-w-[373px]">
              <p className="font-normal text-base">
                <span className="text-[#004FC5]">Bài 2: </span>Số tự nhiên và các phép tính cộng trừ trong pham vi 10000
              </p>
              <p className="text-[#747678] font-normal text-base">
                <span className="text-[#004FC5]">Buổi tiếp theo: </span>20h - 15/11/2022
              </p>
            </div>
          </div>
          {/* right */}
          <div>
            <button className="font-normal text-base text-[#060606] px-4 py-1 border border-[#060606] rounded-full">
              Tài liệu
            </button>
            <button className="font-normal text-base text-[#F0F0F0] px-4 py-1 bg-[#EC2E2E] rounded-full ml-2 w-[96px]">
              29:11
            </button>
          </div>
        </div>
        {/*end item */}
      </div>
    </div>
  )
}

export default ProgressItem
