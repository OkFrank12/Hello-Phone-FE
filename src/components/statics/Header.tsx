import { FaBlenderPhone } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="w-full h-[70px] bg-gradient-to-b from-red-600 to-red-600 fixed flex text-white justify-center p-3">
        <div className="font-bold flex text-[55px] smallPhone:text-[35px] items-center">
          <FaBlenderPhone />
          <span>Hello <span className="text-slate-800">Book</span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
