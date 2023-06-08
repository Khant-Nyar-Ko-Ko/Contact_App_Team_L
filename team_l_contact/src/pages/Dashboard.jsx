import Content from "../components/Dashboard/Content";
// import Contentcopy from "../components/Dashboard/Contentcopy";
// import Contentcopy1 from "../components/Dashboard/Contentcopy1";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
import Navbar from "../components/Layout/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <LeftSidebar />
         <Content/>
         {/* <Contentcopy/> */}
         {/* <Contentcopy1/> */}
      </div>
    </>
  );
};

export default Dashboard;
