import Banner from "./Banner";
import Button from "./Button";

import image1 from "../assets/distributor image.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-screen">
      <Banner />
      {/* About company section */}
      <div className="text-center">
        <h2 className="text-7xl pt-5 font-bold">About Our Company</h2>
        <p>
          Precision in Distribution, Excellence in Investment; Unleashing the
          Potential of Your Assets.
        </p>
      </div>
      {/* Distributor App Section */}
      <section className="flex justify-center">
        <div>
          <h3>Distributor App</h3>
          <p>
            We offer an Application to distributor to manage their buying and
            selling, also asset them take investments.
          </p>
          <Button>Download App</Button>
        </div>
        <div>
          <img src={image1} alt="Distributors App image" />
        </div>
      </section>
      {/* Investor Portal */}
      <section className="text-center">
        <h4>Are you Investor</h4>
        <p>Here are few companies you can invest in</p>

        <Button>Explore More Companies</Button>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
