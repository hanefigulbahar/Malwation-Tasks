import { Outlet } from "react-router-dom";

import SideBar from "@components/Sidebar";
import Header from "@components/Header";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
