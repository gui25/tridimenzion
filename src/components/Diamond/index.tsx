'use client'

import React, { useRef } from 'react'
import { useGLTF, CubeCamera, MeshRefractionMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'
import * as THREE from 'three'

interface DiamondProps {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  onClick: () => void
}

const Diamond: React.FC<DiamondProps> = ({
  position,
  rotation,
  color,
  onClick
}) => {
  const ref = useRef<THREE.Mesh>(null)

  const { nodes } = useGLTF('/diamond.glb') as any
  const geometry = nodes?.Diamond_1_0?.geometry

  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
  )

  if (!geometry) return null

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(envTexture) => (
        <mesh
          castShadow
          ref={ref}
          geometry={geometry}
          position={position}
          rotation={rotation}
          onClick={onClick}
        >
          <MeshRefractionMaterial
            envMap={envTexture}
            toneMapped={false}
            color={new THREE.Color(color)} // Use THREE.Color to set color
          />
        </mesh>
      )}
    </CubeCamera>
  )
}

export default Diamond
