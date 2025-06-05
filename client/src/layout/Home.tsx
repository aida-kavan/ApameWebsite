import HomeImg from '../../public/images/home-megaphone.png';
import Ball from '../../public/images/ball.png';
import BallWhite from '../../public/images/ball-white.png';
import Arrow from '../../public/images/Arrow.png';
import ArrowIcon from '../../public/images/arrow-s-down.png';
import PrintIcon from '../../public/images/printeric-1.png';
import { FaInstagram, FaWhatsapp, FaTelegram, FaYoutube, FaGithub, FaCreditCard } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiKnightBanner, GiPaperBagFolded } from "react-icons/gi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CategoryImg from '../../public/images/Category.png';
import Printer from '../../public/images/printer.png';
import Sodinoimg from '../../public/images/sodino-img.png';

function Home() {
  return (
    <section className="w-[85%] h-[83vh]  rounded-3xl mt-[9.1%] z-10">

      <div className="home-slider-box slider-bg-home absolute rounded-4xl text-center w-[1140px] h-[550px] grid grid-cols-2">

        <div className="col-span-1 w-[570px] flex flex-col items-center">
          <div className='bg-[#E4E0E0] absolute ml-[34%] mt-[3%] flex items-center justify-center gap-1 w-[122px] h-[23px] rounded-4xl btn-home'>
            <p className='text-[#385BB5] iransans-medium text-[11px]'>بهترین کیفیت چاپ</p>
            <img src={PrintIcon} alt="" className='w-[10px] h-[10px]'/>
          </div>

          <div className='w-[457px] h-[109px] leading-12 mt-[22%]'>
            <h1 className='hamrah text-[#5880E4] text-[48px] tracking-wide'>پلتفرم چاپ و تبلیغات آپامه</h1>
            <h2 className='hamrah text-[#152244e8] text-[32px] tracking-wide text-right mr-1'>کسب و کار حرفه ای</h2>
          </div>

          <div className='w-[457] h-[109px] flex items-center justify-center mr-[13px] mt-[7px]'>
            <img src={ArrowIcon} alt="" className='mt-[-2.5%]'/>
            <img src={Arrow} alt="" className='mt-[-2.5%]'/>
            <div className='flex flex-col'>
              <h1 className='iransans-Bold text-[20px] tracking-wide text-[#282828ab] text-right mr-2'>خوش آمدید</h1>
              <p className='iransans-Bold text-[14px] tracking-wide text-[#717170] w-[259px] h-[60px] leading-[20px]'> آپامه تمامی خدمات چاپ طراحی سایت و سوشال مدیا چاپ بنر کارت ویزیت و تراکت عکاسی فیلمبرداری برای شما انجام میدهد</p>
            </div>
          </div>

          <div className='w-[452px] h-[58px] flex justify-between ml-[5px] mt-[25px]'>
            <button className='w-[213px] h-[58px] btn-home bg-[#5880E4] text-white iransans-Bold text-[16px] rounded-4xl hover:text-[#5880E4] hover:bg-[#F5F5F5] hover:scale-90 duration-300 cursor-pointer'>خدمات چاپ </button>
            <button className='w-[213px] h-[58px] btn-home bg-transparent border border-[#5880E4] text-[#5880E4] iransans-Bold text-[16px] rounded-4xl hover:text-[#5880E4] hover:bg-[#ffffff] hover:scale-95 duration-300 cursor-pointer'>تمامی محصولات</button>
          </div>

          <div className='absolute w-[350px] h-[35px] mt-[43.9%] ml-[14%] flex items-center justify-center gap-2'>
            <h2 className='text-[#9D9D9C] tracking-wide iransans-Bold text-[15px]'>تمامی شبکه های آپامه:</h2>
            <div className='flex items-center justify-center gap-2'>
              <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#5880E4] flex items-center justify-center hover:bg-[#5880E4] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaInstagram className='w-[15px] h-[15px]'/></button>
              <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#5880E4] flex items-center justify-center hover:bg-[#5880E4] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaWhatsapp className='w-[15px] h-[15px]'/></button>
              <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#5880E4] flex items-center justify-center hover:bg-[#5880E4] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaTelegram className='w-[15px] h-[15px]'/></button>
              <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#5880E4] flex items-center justify-center hover:bg-[#5880E4] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaYoutube className='w-[15px] h-[15px]'/></button>
              <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#5880E4] flex items-center justify-center hover:bg-[#5880E4] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaGithub className='w-[15px] h-[15px]'/></button>
              <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#5880E4] flex items-center justify-center hover:bg-[#5880E4] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FiPhoneCall className='w-[15px] h-[15px]'/></button>
            </div>
          </div>

        </div>





        <div className="col-span-1 w-[570px] flex items-center justify-center">
          <img src={HomeImg} alt="" className='w-[80%]'/>
          <img src={Ball} alt="" className='ball-img-speaker absolute w-[8px] mr-[44%]'/>
          <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[27%] mt-[13%]'/>
          <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[9%] mt-[26.5%]'/>
          <img src={Ball} alt="" className='ball-img-speaker absolute w-[13px] mr-[2%] mt-[12%]'/>
          <img src={Ball} alt="" className='ball-img-speaker absolute w-[13px] mr-[31.5%] mb-[22%]'/>
          <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[8px] mr-[20%] mb-[35%]'/>
          <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[10%] mb-[22.5%]'/>
          <img src={Ball} alt="" className='ball-img-speaker absolute w-[8px] ml-[8%] mb-[33%]'/>
        </div>
      </div>

      <div className="home-slider-box bg-[#B2DFDB] absolute rounded-4xl text-center w-[458px] h-[160px] mr-[61%]">wd</div>

      <div className="home-slider-box bg-[#47a4e2] absolute rounded-4xl text-center w-[458px] h-[270px] mr-[61%] mt-[9.6%] grid grid-cols-2">
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

      <div className="home-slider-box bg-[#dfe8fa] absolute rounded-4xl text-center w-[458px] h-[290px] mr-[61%] mt-[25%] grid grid-rows-7 ">
        <div className=' flex items-center justify-start mr-[7%] mt-5 text-[19px] row-span-1'>
          <h1 className='iransans-Bold text-[#0c1544e3]'>محصولات پرفروش</h1>
        </div>

        <div className='grid grid-cols-5 row-span-2 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>
          <div className='col-span-1  flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              <FaCreditCard className='text-2xl text-[#4672e2]'/>
            </div>
          </div>

          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>کارت ویزیت</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 مدل کارت ویزیت</p>
          </div>
    
          <div className='col-span-2  flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>

        <div className='grid grid-cols-5 row-span-2 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>

          <div className='col-span-1 flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              <GiKnightBanner className='text-2xl text-[#4672e2]'/>
            </div>
          </div>
    
          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>انواع بنر</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 نوع بنر برای چاپ</p>
          </div>

          <div className='col-span-2 flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>

        <div className='grid grid-cols-5 row-span-2 hover:bg-white cursor-pointer duration-300 hover:scale-95 rounded-4xl'>
          <div className='col-span-1 flex items-center justify-center'>
            <div className='w-14 h-14 flex items-center justify-center rounded-full bg-[#c5d7f8] border border-[#9ebef2]'>
              <GiPaperBagFolded className='text-2xl text-[#4672e2]'/>
            </div>
          </div>

          <div className='col-span-2 text-right flex flex-col justify-center'>
            <h1 className='iransans-Bold text-[#1d234e]'>جعبه و پاکت</h1>
            <p className='iransans-medium text-[14px] text-[#5e5e5ec7]'>10 مدل کارت ویزیت</p>
          </div>

          <div className='col-span-2 flex justify-start items-center text-3xl'><MdKeyboardArrowLeft /></div>
        </div>
      </div>

      <div className="home-slider-box mahsol-bg-home absolute rounded-4xl text-center w-[560px] h-[190px] mr-[0%] mt-[30.25%] grid grid-cols-2">
        <div className=''>
          <h1 className='iransans-Bold text-[20px] mt-[8%] mr-[14%]'>دسته بندی محصولات</h1>
          <p className='iransans-medium text-[13px] text-[#4d4d4d7c] text-right mr-[26.5%] mt-[-1%]'>500+ محصول</p>
          <button className='iransans-Bold text-[15px] text-[#FAFCFE] bg-[#F7988E] w-[151px] h-[36px] rounded-4xl btn-home hover:bg-[#F5F5F5] hover:scale-105 hover:text-[#F7988E] cursor-pointer duration-300 mt-[18%] mr-[6%]'>خرید محصول</button>
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