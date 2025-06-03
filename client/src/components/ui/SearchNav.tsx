import { Search } from 'lucide-react';

const SearchNav = () => {
  return (
    <div className="flex items-center justify-center bg-[#557de2e5] w-[300px] p-1 rounded-full">
     <button className='bg-white cursor-pointer  duration-300 rounded-full w-14 h-10 flex items-center justify-center'>
      <Search className='w-8'/>
      </button>   
      <input
        type="text"
        placeholder="جستجو کنید..."
        className=" placeholder:text-[#ffffff] h-full text-white rounded-full w-[340px] text-right outline-none border-none pr-2 "
      />
    </div>
  );
};

export default SearchNav;
