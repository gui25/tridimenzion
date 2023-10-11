'use client'
import React, { useState, useEffect, ReactNode, useRef } from 'react'
import { FaSpinner } from 'react-icons/fa'
import Link from 'next/link'
import GlobalLoading from '@/components/GlobalLoading'

interface ModelCardProps {
  href: string
  title: string
  description: string
  children: ReactNode
}

const ModelCard: React.FC<ModelCardProps> = ({
  href,
  title,
  description,
  children
}) => {
  const [canvasLoading, setCanvasLoading] = useState(true)
  const [globalLoading, setGlobalLoading] = useState(false)
  const canvasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setCanvasLoading(false)
    }, 1000)

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [])

  const handleLinkClick = () => {
    setGlobalLoading(true)
  }

  return (
    <>
      <Link href={href} passHref onClick={handleLinkClick}>
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden max-w-lg mx-auto my-8 shadow-lg hover:shadow-xl w-120">
          <div className="w-full h-64">
            {canvasLoading && (
              <div className="flex h-full w-full items-center justify-center">
                <FaSpinner className=" animate-spin flex items-center justify-center w-24 h-64" />
              </div>
            )}
            <div
              className={`relative w-full h-64 overflow-hidden pointer-events-auto touch-action-none`}
              ref={canvasRef}
              style={{ opacity: canvasLoading ? '0' : '1' }}
            >
              {children}
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-300 text-xl mb-8">{description}</p>
            {!canvasLoading && (
              <button className="block w-full py-4 text-xl font-bold bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                View in 3D
              </button>
            )}
          </div>
        </div>
      </Link>
      {globalLoading && <GlobalLoading />}
    </>
  )
}

export default ModelCard
