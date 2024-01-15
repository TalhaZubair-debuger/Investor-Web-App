import PropTypes from "prop-types";

const TeamItem = ({ image, name, rank }) => {
  return (
    <div className="text-center text-gray-500">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={image}
        alt={name}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
        <p>{name}</p>
      </h3>
      <p>{rank}</p>
    </div>
  );
};

export default TeamItem;

TeamItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  rank: PropTypes.string,
};
