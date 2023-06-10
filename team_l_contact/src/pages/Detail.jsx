import { Link, useLocation } from "react-router-dom";
import { BsTelephone, BsMailbox, BsArrowLeft } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import Navbar from "../components/Layout/Navbar";
import LeftSidebar from "../components/Dashboard/LeftSidebar";

const Detail = () => {
  const location = useLocation();
  console.log(location.state);
  const contact = location?.state;
  return (
    <div>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <div className="flex justify-start p-3 md:p-10 flex-col w-full items-start min-h-screen">
          <Link to='/contact'>
            <BsArrowLeft />
          </Link>

          <div className="flex gap-10 items-center my-5">
            <img
              src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
              className=" w-32 rounded-full shadow-lg"
            />
            <h3 className=" text-2xl font-bold">{contact?.name}</h3>
          </div>
         <Link to={`/edit/${contact.id}`} className=" bg-blue-600 rounded-lg px-2 py-1 text-white text-end " state={contact}>Edit</Link>
          <hr />
          <div className="flex flex-col gap-5 my-5 border p-3 w-full md:min-w-[400px] rounded shadow-lg">
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
