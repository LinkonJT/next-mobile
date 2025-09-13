"use client";  // Ensures that this component is rendered on the client side

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'


// Create a client
const queryClient = new QueryClient()


export default function ClientWrapper({children}) {
  return (
     <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
