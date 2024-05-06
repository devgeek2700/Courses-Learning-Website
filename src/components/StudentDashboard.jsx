import React from "react";
import { connect } from "react-redux";
import { enrollCourse, markCompleted } from "../actions/courseActions";
import courseModel from "../Data"; // Import courseModel from Data.jsx
import "../css/dashboard.css";

const StudentDashboard = ({ enrolledCourses, enrollCourse, markCompleted }) => {
  // Filter the courses based on enrolledCourses state
  const enrolledCourseDetails = courseModel.filter((course) =>
    enrolledCourses.includes(course.id)
  );

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <svg
              className="site-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256a15 15 0 00-7.1-12.8l-52-32 52-32.5a15 15 0 000-25.4L264 2.3c-4.8-3-11-3-15.9 0L7 153.3a15 15 0 000 25.4L58.9 211 7.1 243.3a15 15 0 000 25.4L58.8 301 7.1 333.3a15 15 0 000 25.4l241 151a15 15 0 0015.9 0l241-151a15 15 0 00-.1-25.5l-52-32 52-32.5A15 15 0 00512 256zM43.3 166L256 32.7 468.7 166 256 298.3 43.3 166zM468.6 346L256 479.3 43.3 346l43.9-27.4L248 418.7a15 15 0 0015.8 0L424.4 319l44.2 27.2zM256 388.3L43.3 256l43.9-27.4L248 328.7a15 15 0 0015.8 0L424.4 229l44.1 27.2L256 388.3z" />
            </svg>
            <span className="site-title">CourseLearn</span>
          </div>
          <div className="header-search">
            <button className="button-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
                <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" />
              </svg>
            </button>
            <input type="search" placeholder="Search Documentation..." />
          </div>
        </div>
        <div className="main">
          <div className="sidebar">
            <ul>
              <li>
                <a href="/">
                  <i className="lni lni-text-format"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  <i className="lni lni-home"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni lni-text-format"></i>
                  <span>Course Deatils</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni lni-bar-chart"></i>
                  <span>Course Analytics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni lni-grid"></i>
                  <span>Course Ratings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni lni-bullhorn"></i>
                  <span>Conatct</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lni lni-support"></i>
                  <span>Help & Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Cards */}
          <div className="page-content">
            <h1>Enrolled Courses</h1>

            <div className="Cardcontainer">
              {enrolledCourseDetails.map((course) => (
                <div className="cards" key={course.id}>
                  <div className="card-item">
                    {/* Course Thumbnail */}
                    <div
                      className="card-image"
                      style={{
                        backgroundImage: `url(${course.thumbnail})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    {/* Course Details */}
                    <div className="card-info">
                      {/* Course Name */}
                      <h2 className="card-title">{course.name}</h2>
                      {/* Course Instructor */}
                      <p className="card-intro">
                        Instructor: {course.instructor}
                      </p>
                      {/* Due Date */}
                      <p className="card-intro">
                        Due Date: {course.dueDate}
                      </p>
                      {/* Progress Bar */}
                      <progress
                        value={course.progress}
                        max="100"
                      ></progress>
                      {/* Button to mark course as completed */}
                      <button
                        type="button"
                        className={`compBtn ${
                          course.completed ? "completed" : ""
                        }`}
                        onClick={() => markCompleted(course.id)}
                      >
                        {course.completed
                          ? "Completed"
                          : "Mark as Completed"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  enrolledCourses: state.courses.enrolledCourses,
});

export default connect(mapStateToProps, { enrollCourse, markCompleted })(
  StudentDashboard
);
