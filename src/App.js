import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import { createStore } from "redux"; // Import createStore
import rootReducer from "./reducers"; // Import your root reducer
import CourseDetails from "./components/CourseDetails.js";
import CourseListing from "./components/CourseListing";
import StudentDashboard from "./components/StudentDashboard.jsx";

const store = createStore(rootReducer); // Create Redux store

const router = createBrowserRouter([
  {
    path: "/",
    element: <CourseListing />,
  },
  {
    path: "/course/:id",
    element: <CourseDetails />,
  },
  {
    path: "/dashboard",
    element: <StudentDashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* Wrap your router with the Provider and pass the Redux store */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
