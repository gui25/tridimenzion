'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

interface AbstractShapesProps {
  position: [number, number, number]
}

const AbstractShapes: React.FC<AbstractShapesProps> = ({ position }) => {
  const shapeRef = useRef<THREE.Mesh>(null)

  const rotationSpeed = Math.random() * 0.02 - 0.01
  const boxDimensions = [
    Math.random() * 5,
    Math.random() * 5,
    Math.random() * 5
  ]
  const color = Math.random() * 0xffffff

  useFrame(() => {
    if (shapeRef.current) {
      const shape = shapeRef.current
      shape.rotation.x += rotationSpeed
      shape.rotation.y += rotationSpeed
      shape.position.z -= 0.3

      if (shape.position.z < -30) {
        shape.position.z = 30
      }
    }
  })

  return (
    <mesh ref={shapeRef} position={position}>
      <boxGeometry args={boxDimensions as [number, number, number]} />
      <meshStandardMaterial
        color={color}
        roughness={0.1}
        metalness={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

const RandomAbstractShapes: React.FC = () => {
  const numShapes = 300

  const generateRandomPosition = (): [number, number, number] => [
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 40,
    (Math.random() - 0.5) * 40
  ]

  return (
    <Canvas
      camera={{
        position: [0, 0, -48],
        rotation: [0, Math.PI, 0],
        near: 0.1,
        far: 1000,
        fov: 75
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {Array.from({ length: numShapes }).map((_, index) => (
        <AbstractShapes key={index} position={generateRandomPosition()} />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        autoRotate={true}
        autoRotateSpeed={0.2}
      />

      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/kloppenheim_06_puresky_4k.hdr"
        background
      />
    </Canvas>
  )
}

export default RandomAbstractShapes
