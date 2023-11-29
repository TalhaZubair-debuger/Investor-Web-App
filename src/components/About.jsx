import AboutItem from "./AboutItem";
import story from "../assets/story.webp";
import people from "../assets/people.jpg";

const About = () => {
  return (
    <section className="bg-white mb-3">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-center text-gray-900">
            About Us
          </h2>

          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-full w-full flex justify-center items-center flex-col">
              <p className="font-normal text-base leading-6 text-gray-600">
                At Distributex, we take pride in revolutionizing the world of
                distribution with a focus on excellence, efficiency, and
                unparalleled service. Our commitment is to provide a seamless
                platform that connects manufacturers, distributors, and
                retailers, creating a robust ecosystem for mutual growth and
                success.
              </p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
              <img
                className="lg:block hidden w-full"
                src={people}
                alt="Group of people"
              />
              <img
                className="lg:hidden sm:block hidden w-full"
                src={people}
                alt="Group of people"
              />
              <img
                className="sm:hidden block w-full"
                src={people}
                alt="Group of people"
              />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between items-center flex-col lg:gap-8 gap-12">
              <div className="w-full xl:w-5/12 lg:w-6/12 space-y-7">
                <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
                  Our Story
                </h2>
                <p className="font-normal text-base leading-6 text-gray-600">
                  In the bustling landscape of the distribution industry,
                  Distributex emerged as a beacon of innovation and efficiency.
                  Founded with a vision to redefine the dynamics of product
                  distribution, Distributex is more than just a company; it’s a
                  force driving positive change in the supply chain. With a
                  commitment to excellence.
                </p>
                <p className="font-normal text-base leading-6 text-gray-600">
                  Distributex stands out not only for its commitment to
                  efficiency but also for its dedication to empowering
                  distributors. Recognizing the pivotal role distributors play
                  in the success of the entire network, Distributex has
                  implemented a comprehensive training program. Join
                  Distributex, where efficiency meets innovation for a
                  distribution experience like no other.
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
          </div>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            Get in touch
          </h1>

          <p className="mt-3 text-gray-500">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <AboutItem
            heading="Email"
            paragraph="Our friendly team is here to help."
            address="bilaltayyab121@gmail.com"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </AboutItem>
          <AboutItem
            heading="Office"
            paragraph="Come say hello at our office HQ."
            address="1 - KM, Defence Rd, near Bhubattian, howk, Lahore"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </AboutItem>
          <AboutItem
            heading="Phone"
            paragraph="Mon-Fri from 8am to 5pm."
            address="(+92)-3017-4263017"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </AboutItem>
        </div>
      </div>
    </section>
  );
};

export default About;
