import { Outlet, Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import Container from '@mui/material/Container';


const Layout = () => {
  return (
    <>

      <TopNav/>
      <Outlet />
  
    </>
  )
};

export default Layout;