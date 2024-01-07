import mnp from "../assets/m&p.png";
import PieChart from "./PieChart";

const InvestorDashboard = () => {
  return (
    <>
      <div className="antialiased bg-gray-50">
        <main className="p-4 h-auto pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="border-2 border-solid border-gray-300 shadow-md	bg-white rounded-lg h-32 md:h-64">
              <h4 className="content-center text-center mb-4 text-xl font-semibold ">
                Your Total Earnings
              </h4>
              <div className="content-center text-center text-xl ">
                Rs.100,000
              </div>
              <div className="p-3 ">
                <b>Last Month Revenue:</b> Rs. 20,000
              </div>
              <div className="p-3 ">
                <b>Last Month Profit:</b> Rs. 8,000
              </div>
              <div className="p-3 ">
                <b>Predicted Revenue:</b> Rs. 8,500
              </div>
            </div>
            <div className="border-2 border-solid border-gray-300 shadow-md	 rounded-lg h-32 md:h-64 bg-white">
              <h4 className="content-center text-center mb-4 text-xl font-semibold">
                Companies You Invested In
              </h4>
              <div className="content-center text-center text-xl p-3">
                P&G distributors
              </div>
              <div className="content-center text-center text-xl p-3">
                Unilever
              </div>
              <div className="content-center text-center text-xl p-3">
                MnP logistics
              </div>
            </div>
            <div className="border-2 border-solid border-gray-300 shadow-md	 rounded-lg  h-32 md:h-64 scroll-auto bg-white">
              <h4 className="content-center text-center mb-4 text-xl font-semibold">
                Request Your Profit from Distributors
              </h4>
              <div className="content-center text-center p-3">
                P&G distributors
                <button className="border-2 border-solid rounded-md p-2 m-1 bg-black text-white">
                  Request Rs.20,000
                </button>
              </div>
              <div className="content-center text-center p-3">
                Unilever
                <button className="border-2 border-solid rounded-md p-2 m-1 bg-black text-white">
                  Request Rs.20,000
                </button>
              </div>
            </div>
          </div>

          <div className="content-center text-center text-xl font-semibold	 p-3">
            Details of companies you invested in
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border-2 border-solid rounded-lg shadow-md border-gray-300 bg-white">
              <div className="flex-grid-row">
                <img src={mnp} alt="company logo" className="w-32" />
                <div className="text-lg font-semibold p-2">
                  M&P Distributors
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month Sales:</div> Rs.
                    25,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month’s Profit:</div>{" "}
                    Rs. 5,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">
                      Your Last Month’s divident:
                    </div>{" "}
                    Rs. 2,000
                  </div>
                </div>
                <div>
                  <div className="p-2 w-72">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-solid rounded-lg shadow-md border-gray-300 bg-white">
              <div className="flex-grid-row">
                <img src={mnp} alt="company logo" className="w-32" />
                <div className="text-lg font-semibold p-2">
                  M&P Distributors
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month Sales:</div> Rs.
                    25,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month’s Profit:</div>{" "}
                    Rs. 5,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">
                      Your Last Month’s divident:
                    </div>{" "}
                    Rs. 2,000
                  </div>
                </div>
                <div>
                  <div className="p-2 w-72">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-solid rounded-lg shadow-md border-gray-300 bg-white">
              <div className="flex-grid-row">
                <img src={mnp} alt="company logo" className="w-32" />
                <div className="text-lg font-semibold p-2">
                  M&P Distributors
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month Sales:</div> Rs.
                    25,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month’s Profit:</div>{" "}
                    Rs. 5,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">
                      Your Last Month’s divident:
                    </div>{" "}
                    Rs. 2,000
                  </div>
                </div>
                <div>
                  <div className="p-2 w-72">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-2 border-solid rounded-lg shadow-md border-gray-300 bg-white">
              <div className="flex-grid-row">
                <img src={mnp} alt="company logo" className="w-32" />
                <div className="text-lg font-semibold p-2">
                  M&P Distributors
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month Sales:</div> Rs.
                    25,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">Last Month’s Profit:</div>{" "}
                    Rs. 5,000
                  </div>
                  <div className="flex-grid-row-non-center p-2">
                    <div className="font-semibold">
                      Your Last Month’s divident:
                    </div>{" "}
                    Rs. 2,000
                  </div>
                </div>
                <div>
                  <div className="p-2 w-72">
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InvestorDashboard;
