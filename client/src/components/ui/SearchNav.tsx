import { Search } from 'lucide-react';

const SearchNav = () => {
  return (
    <div className="flex items-center justify-center bg-[#557de2c0] w-[368px] h-14 rounded-full">
     <Search className='bg-white p-1 w-10 h-10 rounded-full mr-2' />   
      <input
        type="text"
        placeholder="جستجو کنید..."
        className=" placeholder:text-[#ffffff] h-full text-white rounded-full w-[340px] text-right outline-none border-none pr-2 placeholder:pr-2 shadow-inner "
      />
    </div>
  );
};

export default SearchNav;
