import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Signup = () => {
  const navigate = useNavigate();
  const moveToSignIn = () => {
    navigate("/signin");
  }
  return (
    <main className="signin-investor-main">
    <div className="header">
      Investor's SignUp
    </div>
    <form action="/" method="post" className="signin-form">
      <label htmlFor="email">
      Email
      </label>
      <input type="email" name="email" id="email" className="input-text"/>

      <label htmlFor="name">
      Name
      </label>
      <input type="text" name="name" id="name" className="input-text"/>

      <label htmlFor="email">
      Phone Number
      </label>
      <input type="text" name="number" id="number" className="input-text"/>

      <label htmlFor="password">
        Password
      </label>
      <input type="password" name="password" id="password" className="input-text"/>

      <button className="btn-signin">Sign Up</button>

      <div className="not-signedin">
        Already have an account? <u onClick={moveToSignIn}>Click here</u>
      </div>
    </form>
  </main>
  );
};

export default Signup;
