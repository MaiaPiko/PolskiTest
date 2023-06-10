import { Outlet, Link } from "react-router-dom";
import TopNav from "../components/TopNav";


const Layout = () => {
  return (
    <>

      <TopNav/>
      <Outlet />

    </>
  )
};

export default Layout;