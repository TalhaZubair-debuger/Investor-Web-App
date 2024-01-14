import { Link, useNavigate } from "react-router-dom";
import mnp from "../assets/m&p.png";
import { useEffect, useState } from "react";

const DistributorsList = ({ user, products }) => {
  const [EXTENSION, setEXTENSION] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setEXTENSION(getImageFormat(user.image));
  }, []);

  function getImageFormat(image) {
    const extension = image.substring(11, 15);

    switch (extension.toLowerCase()) {
      case "jpeg;":
        return "jpeg";
      case "jpg;":
        return "jpg";
      case "png;":
        return "png";
      default:
        return "jpeg";
    }
  }
  const handleNavigationToDistributorPortfolio = () => {
    navigate("/distributor-portfolio", { state: { user: user, products: products } });
  }
  return (
    <section
    onClick={handleNavigationToDistributorPortfolio}
      className="flex flex-col items-center bg-white border-2 border-black rounded-lg shadow md:flex-row  hover:bg-gray-100"
    >
      <img
        className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={user ? user.image : null}
        alt="company logo"
      />
      <div className="flex flex-col justify-center p-4 leading-normal w-[100%]">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {user ? user.companyName : null}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          {user ? user.tagline : null}
        </p>
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <span className="font-bold ">Best Products:</span>
            {products ? (
              products.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-300 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                >
                  {item.productName}
                </span>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <span>Last month sales</span>
              <div className="flex justify-center items-center bg-pink-300 text-pink-800 text-md font-medium me-2 px-2.5 py-0.5 rounded">
                Rs.NaN
              </div>
            </div>
            <div className="space-y-1">
              <span>Next month prediction</span>
              <div className="flex justify-center items-center bg-green-300 text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded">
                Rs.NaN
              </div>
            </div>
          </div>
          <span>
            Investment Required: <b>Rs.{user ? user.amount : null}</b>
          </span>
        </div>
      </div>
    </section>
  );
};

export default DistributorsList;
