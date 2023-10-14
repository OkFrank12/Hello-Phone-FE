import { LuSearch } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/ai";
import CreatePopOut from "../../components/common/CreatePopOut";
import { useSelector, useDispatch } from "react-redux";
import { onToggleState } from "../../global/globalState";
import axios from "axios";
import { FC, useState } from "react";

interface iSearch {
  setResults: any;
}
const SearchInput: FC<iSearch> = ({ setResults }) => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const onRenderChanges = () => {
    dispatch(onToggleState(!toggle));
  };

  const [category, setCategory] = useState<string>("");

  const fetchData = async (value: any) => {
    return await axios
      .get("https://hello-phone-be.onrender.com/api/all")
      .then((res: any) => {
        const json: [] = res.data.data;
        const result = json.filter((category: any) => {
          return (
            value &&
            category &&
            category?.category?.toLowerCase().includes(value)
          );
        });
        setResults(result);
      });
  };

  const handleChange = (value: any) => {
    setCategory(value);
    fetchData(value);
  };

  return (
    <>
      <div className="flex mt-2 w-[700px] tablet:w-full justify-center">
        <input
          className="h-[45px] w-[400px] tablet:w-[50%] tablet:placeholder:text-[10px] tablet:text-rose-400 tablet:text-[12px] pl-2 outline-rose-500"
          placeholder="favs, business, friends, family, normal"
          value={category}
          onChange={(e: any) => {
            handleChange(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-[45px] h-[45px] bg-red-500 ml-1 text-white text-[20px]  cursor-pointer flex justify-center items-center"
        >
          <LuSearch className="hover:scale-[1.09]" />
        </button>
        <div className="w-[45px] h-[45px] bg-red-500 ml-1 text-white text-[20px]  cursor-pointer flex justify-center items-center">
          <AiOutlineUserAdd
            className="hover:scale-[1.09]"
            onClick={onRenderChanges}
          />
        </div>
        {toggle && <CreatePopOut />}
      </div>
    </>
  );
};

export default SearchInput;
