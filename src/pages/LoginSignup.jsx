import React, { useState } from 'react'

const LoginSignup = () => {

  const [formContent, setFormContent] = useState("signup");
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleUserChange(e){
    setUserName(e.target.value);
  }
  function handleEmailChange(e){
    setEmail(e.target.value);
  }
  function handlePassChange(e){
    setPass(e.target.value);
  }

  const activeButton = 'cursor-pointer w-[100px] bg-purple-700 text-white py-2 font-semibold rounded-full';
  const nonActiveButton = 'cursor-pointer w-[100px] bg-gray-200 text-gray-600 py-2 font-semibold rounded-full';

  return (
    <div className='bg-[url(./assets/login-bg.jpg)] bg-center bg-no-repeat bg-cover w-screen h-screen grid place-items-center'>
      <div className='bg-white py-5 px-7 flex flex-col items-center w-sm rounded-xl'>
        <h1 className='text-purple-700 text-4xl font-bold underline'>{formContent === "signup" ? "Sign Up" : "Login"}</h1>
        <div className='flex flex-col space-y-2.5 items-center my-8 w-full'>
          <div className='w-full bg-gray-100 rounded-xl flex space-x-2 items-center px-3.5 py-2.5'>
            <img className='w-5 h-5' src="src\assets\icons\user.png"/>
            <input onChange={handleUserChange} value={userName} className='placeholder:text-gray-500 text-gray-700 focus:outline-none' type="text" placeholder='Enter Username'/>
          </div>
          {(formContent === 'signup') && <div className='w-full bg-gray-100 rounded-xl flex space-x-2 items-center px-3.5 py-2.5'>
            <img className='w-5 h-5' src="src\assets\icons\email.png"/>
            <input onChange={handleEmailChange} value={email} className='placeholder:text-gray-500 text-gray-700 focus:outline-none' type="text" placeholder='Enter Email'/>
          </div>}
          <div className='w-full bg-gray-100 rounded-xl flex space-x-2 items-center px-3.5 py-2.5'>
            <img className='w-5 h-5' src="src\assets\icons\lock.png"/>
            <input onChange={handlePassChange} value={pass} className='placeholder:text-gray-500 text-gray-700 focus:outline-none' type="text" placeholder='Enter Password'/>
          </div>
          {(formContent === 'login') && <div className='text-gray-700'>
            Forget Password? <a className='text-purple-700' href="#">Click here</a>
          </div>}
          <button className='cursor-pointer bg-purple-700 text-white py-2 w-full font-semibold rounded-full'>{formContent === "signup" ? "Sign Up" : "Login"}</button>
        </div>
        <div className='flex w-full justify-around'>
          <button onClick={() => setFormContent("signup")} className={formContent === 'signup' ? activeButton : nonActiveButton}>Sign Up</button>
          <button onClick={() => setFormContent("login")} className={formContent === 'login' ? activeButton : nonActiveButton}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;