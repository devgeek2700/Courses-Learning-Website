import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courseModel from "../Data";
import "../css/course.css";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details based on id
    const selectedCourse = courseModel.find(
      (course) => course.id === parseInt(id)
    );
    setCourse(selectedCourse);
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  let statusColor = "";
  switch (course.enrollmentStatus) {
    case "Open":
      statusColor = "green";
      break;
    case "Closed":
      statusColor = "red";
      break;
    case "In Progress":
      statusColor = "purple";
      break;
    default:
      statusColor = "black";
  }

  return (
    <div>
      {/* Navbar */}
      <nav class="navbar">
        <div class="navbar-container navcontainer">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <h1 class="logo">CourseLearn</h1>
        </div>
      </nav>

      <h2 className="corheadtxt">{course.name}</h2>
      <p className="paratxt">
        Instructor: <span id="blcktxt"> {course.instructor}</span>
      </p>
      <p className="paratxt">
        Description: <span id="blcktxt">{course.description}</span>
      </p>
      <p className="paratxt">
        Status:{" "}
        <span id="statustxt" style={{ color: statusColor }}>
          {course.enrollmentStatus}
        </span>
      </p>
      <p className="paratxt">
        Duration: <span id="blcktxt">{course.duration}</span>
      </p>
      <p className="paratxt">
        Schedule: <span id="blcktxt">{course.schedule}</span>
      </p>
      <p className="paratxt">
        Location: <span id="blcktxt">{course.location}</span>
      </p>
      <p className="paratxt">Prerequisites:</p>
      <ul>
        {course.prerequisites.map((prerequisite, index) => (
          <div className="lsttxt" key={index}>
            <li>{prerequisite}</li>
          </div>
        ))}
      </ul>
      <details>
        <summary className="paratxt">Syllabus</summary>
        <ul>
          {course.syllabus.map((item) => (
            <div className="syballus" key={item.week}>
              <li>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            </div>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetails;
