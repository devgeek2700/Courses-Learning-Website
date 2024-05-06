const initialState = {
    enrolledCourses: [],
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ENROLL_COURSE":
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload],
        };
      case "MARK_COMPLETED":
        return {
          ...state,
          enrolledCourses: state.enrolledCourses.map((course) =>
            course.id === action.payload
              ? { ...course, completed: !course.completed }
              : course
          ),
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  