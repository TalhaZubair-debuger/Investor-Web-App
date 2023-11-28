import mnp from "../assets/m&p.png";
import unileverLogo from "../assets/unilever-logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Distributors = () => {
  const navigate = useNavigate();
  const handlePortfolioNavigation = () => {
    navigate("/distributor-portfolio");
  };
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
          Distributor’s List
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          All the distributors listed on our app who require investments for
          thier businesss are listed here.
        </p>

        {/* ////////////////////////////////  */}

        <Link
          href="#"
          className="flex flex-col items-center bg-white border-2 border-black rounded-lg shadow md:flex-row  hover:bg-gray-100"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={mnp}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              M&P
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              We make sure to deliver deliberately.
            </p>
            <div className="description">
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
              <button
                className="distributor-see-more-distributors"
                onClick={handlePortfolioNavigation}
              >
                Invest Now
              </button>
            </div>
          </div>
        </Link>

        {/* ////////////////////////////////  */}

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
              <button
                className="distributor-see-more-distributors"
                onClick={handlePortfolioNavigation}
              >
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
              <button
                className="distributor-see-more-distributors"
                onClick={handlePortfolioNavigation}
              >
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="w-screen">

    // </div>
  );
};

export default Distributors;
