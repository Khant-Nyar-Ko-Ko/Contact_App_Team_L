import { Pagination } from "@mantine/core";

const Paginate = ({
  setCurrentPage,
  setSearchParams,
  currentPage,
  totalPages,
}) => {
  // const [data, setData] = useState([]);

  // const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams(`page=${newPage}`);
  };
  // console.log(page);

  return (
    <div>
      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Paginate;
