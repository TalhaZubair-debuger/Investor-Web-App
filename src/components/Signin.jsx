import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Signin = () => {
  const navigate = useNavigate();
  const moveToSignUp = () => {
    navigate("/signup");
  }
  return (
  <main className="signin-investor-main">
    <div className="header">
      Investor's SignIn
    </div>
    <form action="/" method="post" className="signin-form">
      <label htmlFor="email">
      Email
      </label>
      <input type="email" name="email" id="email" className="input-text"/>

      <label htmlFor="password">
        Password
      </label>
      <input type="password" name="password" id="password" className="input-text"/>

      <button className="btn-signin">Sign In</button>

      <div className="not-signedin">
        Account doesn't exist? <u onClick={moveToSignUp}>SignUp here</u>
      </div>
    </form>
  </main>
  );
};

export default Signin;
