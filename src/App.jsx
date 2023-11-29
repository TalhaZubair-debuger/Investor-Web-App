import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import InvestorDashboard from "./components/InvestorDashboard";
import AppLayout from "./layout/AppLayout";
import Form from "./components/Form";
import Distributors from "./components/Distributors";
import DistributorPortfolio from "./components/DistributorPortfolio";
import InvestCheckout from "./components/InvestCheckout";
import TermsAndConditions from "./components/TermsAndConditions";
import DistributorDashboard from "./components/DistributorDashboard";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/invertorDashboard", element: <InvestorDashboard /> },
      { path: "/signup", element: <Form signup="signup" /> },
      { path: "/distributors", element: <Distributors /> },
      { path: "/distributor-portfolio", element: <DistributorPortfolio /> },
      { path: "/invest-now", element: <InvestCheckout /> },
      { path: "/signin", element: <Form /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> },
      {
        path: "/get-investment",
        element: <Form getInvestment="getInvestment" />,
      },
      {
        path: "/signin-distributor",
        element: <Form distributor="distributor" />,
      },
      {
        path: "/distributor-dashboard",
        element: <DistributorDashboard />,
      },
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
