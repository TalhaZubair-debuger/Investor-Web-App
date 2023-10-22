import logo from "../assets/logo.png";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-slate-300  flex justify-around items-center py-10">
      <div className="flex justify-center flex-col items-center space-y-5">
        <img className="w-40" src={logo} alt="Logo image" />
        <p>All rights reserved by Distribex &copy;</p>
      </div>
      <div>
        <ul>
          <li className="font-semibold text-2xl pb-5">Quick Access</li>
          <li>About Us</li>
          <li>Investor Dashboard</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-semibold text-2xl pb-5">More Links</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <label className="pb-3 font-semibold text-xl" htmlFor="message">
          Message Us
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Write Message... "
        ></textarea>
        <br />
        <Button>Submit</Button>
      </div>
    </footer>
  );
};

export default Footer;
