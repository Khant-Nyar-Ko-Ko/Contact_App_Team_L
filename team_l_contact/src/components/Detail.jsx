import { Link, useLocation } from "react-router-dom";
import { BsTelephone, BsMailbox, BsArrowLeft } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import Navbar from "./Layout/Navbar";
import LeftSidebar from "./Dashboard/LeftSidebar";

const Detail = () => {
  const location = useLocation();
  console.log(location.state);
  const contact = location.state;
  return (
    <div>
      
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="flex justify-start mt-[150px] ml-[300px] px-20 flex-col w-full items-start h-full">
          <Link to="/">
            <BsArrowLeft />
          </Link>

          <div className="flex gap-10 items-center my-5">
            <img
              src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
              className=" w-52 rounded-full shadow-lg"
            />
            <h3 className=" text-2xl font-bold">{contact?.name}</h3>
          </div>
          <hr />
          <div className="flex flex-col gap-5 my-5 border p-3 min-w-[400px] rounded shadow-lg">
            <h3 className=" text-lg">Contact Details</h3>
            <hr />
            <button className="flex gap-3 items-center">
              <BsTelephone />
              <span className=" text-blue-700">{contact?.phone}</span>
            </button>
            <button className="flex gap-3 items-center">
              <BsMailbox />
              <span className=" text-blue-700">{contact?.email}</span>
            </button>
            <button className="flex gap-3 items-center">
              <BiHome />
              <span className=" text-blue-700">{contact?.address}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
