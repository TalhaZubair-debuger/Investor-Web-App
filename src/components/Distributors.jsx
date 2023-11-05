import React from "react";
import mnp from "../assets/m&p.png";
import unileverLogo from "../assets/unilever-logo.jpg";

const Distributors = () => {
  return (
    <div className="w-screen">
      <div className="header-distributors">
        <h1 className="heading-header-distributors">Distributors</h1>
        <p>
          All the distributors listed on our app who require investmnts for
          thier businesss are listed here.
        </p>
      </div>

      <div className="list-distributors-main">
        <div className="item">
          <div className="distributor-image-distributors">
            <img src={mnp} alt="" />
          </div>
          <div className="description">
            <div className="distributor-name-distributors">M&P</div>
            <div className="distributor-meta-desc-distributors">
              We make sure to deliver deliberately.
            </div>
            <div className="distributor-best-products-distributors">
              Best Products:
              <div className="product-tags">Hair Straightener</div>
              <div className="product-tags">Handsfree</div>
              <div className="product-tags">Mobile Charger</div>
            </div>
            <div className="distributor-sales-distributors">
              <div className="sales">
                Last quarter sales
                <div className="recent-sales">Rs.458600</div>
              </div>
              <div className="prediction">
                Next quater prediction
                <div className="predicted-sales">Rs.546000</div>
              </div>
            </div>
            <div className="distributor-investment-demanded-distributors">
              Investment Required: <b>Rs.1,00,000</b>
            </div>
            <button className="distributor-see-more-distributors">
              Invest Now
            </button>
          </div>
        </div>

        <div className="item">
          <div className="distributor-image-distributors">
            <img src={unileverLogo} alt="" />
          </div>
          <div className="description">
            <div className="distributor-name-distributors">
              Unilever Distribuions
            </div>
            <div className="distributor-meta-desc-distributors">
              We make sure to deliver deliberately.
            </div>
            <div className="distributor-best-products-distributors">
              Best Products:
              <div className="product-tags">Knor Noodles</div>
              <div className="product-tags">Dove Shampoo</div>
              <div className="product-tags">Rafhan Ghee</div>
            </div>
            <div className="distributor-sales-distributors">
              <div className="sales">
                Last quarter sales
                <div className="recent-sales">Rs.3520000000</div>
              </div>
              <div className="prediction">
                Next quater prediction
                <div className="predicted-sales">Rs.3620000000</div>
              </div>
            </div>
            <div className="distributor-investment-demanded-distributors">
              Investment Required: <b>Rs.100,000,000</b>
            </div>
            <button className="distributor-see-more-distributors">
              Invest Now
            </button>
          </div>
        </div>

        <div className="item">
          <div className="distributor-image-distributors">
            <img src={mnp} alt="" />
          </div>
          <div className="description">
            <div className="distributor-name-distributors">M&P</div>
            <div className="distributor-meta-desc-distributors">
              We make sure to deliver deliberately.
            </div>
            <div className="distributor-best-products-distributors">
              Best Products:
              <div className="product-tags">Hair Straightener</div>
              <div className="product-tags">Handsfree</div>
              <div className="product-tags">Mobile Charger</div>
            </div>
            <div className="distributor-sales-distributors">
              <div className="sales">
                Last quarter sales
                <div className="recent-sales">Rs.458600</div>
              </div>
              <div className="prediction">
                Next quater prediction
                <div className="predicted-sales">Rs.546000</div>
              </div>
            </div>
            <div className="distributor-investment-demanded-distributors">
              Investment Required: <b>Rs.1,00,000</b>
            </div>
            <button className="distributor-see-more-distributors">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributors;
