"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import React from "react";

const courses = [
  {
    title: "Introction to Web Development",
    image: "/course1.jpeg",
    category: "ITC2265",
    progress: 60,
  },
  {
    title: "Fundamentals of Machine Learning",
    image: "/course2.jpeg",
    category: "ITC2252",
    progress: 30,
  },
  {
    title: "Introduction to Grapic design",
    image: "/course3.jpeg",
    category: "ITC2214",
    progress: 45,
  },
  {
    title: "UI Animation Fundamentals",
    image: "/course1.jpeg",
    category: "Design",
    progress: 15,
  },
  {
    title: "Design Systems Architecture",
    image: "/course2.jpeg",
    category: "Design",
    progress: 80,
  },
];

const timeline = [
  {
    id: 1,
    title: "Assignment 1: Data Structures",
    course: "ITC2252",
    postDate: "2025-01-01T10:00:00+05:30",
    dueDate: "2025-01-10T23:59:59+05:30",
    status: "pending",
  },
  {
    id: 2,
    title: "Mid Semester Examination",
    course: "ITC2265",
    postDate: "2024-12-25T08:30:00+05:30",
    dueDate: "2025-01-03T12:00:00+05:30",
    status: "submitted",
  },
  {
    id: 3,
    title: "Group Project Submission",
    course: "ITC2214",
    postDate: "2025-01-02T15:00:00+05:30",
    dueDate: "2025-01-15T23:59:59+05:30",
    status: "submitted",
  },
  {
    id: 4,
    title: "Quiz 2: Web Technologies",
    course: "ITC2265",
    postDate: "2025-01-03T09:00:00+05:30",
    dueDate: "2025-01-05T18:00:00+05:30",
    status: "pending",
  },
];

const onlineUsers = [
  {
    name: "Gimhan Sajee",
    avatar: "/avatar1.png",
    status: "In Meeting",
  },
  {
    name: "Isuru Kanchana",
    avatar: "/avatar2.png",
    status: "Available",
  },
  {
    name: "Pasindu Gayan",
    avatar: "/avatar3.png",
    status: "Learning",
  },
  {
    name: "Kasun Harsha",
    avatar: "/avatar4.png",
    status: "Available",
  },
];

function getCountdown(dueDate: string): string {
  const now = new Date("2025-01-04T16:36:34+05:30");
  const due = new Date(dueDate);

  if (now > due) return "Overdue";

  const diff = due.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const parts = [];
  if (days > 0) parts.push(`${days} ${days === 1 ? "day" : "days"}`);
  if (hours > 0) parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
  if (minutes > 0) parts.push(`${minutes} ${minutes === 1 ? "min" : "mins"}`);

  return parts.join(" ") || "Less than a minute";
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getStatusColor(status: string, isOverdue: boolean): string {
  if (isOverdue) return "text-red-600";
  switch (status) {
    case "submitted":
      return "text-green-600";
    case "pending":
      return "text-yellow-600";
    default:
      return "text-gray-600";
  }
}

function getStatusBadgeVariant(status: string, isOverdue: boolean): "default" | "destructive" | "secondary" | "outline" {
  if (isOverdue) return "destructive";
  switch (status) {
    case "submitted":
      return "default";
    case "pending":
      return "secondary";
    default:
      return "outline";
  }
}

export default function DashboardPage() {
  const date = new Date();
  const [emblaRef] = useEmblaCarousel(
    { 
      align: "start",
      loop: true,
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 3 }
      },
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  return (
    <div className="max-w-8xl mx-auto p-10">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* Courses Section */}
        <div className="md:col-span-3 space-y-6 p-4  shadow-md rounded-lg">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">My Courses</h2>
              <p className="text-sm text-gray-500">Continue where you left off</p>
            </div>
            <Link
              href="/courses"
              className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-2"
            >
              View All
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {courses.map((course, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0">
                    <Link href="/courses">
                      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-200 h-full border-0 bg-gray-50 mx-2">
                        <div className="aspect-video relative">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-gray-100">
                              {course.category}
                            </Badge>
                          </div>
                          <h3 className="font-medium mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-600 transition-all duration-500"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-500 whitespace-nowrap">
                              {course.progress}%
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="rounded-lg shadow-md">
          <div className="space-y-6 p-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Calendar</h2>
              <p className="text-sm text-gray-500">Your schedule for the month</p>
            </div>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                className="rounded-md w-full h-full flex items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Online Users Section */}
        <div className="rounded-lg  shadow-md">
          <div className="p-4 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Online Users</h2>
                <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  {onlineUsers.length} online
                </span>
              </div>
              <p className="text-sm text-gray-500">Currently active users</p>
            </div>
            <div className="space-y-4">
              {onlineUsers.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group hover:bg-white p-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10 ring-2 ring-white">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.status}</p>
                    </div>
                  </div>
                  <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="md:col-span-3 bg-white  shadow-md rounded-lg p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Timeline</h2>
              <p className="text-sm text-gray-500">Track upcomming activities and submissions</p>
            </div>
            <Link
              href="/assignments"
              className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-2"
            >
              View All
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-3 font-medium text-gray-500">Title</th>
                  <th className="text-left pb-3 font-medium text-gray-500">Course</th>
                  <th className="text-left pb-3 font-medium text-gray-500">Posted</th>
                  <th className="text-left pb-3 font-medium text-gray-500">Due In</th>
                  <th className="text-left pb-3 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {timeline.map((item) => {
                  const countdown = getCountdown(item.dueDate);
                  const isOverdue = countdown === "Overdue";

                  return (
                    <tr key={item.id} className="group">
                      <td className="py-3 pr-4">
                        <div className="font-medium group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </div>
                      </td>
                      <td className="py-3">
                        <Badge variant="secondary" className="bg-gray-100">
                          {item.course}
                        </Badge>
                      </td>
                      <td className="py-3">{formatDate(item.postDate)}</td>
                      <td
                        className={cn(
                          "py-3 font-medium",
                          isOverdue ? "text-red-600" : "text-gray-600"
                        )}
                      >
                        {countdown}
                      </td>
                      <td className="py-3">
                        <Badge
                          variant={getStatusBadgeVariant(item.status, isOverdue)}
                          className="capitalize"
                        >
                          {isOverdue ? "overdue" : item.status}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
