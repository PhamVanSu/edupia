import Image from 'next/image'
import { FC, useState } from 'react'

type ProgressItemProps = {}

const ProgressItem: FC<ProgressItemProps> = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="chapter-wrapper" onClick={handleToggle}>
      {/* title */}
      <div className="title-wrapper">
        <div className="flex gap-4">
          <div>
            {!toggle ? (
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
      <div className={`content-wrapper ${toggle ? 'block' : 'hidden'}`}>
        {/*start item */}
        <div className="content-item-wrapper">
          {/* left */}
          <div className="flex items-center pl-5 pr-2 gap-5">
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
            <button className="content-document-button">Tài liệu</button>
            <button className="content-button-blue">Xem lại</button>
          </div>
        </div>
        {/*end item */}

        {/*start item */}
        <div className="content-item-wrapper">
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
            <button className="content-document-button">Tài liệu</button>
            <button className="content-button-red">29:11</button>
          </div>
        </div>
        {/*end item */}
      </div>
    </div>
  )
}

export default ProgressItem
