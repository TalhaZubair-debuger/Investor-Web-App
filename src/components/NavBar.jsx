import { Link } from "react-router-dom";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/invertorDashboard">Investor Dashboard</Link>
        <Button>Sign Up</Button>
        <Button>Sign In</Button>
      </ul>
    </nav>
  );
};

export default NavBar;
