'use client'
import React from 'react'
import CanvasDiamond from '@/components/CanvasDiamond'
import FloatingButton from '@/components/FloatingButton'

const ShowcasePage: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <FloatingButton />
      <CanvasDiamond />
    </div>
  )
}

export default ShowcasePage
