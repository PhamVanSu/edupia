import { FC, useState } from 'react'
import RatingPercent from './RatingPercent'
import RatingSectionContentLayout from './RatingSectionContentLayout'
import RatingStar from './RatingStar'
import UserReviewDetail from './UserReviewDetail'

const RatingSection: FC = () => {
  const [currentActive, setCurrentActive] = useState<string>('newest')
  const handleRatingContent = (): React.ReactNode => {
    switch (currentActive) {
      case 'newest':
        return (
          <>
            <UserReviewDetail />
            <UserReviewDetail />
          </>
        )
      case 'learned':
        return <>Đã học</>
      case 'positive':
        return <>Tích cực</>
      case 'negative':
        return <>Tiêu cực</>
    }
  }
  return (
    <div id="rating" className="col-span-3">
      {/* start title */}
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="heading-3">Đánh giá</h1>
        </div>
        <div>
          <button
            className={`font-medium text-sm  ${currentActive === 'newest' ? 'ratingBtn-active' : 'text-[#747678]'}`}
            onClick={() => setCurrentActive('newest')}
          >
            Mới nhất
          </button>
          <button
            className={`font-medium text-sm  ml-7 ${
              currentActive === 'learned' ? 'ratingBtn-active' : 'text-[#747678]'
            }`}
            onClick={() => setCurrentActive('learned')}
          >
            Đã học
          </button>
          <button
            className={`font-medium text-sm  ml-7 ${
              currentActive === 'positive' ? 'ratingBtn-active' : 'text-[#747678]'
            }`}
            onClick={() => setCurrentActive('positive')}
          >
            Tích cực
          </button>
          <button
            className={`font-medium text-sm  ml-7 ${
              currentActive === 'negative' ? 'ratingBtn-active' : 'text-[#747678]'
            }`}
            onClick={() => setCurrentActive('negative')}
          >
            Tiêu cực
          </button>
        </div>
      </div>
      {/* end title */}

      {/* start rating body  */}
      <div className="grid grid-cols-3 my-6">
        <div className="col-span-1">
          <div className="border-r-[1px] border-[#D8DDE0]">
            <div className="flex items-center">
              <span className="font-medium text-[58px] text-[#060606] mr-8">4.8</span>
              <RatingStar rating={4.8} size={32} />
            </div>

            {/* start percent rating list */}
            <div className="pr-5">
              {/* start percent item */}
              <div className="flex gap-2 items-center my-3">
                <div>
                  <RatingStar rating={5} size={16} />
                </div>
                <div>
                  <RatingPercent count={2911} total={5238} />
                </div>
              </div>
              {/* end percent item */}
              {/* start percent item */}
              <div className="flex gap-2 items-center my-3">
                <div>
                  <RatingStar rating={4} size={16} />
                </div>
                <div>
                  <RatingPercent count={2015} total={5238} />
                </div>
              </div>
              {/* end percent item */}
              {/* start percent item */}
              <div className="flex gap-2 items-center my-3">
                <div>
                  <RatingStar rating={3} size={16} />
                </div>
                <div>
                  <RatingPercent count={312} total={5238} />
                </div>
              </div>
              {/* end percent item */}
              {/* start percent item */}
              <div className="flex gap-2 items-center my-3">
                <div>
                  <RatingStar rating={2} size={16} />
                </div>
                <div>
                  <RatingPercent count={0} total={5238} />
                </div>
              </div>
              {/* end percent item */}
              {/* start percent item */}
              <div className="flex gap-2 items-center my-3">
                <div>
                  <RatingStar rating={1} size={16} />
                </div>
                <div>
                  <RatingPercent count={0} total={5238} />
                </div>
              </div>
              {/* end percent item */}
            </div>
            {/* end percent rating list */}
          </div>
        </div>
        {/* start user review */}
        <div className="col-span-2 pl-[18px]">
          <RatingSectionContentLayout>{handleRatingContent()}</RatingSectionContentLayout>
          <a
            href=""
            className="float-right rounded-full font-bold text-base text-[#004FC5] py-2 px-6 border border-[#004FC5]"
          >
            Xem thêm
          </a>
        </div>
        {/* end user review */}

        <div className="col-span-3 flex justify-center items-center mb-6">
          <a href="" className="float-right rounded-full font-bold text-base text-[#FFF] py-3 px-[106px] bg-[#004FC5]">
            Đánh giá khóa học
          </a>
        </div>
      </div>
      {/* end rating body  */}
    </div>
  )
}

export default RatingSection
