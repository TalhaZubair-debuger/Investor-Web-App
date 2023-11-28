import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = (props) => {
  return (
    <li>
      <Link
        to={props.to}
        className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
      >
        {props.children}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

export default NavItem;
