import React from "react";

const InvestCheckout = () => {
  return (
    <div className="main-investnow">
      <div className="terms">
        <div className="heading">Terms & Conditions</div>
        <div className="body">
          The purchase of equity of this distribution company witll make you
          online partner to this company. You can watch its daily, weekly and
          monthly sales and withdraw your profits on monthly basis. You can
          demnad the distributor for share distribution and profit allocation.
          Investor dashboard will be giving you the predicton of its products
          performance in comming months to let you know your upcomming profits
          or losses.
          <br />
          <b>
            Incase of losses we are not responsible. We can only provide you
            transparency between you and distributor.
          </b>
        </div>
      </div>
      <div className="equity">
        P&G distributors are willing to share <b>20%</b> equity of thier company
        for investment of Rs.1000000.
      </div>
      <button className="invest-btn">Proceed To Invest</button>
    </div>
  );
};

export default InvestCheckout;
