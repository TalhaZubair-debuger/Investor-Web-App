import { useEffect, useState } from "react";
import hostname from "../utils/HostName";
import DistributorsList from "./DistributorsList";

const Distributors = () => {
  const [distributorData, setDistributorData] = useState();
  useEffect(() => {
    getDistributorData();
  }, []);
  const getDistributorData = async () => {
    try {
      const response = await fetch(
        `${hostname}/user/get-distributors-need-investment`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const Data = await response.json();
      if (Data.distributorsWithProducts) {
        console.log(Data.distributorsWithProducts);
        setDistributorData(Data.distributorsWithProducts);
      }
    } catch (error) {
      alert("Alert! Error fething distributor details");
    }
  };

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
          Distributor’s List
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          All the distributors listed on our app who require investments for
          thier businesss are listed here.
        </p>

        <div className="space-y-10">
          {distributorData ? (
            distributorData.map((item, index) => (
              <DistributorsList
                key={index}
                user={item.user}
                products={item.products}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>

    // <div className="w-screen">

    // </div>
  );
};

export default Distributors;
