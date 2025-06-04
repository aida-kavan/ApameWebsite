import SearchNav from "@/components/ui/SearchNav";
import { FaCoins } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Headset, ShoppingBag } from "lucide-react";
interface navbarMenuListtypes {
  id: number;
  title: string;
  link: string;
  submenu?: { id: number; title: string; link: string }[];
  icon?: React.ReactNode;
}

const Header = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSubmenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const submenu = [
    {
      id: 1,
      title: "خدمات چاپ",
      link: "#",
    },
    {
      id: 2,
      title: "سایت و سئو",
      link: "#",
    },
    {
      id: 3,
      title: "سوشال مدیا",
      link: "#",
    },
    {
      id: 4,
      title: " تابلو و لیزر",
      link: "#",
    },
    {
      id: 5,
      title: "طراحی گرافیک",
      link: "#",
    },
    {
      id: 6,
      title: "عکاسی و فیلمبرداری",
      link: "#",
    },
    {
      id: 7,
      title: "موشن گرافی",
      link: "#",
    },
    {
      id: 8,
      title: "خدمات مشاوره",
      link: "#",
    },
    {
      id: 9,
      title: "آموزش",
      link: "#",
    },
  ];

  const navbarMenuList: navbarMenuListtypes[] = [
    {
      id: 1,
      title: "خانه",
      link: "#",
    },
    {
      id: 2,
      title: "خدمات",
      link: "#",
      submenu: submenu,
    },
    {
      id: 3,
      title: "محصولات",
      link: "#",
    },
    {
      id: 4,
      title: "وبلاگ",
      link: "#",
    },
    {
      id: 5,
      title: "درباره ما",
      link: "#",
    },
    {
      id: 6,
      title: "ارتباط با ما",
      link: "#",
      icon: <Headset/>
    },
  ];

  return (
    <>
      <header className="rounded-full flex fixed items-center justify-between navbar-shadow bg-[#ffffff] mt-5 w-[85%] p-1 z-20">
        <div className="flex justify-center gap-4 items-center mr-5">
          <img src="images/logo.png" alt="" className="w-[90px] " />
          <SearchNav />
        </div>

        <div className="flex justify-center items-center gap-14 ml-5 mt-1">
          {navbarMenuList.map((nav) => (
            <ul key={nav.id}>
              <li className="flex gap-1 items-center justify-center">
                <a
                  href={nav.link}
                  className="text-[16.5px] hover:text-[#4672e2e0] duration-200 hover:opacity-80 flex items-center cursor-pointer"
                  onClick={() => {
                    if (nav.title === "خدمات") {
                      setSubmenuOpen((prev) => !prev);
                    } else {
                      setSubmenuOpen(false);
                    }
                  }}
                >
                  {nav.title}
                </a>
                {nav.icon && (
                  <span className="ml-2 mb-1">{nav.icon}</span>
                )}
              </li>
            </ul>
          ))}
        </div>

        {/* <button className="  bg-[#ffe600] flex items-center justify-center gap-2 rounded-full py-2 px-4 hover:bg-[#4672e2cc] hover:text-white duration-300 hover:scale-105 cursor-pointer ml-[-130px] ">
          <span>پویش سودینو</span>
          <BsCashCoin />
        </button> */}

        <div className="flex items-center justify-center gap-2">
          <button className="bg-white shadow border p-3 rounded-full text-2xl cursor-pointer bg-btn-hovor hover:text-white hover:scale-90 duration-300 ">
          <FaCoins className="text-yellow-300 shadow-sodino-icon"/>
          </button>
          <button className="bg-white shadow border p-3 rounded-full cursor-pointer bg-btn-hovor hover:text-white hover:scale-90 duration-300 ml-1">
          <ShoppingBag />
          </button>
          <button className="group relative inline-flex items-center justify-center px-3 cursor-pointer hover:scale-90  rounded-full text-black/90 z-10 ml-5 overflow-hidden transition-all duration-300 ease-in-out shadow-inner shadow-black/20 hover:shadow">
            <span className="absolute -top-4 -left-6 z-[-2] h-[calc(100%+1em)] w-[calc(100%+3em)] rounded-full opacity-70 blur-2xl saturate-[1.18] bg-[linear-gradient(225deg,_#132dae,_#002aff_60%,_#722ed1)] transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-90"></span>

            <span className="relative z-10 flex items-center gap-2 p-3 rounded-full text-white text-lg">
              ثبت نام/ ورود
            </span>
          </button>
          
        </div>
      </header>

      <div
        className={`bg-[#bacbf8] fixed top-28 h-12 w-[80%] px-32 shadow rounded-b-3xl flex justify-evenly gap-2 overflow-hidden transition-all duration-500 ease-in-out mx-auto ${
          submenuOpen ? "max-h-32 opacity-100" : "max-h-0 "
        }`}
      >
        {submenu.map((item) => (
          <button key={item.id} className=" text-sm hover:bg-white/20 p-2" >
            <Link to={item.link}>{item.title}</Link>
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
