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
        <li key={index} className={cn('menu-item', { active })} onClick={() => setActive(index)}>
          <Link href={path}>{label}</Link>
          <div className={cn('dot', active && 'bg-[#2BB4A0]')} />
        </li>
      ))}
    </ul>
  )
}

export default Menu
