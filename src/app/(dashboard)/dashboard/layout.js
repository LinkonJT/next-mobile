"use client"

import React from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider style={{ "--sidebar-width": "19rem" }}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
          {/* other header stuff */}
        </header>
        <main className="p-4">
          <div className="bg-rose-300 rounded-2xl">
 <h1 className="text-center">Dashboard</h1>
          </div>
      
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
