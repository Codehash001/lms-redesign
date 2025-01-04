"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Cookies from 'js-cookie';
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Hardcoded credentials check
    if (username === "ict22891" && password === "Lms1234") {
      const userData = {
        username: "ict22891",
        name: "MDHU Nishsanka",
        isLoggedIn: true
      };

      // Store in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Set cookie
      Cookies.set('auth', 'true', { expires: 7 }); // Expires in 7 days

      toast.success("Welcome back, MDHU Nishsanka!");
      router.push("/dashboard");
    } else {
      toast.error("Invalid username or password");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="relative w-full max-w-lg">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Card Content */}
        <motion.div 
          className="relative backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo and Title */}
          <div className="text-center space-y-6 mb-8">
            <div className="flex items-center justify-center">
              <Image
                src="/uni-logo.png"
                alt="University Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Welcome back
              </h1>
              <p className="text-gray-500 text-sm">
                Faculty of Technology Learning Management System
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white" 
              size="lg" 
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? (
                "Signing in..."
              ) : (
                <>
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <div className="text-center">
              <Link
                href="/guest"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Continue as Guest
              </Link>
            </div>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
