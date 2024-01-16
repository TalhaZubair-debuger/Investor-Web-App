import { Link, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";

const NavBar = () => {
  const token = sessionStorage.getItem("jwtToken");
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (token != null) {
      setIsSignIn(true);
    }
  }, []);

  const handleLogOut = () => {
    const jwtToken = sessionStorage.getItem("jwtToken");
    const bearer = jwtToken.slice()[0];
    if (bearer === "Bearer-Investor") {
      navigate("/signin");
      sessionStorage.clear();
    } else {
      navigate("/signin");
      sessionStorage.clear();
    }
  };
  return (
    <nav className="bg-white border-gray-200">
      <div className="md:text-sm md:space-y-4 lg:space-y-0 lg:text-lg max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-black tracking-wider text-2xl font-semibold whitespace-nowrap">
            Distribex
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact Us</NavItem>
            <NavItem to="/distributors">Distributors</NavItem>
            {isSignIn === true ? (
              <NavItem to="/invertorDashboard">Investor Dashboard</NavItem>
            ) : null}
            {isSignIn === true ? (
              <button onClick={handleLogOut}>LogOut</button>
            ) : (
              <NavItem to="/signin">Sign In</NavItem>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
