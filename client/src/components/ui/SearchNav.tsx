import { Search } from 'lucide-react';

const SearchNav = () => {
  return (
    
    <div className="flex items-center justify-center bg-[#ffffff] w-[300px] h-[45px] rounded-full">
     <button className='bg-white cursor-pointer border-serch-box duration-300 rounded-r-full w-[65px] h-[45px] mr-1 flex items-center justify-center btn-search-hovor hover:text-white'>

      <Search className='w-8 pr-[2px]'/>
      </button>   
      <input
        type="text"
        placeholder="جستجو کنید..."
        // className=" placeholder:text-[#ffffff] h-full text-white rounded-full w-[340px] text-right outline-none border-none pr-2 "
        className=" placeholder:text-[#202020c0] h-full border-serch-box text-[#202020c0] rounded-l-full w-[340px] text-right outline-none border-none pr-2 placeholder:pr-2 text-sm"
      />
    </div>
  );
};

export default SearchNav;
