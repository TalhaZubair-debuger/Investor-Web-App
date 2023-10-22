import bannerImage from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <div>
      <img className="w-100" src={bannerImage} alt="Banner Image" />
    </div>
  );
};

export default Banner;
