import marker from "../../assets/img/marker.svg";

const Mobile = ({ open }) => {
  const navStyle = open ? "translate-x-0 " : "translate-x-[-120%]";

  return (
    <div
      className={` ${navStyle}
    absolute top-0 right-0 left-0  w-4/5 duration-500 ease-in transition-all h-full bg-white  overflow-hidden md:hidden`}
    >
      <div className="flex items-start justify-center w-full h-full mt-40 text-center delay-200 ">
        <div className="">
          <ul className="ml-4 space-y-4 font-bold uppercase ">
            <li className="transition-all duration-75 hover:text-green-700">
              <a href="#">Menu</a>
            </li>
            <li className="transition-all duration-75 hover:text-green-700">
              <a href="#">Rewards</a>
            </li>
            <li className="transition-all duration-75 hover:text-green-700">
              <a href="#">Gift Cards</a>
            </li>
          </ul>

          <ul className="flex my-8 space-x-3">
            <li className="">
              <a
                href="#"
                className="btn border-[.5px] border-black hover:bg-gray-500 transition-all duration-75"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white transition-all duration-75 bg-black btn hover:bg-gray-700"
              >
                Join now
              </a>
            </li>
          </ul>

          <li className="list-none transition-all duration-75 place-self-center hover:text-green-700">
            <a href="#" className="flex items-center">
              <img src={marker} alt="marker " className="w-5 h-5 mr-2" />
              <span>Find a store</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
