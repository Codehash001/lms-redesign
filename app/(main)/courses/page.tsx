"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PageTransition, FadeInStagger, FadeIn } from "@/components/PageTransition";

// Mock data for courses
const courses = {
  inProgress: [
    {
      id: 1,
      title: "Colour Contrast and Accessibility",
      description: "Learn the basics of web development with HTML, CSS, and JavaScript",
      instructor: "John Doe",
      progress: 65,
      totalStudents: 1200,
      duration: "8 weeks",
      image: "/course1.jpeg",
      category: "ITC2217",
    },
    {
      id: 2,
      title: "Introduction to 3D Modeling",
      description: "Master the art of creating beautiful and functional user interfaces",
      instructor: "Jane Smith",
      progress: 40,
      totalStudents: 800,
      duration: "6 weeks",
      image: "/course2.jpeg",
      category: "ITC2217",
    },
    {
      id: 3,
      title: "Prototyping and Usability Testing",
      description: "Build cross-platform mobile applications using React Native",
      instructor: "Mike Johnson",
      progress: 25,
      totalStudents: 950,
      duration: "10 weeks",
      image: "/course3.jpeg",
      category: "ITC2254",
    },
  ],
  future: [
    {
      id: 4,
      title: "UI Animation Fundamentals",
      description: "Deep dive into advanced JavaScript programming concepts",
      instructor: "Sarah Wilson",
      totalStudents: 600,
      duration: "8 weeks",
      image: "/course1.jpeg",
      category: "ITC2252",
      startDate: "2025-02-15",
    },
    {
      id: 5,
      title: "Design Systems Architecture",
      description: "Learn cloud computing fundamentals with AWS",
      instructor: "David Brown",
      totalStudents: 750,
      duration: "12 weeks",
      image: "/course2.jpeg",
      category: "ITC2252",
      startDate: "2025-03-01",
    },
  ],
  past: [
    {
      id: 6,
      title: "Advanced UI Patterns",
      description: "Introduction to Python programming language",
      instructor: "Lisa Anderson",
      totalStudents: 1500,
      duration: "6 weeks",
      image: "/course3.jpeg",
      category: "ITC2218",
      grade: "A",
      completedDate: "2024-12-15",
    },
    {
      id: 7,
      title: "Design Thinking Workshop",
      description: "Understanding fundamental data structures and algorithms",
      instructor: "Robert Clark",
      totalStudents: 900,
      duration: "10 weeks",
      image: "/course1.jpeg",
      category: "ITC2217",
      grade: "A+",
      completedDate: "2024-11-30",
    },
  ],
};

export default function CoursesPage() {
  return (
    <PageTransition>
      <div className="container mx-auto p-10">
        <FadeInStagger>
          <div className="space-y-8">
            {/* Header Section */}
            <FadeIn>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold">My Courses</h1>
                  <p className="text-gray-500 mt-1">Manage and track your learning journey</p>
                </div>
              </div>
            </FadeIn>

            <Tabs defaultValue="inProgress" className="space-y-6">
              <TabsList className="bg-white p-1 gap-1">
                <TabsTrigger value="inProgress" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  In Progress
                </TabsTrigger>
                <TabsTrigger value="future" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Future
                </TabsTrigger>
                <TabsTrigger value="past" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Past
                </TabsTrigger>
              </TabsList>

              {/* In Progress Courses */}
              <TabsContent value="inProgress" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.inProgress.map((course, index) => (
                    <FadeIn key={course.id} delay={index * 0.1}>
                      <Link href={`/courses/${course.id}`}>
                        <Card 
                          className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        >
                          <div className="relative h-[200px] w-full">
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 space-y-4">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary" className="bg-gray-100">
                                  {course.category}
                                </Badge>
                              </div>
                              <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                                {course.title}
                              </h3>
                              <p className="text-gray-500 text-sm line-clamp-2">
                                {course.description}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-medium">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>

              {/* Future Courses */}
              <TabsContent value="future" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.future.map((course, index) => (
                    <FadeIn key={course.id} delay={index * 0.1}>
                      <Link href={`/courses/${course.id}`}>
                        <Card 
                          className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        >
                          <div className="relative h-[200px] w-full">
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 space-y-4">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary" className="bg-gray-100">
                                  {course.category}
                                </Badge>
                              </div>
                              <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                                {course.title}
                              </h3>
                              <p className="text-gray-500 text-sm line-clamp-2">
                                {course.description}
                              </p>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Starts On</span>
                              <span className="font-medium">{course.startDate}</span>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>

              {/* Past Courses */}
              <TabsContent value="past" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.past.map((course, index) => (
                    <FadeIn key={course.id} delay={index * 0.1}>
                      <Link href={`/courses/${course.id}`}>
                        <Card 
                          className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        >
                          <div className="relative h-[200px] w-full">
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 space-y-4">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary" className="bg-gray-100">
                                  {course.category}
                                </Badge>
                              </div>
                              <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                                {course.title}
                              </h3>
                              <p className="text-gray-500 text-sm line-clamp-2">
                                {course.description}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Grade</span>
                                <span className="font-medium text-green-600">{course.grade}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Completed</span>
                                <span className="font-medium">{course.completedDate}</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </FadeInStagger>
      </div>
    </PageTransition>
  );
}
