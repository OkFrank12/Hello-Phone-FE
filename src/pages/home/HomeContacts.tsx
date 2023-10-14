import { FaBlenderPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useReadAllContacts } from "../../hooks/customHooks";
import { BiSolidContact } from "react-icons/bi";
import moment from "moment";

const HomeContacts = () => {
  const { data } = useReadAllContacts();
  return (
    <div>
      <div className="w-full flex flex-col bg-gradient-to-b from-red-600 to-orange-400 min-h-[100vh]">
        <div className="font-bold flex text-[55px] tablet:text-[35px] w-full justify-center items-center h-[70px]">
          <Link to={`/`} className="flex items-center">
            <FaBlenderPhone />
            <span>
              Hello <span className="text-slate-800">Book</span>
            </span>
          </Link>
          <Link to={`/contact-page`}>
            <div className="text-[15px] px-4 py-2 bg-white ml-2 rounded-md">
              back
            </div>
          </Link>
        </div>
        <div className="w-full flex flex-col items-center flex-wrap min-h-[300px]">
          <div className="flex w-full justify-center mt-3 items-center flex-wrap">
            {data?.map((el: any) => {
              return (
                <div
                  key={el?._id}
                  className="w-[500px] smallPhone:p-1  tablet:w-[67%] smallPhone:w-[80%] m-1 h-[80px] rounded-md shadow-3xl flex items-center justify-between p-4 bg-white"
                >
                  <div className="w-[60px] text-[30px] tablet:text-[20px] tablet:w-[40px] tablet:h-[40px] flex justify-center items-center text-white rounded-full h-[60px] bg-gradient-to-b from-red-600 to-orange-400">
                    <BiSolidContact />
                  </div>
                  <div className="flex flex-col text-center flex-1 items-center">
                    <p className="font-bold text-rose-800 tablet:text-[12px] tablet:capitalize uppercase">
                      {el?.contactName}
                    </p>
                    <span className="text-[12px] tablet:text-[10px] tablet:flex flex-col items-center">
                      <span className="mx-2">
                        <span className="text-rose-700 capitalize">tel:</span>{" "}
                        {el?.contactNumber}
                      </span>
                      <div className="w-[5px] h-[5px] bg-orange-500"></div>
                      {el?.category}
                      <span className="text-rose-400 ml-2">
                        {moment(el?.createdAt).fromNow()}
                      </span>
                    </span>
                  </div>
                  <div className="text-[30px] w-[50px] smallPhone:h-[30px] smallPhone:w-[30px] smallPhone:text-[20px] h-[50px] flex justify-center hover:bg-orange-500 hover:text-white text-orange-800 transition-all duration-300 cursor-pointer items-center rounded-full">
                    {el?.contactName.charAt(0)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContacts;
