'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import ColorChangingDiamond from './ColorChangingDiamond'

const CanvasDiamond: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <color attach="background" args={['#87ceeb']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={0.5} />
      <spotLight
        position={[0, 0, 0]}
        angle={Math.PI / 6}
        penumbra={1}
        intensity={0.3}
      />
      <ColorChangingDiamond />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/kiara_1_dawn_4k.hdr"
        background
      />
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  )
}

export default CanvasDiamond
