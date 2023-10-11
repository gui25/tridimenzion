'use client'
import React from 'react'
import ModelCard from '@/components/ModelCard'
import CanvasDiamond from '@/components/CanvasDiamond'
import RandomAbstractShapes from '@/components/RandomAbstractShapes'

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white min-h-screen pb-20 md:pb-0 pt-20 md:pt-0 flex flex-col items-center justify-center">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Explore our Stunning 3D Models
        </h1>
        <h2 className="text-xl md:text-3xl font-normal mb-8">
          Select a model to view in 3D:
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-4 gap-6 md:gap-14">
        <ModelCard
          href="/showcase/diamond"
          title="Diamond 3D Model"
          description="Explore the Diamond model in 3D"
          className="w-full md:w-auto"
        >
          <CanvasDiamond />
        </ModelCard>
        <ModelCard
          href="/showcase/AbstractShapes"
          title="AbstractShapes 3D Model"
          description="Explore the AbstractShapes model in 3D"
          className="w-full md:w-auto"
        >
          <RandomAbstractShapes />
        </ModelCard>
      </div>
    </main>
  )
}

export default LandingPage
