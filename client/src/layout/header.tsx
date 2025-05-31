import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";


import "../index.css";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="bg-white backdrop-blur-md w-[75%] shadow m-auto mt-2 rounded-3xl grid grid-cols-2 items-center justify-center">
        <div className="flex items-center pr-7">
          <img src="/logo.png" className="w-24  " />
        <div className="bg-[#A9C7E1] rounded-full w-[22rem] mr-3  flex shadow-blue-500 border ">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center m-1 ">
            <Search/>
          </div>
          <div>
            <input id="searchInput" className="border-0 ouline-0 w-[19rem] rounded-full h-full focus:outline-0 pr-2 " placeholder="جستجو کنید..."/>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-end pl-5">
          <button className="btn " type="button">
            ورود یا ثبت نام
          </button>
        </div>
      </div>

      <div className="w-[73%] h-12 rounded-b-2xl  bg-[#A9C7E1] m-auto flex items-center justify-evenly">

        <Button variant="headerNav">خانه</Button>


        <Button variant="headerNav">خدمات چاپ</Button>

        <Button variant="headerNav">سایت و سئو</Button>

        <Button variant="headerNav">سوشال مدیا</Button>

        <Button variant="headerNav"> تابلو و لیزر</Button>

        <Button variant="headerNav">طراحی گرافیک</Button>

        <Button variant="headerNav">عکاسی و فیلم برداری</Button>

        <Button variant="headerNav">موشن گرافی</Button>

        <Button variant="headerNav">مقالات</Button>

        <Button variant="headerNav">درباره ی ما</Button>
      </div>
    </>
  );
};

export default Header;
