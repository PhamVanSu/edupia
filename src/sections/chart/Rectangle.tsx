import React from 'react'

interface RectangleProps {
  label: string
}

const Rectangle: React.FC<RectangleProps> = ({ label }) => {
  return <div className="rectangle">{label}</div>
}

export default Rectangle
