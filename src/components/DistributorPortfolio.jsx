import React from "react";
import mnp from "../assets/m&p.png";

const DistributorPortfolio = () => {
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
                    <div className="sales-badge">Rs.{product.revenueGenerated}</div>
                  </div>

                  <div className="revenue-generated">
                    <div className="text">Revenue Expected</div>
                    <div className="sales-badge">Rs.{product.revenueExpected}</div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DistributorPortfolio;
