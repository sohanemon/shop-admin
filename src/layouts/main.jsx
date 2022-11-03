import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
