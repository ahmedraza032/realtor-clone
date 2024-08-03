import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';

const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    email: "",
  })

  const {email} = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value
    }))
  }

  const [showPassword, setShowPassword] = useState(false);

  function sendResetLink (e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email);
      toast.success("Reset link was sent");
    } catch (error) {
      toast.error("Could not send reset link!");
    }




  }

  return (
    <div>
      <h1 className='font-bold text-3xl text-center mt-6'>Forgot Password</h1>
      <div className='flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl 
    mx-auto'>
      <div className='md:w-[67%] mb-12 md:mb-6 lg:w-[50%]'>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" className='w-full rounded-2xl'/>
      </div>
      <div className='md:w-[67%] lg:w-[40%] lg:ml-20 w-full'>
        <form>
          <input
          type="email" placeholder='Email address' id='email' value={email} onChange={onChange} className='w-full text-xl rounded-sm mb-5 transition ease-in-out'/>
          <div className='flex justify-between text-md'>
            <p>Don't have an account? <Link className='text-red-500 transition ease-in-out hover:text-red-700' to="/sign-up">Register</Link></p>
            <Link className='text-blue-500 hover:text-blue-700 transition ease-in-out' to="/sign-in">Sign in instead</Link>
          </div>
          <button onClick={sendResetLink} className='mt-5 bg-blue-600 hover:bg-blue-700 transition rounded-sm text-white text-center w-full p-2 font-semibold'>SEND RESET LINK</button>
          <p className='font-semibold text-center mt-4 mb-4'>OR</p>
          <OAuth />
        </form>
        </div>
      </div>
    </div>
    
  )
}

export default ForgotPassword;