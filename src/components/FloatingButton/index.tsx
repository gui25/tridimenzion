import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'
import GlobalLoading from '@/components/GlobalLoading'

const FloatingButton = () => {
  const [globalLoading, setGlobalLoading] = useState(false)

  const handleLinkClick = () => {
    setGlobalLoading(true)
  }

  return (
    <>
      <Link
        href="/"
        passHref
        onClick={handleLinkClick}
        className="fixed top-10 left-10 z-50 bg-opacity-50 bg-black text-white p-6 rounded-full text-2xl flex items-center"
      >
        <IoIosArrowBack size={22} style={{ marginRight: '0.5rem' }} />
        Back
      </Link>
      {globalLoading && <GlobalLoading />}
    </>
  )
}

export default FloatingButton
