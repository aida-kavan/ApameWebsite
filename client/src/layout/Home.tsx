import { useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { GiKnightBanner, GiPaperBagFolded } from "react-icons/gi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CategoryImg from '../../public/images/Category.png';
import Printer from '../../public/images/printer.png';
import Sodinoimg from '../../public/images/sodino-img.png';
import DefaultSlider from "@/components/ui/BannerSlider/DefaultSlider";
import PrintSlider from "@/components/ui/BannerSlider/PrintSlider";
import WebSeoSlider from "@/components/ui/BannerSlider/WebSeoSlider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import Trackt from '../../public/images/tract.gif';
import PacketName from '../../public/images/packetname.gif';
import SarBarg from '../../public/images/sarbarg.gif';
import BoxGif from '../../public/images/box.gif'
import VisitCard from '../../public/images/card.gif';
import Label from '../../public/images/label.gif';

  const sliderHome = [
    {
      data: <WebSeoSlider/>,
      id: 3,
    },
    {
      data: <PrintSlider/>,
      id: 2,
    },
    {
      data: <DefaultSlider/>,
      id: 1,
    },
  ];

function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAuto, setIsAuto] = useState(true);

  const nextSlider = (auto = false) => {
    if (isAnimating && auto) return;
    setDirection(1);
    setIsAuto(auto);
    setCurrent((prev) => (prev === sliderHome.length - 1 ? 0 : prev + 1));
  };

  const prevSlider = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAuto(false);
    setCurrent((prev) => (prev === 0 ? sliderHome.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => nextSlider(true), 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="w-[85%] h-[83vh] rounded-3xl mt-[9.1%] z-10">

      <div className=" bg-[#ffffffa9] home-slider-box w-[59.8%] h-[57.7vh] absolute rounded-4xl overflow-x-hidden">
        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div key={sliderHome[current].id} initial={isAuto ? { x: direction === 1 ? -20 : 20, opacity: 0 } : { opacity: 1 }} animate={{ x: 0, opacity: 1 }} exit={isAuto ? { x: direction === 1 ? 100 : -100, opacity: 0 } : { opacity: 1 }} transition={isAuto ? { duration: 0.7, ease: easeInOut } : { duration: 0 }} className="w-full" onAnimationStart={() => setIsAnimating(true)} onAnimationComplete={() => setIsAnimating(false)}>
            {sliderHome.length > 0 && sliderHome[current].data}
          </motion.div>
        </AnimatePresence>
        
        <motion.button whileTap={{ scale: 0.99 }} onClick={() => nextSlider(false)} disabled={isAnimating} className={`absolute right-2 mt-[23%] w-8 h-8 flex items-center justify-center text-[16px] cursor-pointer bg-[#eeeff73a] text-[#5a5a5a] rounded-full hover:scale-105 duration-300 hover:bg-[#dddddfab] z-10 ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}>
          <FaArrowRight />
        </motion.button>

        <motion.button whileTap={{ scale: 0.99 }} onClick={prevSlider} disabled={isAnimating} className={`absolute mr-[96.5%] mt-[23%]  w-8 h-8 flex items-center justify-center text-[16px] cursor-pointer bg-[#eeeff71a] text-[#5a5a5a] rounded-full hover:scale-105 duration-300 hover:bg-[#eeeff78a] z-10 ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}>
          <FaArrowLeft />
        </motion.button>
      </div>


      <div className="home-slider-box bg-[#47a4e2] absolute rounded-4xl text-center w-[458px] h-[270px] mr-[61%] mt-[0%] grid grid-cols-2">
        <div className='flex flex-col'>
          <h1 className='iransans-Bold text-[20px] text-white mt-[18%] ml-[13%]'>پویش سودینو</h1>
          <h1 className='iransans-ExtraBold text-[24px] text-[#F9CC42] ml-[-20%] mt-[-2%]'>مشتری بیار، پول ببر</h1>
          <p className='iransans-Bold text-white text-[13px] mt-[10%] mr-[9%]'>نمیدونی چجوری پول در بیاری؟</p>
          <p className='iransans-semiBold text-[#fffdc39d] text-[12.3px] leading-[25px] w-[233px] h-[50px] mr-[15%]'>از امروز، هرکسی که از طرف تو بیاد و سفارش ثبت کنه، ۵ تا ۱۰ درصد مبلغ سفارش مال توئه</p>
          <button className='iransans-Bold text-[12px] text-[#000000] bg-[#F9CC42] btn-home rounded-lg w-[215px] h-[34px] hover:bg-[#F5F5F5] hover:text-[#b3a13d] hover:scale-105 cursor-pointer duration-300 mr-[18%] mt-[5%]'>ادامه و کسب درآمد</button>
        </div>
        
        <div className='flex items-center justify-center '>
          <img src={Sodinoimg} alt="" className='w-[100%] ml-[12%] mb-[12%] img-sodino-shadow'/>
        </div>
      </div>

      <div className="home-slider-box soldout-bg-home absolute rounded-4xl text-center w-[458px] h-[470px] mr-[61%] mt-[15.5%] grid grid-rows-12 ">


        <div className=' flex items-center justify-start mr-[7%] mt-4 text-[19px] row-span-2'>
          <h1 className='iransans-Bold text-[#000000e3]'>محصولات پرفروش</h1>
          <img src={BoxGif} alt="" className=" w-16 h-16 mb-8 mr-[-3%]"/>
        </div>

        <div className='grid grid-cols-5 row-span-2 mb-3 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>
          <div className='col-span-1  flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              {/* <FaCreditCard className='text-2xl text-[#4672e2]'/> */}
              <img src={VisitCard} alt="" className="rounded-full h-full w-full"/>
            </div>
          </div>

          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>کارت ویزیت</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 مدل کارت ویزیت</p>
          </div>
    
          <div className='col-span-2  flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>

        <div className='grid grid-cols-5 row-span-2 mb-3 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>

          <div className='col-span-1 flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              {/* <GiKnightBanner className='text-2xl text-[#4672e2]'/> */}
              <img src={Trackt} alt="" className="rounded-full h-full w-full"/>
            </div>
          </div>
    
          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>انواع تراکت</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 نوع بنر برای چاپ</p>
          </div>

          <div className='col-span-2 flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>

        <div className='grid grid-cols-5 row-span-2 mb-3 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>
          <div className='col-span-1 flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              {/* <GiPaperBagFolded className='text-2xl text-[#4672e2]'/> */}
              <img src={PacketName} alt="" className="rounded-full h-full w-full"/>
            </div>
          </div>

          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>پاکت نامه</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 مدل کارت ویزیت</p>
          </div>

          <div className='col-span-2 flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>

        <div className='grid grid-cols-5 row-span-2 mb-3 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>
          <div className='col-span-1 flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              {/* <GiPaperBagFolded className='text-2xl text-[#4672e2]'/> */}
              <img src={SarBarg} alt="" className="rounded-full h-full w-full"/>
            </div>
          </div>

          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>انواع سربرگ</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 مدل کارت ویزیت</p>
          </div>

          <div className='col-span-2 flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>

        <div className='grid grid-cols-5 row-span-2 mb-3 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>
          <div className='col-span-1 flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              {/* <GiPaperBagFolded className='text-2xl text-[#4672e2]'/> */}
              <img src={Label} alt="" className="rounded-full h-full w-full"/>
            </div>
          </div>

          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>لیبل و استیکر</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 مدل کارت ویزیت</p>
          </div>

          <div className='col-span-2 flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>


      </div>

      <div className="home-slider-box mahsol-bg-home absolute rounded-4xl text-center w-[560px] h-[190px] mr-[0%] mt-[30.25%] grid grid-cols-2">
        <div className=''>
          <h1 className='iransans-Bold text-[20px] mt-[8%] mr-[14%]'>دسته بندی محصولات</h1>
          <p className='iransans-medium text-[13px] text-[#4d4d4d7c] text-right mr-[26.5%] mt-[-1%]'>500+ محصول</p>
          <button className='iransans-Bold text-[15px] text-[#FAFCFE] bg-[#47a4e2] w-[151px] h-[36px] rounded-4xl btn-home hover:bg-[#F5F5F5] hover:scale-105 hover:text-[#47a4e2] cursor-pointer duration-300 mt-[18%] mr-[6%]'>خرید محصول</button>
        </div>
        <div className=' flex items-center justify-center'>
          <img src={CategoryImg} alt="" className='w-[83%] ml-[4%]'/>
        </div>
      </div>

      <div className="home-slider-box khadamat-bg-home absolute rounded-4xl text-center w-[560px] h-[190px] mr-[30.5%] mt-[30.25%] grid grid-cols-2">
        <div className=''>
          <h1 className='iransans-Bold text-[20px] mt-[8%] mr-[5%]'>دسته بندی خدمات</h1>
          <p className='iransans-medium text-[13px] text-[#4d4d4d7c] text-right mr-[26%] mt-[-1%]'>60+ خدمات</p>
          <p className='iransans-medium text-[11px] text-[#8E8E8E] w-[195px] h-[40px] leading-[20px] text-center mr-[25%] mt-[1%]'>چاپ افست , دیجیتال, فلکسی , سابلیمیشن, خدمات بعد از چاپ , چاپ فوری , با کیفیت </p>
          <button className='iransans-Bold text-[15px] text-[#FAFCFE] bg-[#7fbbfa] w-[151px] h-[36px] rounded-4xl btn-home hover:bg-[#F5F5F5] hover:text-[#7fbbfa] hover:scale-105 cursor-pointer duration-300 mt-[4.5%] mr-[5%]'>خدمات چاپ</button>
        </div>
        <div className='flex items-center justify-center'>
          <img src={Printer} alt="" className='w-[88%] ml-[30px]'/>
        </div>
      </div>
      
    </section>
  );
}

export default Home;