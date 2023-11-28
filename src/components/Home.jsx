import Banner from "./Banner";
import Button from "./Button";

import image1 from "../assets/distributor image.png";
import appFeaturesImage from "../assets/Features.png";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import CarouselItem from "./CarouselItem";

const Home = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <div>
      <Banner />

      {/* About company section */}
      <div className="text-center">
        <h2 className="text-6xl pt-10 font-semibold font-sans">
          About Our Company
        </h2>
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
        {/* <Carousel className="py-20" responsive={responsive}>
          <CarouselItem /> */}
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

        {/* <div className="item-carousal-home">
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
        <Button>Explore More Companies</Button> */}

        {/* ////////////////////////////  */}

        <div id="gallery" className="relative w-full" data-carousel="slide">
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            {/* <!-- Item 2 --> */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            {/* <!-- Item 3 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            {/* <!-- Item 4 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
            {/* <!-- Item 5 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
