import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import courseModel from "../Data";
import "../css/listing.css";

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [likes, setLikes] = useState({});

  useEffect(() => {
    // Fetch list of courses
    setCourses(courseModel);
  }, []);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3030");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (message) => {
      setLikes(JSON.parse(message.data));
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLike = (courseId) => {
    const socket = new WebSocket("ws://localhost:3030");
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "like",
          courseId: courseId,
        })
      );
    };
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
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

      {/* // search bar */}
      <center id="headtxt">Course Listing</center>
      <div className="serachCont">
        <div className="search">
          <form className="search-form">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#a6a6a6" }}
            ></i>
            <input
              type="text"
              placeholder="Search for books, authors, categories and more.."
              onChange={handleSearch}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      {/* course cards */}
      <section>
        {filteredCourses.map((course) => (
          <article className="card" key={course.id}>
            <figure className="card-img">
              <img src={course.thumbnail} alt={course.name} />
              <figcaption>Image from Data</figcaption>
            </figure>
            <div className="card-body">
              <i
                className="fa-solid fa-thumbs-up"
                style={{ color: "#df014f", cursor: "pointer" }}
                onClick={() => handleLike(course.id)}
              ></i>
              <span style={{ marginLeft: "5px" }}>{likes[course.id] || 0}</span>
              <h2 className="card-title">{course.name}</h2>
              <p className="card-text">{course.description}</p>
              <p>
                Instructor: <span>{course.instructor}</span>
              </p>
              <p>
                Status: <span>{course.enrollmentStatus}</span>
              </p>
              <Link to={`/course/${course.id}`}>Learn More</Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default CourseListing;
