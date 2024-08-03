import React, { useEffect } from 'react'
import {useLocation, useNavigate, Link, NavLink} from 'react-router-dom'

const Header = () => {


  return (
    <div className='border-b shadow-sm sticky top-0 z-50 bg-white'>
      <div className='flex justify-between p-3 max-w-6xl mx-auto items-center '>
      <Link to='/'><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" className='h-5 cursor-pointer'/></Link>
      <ul className='flex items-center gap-5'>

        <li>
        <NavLink to='/'
              className={({ isActive }) =>
              `cursor-pointer border-b-[3px] font-semibold py-2 text-md  ${isActive ? "text-black border-b-red-500" : "text-gray-500 border-b-transparent"}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/offers'
              className={({ isActive }) =>
              `cursor-pointer border-b-[3px] font-semibold py-2 text-md  ${isActive ? "text-black border-b-red-500" : "text-gray-500 border-b-transparent"}`}>Offers</NavLink>
        </li>
        <li>
        <NavLink to='/sign-in'
              className={({ isActive }) =>
              `cursor-pointer border-b-[3px] font-semibold py-2 text-md  ${isActive ? "text-black border-b-red-500" : "text-gray-500 border-b-transparent"}`}>Sign In</NavLink>
        </li>
      </ul>
    </div>
  </div>  
  )
}

export default Header