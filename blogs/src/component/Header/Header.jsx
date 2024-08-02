import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  console.log("header")
  return (
    <div className='header flex justify-evenly md:bg-slate-400 lg:bg-orange-600 '>
      {/* <div>Home</div>
      <div>Services</div>
      <div>About</div>
      <div>Contact</div> */}
      <NavLink to="/about">about</NavLink>
      <NavLink to="/contact">contact</NavLink>
      <NavLink to="/services">services</NavLink>
      <NavLink to="/">home</NavLink>
      <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Blue</button>
      <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red to Yellow</button>

    </div>
  )
}

export default Header