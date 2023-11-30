import Banner from "./Banner";
import Button from "./Button";

import image1 from "../assets/distributor image.png";
import story from "../assets/stanging-people.jpg";
import appFeaturesImage from "../assets/Features.png";
import { Link } from "react-router-dom";
import TeamMember from "./TeamMember";

const Home = () => {
  return (
    <div>
      <Banner />

      {/* About company section */}

      <div className="lg:px-40 md:px-20 px-10">
        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between items-center flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12 lg:space-y-12 space-y-7 ">
            <h2 className="font-bold lg:text-5xl text-3xl lg:leading-9 leading-7 text-gray-800 ">
              About Our Company
            </h2>
            <p className="font-normal  lg:text-lg text-base leading-6 text-gray-600">
              Distributex stands out not only for its commitment to efficiency
              but also for its dedication to empowering distributors.
              Recognizing the pivotal role distributors play in the success of
              the entire network, Distributex has implemented a comprehensive
              training program. Join Distributex, where efficiency meets
              innovation for a distribution experience like no other.
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2">
            <img
              className="lg:block hidden w-full"
              src={story}
              alt="stroy logo"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4"
              src={story}
              alt="story logo"
            />
            <img
              className="sm:hidden block w-full"
              src={story}
              alt="story logo"
            />
          </div>
        </div>
        <div className="flex justify-center lg:py-2 py-2 pt-12 lg:pt-20">
          <Link
            to="/about"
            className="py-3 px-6 lg:tracking-wide text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-stone-300"
          >
            Read more
          </Link>
        </div>
      </div>

      {/* Distributor App Section */}

      <section className=" bg-white pt-10">
        <h3 className="text-3xl sm:text-5xl font-semibold uppercase text-center">
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
        {/* //////////////////////////// */}

        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Work fast from anywhere
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Stay up to date and move work forward with Flowbite on iOS &
            Android. Download the app today.
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Mac App Store
                </div>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                ></path>
              </svg>
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* //////////////////////////// */}
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
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
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

      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd className="font-light text-gray-500">developers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd className="font-light text-gray-500">contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-gray-500">organizations</dd>
            </div>
          </dl>
        </div>
      </section>
      <TeamMember />
    </div>
  );
};

export default Home;
