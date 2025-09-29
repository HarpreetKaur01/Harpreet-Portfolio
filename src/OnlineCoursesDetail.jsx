import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Course 1 – Psychology: Introduction",
    images: [
        "images/psychology-introduction.jpg",
        "images/psychology-outlines.jpg",
      "images/psychology-activity-example.jpg" ]
  },
  {
    title: "Course 2 – Digital Fluency For The Workforce",
    images: [
      "/images/DFW-header.jpg",
      "/images/dfw-outlines.jpg",
      "/images/DFW-actiity.jpg"
    ]
  },
  {
    title: "Course 3 – IGS Community & Industry Engagement",
    images: [
      "/images/IGS-header.jpg",
      "/images/IGS-outcomes.jpg",
      "/images/IGS-activity.jpg"
    ]
  }
];

const OnlineCoursesDetail = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Back Link */}
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Online Course Builds</h1>

       {/* About */}
      <section className="mb-6 bg-blue-50 py-12 px-6">
        <h2 className="text-xl font-semibold mb-2">About These Projects</h2>
        <p className="text-gray-700 leading-relaxed">
          These courses are online and/or hybrid courses developed for the
          Blackboard Learning System. I worked on these projects with content
          experts, instructional designers, graphic designers, and occasionally
          other developers. The images provided are only small snippets of
          courses that spanned 50+ web pages. All of these courses are built on
          the foundations of HTML, CSS, and JS.
        </p>
        <h2 className="text-xl font-semibold mb-2">Role</h2>
        <p className="text-gray-700">Web Developer</p>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <p className="text-gray-700">
          Web Development, Web Design, Web Accessibility, HTML, CSS, JS
        </p>
      </section>


     

      {/* Courses */}
      {courses.map((course, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {course.images.map((img, j) => (
              <img
                key={j}
                src={img}
                alt={`${course.title}-${j}`}
                className="w-full h-48 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      ))}

     
    </div>
  );
};

export default OnlineCoursesDetail;
