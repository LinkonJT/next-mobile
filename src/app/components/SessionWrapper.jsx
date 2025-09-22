"use client";  // Marking this component as a Client Component

import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function SessionWrapper({children}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
