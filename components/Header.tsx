import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-4 mb-1">
      <Link href="/">
        <h1 className="text-3xl">Expense</h1>
      </Link>
    </div>
  )
}

export default Header