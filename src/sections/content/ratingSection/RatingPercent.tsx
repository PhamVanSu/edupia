import { FC } from 'react'

type RatingPercentProps = {
  count: number
  total: number
}

const RatingPercent: FC<RatingPercentProps> = ({ count, total }) => {
  const handleWidth = (count: number, total: number) => {
    return ((count / total) * 100).toFixed()
  }
  console.log(handleWidth(2911, 5238))
  return (
    <div className="flex items-center">
      <div className="w-[204px] h-[6px] relative overflow-hidden mr-2">
        <div className="absolute w-full h-full bg-[#D8DDE0] z-0 left-0 rounded-full"></div>
        <div
          style={{ width: `${handleWidth(count, total)}%` }}
          className="absolute h-full bg-[#060606] z-30 left-0 rounded-full"
        ></div>
      </div>
      <span className="font-medium text-sm text-[#9A9DA0]">{count}</span>
    </div>
  )
}

export default RatingPercent
