import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
import Navbar from "../components/Layout/Navbar";
import {
  useEditContactMutation,
} from "../features/api/ContactApi";

const Edit = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { id } = useParams();
  // const { data } = useGetSingleProductQuery({ token, id });
  const location = useLocation()
  const contact = location.state
  // const contact = data?.contact;
  console.log(contact);

  const [name, setName] = useState(contact?.name);
  const [phone, setPhone] = useState(contact?.phone);
  const [email, setEmail] = useState(contact?.email);
  const [address, setAddress] = useState(contact?.address);

  const nav = useNavigate();

  const [editContact] = useEditContactMutation();

  //   useEffect(() => {
  //     setName(contacts?.name);
  //     setPhone(contacts?.phone);
  //     setEmail(contacts?.email);
  //     setAddress(contacts?.address);
  //   }, []);

  const editContactHandler = async (e) => {
    e.preventDefault();
    const contact = { name, phone, email, address };
    const { data } = await editContact({ contact, token, id });
    if (data?.success) {
      nav("/contact");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex gap-5">
        <LeftSidebar />

        <div className=" p-4 md:p-10">
          <form className=" w-full rounded" onSubmit={editContactHandler}>
            <Link to="/contact">
              <div className=" font-bold flex gap-2 items-center mt-5">
                <BsArrowLeft />
                Back
              </div>
            </Link>
            <h2 className="my-5 text-xl">Edit Contact</h2>
            <div className="my-2 flex flex-col gap-1">
              <label htmlFor="name" className="font-bold">
                Edit Your Picture
              </label>
              <input
                type="file"
                placeholder="Edit your picture"
                className="  px-3 py-1 rounded bg-slate-50"
                radius="xl"
                size="md"
                accept="image/jpg"
              />
            </div>

            <div className="flex flex-col gap-5 bg-slate-50 p-3 rounded shadow-lg">
              <div className="flex flex-wrap gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Name :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your name"
                    className="  px-3 py-1 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Phone :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your number"
                    className="  px-3 py-1 rounded"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Email :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your email"
                    className=" px-3 py-1 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Address :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your address"
                    className=" px-3 py-1 rounded w-full"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className=" w-28 py-2 bg-blue-700 text-white rounded-lg mt-5"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
