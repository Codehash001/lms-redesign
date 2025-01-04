"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  BookOpen,
  Calendar as CalendarIcon,
  LayoutDashboard,
  Settings,
  Bell,
  LogOut,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [userName, setUserName] = useState("John Doe");

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setUserName(userData.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    Cookies.remove('auth');
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-8xl items-center justify-between p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/uni-logo.png"
            alt="Logo"
            width={35}
            height={35}
            className="mr-2 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="font-medium text-xs">Faculty of Technology</h1>
            <h1 className="font-bold text-sm">University of Sri Jayewardenepura</h1>
          </div>
        </Link>

        {/* Navigation - Centered */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-2 font-medium transition-colors",
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Section */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="text-sm font-medium">{userName}</div>
                <Avatar>
                  <AvatarFallback>
                    {userName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}