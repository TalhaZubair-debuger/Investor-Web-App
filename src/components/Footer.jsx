import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import Button from "./Button";

const Footer = () => {
  return (
    // <footer className="bg-black text-[#b9b9b9]  flex justify-around items-center py-10">
    //   <div className="flex justify-center flex-col items-center space-y-5">
    //     <img className="w-40" src={logo} alt="Logo image" />
    //     <p>All rights reserved by Distribex &copy;</p>
    //   </div>
    //   <div>
    //     <ul>
    //       <li className="font-semibold text-2xl pb-5">Quick Access</li>
    //       <li>About Us</li>
    //       <li>Investor Dashboard</li>
    //     </ul>
    //   </div>
    //   <div>
    //     <ul>
    //       <li className="font-semibold text-2xl pb-5">More Links</li>
    //       <li>Contact Us</li>
    //     </ul>
    //   </div>
    //   <div className="flex flex-col">
    //     <label className="pb-3 font-semibold text-xl" htmlFor="message">
    //       Message Us
    //     </label>
    //     <textarea
    //       name="message"
    //       id="message"
    //       cols="30"
    //       rows="5"
    //       placeholder="Write Message... "
    //     ></textarea>
    //     <br />
    //     <Button>Submit</Button>
    //   </div>
    // </footer>

    ////////////////////////////////////////////////

    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              {/* <img src={logo} className="h-8 me-3" alt="Logo" /> */}
              <span className="text-white tracking-widest space-x-7 self-center text-2xl font-semibold whitespace-nowrap">
                Distribex
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-md text-center text-gray-400 sm:text-center">
            © {new Date().getFullYear()} Distribex . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
