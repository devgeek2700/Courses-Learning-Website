export const enrollCourse = (course) => {
    return {
      type: "ENROLL_COURSE",
      payload: course,
    };
  };
  
  export const markCompleted = (courseId) => {
    return {
      type: "MARK_COMPLETED",
      payload: courseId,
    };
  };
  