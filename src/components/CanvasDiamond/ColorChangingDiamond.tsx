'use client'

import React, { useState } from 'react'
import Diamond from '@/components/Diamond'

const initialDiamondPosition: [number, number, number] = [0, 0, 0]

const ColorChangingDiamond: React.FC = () => {
  const [color, setColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  )

  const handleDiamondClick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setColor(randomColor)
  }

  return (
    <Diamond
      rotation={[0, 0, 0]}
      position={initialDiamondPosition}
      color={color}
      onClick={handleDiamondClick}
    />
  )
}

export default ColorChangingDiamond
