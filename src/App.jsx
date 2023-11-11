import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import InvestorDashboard from "./components/InvestorDashboard";
import AppLayout from "./layout/AppLayout";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Distributors from "./components/Distributors";
import DistributorPortfolio from "./components/DistributorPortfolio";

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
      { path: "/signup", element: <Signup /> },
      { path: "/distributors", element: <Distributors /> },
      { path: "/distributor-portfolio", element: <DistributorPortfolio /> },
      { path: "/signin", element: <Signin /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
