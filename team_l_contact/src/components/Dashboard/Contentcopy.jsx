// import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BiDotsVerticalRounded, BiExport, BiImport } from "react-icons/bi";
import { useGetContactsQuery } from "../../features/api/ContactApi";
import { BsHeart, BsPencil, BsThreeDotsVertical } from "react-icons/bs";

const Contentcopy = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = useGetContactsQuery(token);
  // const [showActions, setShowActions] = useState(false);
  const contacts = response?.data?.contacts.data;
  console.log(contacts);
  // mouse hover function
  // const hoverHandler = () => {
  //   setShowActions(true);
  // };
  return (
    <>
      <div className="w-full m-3">
        <div className=" border-b-[1px] flex items-center border-slate-200 ">
          <span className="py-4 w-[300px]">Name</span>
          <span className=" w-[300px]">Email</span>
          <span className=" w-[300px]">Phone No.</span>
          <span className="w-[300px]">
            <button className="px-2 md:px-3 text-lg">
              <AiFillPrinter />
            </button>
            <button className="px-2 md:px-3 text-lg">
              <BiExport />
            </button>
            <button className="px-2 md:px-3 text-lg">
              <BiImport />
            </button>
            <button className="px-2 md:px-3 text-lg">
              <BiDotsVerticalRounded />
            </button>
          </span>
        </div>

        {contacts?.length < 1 ? (
          <div className="">
            <p className="text-center">No Contact </p>
            <button className=" btn-primary">Create new</button>
          </div>
        ) : (
          <div>
            {contacts?.map((contact) => {
              return (
                <div
                  key={contact.id}
                  className={`h-10 flex items-center `}
                  // onMouseOver={() => hoverHandler(contact.id)}
                >
                  <span className="text-center pt-5 w-[260px] flex items-center gap-2 text-sm">
                    <h1 className="w-7 h-7 hover-invisible bg-blue-200 pt-1 rounded-full">
                      {contact.name.substring(0, 1)}
                    </h1>
                    <input
                      type="checkbox"
                      className="hidden w-5 h-5 check-item hover-visible"
                    />
                    <h2 className="text-center ">{contact.name}</h2>
                  </span>
                  <span className="text-start text-sm w-[300px]">
                    {contact.email}
                  </span>
                  <span className="text-start text-sm w-[250px]">
                    {contact.phone}
                  </span>
                  <span className="hidden hover-visible w-[300px] mx-3">
                    <button className=" mx-3">
                      <BsHeart />
                    </button>
                    <button className=" mx-3">
                      <BsPencil />
                    </button>
                    <button className=" mx-3">
                      <BsThreeDotsVertical />
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Contentcopy;
