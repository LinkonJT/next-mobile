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

export default function Navbar() {
  return (
    <header className="w-full border-b bg-rose-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          NextMobile
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
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

            {/* About Us */}

            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link className="text-xs" href="/about">
                    Who are we
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link className="text-xs" href="/terms">
                    Terms and Conditions
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
{/* dashboard */}
            <NavigationMenuItem>
            <NavigationMenuLink asChild>

                 <Link href="/dashboard">Dashboard</Link>
              </NavigationMenuLink>
           
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="hover:bg-rose-400">
                <Button asChild="true">
                  <Link href="/contact">Login</Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
