import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

const SignIn = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {email, password} = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value
    }))
  }

  async function signinUser (e) {
    e.preventDefault();


    try {

      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        toast.success("Login successful");
        navigate("/");
      }

    } catch (error) {
      toast.error("Bad credentials")
    }

    

  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1 className='font-bold text-3xl text-center mt-6'>Sign In</h1>
      <div className='flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl 
    mx-auto'>
      <div className='md:w-[67%] mb-12 md:mb-6 lg:w-[50%]'>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" className='w-full rounded-2xl'/>
      </div>
      <div className='md:w-[67%] lg:w-[40%] lg:ml-20 w-full'>
        <form>
          <input
          type="email" placeholder='Email address' id='email' value={email} onChange={onChange} className='w-full text-xl rounded-sm mb-5 transition ease-in-out'/>
          <div className='relative'>
            <input placeholder='Password' type={!showPassword ? 'password' : "text"} id='password' value={password} onChange={onChange} className='w-full text-xl rounded-sm mb-5 transition ease-in-out' />
            {showPassword ? (
              <AiFillEyeInvisible className='absolute right-3 top-3 cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}/>
            ) : <AiFillEye className='absolute right-3 top-3 cursor-pointer text-xl'
            onClick={() => setShowPassword((prev) => !prev)}/>}
          </div>
          <div className='flex justify-between text-md'>
            <p>Don't have an account? <Link className='text-red-500 transition ease-in-out hover:text-red-700' to="/sign-up">Register</Link></p>
            <Link className='text-blue-500 hover:text-blue-700 transition ease-in-out' to="/forgot-password">Forgot Password</Link>
          </div>
          <button className='mt-5 bg-blue-600 hover:bg-blue-700 transition rounded-sm text-white text-center w-full p-2 font-semibold' onClick={signinUser}>SIGN IN</button>
          <p className='font-semibold text-center mt-4 mb-4'>OR</p>
          <OAuth />
        </form>
        </div>
      </div>
    </div>
    
  )
}

export default SignIn