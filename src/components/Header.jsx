import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-black">
      <nav className="flex justify-between px-10">
        <div className="flex px-8 py-3 items-center">
          <Link to="/">
            <img className="w-56" src={logo} alt="Logo Image" />
          </Link>
        </div>

        <ul className="flex space-x-8 justify-center p-5 text-white text-lg font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/invertorDashboard">Investor Dashboard</Link>
          <Link to="/distributors">Distributors</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
