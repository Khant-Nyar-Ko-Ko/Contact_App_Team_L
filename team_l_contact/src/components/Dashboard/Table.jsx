/* eslint-disable react/prop-types */
import { BsHeart, BsPencil, BsThreeDotsVertical } from "react-icons/bs";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded, todoRemoved } from "../../features/Store/CheckedSlice";
import { BiTrash } from "react-icons/bi";
import { useDeleteContactMutation } from "../../features/api/ContactApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const Table = ({ contact, contacts }) => {
  const [showActions, setShowActions] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [deleteContact] = useDeleteContactMutation();
  const checkedList = useSelector((state) => state.CheckedSlice.contacts);

  // mouse hover function
  const isInCheckList = checkedList?.find((c) => c.id === contact.id);
  const handleMouseEnter = (id) => {
    if (id == contact.id || isInCheckList) {
      setShowActions(true);
    }
  };
  const handleMouseLeave = (id) => {
    if (id == contact.id && !isInCheckList) {
      setShowActions(false);
    }
  };
  // onchange function
  const handleCheck = (check, id) => {
    // console.log(isCheck, id);
    const newCheck = contacts.find((contact) => contact.id === id);
    if (check && id == contact.id) {
      // setShowActions(true);
      dispatch(todoAdded(newCheck));
    } else {
      setShowActions(false);
      dispatch(todoRemoved(newCheck));
    }
  };
  const handleDelete = async (token, id) => {
    // 
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data =  deleteContact({ token, id });
    console.log(data);
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        toast.success("Deleted Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }
    });
  };
  // useEffect(() => {
  // }, [checkedList]);
  return (
    <tr
      key={contact.id}
      className={` ${
        showActions || (isInCheckList ? "bg-slate-100" : "")
      } px-2 hover-item h-10 hover:bg-slate-100`}
      onMouseOver={() => handleMouseEnter(contact.id)}
      onMouseOut={() => handleMouseLeave(contact.id)}
    >
      <td className="pt-3 flex items-start justify-start gap-2 text-sm">
        <h1
          className={`w-5 h-5 bg-blue-200 text-center rounded-full ${
            showActions || isInCheckList ? "hidden" : ""
          }`}
        >
          {contact.name.toUpperCase().substring(0, 1)}
        </h1>
        <input
          type="checkbox"
          className={`${
            showActions || isInCheckList ? "" : "hidden"
          } w-5 h-5 check-item `}
          checked={isInCheckList}
          onChange={(e) => handleCheck(e.target.checked, contact.id)}
        />
        <h2 className="">{contact?.name}</h2>
      </td>
      <td className="text-center hidden md:table-cell text-sm">
        {contact.email}
      </td>
      <td className={`text-center  hidden md:table-cell text-sm`}>
        {contact.phone}
      </td>
      <td
        className={`${
          showActions && !isInCheckList ? "" : "hidden"
        } text-right pr-20`}
      >
        <button className=" mx-3">
          <BsHeart />
        </button>
        <Link to={`/edit/${contact.id}`} state={contact}>
          <button className=" mx-3">
            <BsPencil />
          </button>
        </Link>

        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className=" cursor-pointer">
            <BsThreeDotsVertical />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <Link to={`/detail/${contact.id}`} state={contact}>
                Detail
              </Link>
            </li>
            <li>
              <button
                className="p-3 "
                onClick={() => handleDelete(token, contact.id)}
              >
                <BiTrash />
              </button>
            </li>
          </ul>
        </div>
        {/* <div
          className={`${
            showDelete ? "" : "hidden"
          } w-9 h-9 rounded-lg bg-slate-100 relative top-0 right-0`}
        >
         
          <Link to={`/detail/${contact.id}`} state={contact} className="p-3 ">
            Detail
          </Link>
        </div> */}
      </td>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </tr>
  );
};

export default Table;
