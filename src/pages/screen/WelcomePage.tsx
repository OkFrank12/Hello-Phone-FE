import { Link } from "react-router-dom";
import hero from "../../assets/istockphoto-1271707351-612x612-removebg-preview.png";
import Typewriter from "typewriter-effect";

const WelcomePage = () => {
  return (
    <div>
      <div className="w-full min-h-[100vh] miniLaptop:text-center flex justify-center items-center p-5 bg-gradient-to-b from-red-600 to-orange-400">
        <div className="w-[80%] smallPhone:w-[90%] flex-wrap miniLaptop:justify-center justify-between flex items-center h-full pt-[80px] ">
          <div className="flex flex-col w-[600px] miniLaptop:w-[80%] smallPhone:w-[100%] miniLaptop:text-[13px]">
            <p className="font-bold capitalize text-white">
              digital experience
            </p>
            <span className="font-black text-slate-600 smallPhone:text-[70px] text-[100px]">
              Hello{" "}
              <span className="text-[70px] text-rose-800 bigPhone:hidden">
                <Typewriter
                  options={{ loop: true }}
                  onInit={(typewriter: any) => {
                    typewriter

                      .typeString("Business")
                      .pauseFor(1500)
                      .deleteAll()

                      .typeString("Family")
                      .pauseFor(1500)
                      .deleteAll()

                      .typeString("Favs")
                      .pauseFor(1500)
                      .deleteAll()

                      .typeString("Normal")
                      .pauseFor(1500)
                      .deleteAll()

                      .typeString("Friends")
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </span>
            <span className="text-white bigPhone:text-[8px]">
              Phone apps have revolutionized the way we live. They connect us
              with loved ones, provide entertainment on the go, and simplify
              everyday tasks. From social media to productivity tools, phone
              apps are our modern-day companions, offering a world of
              convenience at our fingertips. With millions of apps available,
              there's one for everyone, making our smartphones indispensable in
              today's digital age.
            </span>
            <div>
              <Link to={`/contact-page`}>
                <button className="w-[250px] shadow-3xl capitalize mr-2 mt-4 h-[40px] rounded hover:rounded-full transition-all duration-300 text-white bg-gradient-to-b from-rose-600 to-red-400">
                  contacts
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[500px] h-[400px] bigPhone:w-[300px] bigPhone:h-[300px] smallPhone:h-[200px] smallPhone:w-[200px]">
            <img
              src={hero}
              className="w-[100%] miniLaptop:mt-5 border object-cover border-slate-400 rounded-full shadow-3xl h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
