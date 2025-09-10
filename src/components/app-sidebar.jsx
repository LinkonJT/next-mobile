import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"


// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "My Profile",
          url: "#",
        },
      ],
    },
    {
      title: "Admin",
      url: "#",
      items: [
           {
          title: "Add Products",
          url: "#",
        },
        {
          title: "Manage Posts",
          url: "#",
        },
        {
          title: "Manage Users",
          url: "#",
          isActive: true,
        },
     
        {
          title: "Manage Orders",
          url: "#",
        },
      ],
    },
    {
      title: "Agent",
      url: "#",
      items: [
        {
          title: "Assigned Orders",
          url: "#",
        },
        {
          title: "Orders Delivered",
          url: "#",
        },
        
      ],
    },
    {
      title: "User/client",
      url: "#",
      items: [
        {
          title: "My Orders",
          url: "#",
        },
        {
          title: "Delivery Update",
          url: "#",
        },
        
      ],
    },
     {
      title: "LogOut",  // Added LogOut section here
      url: "#",        // URL can be your log-out route or action
      items: [
        {
          title: "Log Out",
          url: "/logout", // The link to log out
        },
      ],
    },
   
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Dashboard</span>
                  
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
   
      </SidebarContent>
    </Sidebar>
  )
}
