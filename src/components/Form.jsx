import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FormItem from "./FormItem";
import { useState } from "react";
import axios from "axios";
import HostName from "../utils/HostName";
const Form = ({ signup, distributor, getInvestment }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleSignUpDistributor = async () => {
    if (name === "" || number === null || password === ""){
      alert("Alert!", "Please fill the form completely.");
    }
    else {
      const formData = {
        name,
        number,
        password
      }
      const response = await axios.post("");
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-3xl tracking-widest font-semibold text-gray-900"
        >
          Distribex
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {signup
                ? `Create an account`
                : distributor
                ? `Sign in to Distributor`
                : getInvestment
                ? `Investment Form`
                : `Sign in to Investor’s`}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action={
                signup
                  ? "/signup"
                  : distributor
                  ? "/signin-distributor"
                  : getInvestment
                  ? `/get-investment`
                  : "/signin"
              }
              method="post"
              onSubmit={
                signup
                ?
                handleSignUpDistributor 
                : null
              }
            >
              {signup ? (
                <>
                  <FormItem
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    state={name}
                    UseState={setName}
                  >
                    Name
                  </FormItem>
                  <FormItem
                    label="number"
                    type="number"
                    placeholder="+92-300-0000000"
                    state={number}
                    UseState={setNumber}
                  >
                    Phone number
                  </FormItem>
                </>
              ) : (
                ""
              )}
              <FormItem label="email" type="email" placeholder="name@gmail.com">
                Your email
              </FormItem>
              {getInvestment ? (
                <>
                  <FormItem
                    label="equity"
                    type="number"
                    placeholder="Enter your equity in %"
                    state={email}
                    UseState={setEmail}
                  >
                    Equity
                  </FormItem>
                  <FormItem
                    label="amount"
                    type="number"
                    placeholder="Rs. 10000"
                  >
                    Required Amount
                  </FormItem>
                </>
              ) : (
                <FormItem
                  label="password"
                  type="password"
                  placeholder="••••••••"
                  state={password}
                  UseState={setPassword}
                >
                  Password
                </FormItem>
              )}

              {signup ? (
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 accent-black border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slate-300"
                      required
                      value={checkbox}
                      onChange={()=> setCheckbox(true)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <Link
                        className="font-medium text-black hover:underline"
                        to="/terms-and-conditions"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
              ) : getInvestment ? (
                ""
              ) : distributor ? (
                ""
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 accent-black border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slate-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/forgotPassword"
                    className="text-sm font-medium text-black hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {signup ? "Sign up" : getInvestment ? "Invest now" : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500">
                {signup
                  ? `Already have an account? `
                  : distributor
                  ? ""
                  : getInvestment
                  ? ""
                  : `Don’t have an account yet? `}
                <Link
                  to={signup ? `/signin` : `/signup`}
                  className="font-medium text-black hover:underline"
                >
                  {signup
                    ? `Login here`
                    : distributor
                    ? ""
                    : getInvestment
                    ? ""
                    : `Sign up`}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Form.propTypes = {
  signup: PropTypes.string,
  distributor: PropTypes.string,
  children: PropTypes.string,
  getInvestment: PropTypes.string,
};

export default Form;
