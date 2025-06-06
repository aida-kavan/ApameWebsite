import HomeImg from '../../../../public/images/home-megaphone.png';
import Ball from '../../../../public/images/ball.png';
import BallWhite from '../../../../public/images/ball-white.png';
import Arrow from '../../../../public/images/Arrow.png';
import ArrowIcon from '../../../../public/images/arrow-s-down.png';
import PrintIcon from '../../../../public/images/printeric-1.png';
import { FaInstagram, FaWhatsapp, FaTelegram, FaYoutube, FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const DefaultSlider = () => {
  return <div className="home-slider-box slider-bg-home absolute rounded-4xl text-center w-[1140px] h-[550px] grid grid-cols-2">
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
              <button className='w-[213px] h-[58px] btn-home bg-[#5880E4] text-white iransans-Bold text-[16px] rounded-4xl hover:text-[#5880E4] hover:bg-[#F5F5F5] hover:scale-90 duration-300 cursor-pointer'>خدمات آپامه</button>
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
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[8px] mr-[38%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[27%] mt-[13%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[9%] mt-[26.5%]'/>
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[13px] mr-[2%] mt-[12%]'/>
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[13px] mr-[31.5%] mb-[22%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[8px] mr-[20%] mb-[35%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[10%] mb-[22.5%]'/>
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[8px] ml-[8%] mb-[33%]'/>
              </div>
          </div>

}

export default DefaultSlider