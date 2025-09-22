"use client"

import LoginForm from '@/app/components/authentication/LoginForm'
import RegisterForm from '@/app/components/authentication/RegisterForm'
import Navbar from '@/app/components/Navbar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginPage() {

const { data: session, status } = useSession();
const router = useRouter()

  if (status === "authenticated") {
    router.push('/')
    return null
  }



  return (
   <div>
    <Navbar></Navbar>
     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
       <LoginForm></LoginForm>
      </div>
    </div>
   </div>
  )
}
