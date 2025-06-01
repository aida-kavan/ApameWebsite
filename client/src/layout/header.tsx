import SearchNav from "@/components/ui/SearchNav";
import Navbar from "@/components/ui/Navbar";

const Header = () => {
  return (
    <header className=" rounded-full p-1 items-center justify-center bg-[#F8F8F8] grid grid-cols-3  mt-6 shadow-lg/10 border w-[80%] ">
      <div className="flex justify-center items-center">
        <img src="images/logo.png" alt="" className="w-[95px]" />
        <SearchNav />
      </div>
      <div className="flex justify-center items-center ">
        <Navbar />
      </div>
      <div className="flex justify-end">
        <button className="group relative inline-flex items-center border shadow-inner shadow-black/20 justify-center px-6 py-1 rounded-full text-black/90 z-10 ml-5 overflow-hidden transition-opacity duration-300 hover:opacity-90 ">
          <span className="absolute -top-4 -left-6 z-[-2] h-[calc(100%+1em)] w-[calc(100%+3em)] rounded-full opacity-70 blur-2xl saturate-[1.18] transition-transform duration-200 bg-[linear-gradient(225deg,_#132dae,_#002aff_60%,_#722ed1)]"></span>

          <span className="relative z-10 flex items-center gap-2  p-2 rounded-full text-white text-lg  ">
            ثبت نام/ ورود
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
