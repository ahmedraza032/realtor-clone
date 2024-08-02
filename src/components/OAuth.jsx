import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
  return (
    <button className='flex items-center justify-center gap-x-3 bg-red-700 hover:bg-red-800 transition rounded-sm text-white text-center w-full p-2 font-semibold'>
      <FcGoogle />CONTINUE WITH GOOGLE
    </button>
  )
}

export default OAuth