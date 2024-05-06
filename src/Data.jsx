const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://www.aalavai.com/uploads/posts/1647938450ReactNativeFeaturedImage.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
    dueDate: "2024-07-31",
    progress: 50,
    completed: false,
  },
  {
    id: 2,
    name: "Web Development Bootcamp",
    instructor: "Jane Smith",
    description:
      "Become a full-stack web developer with this comprehensive bootcamp.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://faatix.com/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_41702707002.jpg",
    duration: "12 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 7:00 PM - 9:00 PM",
    location: "Online",
    duedate: "16 Oct, 2024",
    prerequisites: ["Basic HTML", "Basic CSS", "Basic JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "Learn the basics of HTML and create your first web page.",
      },
      {
        week: 2,
        topic: "Introduction to CSS",
        content: "Learn how to style your web pages using CSS.",
      },
    ],
    students: [
      {
        id: 103,
        name: "Frank Miller",
        email: "frank@example.com",
      },
      {
        id: 104,
        name: "Grace Davis",
        email: "grace@example.com",
      },
    ],
    dueDate: "2024-06-17",
    progress: 80,
    completed: false,
  },
  {
    id: 3,
    name: "Machine Learning Fundamentals",
    instructor: "Alex Johnson",
    description:
      "Learn the fundamentals of machine learning and predictive modeling.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:624/1*lWUrvA5VbERiOQFwtWgCbQ.png",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    duedate: "05 Aug, 2024",
    prerequisites: ["Basic Python knowledge", "Understanding of statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content:
          "Overview of machine learning, supervised and unsupervised learning.",
      },
      {
        week: 2,
        topic: "Linear Regression",
        content: "Understanding linear regression and its applications.",
      },
    ],
    students: [
      {
        id: 105,
        name: "Isabella Martinez",
        email: "isabella@example.com",
      },
      {
        id: 106,
        name: "Jack Anderson",
        email: "jack@example.com",
      },
    ],
    dueDate: "2024-12-31",
    progress: 20,
    completed: false,
  },
];

export default courseModel;
