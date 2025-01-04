"use client";

import * as React from "react";
import { AdvancedCalendar } from "@/components/ui/advanced-calendar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const views = [
  { value: "month", label: "Month" },
  { value: "week", label: "Week" },
  { value: "day", label: "Day" },
] as const;

type Course = {
  value: string;
  label: string;
};

const courses: Course[] = [
  { value: "all", label: "All Courses" },
  { value: "web-dev", label: "Web Development" },
  { value: "ui-design", label: "UI/UX Design" },
  { value: "mobile", label: "Mobile Development" },
  { value: "data", label: "Data Structures" },
];

const eventTypes = [
  { id: "global", label: "Global Events", color: "bg-blue-500" },
  { id: "course", label: "Course Events", color: "bg-green-500" },
  { id: "group", label: "Group Events", color: "bg-purple-500" },
  { id: "user", label: "Personal Events", color: "bg-orange-500" },
] as const;

// Mock data for events
const events = [
  {
    id: 1,
    title: "Final Examination",
    type: "global",
    date: "2025-01-15",
    time: "09:00 AM",
    course: "All Courses",
    description: "End semester examination for all courses",
  },
  {
    id: 2,
    title: "Design Workshop",
    type: "course",
    date: "2025-01-10",
    time: "02:00 PM",
    course: "UI/UX Design",
    description: "Interactive workshop on design principles",
  },
  {
    id: 3,
    title: "Group Project Meeting",
    type: "group",
    date: "2025-01-08",
    time: "11:00 AM",
    course: "Web Development",
    description: "Weekly team sync for the final project",
  },
  {
    id: 4,
    title: "Assignment Deadline",
    type: "course",
    date: "2025-01-20",
    time: "11:59 PM",
    course: "Mobile App Development",
    description: "Submit the final project documentation",
  },
  {
    id: 5,
    title: "Personal Study Session",
    type: "user",
    date: "2025-01-12",
    time: "04:00 PM",
    course: "Data Structures",
    description: "Review session for upcoming quiz",
  },
] as const;

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [view, setView] = React.useState<(typeof views)[number]["value"]>("month");
  const [selectedCourse, setSelectedCourse] = React.useState<Course>(courses[0]);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [courseOpen, setCourseOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    global: true,
    course: true,
    group: true,
    user: true,
  });

  const filteredEvents = React.useMemo(() => {
    return events.filter(
      (event) => filters[event.type as keyof typeof filters]
    );
  }, [filters]);

  return (
    <div className="h-[calc(100vh-theme(spacing.20))] px-6 py-8 bg-gray-50">
      <div className="flex h-full gap-6">
        {/* Filters Sidebar */}
        <div className="w-72 flex flex-col gap-6 h-full">
          {/* Event Types */}
          <div className="bg-white rounded-lg border">
            <h2 className="text-lg font-semibold px-6 py-4">Event Types</h2>
            <div className="px-6 pb-4 space-y-4">
              {eventTypes.map((type) => (
                <div key={type.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${type.color}`} />
                    <span className="text-gray-600">{type.label}</span>
                  </div>
                  <Switch
                    checked={filters[type.id as keyof typeof filters]}
                    onCheckedChange={(checked) =>
                      setFilters((prev) => ({ ...prev, [type.id]: checked }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="bg-white rounded-lg border flex-1 min-h-0">
            <h2 className="text-lg font-semibold px-6 py-4">Upcoming Events</h2>
            <div className="pb-4 overflow-auto h-[calc(100%-theme(spacing.20))]">
              <div className="space-y-3">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all group cursor-pointer"
                  >
                    <div 
                      className={`w-1 self-stretch rounded-full ${
                        event.type === 'global' ? 'bg-blue-500' :
                        event.type === 'course' ? 'bg-green-500' :
                        event.type === 'group' ? 'bg-purple-500' : 'bg-orange-500'
                      }`} 
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sm truncate group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>
                        <Badge 
                          variant="secondary" 
                          className="text-xs capitalize bg-gray-100 text-gray-600 shrink-0"
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {event.date} at {event.time}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Calendar Section */}
          <div className="bg-white border rounded-lg flex-1">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-semibold">Calendar</h1>
                  <p className="text-sm text-gray-500">Manage your schedule and events</p>
                </div>
                <div className="flex items-center gap-4">
                  {/* View Selector */}
                  <div className="relative">
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-32 justify-between"
                      onClick={() => setViewOpen(!viewOpen)}
                    >
                      {views.find((v) => v.value === view)?.label || "Month"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                    {viewOpen && (
                      <div className="absolute top-full mt-2 w-32 rounded-md border bg-white shadow-lg">
                        <div className="py-1">
                          {views.map((v) => (
                            <div
                              key={v.value}
                              className={cn(
                                "flex items-center px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer",
                                view === v.value && "bg-gray-100"
                              )}
                              onClick={() => {
                                setView(v.value);
                                setViewOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  view === v.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {v.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Course Selector */}
                  <div className="relative">
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-56 justify-between"
                      onClick={() => setCourseOpen(!courseOpen)}
                    >
                      {selectedCourse.label}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                    {courseOpen && (
                      <div className="absolute top-full mt-2 w-56 rounded-md border bg-white shadow-lg">
                        <div className="py-1">
                          {courses.map((course) => (
                            <div
                              key={course.value}
                              className={cn(
                                "flex items-center px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer",
                                selectedCourse.value === course.value && "bg-gray-100"
                              )}
                              onClick={() => {
                                setSelectedCourse(course);
                                setCourseOpen(false);
                              }}
                            >
                              {course.label}
                              {selectedCourse.value === course.value && (
                                <Check className="ml-auto h-4 w-4" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <AdvancedCalendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
