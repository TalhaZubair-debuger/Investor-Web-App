import { useEffect, useState } from "react";
// import mnp from "../assets/m&p.png";
import hostname from "../utils/HostName";
// import PieChart from "./PieChart";

const InvestorDashboard = () => {
  const [investorData, setInvestorData] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    getInvestorData();
  }, []);

  const getInvestorData = async () => {
    try {
      const jwtToken = sessionStorage.getItem("jwtToken");
      const response = await fetch(
        `${hostname}/website-user/get-investor-dashboard`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwtToken}`,
          },
          method: "GET",
        }
      );
      const Data = await response.json();
      if (Data) {
        console.log(Data.dataPromises[0].investor);
        setInvestorData(Data.dataPromises[0].investor);
        setUserData(Data.dataPromises[0].user);
      }
    } catch (error) {
      alert("Alert! Error fething distributor details");
    }
  };

  const handleRequestPayment = async (Id) => {
    try {
      const jwtToken = sessionStorage.getItem("jwtToken");
      const response = await fetch(
        `${hostname}/website-user/generate-payment-request/${Id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwtToken}`,
          },
          method: "POST",
        }
      );
      const Data = await response.json();
      if (Data) {
        alert(Data.message);
      }
    } catch (error) {
      alert("Alert! Error fething distributor details");
    }
  };

  return (
    <>
      <div className="antialiased bg-gray-50">
        <main className="p-4 h-auto pt-20">
          <span className="flex justify-center font-bold text-2xl mb-4">
            Hi User!
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="p-4 border-2 border-solid border-gray-300 shadow-md	bg-white rounded-lg h-32 md:h-64">
              <h4 className="content-center text-center mb-4 text-xl font-extrabold">
                Your Total Earnings
              </h4>
              <div className="content-center text-center text-xl ">
                <b>Rs.</b>100,000
              </div>
              <div className="p-3 flex justify-between">
                <b>Last Month Revenue:</b> <span>Rs. 20,000</span>
              </div>
              <div className="p-3 flex justify-between">
                <b>Last Month Profit:</b> <span>Rs. 8,000</span>
              </div>
              <div className="p-3 flex justify-between">
                <b>Predicted Revenue:</b> <span>Rs. 8,500</span>
              </div>
            </div>
            <div className="p-4 border-2 border-solid border-gray-300 shadow-md	 rounded-lg h-32 md:h-64 bg-white">
              <h4 className="content-center text-center mb-4 text-xl font-semibold">
                Companies You Invested In
              </h4>
              {userData ? (
                userData.map((item, index) => (
                  <div
                    key={index}
                    className="content-center text-center text-xl p-3"
                  >
                    {item.companyName}
                  </div>
                ))
              ) : (
                <>
                  <p className="text-2xl text-center font-extrabold ">
                    Not Invested yet.
                  </p>
                </>
              )}
            </div>
            <div className="p-4 border-2 border-solid border-gray-300 shadow-md	 rounded-lg  h-32 md:h-64 scroll-auto bg-white">
              <h4 className="content-center text-center mb-4 text-xl font-semibold">
                Request Your Profit from Distributors
              </h4>
              {userData ? (
                userData.map((item, index) => (
                  <div key={index} className="content-center text-center p-3">
                    {item.companyName}
                    <button
                      onClick={() => handleRequestPayment(item._id)}
                      className="border-2 border-solid rounded-md p-2 m-1 bg-black text-white"
                    >
                      Request Rs.NaN
                    </button>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-2xl text-center font-extrabold ">
                    Not Invested yet.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="content-center text-center text-2xl font-extrabold p-3">
            Details of companies you invested in
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {userData ? (
              userData.map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-solid rounded-lg shadow-md border-gray-300 bg-white"
                >
                  <div className="flex-grid-row">
                    <img src={item.image} alt="company logo" className="w-32" />
                    <div className="text-lg font-semibold p-2">
                      {item.companyName} Distributors
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex-grid-row-non-center p-2">
                        <div className="font-semibold">Last Month Sales:</div>{" "}
                        Rs. NaN
                      </div>
                      <div className="flex-grid-row-non-center p-2">
                        <div className="font-semibold">
                          Last Month’s Profit:
                        </div>{" "}
                        Rs. NaN
                      </div>
                      <div className="flex-grid-row-non-center p-2">
                        <div className="font-semibold">
                          Your Last Month’s divident:
                        </div>{" "}
                        Rs. NaN
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default InvestorDashboard;
