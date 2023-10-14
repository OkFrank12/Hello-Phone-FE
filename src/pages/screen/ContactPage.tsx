import { FaBlenderPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchInput from "../../components/common/SearchInput";
import ContactPanel from "../../components/common/ContactPanel";

const ContactPage = () => {
  const [results, setResults] = useState<Array<{}>>([]);

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
          <Link to={`/all-contacts`}>
            <div className="text-[15px] px-4 py-2 bg-white ml-2 rounded-md">
              all
            </div>
          </Link>
        </div>
        <div className="w-full flex flex-col items-center flex-wrap min-h-[300px]">
          <SearchInput setResults={setResults} />
          <div className="flex w-full justify-center mt-3 items-center flex-wrap">
            <ContactPanel results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
