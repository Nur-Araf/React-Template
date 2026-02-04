import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLogin from "./pages/DashboardLogin";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardSettings from "./pages/DashboardSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLogin />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "settings", element: <DashboardSettings /> },
    ],
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
