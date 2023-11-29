const InvestCheckout = () => {
  return (
    <div className="main-investnow">
      <h1 className="mb-4 text-4xl py-5 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
        Terms & Conditions
      </h1>

      <span className="bg-green-300 mb-4 text-green-800 text-lg font-medium me-2 px-6 py-2 rounded">
        The purchase of equity of this distribution company witll make you
        online partner to this company. You can watch its daily, weekly and
        monthly sales and withdraw your profits on monthly basis. You can demnad
        the distributor for share distribution and profit allocation. Investor
        dashboard will be giving you the predicton of its products performance
        in comming months to let you know your upcomming profits or losses.
        <br />
        <b>
          Incase of losses we are not responsible. We can only provide you
          transparency between you and distributor.
        </b>
      </span>

      <span className="bg-red-300 mb-4 text-red-800 text-lg font-medium me-2 px-6 py-2 rounded">
        P&G distributors are willing to share <b>20%</b> equity of thier company
        for investment of Rs.1000000.
      </span>

      <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-stone-300 mb-[10vh]">
        Proceed To Invest
      </button>
    </div>
  );
};

export default InvestCheckout;
