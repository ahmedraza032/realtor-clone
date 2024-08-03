import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { toast } from 'react-toastify'
import { GoogleAuthProvider, signInWithPopup,  getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase';
import { serverTimestamp } from 'firebase/firestore';
import { doc, setDoc, getDoc } from 'firebase/firestore';


const OAuth = () => {

  const navigate = useNavigate();

  async function onGoogleClick () {
    try {

      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      } 

      toast.success("Sign in with Google was successful");
      navigate('/');
      
    } catch (error) {
     toast.error("Auth using Google failed!");
     console.error(error);
    }
  }

  return (
    <button onClick={onGoogleClick} type='button' className='flex items-center justify-center gap-x-3 bg-red-700 hover:bg-red-800 transition rounded-sm text-white text-center w-full p-2 font-semibold'>
      <FcGoogle />CONTINUE WITH GOOGLE
    </button>
  )
}

export default OAuth