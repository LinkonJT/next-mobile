// src/app/features/dashboard/page.jsx
'use client'; 

import Loading from "@/app/loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function DashboardPage() {


const {data: session, status} = useSession();
const router = useRouter();

  if (status === "loading") {
    // return <Loading />; // Show loading state until session is determined
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    router.push("/login"); // Redirect to login if the user is not authenticated
    return null; // Prevent rendering protected content while redirecting
  }


  return (
    <div>
      <h1>Welcome to the Dashboard, {session.user?.username}</h1>
      {/* Other dashboard content */}
    </div>
  );
}
