import { useState } from "react";
import { BsGear, BsSearch } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { useUserLogoutMutation } from "../../features/api/AuthApi";
import { useDispatch } from "react-redux";
import { startSearch } from "../../features/Store/CheckedSlice";
import {RiContactsLine} from 'react-icons/ri'
import {RxCounterClockwiseClock} from 'react-icons/rx'
import {BsArrowDownSquare,BsPlusLg} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {BiTrash} from 'react-icons/bi'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [userLogout] = useUserLogoutMutation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
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
            className="menu text-md md:text-2xl block sm:hidden "
            // onClick={() => document.documentElement.classList.add("dark")}
          >
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className=" drawer-button"> <FcMenu /> </label>
              </div> 
              <div className="drawer-side w-60">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className=" bg-base-100 h-full w-full z-50">
            <ul className='flex-col flex pt-10'>
                <NavLink to='/contact'>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-md' >
                      <div className=" flex gap-5 items-center">
                          <RiContactsLine />
                            <h1 className=''>Contacts</h1>
                      </div>
                    </li>
                </NavLink>
                <NavLink to={'/frequent'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-md' >
                        <div className=" flex gap-5 items-center">
                            <RxCounterClockwiseClock />
                            <h1>Frequent</h1>
                        </div>
                    </li>
                </NavLink>
                <NavLink to={'/ot'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-md' >
                    <div className=" flex gap-5 items-center">
                        <BsArrowDownSquare />
                        <h1>Other Contacts</h1>
                     </div>
                    </li>
                </NavLink>
            </ul>
            <ul className='flex-col flex pt-10'>
                <h1 className=' font-bold text-sm px-2 mb-5'>Fix and manage</h1>
                <NavLink to={'/fix'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-lg'>
                      <div className=" flex gap-5 items-center">
                          <MdOutlineModeEditOutline />
                            <h1>Marge and fix</h1>
                      </div>
                    </li>
                </NavLink>
                <NavLink to={'/bin'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-lg'>
                        <div className=" flex gap-5 items-center">
                        <BiTrash />
                        <h1>Bin</h1>
                        </div>
                    </li>
                </NavLink>
            </ul>
            <div className=" mt-16 flex items-center px-10 text-sm justify-between">
                <h1>Label</h1>
                <BsPlusLg />
            </div>
        </div>
              </div>
            </div>
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
