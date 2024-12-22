import React from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async() =>{ 
    try{
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)

      const res = awaitfetch('/api/auth/google',{
       method : 'POST',
       header : {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({name: result.name.user.displayName, email: result.user.email, photo: result.user.photoURL}),
      })
      const data = await res.json()
      dispatch(signInSuccess(data));
      navigate('/');
    } catch(error){
      console.log('Could not sign with google', error);
    }
  }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:scale-90'>Continue with Google</button>
  )
}