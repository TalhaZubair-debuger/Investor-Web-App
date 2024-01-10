import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import hostname from "../utils/HostName";

const GetInvestment = () => {
  const [email, setEmail] = useState("");
  const [equity, setEquity] = useState("");
  const [amount, setAmount] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};
  useEffect(() => {
    console.log(userId);
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (amount === null || equity === "" || email === "") {
      alert("Alert! Please fill the form completely.");
    } else {
      try {
        const jwtToken = sessionStorage.getItem("jwtToken");
        const res = await fetch(`${hostname}/user/get-investment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${jwtToken}`,
          },
          body: JSON.stringify({
            investorEmail: email,
            equity,
            amount,
          }),
        });

        const data = await res.json();
        if (data.message) {
          alert("Investment Information Added!");
          navigate("/distributor-dashboard");
        } else {
          alert("Error Signing up!");
        }
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };
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
              Investment Form
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={onSubmitHandler}
              method="PUT"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="equity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Equity
                </label>
                <input
                  type="number"
                  name="equity"
                  id="equity"
                  value={equity}
                  onChange={(e) => {
                    setEquity(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block w-full p-2.5"
                  placeholder="Enter your equity in %"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Required Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-stone-600 focus:border-stone-600 block w-full p-2.5"
                  placeholder="RS.10000"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Get Investment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvestment;
