"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-rose-300 p-4">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          NextMobile
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:block">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild>
                    <Link href="/products">All Products</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/smartphones">SmartPhones</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/accessories">Accessories</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Profile Dropdown */}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/myProfile">My Profile</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/features/dashboard">Dashboard</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Us */}

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/about">Who we are</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms">
                          Terms and Conditions
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

{/* Login button */}
 <NavigationMenu>
                  <NavigationMenuLink asChild className="hover:bg-rose-400">
                    <Button asChild={true} >
                      <Link href="/login">Login</Link>
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenu>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* DropDown Manu */}
        <div className="block md:hidden">
          <DropdownMenu >
            <DropdownMenuTrigger>
              {/* <Button variant="outline" className="hover:bg-rose-400 active:scale-95 transition">Open</Button> */}
              <div className="flex items-center justify-center p-2 rounded-lg cursor-pointer hover:bg-rose-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-400"><Menu className="size-6" /></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <NavigationMenu><NavigationMenuLink asChild>
  <Link href="/features/dashboard">Dashboard</Link>
</NavigationMenuLink></NavigationMenu>
</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Products</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>All Products</DropdownMenuItem>
                <DropdownMenuItem>Smartphones</DropdownMenuItem>
                <DropdownMenuItem>Accessories</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>About</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Who are we</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />

              
                <NavigationMenu>
                  <NavigationMenuLink asChild>
                    <Button asChild={true}>
                      <Link href="/login">Login</Link>
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenu>
            
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
