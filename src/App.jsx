import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AppLayout from "./layout/AppLayout";
import InvestorDashboard from "./components/InvestorDashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        { path: "/invertorDashboard", element: <InvestorDashboard /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
