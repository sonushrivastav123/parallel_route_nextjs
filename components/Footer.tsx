import React from 'react'

const Footer = () => {
  return (
    <div className=" my-2">
      <h4 className="text-center">Expense &copy; {new Date().getFullYear()}</h4>
    </div>
  )
}

export default Footer