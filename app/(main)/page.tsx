"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BellRing,
  Calendar,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Mock data for announcements
const announcements = [
  {
    id: 1,
    title: "Scholarship Program 2025 - Japan's Alumni Association",
    date: "2025-01-04",
    category: "Scholarship",
    description: "Applications are now open for the 2025 Scholarship Program in NSW & ACT Australia.",
    link: "#",
    isNew: true,
  },
  {
    id: 2,
    title: "Notice for Student Record Books",
    date: "2025-01-03",
    category: "Academic",
    description: "Important information regarding student record books for the current semester.",
    link: "#",
    isNew: true,
  },
  {
    id: 3,
    title: "Registration - Examinations of Second Semester",
    date: "2025-01-02",
    category: "Examination",
    description: "Registration for second semester examinations is now open.",
    link: "#",
    isNew: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto p-10 mt-12">
      {/* Welcome Banner */}
      <Card className="relative w-full h-[400px] overflow-hidden mb-8">
        <Image
          src="/home-screen.png"
          alt="Faculty of Technology Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
          <Badge 
            variant="outline" 
            className="bg-white/10 text-white border-white/20 backdrop-blur-sm mb-4 w-fit"
          >
            Faculty of Technology
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            University of Sri Jayewardenepura
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Learning Management System
          </p>
          <div className="flex gap-4">
            <Button 
              className="bg-white text-black hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <Link href="/courses">
                Go to Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="text-white border-white/20 bg-black/20 hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link href="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </Card>

      {/* Announcements Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Faculty Announcements</h2>
            <p className="text-sm text-gray-500">Stay updated with the latest news</p>
          </div>
          <Badge 
            variant="outline" 
            className="gap-1 py-2 px-4"
          >
            <BellRing className="h-4 w-4" />
            {announcements.filter(a => a.isNew).length} New
          </Badge>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6"
        >
          {announcements.map((announcement) => (
            <motion.div key={announcement.id} variants={item}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-gray-100">
                        {announcement.category}
                      </Badge>
                      {announcement.isNew && (
                        <Badge variant="default" className="bg-green-500">
                          New
                        </Badge>
                      )}
                    </div>
                    <Link href={announcement.link} className="group/link">
                      <h3 className="text-xl font-semibold mb-2 group-hover/link:text-blue-600 transition-colors flex items-center gap-2">
                        {announcement.title}
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-base mb-4 leading-relaxed">
                      {announcement.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {announcement.date}
                    </div>
                  </div>
                  {announcement.isNew && (
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
