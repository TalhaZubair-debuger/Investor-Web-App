import mnp from "../assets/m&p.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DistributorPortfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, products } = location.state || {};
  useEffect(() => {
    console.log(user);
    console.log(products);
  }, []);

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
    navigate("/invest-now", { state: { user: user} });
  };
  return (
    <>
      {/* <DistributorsList /> */}
      <main className="distributor-portfolio-main">
        <div className="top-section">
          <div className="left">
            <img src={user.image} alt="company logo" className="left" />
          </div>

          <div className="right">
            <div className="distributor-name">{user.companyName}</div>
            <div className="meta-description">{user.tagline}</div>

            <div className="sales">
              <div className="previous-sales">
                Previous Month Sales
                <div className="sales-badge">Rs.NaN</div>
              </div>

              <div className="current-holdings">
                Current Holdings
                <div className="sales-badge">Rs.NaN</div>
              </div>
            </div>
          </div>
        </div>

        <div className="distribution-products">
          <div className="heading">Products</div>

          <div className="list">
            {products ? (
              products.map((item, index) => (
                <>
                  <div className="product-item" key={index}>
                    <div className="product-name">
                      <b>Product Name:</b> {item.productName}
                    </div>
                    <div className="unites-sold">
                      <b>Units in stock:</b> {item.stockQuantity}
                    </div>
                    <div className="row">
                      <div className="revenue-generated">
                        <div className="text">Revenue Generated</div>
                        <div className="sales-badge">Rs.NaN</div>
                      </div>

                      <div className="revenue-generated">
                        <div className="text">Revenue Expected</div>
                        <div className="sales-badge">Rs.NaN</div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <></>
            )}
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
          <Line
            type="monotone"
            dataKey="RedragonK503"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="LogitechG501" stroke="#82ca9d" />
        </LineChart>
        {/* </ResponsiveContainer> */}

        <div className="invest-section-portfolio">
          <div className="investment-required">
            Investment Required: Rs. {user.amount}
          </div>
          <div className="investment-required">
            Equity Offering: {user.equity}%
          </div>
          <button onClick={handleInvestNow} className="invest-now">
            Invest Now
          </button>
        </div>
      </main>
    </>
  );
};

export default DistributorPortfolio;
