import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const moveToSignUp = () => {
    navigate("/signup");
  };
  return (
    <main className="flex justify-center items-center flex-col my-5">
      <div className="text-[x-large] font-semibold">Investor&apos;s SignIn</div>
      <form
        action="/sigin"
        method="post"
        className="flex flex-col justify-center items-center bg-[lightgreen] w-[400px] p-5 rounded-[5px]"
      >
        <label className="w-full text-justify mt-2.5" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full h-[30px] rounded-[5px] border-2 border-solid border-[black]"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input-text"
        />

        <button className="btn-signin">Sign In</button>

        <div className="text-[smaller] mt-2.5">
          Account doesn&apos;t exist? <u onClick={moveToSignUp}>SignUp here</u>
        </div>
      </form>
    </main>
  );
};

export default Signin;
