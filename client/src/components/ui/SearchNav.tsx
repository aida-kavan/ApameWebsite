import SearchIcon from '../../../public/images/search (1) 2.png'

const SearchNav = () => {
  return <div className='flex items-center justify-center bg-[#557de2c0] w-[368px] h-[54px] rounded-full ml-44 mt-[-4.5%]'>
    <input type="text" placeholder="..جستجو کنید" className=' placeholder:text-[#ffffff] h-full rounded-full w-[340px] text-right pr-2 placeholder:pr-2' />
    <button className='bg-white rounded-full w-[48px] h-[47px] flex items-center justify-center mr-[5px]'><img src={SearchIcon} alt="" className='w-auto '/></button>
  </div>
}

export default SearchNav