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
import { useEffect, useState } from "react";

const DistributorPortfolio = () => {
  const [revenue, setRevenue] = useState(0);
  const [predictedRevenue, setPredictedRevenue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, products } = location.state || {};
  useEffect(() => {
    console.log(user);
    console.log(products);

    let userTotalRevenue = 0;
    let userPrediction = 0;
    products.map(product => {
      userTotalRevenue = userTotalRevenue + product.totalRevenue;
      userPrediction = userPrediction + product.predictedRevenue;
      setRevenue(userTotalRevenue);
      setPredictedRevenue(userPrediction);
    })
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
    }
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
                <div className="sales-badge">Rs. {revenue ? revenue : 0}</div>
              </div>

              <div className="current-holdings">
                Predicted Revenue
                <div className="sales-badge">Rs. {predictedRevenue ? parseInt(predictedRevenue) : 0}</div>
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
                        <div className="sales-badge">Rs. {item.totalRevenue}</div>
                      </div>

                      <div className="revenue-generated">
                        <div className="text">Revenue Expected</div>
                        <div className="sales-badge">Rs. {parseInt(item.predictedRevenue)}</div>
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
