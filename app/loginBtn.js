'use client'
import { signIn } from 'next-auth/react'

const LoginBtn = () => {
   return (
      <span className='loginSpan' onClick={()=>{signIn()}}>LOGIN</span>
   );
};

export default LoginBtn;