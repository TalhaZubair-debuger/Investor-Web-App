import { Link } from "react-router-dom";
import mnp from "../assets/m&p.png";

const DistributorsList = () => {
  return (
    <Link
      to="/distributor-portfolio"
      className="flex flex-col items-center bg-white border-2 border-black rounded-lg shadow md:flex-row  hover:bg-gray-100"
    >
      <img
        className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={mnp}
        alt="company logo"
      />
      <div className="flex flex-col justify-center p-4 leading-normal w-[100%]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          M&P
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          We make sure to deliver deliberately. We make sure to deliver
          deliberately.
        </p>
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <span className="font-bold ">Best Products:</span>
            <span className="bg-blue-300 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
              Hair Straightener
            </span>
            <span className="bg-blue-300 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
              Handsfree
            </span>
            <span className="bg-blue-300 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
              Mobile Charger
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <span>Last quarter sales</span>
              <div className="flex justify-center items-center bg-pink-300 text-pink-800 text-md font-medium me-2 px-2.5 py-0.5 rounded">
                Rs.458600
              </div>
            </div>
            <div className="space-y-1">
              <span>Next quater prediction</span>
              <div className="flex justify-center items-center bg-green-300 text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded">
                Rs.546000
              </div>
            </div>
          </div>
          <span>
            Investment Required: <b>Rs.1,00,000</b>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DistributorsList;
