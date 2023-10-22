import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#000]">
      <nav className="flex justify-between">
        <div className="">
          <Link to="/">
            <img className="w-96 h-30" src={logo} alt="Logo Image" />
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
