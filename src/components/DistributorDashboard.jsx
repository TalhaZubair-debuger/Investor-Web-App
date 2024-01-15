import { useNavigate } from "react-router-dom";
import DistributorDashboardItem from "./DistributorDashboardItem";
import InvestorMailAlert from "./InvestorMailAlert";
import hostname from "../utils/HostName";
import { useEffect, useState } from "react";

const DistributorDashboard = () => {
  const [user, setUser] = useState();
  const [investors, setInvestors] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
    getPaymentRequests();
  }, []);
  const getUser = async () => {
    try {
      const jwtToken = sessionStorage.getItem("jwtToken");
      const response = await fetch(`${hostname}/user/get-user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwtToken}`,
        },
        method: "GET",
      });
      const Data = await response.json();
      if (Data.user) {
        setUser(Data.user);
      }
    } catch (error) {
      alert("Alert! Error fething user details");
    }
  };

  const getPaymentRequests = async () => {
    try {
      const jwtToken = sessionStorage.getItem("jwtToken");
      const response = await fetch(
        `${hostname}/website-user/get-payment-requests`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwtToken}`,
          },
          method: "GET",
        }
      );
      const Data = await response.json();
      if (Data.investors) {
        console.log(Data);
        setInvestors(Data.investors);
      }
    } catch (error) {
      alert("Alert! Error fething payment requests");
    }
  };

  const handleNavigateToGetInvestment = () => {
    navigate("/get-investment", { state: { userId: user._id } });
  };
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
            Distributor Dashboard
          </h2>
        </div>
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <p className="text-lg font-extrabold tracking-tight text-gray-900">
            Hi {user ? user.name : "there"}!
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {user ? (
            !user.investorEmail ? (
              <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-5 text-gray-500"></div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Need Investment?
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  You can fill in your needs for investment and the investor
                  will approach you themselves.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div
                      onClick={handleNavigateToGetInvestment}
                      className="py-3 px-6 lg:tracking-wide text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-stone-300"
                    >
                      Get Investment
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          {/* Section 2 */}

          <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500"></div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Current Portfolio
            </h2>
            <DistributorDashboardItem
              rs="rs"
              title="Current Revenue :"
              price={
                user ? (user.totalRevenue ? user.totalRevenue : "null") : "null"
              }
            />
            {/* <DistributorDashboardItem title="No. of Shops :" price="99000" /> <------------- */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <p className="font-extrabold lg:text-lg ">
                  Sales increment over last month <span>8%</span>
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}

          <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500"></div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Shares
            </h2>
            {user ? (
              user.gotInvestment === true ? (
                <>
                  <DistributorDashboardItem
                    title="Your Share :"
                    price="70"
                    rs={"Rs."}
                  />
                  <DistributorDashboardItem
                    title="Investor Share :"
                    price="30"
                    rs={"Rs."}
                  />
                </>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}

            <DistributorDashboardItem
              rs="rs"
              title="Total Revenue :"
              price={
                user ? (user.totalRevenue ? user.totalRevenue : "none") : "none"
              }
            />
            <DistributorDashboardItem
              rs="rs"
              title="You Got :"
              price={
                user
                  ? user.currentHoldings
                    ? user.currentHoldings
                    : "none"
                  : "none"
              }
            />
          </section>

          {/* Section 4 */}

          <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-5 text-gray-500"></div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Investor Mail Alert
            </h2>
            {user ? (
              user.paymentRequests.map((item, index) => (
                <InvestorMailAlert key={index}>{item.userId}</InvestorMailAlert>
              ))
            ) : (
              <></>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default DistributorDashboard;
