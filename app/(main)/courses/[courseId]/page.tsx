"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Video, 
  FileText, 
  GraduationCap,
  ChevronRight,
  PlayCircle,
  FileIcon,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Image from "next/image";

// Mock data for a specific course
const courseDetails = {
  id: 1,
  title: "Data Structures and Algorithms",
  code: "ICT2212",
  description: "Learn fundamental data structures and algorithmic principles that are essential for software development.",
  instructor: "Dr. John Smith",
  progress: 65,
  totalStudents: 1200,
  duration: "12 weeks",
  image: "/course1.jpeg",
  category: "Computer Science",
  outline: [
    {
      title: "Module 1: Introduction to Data Structures",
      items: [
        { title: "Lecture 1 - Introduction to Data Structures and Algorithms", type: "lecture", duration: "1h 30m", status: "completed" },
        { title: "Tutorial 1 - Basic Data Structure Implementation", type: "tutorial", duration: "45m", status: "completed" },
        { title: "Assignment 1", type: "assignment", dueDate: "2025-01-15", status: "pending" }
      ]
    },
    {
      title: "Module 2: Arrays and Linked Lists",
      items: [
        { title: "Lecture 2 - Arrays", type: "lecture", duration: "1h 15m", status: "completed" },
        { title: "Lecture 3 - Searching Algorithms", type: "lecture", duration: "1h 30m", status: "in-progress" },
        { title: "Tutorial 2 - Array Operations", type: "tutorial", duration: "45m", status: "pending" }
      ]
    },
    {
      title: "Module 3: Sorting Algorithms",
      items: [
        { title: "Lecture 4 - Sorting Algorithms Part 1", type: "lecture", duration: "1h 30m", status: "locked" },
        { title: "Lecture 5 - Sorting Algorithms Part 2", type: "lecture", duration: "1h 30m", status: "locked" },
        { title: "Assignment 2", type: "assignment", dueDate: "2025-02-01", status: "locked" }
      ]
    }
  ]
};

export default function CourseDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Course Header */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
          <div className="relative h-[300px] w-full">
            <Image
              src={courseDetails.image}
              alt={courseDetails.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {courseDetails.code}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {courseDetails.category}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {courseDetails.title}
              </h1>
              <p className="text-white/80 max-w-2xl">
                {courseDetails.description}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Instructor</p>
                  <p className="font-medium">{courseDetails.instructor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-medium">{courseDetails.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Students</p>
                  <p className="font-medium">{courseDetails.totalStudents}</p>
                </div>
              </div>
              <div className="w-48">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{courseDetails.progress}%</span>
                </div>
                <Progress value={courseDetails.progress} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Course Content</h2>
          <div className="space-y-6">
            {courseDetails.outline.map((module, moduleIndex) => (
              <div key={moduleIndex} className="border rounded-lg">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-medium">{module.title}</h3>
                </div>
                <div className="divide-y">
                  {module.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        item.status === 'locked' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {item.type === 'lecture' && <Video className="h-5 w-5 text-blue-500" />}
                        {item.type === 'tutorial' && <FileText className="h-5 w-5 text-purple-500" />}
                        {item.type === 'assignment' && <GraduationCap className="h-5 w-5 text-green-500" />}
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                            {item.duration && (
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {item.duration}
                              </div>
                            )}
                            {item.dueDate && (
                              <div className="flex items-center gap-1">
                                <AlertCircle className="h-4 w-4" />
                                Due: {item.dueDate}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {item.status === 'completed' && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                        {item.status === 'in-progress' && (
                          <PlayCircle className="h-5 w-5 text-blue-500" />
                        )}
                        {item.status === 'locked' && (
                          <FileIcon className="h-5 w-5 text-gray-400" />
                        )}
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
