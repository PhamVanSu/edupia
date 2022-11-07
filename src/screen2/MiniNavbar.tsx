import { FC, useState } from 'react'

type MiniNavbarProps = {
  item: {
    content: string
    link: string
  }
}

const MiniNavbar: FC<MiniNavbarProps> = ({ item }) => {
  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <li onClick={handleActive}>
      <a className={`tabBtn ${active ? 'tabBtn-active' : ''}`} href={item.link}>
        {item.content}
      </a>
    </li>
  )
}

export default MiniNavbar
