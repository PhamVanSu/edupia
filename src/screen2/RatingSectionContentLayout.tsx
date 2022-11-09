import { FC } from 'react'

type RatingSectionContentLayoutProps = {
  children: React.ReactNode
}

const RatingSectionContentLayout: FC<RatingSectionContentLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export default RatingSectionContentLayout
