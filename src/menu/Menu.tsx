import React, { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'

interface MenuProps {
  content: {
    label: string
    active: boolean
    path?: string
  }[]
}

const Menu: React.FC<MenuProps> = ({ content }) => {
  const [contentMenu, setContentMenu] = useState(content)

  const setActive = (indexActive: number) => {
    const newContent = contentMenu.map((item, indexItem) => ({ ...item, active: indexActive === indexItem }))
    setContentMenu(newContent)
  }
  return (
    <ul className="menu">
      {contentMenu.map(({ label, active, path = '/' }, index) => (
        <li key={index} className={cn('menu-item', active && 'menu-item-active')} onClick={() => setActive(index)}>
          <Link href={path}>{label}</Link>
          {active && <div className="w-1 h-1 rounded-full bg-[#004FC5]" />}
        </li>
      ))}
    </ul>
  )
}

export default Menu
