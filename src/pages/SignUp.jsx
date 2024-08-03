import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from '../Firebase.js'
import { serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: "",
    password: ""
  })

  const {email, password, name} = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData, 
      [e.target.id]: e.target.value
    }))
  }

  const signupUser = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name, 
      })

      const user = userCredentials.user;
      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      toast.success("Sign up was successful!");
      navigate('/');

    } catch (error) {
      toast.error("Something went wrong with the registration!");
      console.log(error)
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1 className='font-bold text-3xl text-center mt-6'>Sign Up</h1>
      <div className='flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl 
    mx-auto'>
      <div className='md:w-[67%] mb-12 md:mb-6 lg:w-[50%]'>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" className='w-full rounded-2xl'/>
      </div>
      <div className='md:w-[67%] lg:w-[40%] lg:ml-20 w-full'>
        <form>
          <input
          type="text" placeholder='Full name' id='name' value={name} onChange={onChange} className='w-full text-xl rounded-sm mb-5 transition ease-in-out'/>
          <input
          type="email" placeholder='Email address' id='email' value={email} onChange={onChange} className='w-full text-xl rounded-sm mb-5 transition ease-in-out'/>
          <div className='relative'>
            <input placeholder='Password' type={!showPassword ? 'password' : "text"} id='password' value={password} onChange={onChange} className='w-full text-xl rounded-sm mb-5 transition ease-in-out' />
            {!showPassword ? (
              <AiFillEye className='absolute right-3 top-3 cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev)}/>
            ) : <AiFillEyeInvisible className='absolute right-3 top-3 cursor-pointer text-xl'
            onClick={() => setShowPassword((prev) => !prev)}/>}
          </div>
          <div className='flex justify-between text-md'>
            <p>Already have an account? <Link className='text-red-500 transition ease-in-out hover:text-red-700' to="/sign-in">Sign in</Link></p>
            <Link className='text-blue-500 hover:text-blue-700 transition ease-in-out' to="/forgot-password">Forgot Password</Link>
          </div>
          <button onClick={signupUser} className='mt-5 bg-blue-600 hover:bg-blue-700 transition rounded-sm text-white text-center w-full p-2 font-semibold'>SIGN UP</button>
          <p className='font-semibold text-center mt-4 mb-4'>OR</p>
          <OAuth />
        </form>
        </div>
      </div>
    </div>
    
  )
}

export default SignUp;