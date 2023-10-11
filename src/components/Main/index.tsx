import React from 'react'
import ModelCard from '@/components/ModelCard'
import CanvasDiamond from '@/components/CanvasDiamond'
import RandomAbstractShapes from '@/components/RandomAbstractShapes'

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white w-full h-full p-16 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">
          Explore our Stunning 3D Models
        </h1>
        <h2 className="text-3xl font-normal mb-12">
          Select a model to view in 3D:
        </h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mt-4">
        <ModelCard
          href="/showcase/diamond"
          title="Diamond 3D Model"
          description="Explore the Diamond model in 3D"
        >
          <CanvasDiamond />
        </ModelCard>
        <ModelCard
          href="/showcase/AbstractShapes"
          title="AbstractShapes 3D Model"
          description="Explore the AbstractShapes model in 3D"
        >
          <RandomAbstractShapes />
        </ModelCard>
      </div>
    </main>
  )
}

export default LandingPage
