import  DevloperImg from '../../../../public/images/developer1.png';
import Ball from '../../../../public/images/ball.png';
import BallWhite from '../../../../public/images/ball-white.png';
import Arrow from '../../../../public/images/Arrow.png';
import ArrowIcon from '../../../../public/images/arrow-s-down.png';
import PrintIcon from '../../../../public/images/printeric-1.png';
import { FaInstagram, FaWhatsapp, FaTelegram, FaYoutube, FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const WebSeoSlider = () => {
  return <div className="home-slider-box slider-web-home absolute rounded-4xl text-center w-[1140px] h-[550px] grid grid-cols-2">
              <div className="col-span-1 w-[570px] flex flex-col items-center">
            <div className='bg-[#E4E0E0] absolute ml-[34%] mt-[3%] flex items-center justify-center gap-1 w-[122px] h-[23px] rounded-4xl btn-home'>
              <p className='text-[#385BB5] iransans-medium text-[11px]'>بهترین کیفیت چاپ</p>
              <img src={PrintIcon} alt="" className='w-[10px] h-[10px]'/>
            </div>
  
            <div className='w-[457px] h-[109px] leading-12 mt-[22%]'>
              <h1 className='hamrah text-[#2B3990] text-[48px] tracking-wide w-[110%]'>طراحی سایت  و سئو اختصاصی</h1>
              <h2 className='hamrah text-[#152244e8] text-[32px] tracking-wide text-right mr-1'>سایت حرفه ای میخوای؟</h2>
            </div>
  
            <div className='w-[457] h-[109px] flex items-center justify-center mr-[13px] mt-[7px]'>
              <img src={ArrowIcon} alt="" className='mt-[-2.5%]'/>
              <img src={Arrow} alt="" className='mt-[-2.5%]'/>
              <div className='flex flex-col'>
                <h1 className='iransans-Bold text-[20px] tracking-wide text-[#222222be] text-right mr-1'>سایت و سئو</h1>
                <p className='iransans-Bold text-[14px] tracking-wide text-[#717170] w-[259px] h-[60px] leading-[20px]'>اگر کسب و کار داری میتونی با طراحی سایت کسب و کارت را بزرگ کنی ما طراحی ui & ux  سایت / پشتیبانی  سئو  را ما انجام می دهیم</p>
              </div>
            </div>
  
            <div className='w-[452px] h-[58px] flex justify-between ml-[5px] mt-[25px]'>
              <button className='w-[213px] h-[58px] btn-home bg-[#2B3990] text-white iransans-Bold text-[16px] rounded-4xl hover:text-[#2B3990] hover:bg-[#F5F5F5] hover:scale-90 duration-300 cursor-pointer'>طراحی سایت</button>
              <button className='w-[213px] h-[58px] btn-home bg-transparent border border-[#2B3990] text-[#2B3990] iransans-Bold text-[16px] rounded-4xl hover:text-[#2B3990] hover:bg-[#ffffff] hover:scale-95 duration-300 cursor-pointer'>سئو و پشتیبانی</button>
            </div>
  
            <div className='absolute w-[350px] h-[35px] mt-[43.9%] ml-[14%] flex items-center justify-center gap-2'>
              <h2 className='text-[#9D9D9C] tracking-wide iransans-Bold text-[15px]'>تمامی شبکه های آپامه:</h2>
              <div className='flex items-center justify-center gap-2'>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#2B3990] flex items-center justify-center hover:bg-[#2B3990] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaInstagram className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#2B3990] flex items-center justify-center hover:bg-[#2B3990] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaWhatsapp className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#2B3990] flex items-center justify-center hover:bg-[#2B3990] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaTelegram className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#2B3990] flex items-center justify-center hover:bg-[#2B3990] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaYoutube className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#2B3990] flex items-center justify-center hover:bg-[#2B3990] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FaGithub className='w-[15px] h-[15px]'/></button>
                <button className='w-[25px] h-[25px] rounded-full bg-[#F5F5F5] text-[#2B3990] flex items-center justify-center hover:bg-[#2B3990] hover:text-[#F5F5F5] hover:scale-105 duration-300 cursor-pointer'><FiPhoneCall className='w-[15px] h-[15px]'/></button>
              </div>
            </div>
  
              </div>
  
              <div className="col-span-1 w-[570px] flex items-center justify-center">
            <img src={DevloperImg} alt="" className='w-[90%]'/>
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[8px] mr-[44%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] mr-[20%] mt-[35%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] ml-[29%] mt-[29%] '/>
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[13px] ml-[6%] mt-[39%]'/>
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[13px] mr-[31.5%] mb-[22%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[8px] mr-[20%] mb-[35%]'/>
            <img src={BallWhite} alt="" className='ball-img-speaker absolute w-[13px] ml-[29%] mb-[31%]'/>
            <img src={Ball} alt="" className='ball-img-speaker absolute w-[8px] ml-[8%] mb-[33%]'/>
              </div>
          </div>
}

export default WebSeoSlider