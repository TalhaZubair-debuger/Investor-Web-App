import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black flex justify-around items-center text-white h-52">
      <div>
        <img className="w-40" src={logo} alt="Logo image" />
      </div>
      <div>
        <ul>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact Us Us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Investor Dashboard</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
