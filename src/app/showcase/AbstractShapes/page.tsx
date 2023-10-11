'use client'
import React from 'react'
import RandomAbstractShapes from '@/components/RandomAbstractShapes'
import FloatingButton from '@/components/FloatingButton'

const ShowcasePage: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <FloatingButton />
      <RandomAbstractShapes />
    </div>
  )
}

export default ShowcasePage
