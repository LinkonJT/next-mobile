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
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"


// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Main Home",
          url: "/",
        },
        {
          title: "Dashboard Home",
          url: "/dashboard/dashboardHome",
        },
        {
          title: "My Profile",
          url: "/dashboard/my-profile",
        },
      ],
    },
    {
      title: "Admin",
      url: "#",
      items: [
           {
          title: "Add Products",
          url: "/dashboard/add-product",
        },
        {
          title: "Manage Products",
          url: "#",
        },
        {
          title: "Manage Users",
          url: "/dashboard/manage-users",
          isActive: true,
        },
     
        {
          title: "Manage Orders",
          url: "/dashboard/manage-orders",
        },
      ],
    },
    {
      title: "Agent",
      url: "#",
      items: [
        {
          title: "Assigned Orders",
          url: "/dashboard/assigned-orders",
        },
        {
          title: "Orders Delivered",
          url: "/dashboard/orders-delivered",
        },
        
      ],
    },
    {
      title: "User",
      url: "#",
      items: [
        {
          title: "My Orders",
          url: "/dashboard/orders-delivered",
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
          url: "#",
           onClick: () => {signOut({ callbackUrl: "/login" })}, // Sign out and redirect to the login page, // The link to log out
        }
      ],
    },
   
  ],
}

export function AppSidebar({ ...props }) {

  const { data: session } = useSession()  // Get session data
  const role = session?.user?.role  // Access the role from the session

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Dashboard</span>
                  
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>



      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">


       {/* Loop over the nav data */}
            {data.navMain.map((item) => {
              // Conditionally render Admin, Agent, and User sections based on the user's role
              // if (item.title === "Admin" && role !== "admin") return null
              // if (item.title === "Agent" && role !== "agent") return null
              // if (item.title === "User/client" && role !== "customer") return null

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="font-medium">
                      {item.title}
                    </Link>
                  </SidebarMenuButton>

                  {/* Render sub-items if available */}
                  {item.items?.length ? (
                    <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                            <Link href={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              )
            })}

          </SidebarMenu>
        </SidebarGroup>
   
      </SidebarContent>
    </Sidebar>
  )
}
