import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import AppLayout from "./pages/Layout/AppLayout";
import Explore from "./pages/Explore/Explore";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore", element: <Explore /> },
    ],
  },
]);
