import "./App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import SideBar from "./components/SlideBar";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{ display: "flex" }}>
        <SideBar />
        <Dashboard />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
