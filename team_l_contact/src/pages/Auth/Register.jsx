import { useState } from "react";
import loginIamge from "../../assets/login.jpg";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useUserRegisterMutation } from "../../features/api/AuthApi";
const Register = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [userRegister] = useUserRegisterMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmed_password] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const user = { name, email, password, password_confirmation };
  const registerHandler = async (user) => {
    const data = await userRegister(user);
    console.log(data);
    // if (data?.success) {
    //   console.log("register successfully!");
    //   dispatch(addUser({ user: data?.user, token: data?.token }));

    //   // swal("Register successfully");
    //   navigate("/login");
    //   toast("successfully register");
    // }
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-10 bg-white h-screen md:p-5 md:px-10 w-full">
        {/* left side start  */}
        <div className="md:w-1/2 w-full p-1 rounded-lg h-full bg-[#f3f5f9]">
          <div className=" md:px-10 px-5">
            {/* <span className=" px-1 text-[#3c37ff] text-3xl">Logo</span> */}
            <div className=" my-2 flex items-center justify-center flex-col">
              <h1 className=" text-2xl md:text-3xl mt-3 font-bold text-slate-700">
                Create an account
              </h1>
              <p className="my-3 font-semibold text-sm text-slate-400">
                Sign up now and unlock exclusive access!
              </p>
            </div>
            <div className=" text-sm">
              <div className=" mt-2">
                <label htmlFor="" className="text-base-300">
                  Your Name
                </label>
                <br />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="First Last"
                  className=" border-none bg-white  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <label htmlFor="" className="text-base-300">
                  Email
                </label>
                <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="example@gmail.com"
                  className=" border-none bg-white  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <div className=" flex items-center justify-between">
                  <label htmlFor="" className="text-base-300">
                    Password
                  </label>
                  <span className=" text-[#3c37ff] text-sm">
                    {password.length > 8 || password.includes("@")
                      ? "strong"
                      : "weak"}
                  </span>
                </div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={hidePassword ? "password" : "text"}
                  placeholder="****"
                  className=" border-none bg-white w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <div className=" flex items-center justify-between">
                  <label htmlFor="" className=" text-base-300">
                    Comfirm Password
                  </label>
                  {hidePassword ? (
                    <button onClick={() => setHidePassword(!hidePassword)}>
                      <AiOutlineEyeInvisible className="text-xl" />
                    </button>
                  ) : (
                    <button onClick={() => setHidePassword(!hidePassword)}>
                      <AiOutlineEye className=" text-xl" />
                    </button>
                  )}
                </div>
                <input
                  onChange={(e) => setConfirmed_password(e.target.value)}
                  type={hidePassword ? "password" : "text"}
                  placeholder="****"
                  className=" border-none bg-white  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <button
                className="border-none  w-full my-2 bg-[#3c37ff] text-slate-300 focus:outline-blue-700 py-2 px-3 rounded-lg"
                onClick={() => registerHandler(user)}
              >
                Create account
              </button>
              <span className="text-sm font-normal text-slate-400 mt-3">
                Already have an account?
              </span>
              <Link to="/login">
                <span className="text-[#3c37ff] text-sm mx-3 hover:underline cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
            <div className="mt-[10px]">
              <div className=" flex items-center justify-start gap-3 text-sm text-slate-500">
                <span className="text-[#3c37ff] ">
                  <AiOutlineMail />
                </span>
                <span>
                  Need help or suggest anything{" "}
                  <Link to="/" className="text-[#3c37ff] hover:underline ">
                    here
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* left side end  */}

        {/* right side start  */}
        <div className="w-1/2 hidden md:block h-full">
          <img src={loginIamge} alt="" />
        </div>

        {/* right side end  */}
      </div>
    </div>
  );
};

export default Register;
