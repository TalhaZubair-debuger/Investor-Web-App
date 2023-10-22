import Banner from "./Banner";
import Button from "./Button";

import image1 from "../assets/distributor image.png";
import appFeaturesImage from "../assets/Features.png";
import Footer from "./Footer";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className="w-screen">
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
            {/* <p className="text-lg py-5">
              We offer an Application to distributor to manage their
              <br /> buying and selling, also asset them take investments.
            </p> */}
            <img className="h-[35rem]" src={appFeaturesImage} alt="app image" />
            <Button>Download App</Button>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img
              className="h-[40rem] w-[]"
              src={image1}
              alt="Distributors App image"
            />
          </div>
        </div>
      </section>

      {/* Investor Portal */}
      <section className="text-center bg-emerald-700 py-14">
        <h4 className="text-5xl pb-5 uppercase font-semibold">
          Are you Investor ?
        </h4>
        <p className="text-xl">Here are few companies you can invest in</p>
        <Carousel className="py-20" responsive={responsive}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </Carousel>
        <Button>Explore More Companies</Button>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
