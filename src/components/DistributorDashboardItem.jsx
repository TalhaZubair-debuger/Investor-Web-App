import PropTypes from "prop-types";

const DistributorDashboardItem = ({ title, price, rs }) => {
  return (
    <div className="flex justify-between mb-5 font-light text-gray-500">
      <span className="font-bold">
        <b>{title}</b>
      </span>
      <span>
        {rs ? <b className="font-bold">RS. </b> : ""}
        {price}
        {rs ? "" : <b className="font-bold"> %</b>}
      </span>
    </div>
  );
};

DistributorDashboardItem.propTypes = {
  title: PropTypes.string,
  rs: PropTypes.string,
  price: PropTypes.string,
};

export default DistributorDashboardItem;
