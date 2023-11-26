import Banner from "./Banner";
import Button from "./Button";

import image1 from "../assets/distributor image.png";
import appFeaturesImage from "../assets/Features.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Banner />
      {/* About company section */}
      <div className="text-center  bg-[#ccc]">
        <h2 className="text-6xl pt-10 font-semibold">About Our Company</h2>
        <p className="text-xl py-10">
          DistribuTech is your gateway to revolutionizing distribution
          management. <br /> We have developed an all-in-one application that
          simplifies distribution <br /> processes and invites investors to fuel
          your business growth.
        </p>
      </div>

      {/* Distributor App Section */}

      <section className=" bg-slate-300 pt-10">
        <h3 className="text-6xl font-semibold uppercase text-center">
          Distributor App
        </h3>
        <div className="flex py-10">
          <div className="flex flex-col items-center justify-center w-[50%]">
            <img
              className="h-[35rem] w-[40rem]"
              src={appFeaturesImage}
              alt="app image"
            />
            <Button>Download App</Button>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img
              className="h-[40rem]"
              src={image1}
              alt="Distributors App image"
            />
          </div>
        </div>
      </section>

      {/* Investor Portal */}

      <section className="text-center  py-14">
        <h4 className="text-5xl pb-5 uppercase font-semibold">
          Are you Investor ?
        </h4>
        <p className="text-xl">Here are few companies you can invest in</p>
        <Carousel className="py-20" responsive={responsive}>
          <CarouselItem />
          {/* <div className="item-carousal-home">
            <div className="company-name-carousal">M&P</div>
            <div className="meta-desc-company-carousal">
              We make sure to deliver deliberately.
            </div>
            <div className="investment-required-carousal">
              Investment Required: <b>Rs.250000</b>
            </div>
            <button className="see-more-carousal">See More Info</button>
          </div> */}

          {/* 2 */}

          {/* <div className="item-carousal-home">
            <div className="company-name-carousal">M&P</div>
            <div className="meta-desc-company-carousal">
              We make sure to deliver deliberately.
            </div>
            <div className="investment-required-carousal">
              Investment Required: <b>Rs.250000</b>
            </div>
            <button className="see-more-carousal">See More Info</button>
          </div> */}

          <div className="item-carousal-home">
            <div className="company-name-carousal">M&P</div>
            <div className="meta-desc-company-carousal">
              We make sure to deliver deliberately.
            </div>
            <div className="investment-required-carousal">
              Investment Required: <b>Rs.250000</b>
            </div>
            <button className="see-more-carousal">See More Info</button>
          </div>
          <div className="item-carousal-home">
            <div className="company-name-carousal">M&P</div>
            <div className="meta-desc-company-carousal">
              We make sure to deliver deliberately.
            </div>
            <div className="investment-required-carousal">
              Investment Required: <b>Rs.250000</b>
            </div>
            <button className="see-more-carousal">See More Info</button>
          </div>
          <div className="item-carousal-home">
            <div className="company-name-carousal">M&P</div>
            <div className="meta-desc-company-carousal">
              We make sure to deliver deliberately.
            </div>
            <div className="investment-required-carousal">
              Investment Required: <b>Rs.250000</b>
            </div>
            <button className="see-more-carousal">See More Info</button>
          </div>
        </Carousel>
        <Button>Explore More Companies</Button>
      </section>
    </div>
  );
};

export default Home;
