import PropTypes from "prop-types";

const AboutItem = ({ heading, children, paragraph, address }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="p-3 text-black rounded-full bg-blue-100/80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {children}
        </svg>
      </span>

      <h2 className="mt-4 text-lg font-medium text-gray-800">{heading}</h2>
      <p className="mt-2 text-gray-500">{paragraph}</p>
      <p className="mt-2 text-black">{address}</p>
    </div>
  );
};

AboutItem.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  address: PropTypes.string,
  children: PropTypes.string,
};

export default AboutItem;
