import LoginForm from '@/app/components/authentication/LoginForm'
import RegisterForm from '@/app/components/authentication/RegisterForm'
import React from 'react'

export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
       <LoginForm></LoginForm>
      </div>
    </div>
  )
}
