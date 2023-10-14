import { AiOutlineAppstoreAdd, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { onContactState, onToggleState } from "../../global/globalState";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContact } from "../../api/contactAPI";
import { useNavigate } from "react-router-dom";
import TypeWriter from "typewriter-effect";
import Swal from "sweetalert2";

const CreatePopOut = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const onRenderChanges = () => {
    dispatch(onToggleState(!toggle));
  };

  const navigate = useNavigate();

  const model = yup.object({
    contactName: yup.string().required(),
    contactNumber: yup.string().required(),
    category: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleContacts = handleSubmit(async (data: any) => {
    createContact(data).then((res: any) => {
      Swal.fire({
        icon: "success",
        text: "save contact",
        timer: 3000,
        timerProgressBar: false,
      }).then(() => {
        dispatch(onContactState(res));
        navigate("/contact-page");
      });
    });
  });
  return (
    <div>
      <form
        onSubmit={onHandleContacts}
        style={{
          width: "100%",
          height: "100vh",
          background: "rgba( 0, 0, 0, 0.6 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 10px )",
        }}
        className="fixed w-full h-[100vh] top-0 left-0 flex items-center justify-center flex-col"
      >
        <div className="w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 cursor-pointer hover:bg-orange-500 text-orange-300 rounded-full">
          <AiOutlineClose onClick={onRenderChanges} className="text-[25px]" />
        </div>
        <p className="text-[30px] smallPhone:text-[20px] font-bold text-orange-500">
          Create Contacts 📱
        </p>
        <div className="text-white">
          <TypeWriter
            options={{ loop: true }}
            onInit={(typewriter: any) => {
              typewriter

                .typeString("categories are:")
                .pauseFor(1500)
                .deleteAll()

                .typeString("normal")
                .pauseFor(1500)
                .deleteAll()

                .typeString("family")
                .pauseFor(1500)
                .deleteAll()

                .typeString("favs")
                .pauseFor(1500)
                .deleteAll()

                .typeString("business")
                .pauseFor(1500)
                .deleteAll()

                .typeString("friends")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <input
          className="w-[500px] bigPhone:w-[300px] smallPhone:w-[250px] mt-2 h-[40px] rounded-full outline-orange-400 pl-2 text-orange-800 placeholder:text-orange-500"
          placeholder="contact name"
          required
          {...register("contactName")}
        />
        <div className="w-[500px] bigPhone:w-[300px] smallPhone:w-[250px] bigPhone:flex-col bigPhone:items-center flex justify-between">
          <input
            className="w-[48%] bigPhone:w-full mt-4  h-[40px] rounded-full outline-orange-400 pl-2 text-orange-800 placeholder:text-orange-500"
            placeholder="telephone"
            {...register("contactNumber")}
            required
          />
          <select
            {...register("category")}
            required
            className="w-[48%]  mt-4 h-[40px] rounded-full outline-orange-400 pl-2 text-orange-800 placeholder:text-orange-500 "
          >
            <option value={`business`}>business</option>
            <option value={`friends`}>friends</option>
            <option value={`favs`}>favs</option>
            <option value={`normal`}>normal</option>
            <option value={`family`}>family</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 cursor-pointer hover:bg-orange-500 text-orange-300 rounded-full"
        >
          <AiOutlineAppstoreAdd className="text-[25px]" />
        </button>
      </form>
    </div>
  );
};

export default CreatePopOut;
