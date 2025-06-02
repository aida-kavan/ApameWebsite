import SearchNav from "@/components/ui/SearchNav";
import Navbar from "@/components/ui/Navbar";
import MicroPhon from '../../public/images/headphone-mic (1).png';
import { BsCashCoin } from "react-icons/bs";

const Header = () => {
  return (
    <header className="rounded-full items-center justify-center bg-[#f8f8f8b7] navbar-settings grid grid-cols-5 mt-5 w-[85%] h-[10vh] relative z-10">

      <div className="flex justify-center items-center">
        <img src="images/logo.png" alt="" className="w-[90px] ml-[55%]" />
      </div>


      <div className="flex justify-center items-center w-[600px] mr-[-64%] mt-[2%]">
        <Navbar />
      </div>

      <div className="mr-[10%]">
        <img src={MicroPhon} alt="" className="w-[20px]"/>
      </div>

      <button className="fixed mr-[47%] bg-[#ffe600] flex items-center justify-center gap-2 rounded-full py-2 px-4 hover:bg-[#4672e2cc] hover:text-white duration-300 hover:scale-105 cursor-pointer  ">
        <span>پویش سودینو</span>
        <BsCashCoin className="font-extrabold"/>
      </button>

      <div className="mr-[43%]">
        <SearchNav />
      </div>

      <button className="bg-[#4672E2] text-white iransans-semiBold text-[15px] w-[140px] h-[45px] rounded-full text-center cursor-pointer mr-[45%] duration-300 hover:scale-105 hover:opacity-70">ثبت نام / ورود</button>

    </header>
  );
};

export default Header;
