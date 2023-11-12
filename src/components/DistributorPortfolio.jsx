import React from "react";
import mnp from "../assets/m&p.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

const DistributorPortfolio = () => {
  const navigate = useNavigate();
  const products = [
    {
      productName: "Redragon K-503 Harpe",
      unitSold: 4600,
      revenueGenerated: 5200 * 4600,
      revenueExpected: 5300 * 4600,
    },
    {
      productName: "Logitech G501",
      unitSold: 2000,
      revenueGenerated: 4000 * 2000,
      revenueExpected: 4100 * 2000,
    },
    {
      productName: "Redragon K-503 Harpe",
      unitSold: 4600,
      revenueGenerated: 5200 * 4600,
      revenueExpected: 5300 * 4600,
    },
    {
      productName: "Redragon K-503 Harpe",
      unitSold: 4600,
      revenueGenerated: 5200 * 4600,
      revenueExpected: 5300 * 4600,
    },
  ];

  const data = [
    {
      month: "January",
      RedragonK503: 4000,
      LogitechG501: 2400,
      amt: 2400,
    },
    {
      month: "February",
      RedragonK503: 3000,
      LogitechG501: 1398,
      amt: 2210,
    },
    {
      month: "March",
      RedragonK503: 2000,
      LogitechG501: 9800,
      amt: 2290,
    },
    {
      month: "April",
      RedragonK503: 2780,
      LogitechG501: 3908,
      amt: 2000,
    },
    {
      month: "May",
      RedragonK503: 1890,
      LogitechG501: 4800,
      amt: 2181,
    },
    {
      month: "June",
      RedragonK503: 2390,
      LogitechG501: 3800,
      amt: 2500,
    },
    {
      name: "July",
      RedragonK503: 3490,
      LogitechG501: 4300,
      amt: 2100,
    },
  ];

  const handleInvestNow = () => {
    navigate("/invest-now");
  }
  return (
    <main className="distributor-portfolio-main">
      <div className="top-section">
        <div className="left">
          <img src={mnp} alt="company logo" className="left" />
        </div>

        <div className="right">
          <div className="distributor-name">M&P</div>
          <div className="meta-description">
            We make sure to deliver deliberately. We make sure to deliver
            deliberately. We make sure to deliver deliberately. We make sure to
            deliver deliberately. We make sure to deliver deliberately. We make
            sure to deliver deliberately.
          </div>

          <div className="sales">
            <div className="previous-sales">
              Previous Quarter Sales
              <div className="sales-badge">Rs.23456789</div>
            </div>

            <div className="current-holdings">
              Current Holdings
              <div className="sales-badge">Rs.123456</div>
            </div>
          </div>
        </div>
      </div>

      <div className="distribution-products">
        <div className="heading">Products</div>

        <div className="list">
          {products.map((product) => (
            <>
              <div className="product-item">
                <div className="product-name">
                  <b>Product Name:</b> {product.productName}
                </div>
                <div className="unites-sold">
                  <b>Units sold:</b> {product.unitSold}
                </div>
                <div className="row">
                  <div className="revenue-generated">
                    <div className="text">Revenue Generated</div>
                    <div className="sales-badge">
                      Rs.{product.revenueGenerated}
                    </div>
                  </div>

                  <div className="revenue-generated">
                    <div className="text">Revenue Expected</div>
                    <div className="sales-badge">
                      Rs.{product.revenueExpected}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

<div className="font-bold-and-larger">Past Months Product Sales</div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="RedragonK503" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="LogitechG501" stroke="#82ca9d" />
        </LineChart>
      {/* </ResponsiveContainer> */}

      <div className="invest-section-portfolio">
        <div className="investment-required">
          Investment Required: Rs.1000000
        </div>
        <button onClick={handleInvestNow} className="invest-now">
          Invest Now
        </button>
      </div>
    </main>
  );
};

export default DistributorPortfolio;
