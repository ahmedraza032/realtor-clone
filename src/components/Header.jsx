import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const pathMathRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  } 


  return (
    <div className='border-b shadow-sm sticky top-0 z-50 bg-white'>
      <div className='flex justify-between p-3 max-w-6xl mx-auto items-center '>
      <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" className='h-5 cursor-pointer'/>
      <ul className='flex gap-5'>
        <li className={`cursor-pointer border-b-[3px] font-semibold py-2 border-b-transparent text-md text-gray-500 ${pathMathRoute('/') && "text-black border-b-red-500"}`}
        onClick={() => navigate('/')}>Home</li>
        <li className={`cursor-pointer border-b-[3px] font-semibold py-2 border-b-transparent text-md text-gray-500 ${pathMathRoute('/offers') && "text-black border-b-red-500"}`}
        onClick={() => navigate('/offers')}>Offers</li>
        <li className={`cursor-pointer border-b-[3px] font-semibold py-2 border-b-transparent text-md text-gray-500 ${pathMathRoute('/sign-in') && "text-black border-b-red-500"}`}
        onClick={() => navigate('/sign-in')}>Sign in</li>
      </ul>
    </div>
  </div>  
  )
}

export default Header