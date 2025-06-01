import SearchNav from '@/components/ui/SearchNav';
import Logo from '../../public/images/logo.png';
import Navbar from '@/components/ui/Navbar';

const Header = () => {
  return <header className='w-[1766px] h-[105px] rounded-full mt-[35px] ml-[71px] bg-[#F8F8F8]'>

    <div className='w-44 rounded-full h-full flex items-center justify-center'>
      <img src={Logo} alt="" className='w-[80px]'/>
    </div>

    <div>
      <SearchNav />
    </div>

    <div>
      <Navbar/>
    </div>
  </header>
}

export default Header