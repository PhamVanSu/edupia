import Image from 'next/image'
import React from 'react'

interface ArrowProps {}

const Arrow: React.FC<ArrowProps> = () => {
  return (
    <div className="arrow">
      <div className="w-[326px] text-center">
        <Image src="/double-down.svg" width={20.5} height={28} alt="" />
      </div>
      <div className="w-[326px] text-center">
        <Image src="/double-down.svg" width={20.5} height={28} alt="" />
      </div>
    </div>
  )
}

export default Arrow
