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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
  const stripePromise = loadStripe(
    "pk_test_51KTWMFEVHmVDTnULjXHngwm35tx5ob0i9KYzd0Yi8VajLKZe7OXepyfDkZ4khIa0s7gSVBBxRLDQ8DegUoLr5acK004DwmUPrY"
  );
  return (
    <Elements stripe={stripePromise}>
      <RouterProvider router={router} />
    </Elements>
  );
};

export default App;
