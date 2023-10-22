import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="bg-slate-800 hover:bg-slate-400 text-white font-semibold py-3 px-5 rounded">
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string,
};
