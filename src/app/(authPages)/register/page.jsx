import RegisterForm from '@/app/components/authentication/RegisterForm'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function Register() {
  return (
      <div>
           <Navbar></Navbar>

              <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
       <RegisterForm></RegisterForm>
      </div>
    </div>
      </div>
 
  )
}
