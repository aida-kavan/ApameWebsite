import DesktopMenu from "@/components/elements/HeaderComponents/DesktopMenu";
import MobMenu from "@/components/elements/HeaderComponents/MobileHeader";
import { Link } from "react-router-dom";
import {Menus} from "@/components/elements/HeaderComponents/data"

const Header = () => {
  // const navBarItems = [
  //   { title: "خدمات", Link: "/services" },
  //   {
  //     title: "محصولات",
  //     Link: "/products",
  //   },
  //   {
  //     title: "ارتباط با ما",
  //     Link: "/contactus",
  //   },
  //   {
  //     title: "وبلاگ",
  //     Link: "/blog",
  //   },
  // ];

  return (
    <div className="w-[60%] px-6 h-20 flex justify-between items-center text-white mt-6 bg-[#00000052] backdrop-blur-md fixed z-50 rounded-xl p-2">
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <nav>
        <ul className="flex items-center">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          
      </nav>
      <div className="flex items-center">
        <Link to={"/signup"} className="cta">
          
            <div className="loginText">
              ورود /ثبت نام <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
