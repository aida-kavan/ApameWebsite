import { Search } from 'lucide-react';

const SearchNav = () => {
  return (
    <div className="flex items-center justify-center bg-[#ffffff] w-[300px] h-[45px] rounded-full">
     <button className='bg-white cursor-pointer hover:scale-105 hover:opacity-60 duration-300 rounded-full w-14 h-10 mr-1 flex items-center justify-center'>
      <Search className='w-8'/>
      </button>   
      <input
        type="text"
        placeholder="جستجو کنید..."
        className=" placeholder:text-[#202020c0] h-full text-[#202020c0] rounded-full w-[340px] text-right outline-none border-none pr-2 placeholder:pr-2 text-sm"
      />
    </div>
  );
};

export default SearchNav;
