import PropTypes from "prop-types";

const FormItem = ({ children, label, type, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {children}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

FormItem.propTypes = {
  children: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};

export default FormItem;
