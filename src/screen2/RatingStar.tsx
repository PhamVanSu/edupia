import Image from 'next/image'
import { FC } from 'react'

type RatingStarProps = {
  rating: number
}

const RatingStar: FC<RatingStarProps> = ({ rating }) => {
  const handleWidth = (index: number) => {
    const _index = index + 1
    if (_index <= rating) {
      return '100%'
    }
    if (0 < _index - rating && _index - rating < 1) {
      return `${100 - (_index - rating) * 100}%`
    }
    return '0%'
  }

  return (
    <div className="flex">
      {Array(5)
        .fill(0)
        .map((item, index) => {
          return (
            <div key={index} className="relative mr-1">
              <div style={{ width: handleWidth(index) }} className="absolute z-30 overflow-hidden">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.3599 14.6179C13.389 14.8367 13.3606 15.0596 13.2776 15.2629C13.1947 15.4661 13.0603 15.642 12.8888 15.7716C12.7172 15.9017 12.5144 15.9795 12.3028 15.9965C12.0913 16.0134 11.8795 15.9689 11.6908 15.8678L8.496 14.1906C8.33698 14.1078 8.16171 14.0647 7.98401 14.0647C7.80631 14.0647 7.63103 14.1078 7.47202 14.1906L4.25675 15.8357C4.06714 15.9353 3.85475 15.9781 3.64323 15.9592C3.4317 15.9404 3.22935 15.8606 3.05869 15.7289C2.88913 15.598 2.75675 15.4215 2.67561 15.2184C2.59447 15.0153 2.56762 14.793 2.59791 14.5752L3.14061 10.879C3.17553 10.6883 3.16584 10.4916 3.11236 10.3056C3.05889 10.1196 2.9632 9.94987 2.83342 9.81071L0.324688 7.12936C0.178036 6.97091 0.0757351 6.77361 0.0288676 6.55885C-0.018 6.34408 -0.00764436 6.12003 0.0588043 5.91096C0.125253 5.70189 0.245263 5.51578 0.405842 5.37277C0.566421 5.22976 0.761442 5.13532 0.969788 5.09966L4.53322 4.57621C4.70999 4.54889 4.87779 4.47728 5.02224 4.36751C5.16668 4.25774 5.28348 4.11309 5.36263 3.94594L7.03171 0.645003C7.12988 0.450378 7.27714 0.287429 7.45761 0.173754C7.63807 0.0600795 7.84488 0 8.05569 0C8.26649 0 8.47329 0.0600795 8.65376 0.173754C8.83422 0.287429 8.98149 0.450378 9.07966 0.645003L10.6771 3.93526C10.7624 4.09957 10.8823 4.24161 11.0277 4.35076C11.1731 4.45991 11.3403 4.53333 11.5167 4.56553L15.0392 5.20649C15.2479 5.24396 15.4427 5.34046 15.6024 5.48547C15.7622 5.63048 15.8807 5.81844 15.9452 6.02888C16.0096 6.23932 16.0174 6.46417 15.9678 6.67894C15.9182 6.8937 15.813 7.09015 15.6638 7.24687L13.1653 9.91753C13.0337 10.0557 12.9361 10.225 12.8808 10.411C12.8256 10.597 12.8143 10.7942 12.8479 10.9858L13.3599 14.6179Z"
                    fill="#FFBB00"
                  />
                </svg>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3599 14.6179C13.389 14.8367 13.3606 15.0596 13.2776 15.2629C13.1947 15.4661 13.0603 15.642 12.8888 15.7716C12.7172 15.9017 12.5144 15.9795 12.3028 15.9965C12.0913 16.0134 11.8795 15.9689 11.6908 15.8678L8.496 14.1906C8.33698 14.1078 8.16171 14.0647 7.98401 14.0647C7.80631 14.0647 7.63103 14.1078 7.47202 14.1906L4.25675 15.8357C4.06714 15.9353 3.85475 15.9781 3.64323 15.9592C3.4317 15.9404 3.22935 15.8606 3.05869 15.7289C2.88913 15.598 2.75675 15.4215 2.67561 15.2184C2.59447 15.0153 2.56762 14.793 2.59791 14.5752L3.14061 10.879C3.17553 10.6883 3.16584 10.4916 3.11236 10.3056C3.05889 10.1196 2.9632 9.94987 2.83342 9.81071L0.324688 7.12936C0.178036 6.97091 0.0757351 6.77361 0.0288676 6.55885C-0.018 6.34408 -0.00764436 6.12003 0.0588043 5.91096C0.125253 5.70189 0.245263 5.51578 0.405842 5.37277C0.566421 5.22976 0.761442 5.13532 0.969788 5.09966L4.53322 4.57621C4.70999 4.54889 4.87779 4.47728 5.02224 4.36751C5.16668 4.25774 5.28348 4.11309 5.36263 3.94594L7.03171 0.645003C7.12988 0.450378 7.27714 0.287429 7.45761 0.173754C7.63807 0.0600795 7.84488 0 8.05569 0C8.26649 0 8.47329 0.0600795 8.65376 0.173754C8.83422 0.287429 8.98149 0.450378 9.07966 0.645003L10.6771 3.93526C10.7624 4.09957 10.8823 4.24161 11.0277 4.35076C11.1731 4.45991 11.3403 4.53333 11.5167 4.56553L15.0392 5.20649C15.2479 5.24396 15.4427 5.34046 15.6024 5.48547C15.7622 5.63048 15.8807 5.81844 15.9452 6.02888C16.0096 6.23932 16.0174 6.46417 15.9678 6.67894C15.9182 6.8937 15.813 7.09015 15.6638 7.24687L13.1653 9.91753C13.0337 10.0557 12.9361 10.225 12.8808 10.411C12.8256 10.597 12.8143 10.7942 12.8479 10.9858L13.3599 14.6179Z"
                  fill="#D8DDE0"
                />
              </svg>
            </div>
          )
        })}
    </div>
  )
}

export default RatingStar
