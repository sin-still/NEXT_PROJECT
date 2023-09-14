'use client'
import { signOut } from 'next-auth/react'

const LogoutBtn = () => {
   return (
      <span className='loginSpan' onClick={()=>{signOut()}}>LOGOUT</span>
   );
};

export default LogoutBtn;