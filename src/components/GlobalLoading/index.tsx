import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const GlobalLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <FaSpinner className="text-white text-4xl w-24 h-64 animate-spin" />
    </div>
  )
}

export default GlobalLoading
