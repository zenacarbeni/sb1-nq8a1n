import React from 'react';
import { BookOpen, Clock, Users } from 'lucide-react';

const courses = [
  {
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    students: 1234,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
  },
  {
    title: "Data Science Essentials",
    description: "Master the fundamentals of data analysis",
    students: 856,
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Digital Marketing",
    description: "Learn modern marketing strategies",
    students: 2341,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80"
  }
];

export default function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our most popular courses and start learning today
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{course.description}</p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {course.students} students
                    </div>
                    <div className="flex items-center text-sm text-gray-500 ml-6">
                      <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {course.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}