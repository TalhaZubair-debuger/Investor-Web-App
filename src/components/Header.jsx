import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#000]">
      <nav className="flex justify-between">
        <div className="flex px-8 py-3 items-center">
          <Link to="/">
            <img className="w-56" src={logo} alt="Logo Image" />
          </Link>
        </div>

        <ul className="flex space-x-5 justify-center p-5 text-white ">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/invertorDashboard">Investor Dashboard</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
