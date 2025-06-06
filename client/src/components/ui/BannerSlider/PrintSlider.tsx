import PrinterSliderimg from '../../../../public/images/PrinterSliderimg.png';
import BallBlack from '../../../../public/images/Ball-Black.png';
import BallWhite from '../../../../public/images/ball-white.png';
import Arrow from '../../../../public/images/Arrow.png';
import ArrowIcon from '../../../../public/images/arrow-s-down.png';
import PrintIcon from '../../../../public/images/printeric-1.png';
import { FaInstagram, FaWhatsapp, FaTelegram, FaYoutube, FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


const PrintSlider = () => {
  return <div className="home-slider-box slider-print-home absolute rounded-4xl text-center w-[1140px] h-[550px] grid grid-cols-2">
        <div className="col-span-1 w-[570px] flex flex-col items-center">
            <div className='bg-[#E4E0E0] absolute ml-[34%] mt-[3%] flex items-center justify-center gap-1 w-[122px] h-[23px] rounded-4xl btn-home'>
              <p className='text-[#0B1736] iransans-medium text-[11px]'>بهترین کیفیت چاپ</p>
              <img src={PrintIcon} alt="" className='w-[10px] h-[10px]'/>
            </div>
  
            <div className='w-[457px] h-[109px] leading-12 mt-[22%]'>
              <h1 className='hamrah text-[#0B1736] text-[48px] tracking-wide w-[120%] mr-[-5.8%]'>خدمات طراحی و چاپ دیجیتال </h1>
              <h2 className='hamrah text-[#152244e5] text-[32px] tracking-wide text-right mr-1'>تمامی خدمات چاپ</h2>
            </div>
  
            <div className='w-[457] h-[109px] flex items-center justify-center mr-[13px] mt-[7px]'>
              <img src={ArrowIcon} alt="" className='mt-[-2.5%]'/>
              <img src={Arrow} alt="" className='mt-[-2.5%]'/>
              <div className='flex flex-col'>
                <h1 className='iransans-Bold text-[20px] tracking-wide text-[#282828ab] text-right mr-2'>خدمات چاپ</h1>
                <p className='iransans-Bold text-[14px] tracking-wide text-[#717170] w-[259px] h-[60px] leading-[20px]'>تمامی خدمات چاپ شامل چاپ افست,چاپ دیجیتال, چاپ فلکسی, خدمات بعد از چاپ, چاپ کاتالوگ, کارت ویزیت ,بروشور, بنر و ...</p>
              </div>
            </div>
  
            <div className='w-[452px] h-[58px] flex justify-between ml-[5px] mt-[25px]'>
              <button className='w-[213px] h-[58px] btn-home bg-[#0B1736] text-white iransans-Bold text-[16px] rounded-4xl hover:text-[#0B1736] hover:bg-[#F5F5F5] hover:scale-90 duration-300 cursor-pointer'>خدمات چاپ</button>
              <button className='w-[213px] h-[58px] btn-home bg-transparent border border-[#0B1736] text-[#0B1736] iransans-Bold text-[16px] rounded-4xl hover:text-[#0B1736] hover:bg-[#ffffff] hover:scale-95 duration-300 cursor-pointer'>تمامی محصولات</button>
            </div>
  
            <div className='absolute w-[350px] h-[35px] mt-[43.9%] ml-[14%] flex items-center justify-center gap-2'>
              <h2 className='text-[#9D9D9C] tracking-wide iransans-Bold text-[15px]'>تمامی شبکه های آپامه:</h2>
              <div className='flex items-center justify-center gap-2'>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#0B1736] flex items-center justify-center hover:bg-[#0B1736] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaInstagram className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#0B1736] flex items-center justify-center hover:bg-[#0B1736] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaWhatsapp className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#0B1736] flex items-center justify-center hover:bg-[#0B1736] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaTelegram className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#0B1736] flex items-center justify-center hover:bg-[#0B1736] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaYoutube className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#0B1736] flex items-center justify-center hover:bg-[#0B1736] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaGithub className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#0B1736] flex items-center justify-center hover:bg-[#0B1736] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FiPhoneCall className='w-[15px] h-[15px]'/></button>
              </div>
            </div>
  
        </div>
  
        <div className="col-span-1 w-[570px] flex items-center justify-center">
            <img src={PrinterSliderimg} alt="" className='w-[100%]'/>
            <img src={BallBlack} alt="" className='ball-img-speaker absolute w-[8px] mr-[20%] mb-[30%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[34%] mt-[18%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] ml-[20%] mt-[32%]'/>
            <img src={BallBlack} alt="" className='ball-img-speaker absolute w-[13px] mr-[20%] mt-[34%]'/>
            <img src={BallBlack} alt="" className='ball-img-speaker absolute w-[13px] ml-[25%] mb-[21%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[8px] ml-[9%] mb-[32%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[4%] mb-[21%]'/>
            <img src={BallBlack} alt="" className='ball-img-speaker absolute w-[8px] mr-[30%] mb-[20%]'/>
        </div>    
      </div>
}

export default PrintSlider