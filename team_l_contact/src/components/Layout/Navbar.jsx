import { useState } from "react";
import { BsGear, BsSearch } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { useUserLogoutMutation } from "../../features/api/AuthApi";
import { useDispatch } from "react-redux";
import { startSearch } from "../../features/Store/CheckedSlice";
const Navbar = () => {
  const [userLogout] = useUserLogoutMutation();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const logoutHandler = async (token) => {
    const response = await userLogout(token);
    if (response?.data?.success) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      console.log(response.error.data);
    }
  };
  const [showProfile, setShowProfile] = useState(false);
  console.log(showProfile);
  return (
    <>
      <div className=" px-2 flex w-full justify-between items-center gap-4 text-sm md:text-base  md:px-5 shadow-lg">
        <div className="flex items-center justify-center gap-2 md:gap-5 my-3 md:my-5">
          <button
            className="menu text-md md:text-2xl"
            // onClick={() => document.documentElement.classList.add("dark")}
          >
            <FcMenu />
          </button>
          <div className="hidden md:flex">
            <img
              src="https://www.gstatic.com/images/branding/product/2x/contacts_2022_48dp.png"
              alt=""
              className=" w-[30px] h-[30px]"
            />
          </div>
          <p className=" hidden md:block text-xl font-semibold text-slate-500">
            Contacts
          </p>
        </div>
        <div className=" bg-slate-50 rounded active:shadow-lg flex items-center justify-center shadow-slate-700 md:px-3 px-2 py-1">
          <button className="text-slate-700 text-md md:text-2xl">
            <BsSearch />
          </button>
          <input
            type="text"
            name="search"
            onChange={(e) => dispatch(startSearch(e.target.value))}
            className=" outline-none px-1 md:px-3 md:py-1 py-0 md:w-[400px] text-slate-800 w-full bg-slate-50 "
            placeholder=" search"
          />
        </div>
        <div className="flex items-center justify-center md:gap-5">
          <button className=" hidden md:block ">
            <BsGear />
          </button>
          <button
            className=" border-2 border-blue-500 rounded-full"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="..."
              className=" md:w-[30px]  md:h-[30px] w-[20px]  h-[20px]"
            />
          </button>
          {showProfile && (
            <div className=" p-3 md:p-8 font-semibold md:w-[300px] z-20 lg:w-[300px] w-auto text-sm absolute items-start top-[40px] md:top-[50px] right-3 rounded-2xl flex flex-col shadow-2xl shadow-black bg-slate-50">
              <div className="flex gap-3 items-center justify-start">
                <span className=" bg-slate-500 text-white w-10 h-10 text-center py-2 rounded-full">
                  J
                </span>
                <div className="">
                  <p>James</p>
                  <p>James@gmail.com</p>
                </div>
              </div>

              <Link className="p-2 hover:bg-slate-300 flex items-center gap-2 rounded-lg w-full mt-5">
                <FiUserPlus />
                <span>Add Another Account</span>
              </Link>
              <p
                className="p-2 flex items-center gap-2 hover:bg-slate-300 rounded-lg w-full"
                onClick={() => logoutHandler(token)}
              >
                <FiLogOut />
                <span>Logout</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
