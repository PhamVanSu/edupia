import Image from 'next/image'
import { FC } from 'react'

type ProgressItemProps = {}

const ProgressItem: FC<ProgressItemProps> = () => {
  return (
    <div className="mb-2 cursor-pointer">
      <div className="flex justify-between px-5 py-4 border border-[#E0E0E0]">
        <div className="flex gap-4">
          <div>
            <Image alt="icon" width={19} height={19} src="/screen2/arrow-down.png" />
          </div>
          <h2 className="heading-4">Chương 1: Hàm số</h2>
        </div>
        <div>
          <span>2 buổi</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressItem
