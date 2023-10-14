import { Outlet } from "react-router-dom";
import Header from "../statics/Header";

const LayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayOut;
