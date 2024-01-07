import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import InvestorDashboard from "./components/InvestorDashboard";
import AppLayout from "./layout/AppLayout";
import Distributors from "./components/Distributors";
import DistributorPortfolio from "./components/DistributorPortfolio";
import InvestCheckout from "./components/InvestCheckout";
import TermsAndConditions from "./components/TermsAndConditions";
import DistributorDashboard from "./components/DistributorDashboard";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import GetInvestment from "./components/GetInvestment";
import DistributorSignIn from "./components/DistributorSignIn";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/invertorDashboard", element: <InvestorDashboard /> },
      { path: "/signup", element: <Signup /> },
      { path: "/distributors", element: <Distributors /> },
      { path: "/distributor-portfolio", element: <DistributorPortfolio /> },
      { path: "/invest-now", element: <InvestCheckout /> },
      { path: "/signin", element: <Signin /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> },
      { path: "/get-investment", element: <GetInvestment /> },
      { path: "/signin-distributor", element: <DistributorSignIn /> },
      { path: "/distributor-dashboard", element: <DistributorDashboard /> },
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
