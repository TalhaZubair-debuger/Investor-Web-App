import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import Button from "./Button";

const Footer = () => {
  return (
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
                  <Link to="/invertorDashboard" className="hover:underline">
                    Investor Dashboard
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/signin-distributor" className="hover:underline">
                    Distributor Sign in
                  </Link>
                </li>
                <li>
                  <Link to="/sign in" className="hover:underline">
                    Sign in
                  </Link>
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
