import { AiFillPrinter } from "react-icons/ai";
import {
  BiDotsVerticalRounded,
  BiExport,
  BiImport,
  BiPlus,
} from "react-icons/bi";
import {
  usePaginatePagesQuery,
  useSearchByNameQuery,
} from "../../features/api/ContactApi";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { selectAll, selectNone } from "../../features/Store/CheckedSlice";
import { Link, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Paginate from "./Paginate";
import { useState } from "react";

const Content = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);
  const page = searchParams.get("page")
    ? searchParams.get("page")
    : currentPage;
  const token = JSON.parse(localStorage.getItem("token"));
  const response = usePaginatePagesQuery({ token, page });
  const checkedList = useSelector((state) => state.CheckedSlice.contacts);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.CheckedSlice.search);
  const searchResult = useSearchByNameQuery({ token, search });
  const handlePrint = () => {
    window.print();
  };
  const totalPages =
    search === ""
      ? response?.data?.contacts?.last_page
      : searchResult?.data?.contacts?.last_page;
  const contacts =
    search === ""
      ? response?.data?.contacts?.data
      : searchResult?.data?.contacts?.data;

  const isCheckedMode = checkedList.length !== 0;

  return (
    <>
      <div className="w-full">
        <table className="table w-full mx-2 md:mx-5 mt-5">
          <thead className=" text-slate-500">
            {!isCheckedMode ? (
              <tr className=" border-b-[1px] border-slate-200 ">
                <th className="py-4">Name</th>
                <th className=" hidden md:table-cell">Email</th>
                <th className=" hidden md:table-cell ">Phone No.</th>
                <th>
                  <button
                    className="px-2 md:px-3 text-lg"
                    onClick={handlePrint}
                  >
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
                </th>
              </tr>
            ) : (
              <tr className=" border-b-[1px] border-slate-200 ">
                <th className="py-4 text-left" colSpan={2}>
                  {/* <button className="p-3 rounded-full bg-slate-100">
                    <AiFillCloseSquare />
                  </button> */}
                  <button
                    className="px-3 py-2 ml-2  bg-slate-100"
                    onClick={() => dispatch(selectAll(contacts))}
                  >
                    Select All
                  </button>
                  <button
                    className="px-3 py-2 ml-2  bg-slate-100"
                    onClick={() => dispatch(selectNone([]))}
                  >
                    Select None
                  </button>
                </th>

                <th colSpan={2} className=" text-right pr-6">
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
                </th>
              </tr>
            )}
          </thead>
          {contacts?.length < 1 ? (
            <div className="">
              <p className="text-center">No Contact </p>
              <button className=" btn-primary">Create new</button>
            </div>
          ) : (
            <tbody>
              {contacts?.map((contact) => {
                return (
                  <Table
                    contact={contact}
                    contacts={contacts}
                    key={contact.id}
                  />
                );
              })}
            </tbody>
          )}
        </table>
        <Link to="/create">
          <button className=" p-3 rounded-full fixed right-10 bottom-12 border-2 border-x-blue-500 border-y-blue-500 border-slate-600 text-blue-500">
            <BiPlus className="text-xl" />
          </button>
        </Link>
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

        <ToastContainer />
        <div className="flex justify-center mt-56 mb-6 md:mt-36">
          <Paginate
            setCurrentPage={setCurrentPage}
            setSearchParams={setSearchParams}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
