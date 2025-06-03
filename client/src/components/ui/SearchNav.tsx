import { Search } from 'lucide-react';

const SearchNav = () => {
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center bg-[#557de2e5] w-[300px] p-1 rounded-full">
     <button className='bg-white cursor-pointer  duration-300 rounded-full w-14 h-10 flex items-center justify-center'>
=======
    <div className="flex items-center justify-center bg-[#ffffff] w-[300px] h-[45px] rounded-full">
     <button className='bg-white cursor-pointer hover:scale-105 hover:opacity-60 duration-300 rounded-full w-14 h-10 mr-1 flex items-center justify-center'>
>>>>>>> origin/Devloper
      <Search className='w-8'/>
      </button>   
      <input
        type="text"
        placeholder="جستجو کنید..."
<<<<<<< HEAD
        className=" placeholder:text-[#ffffff] h-full text-white rounded-full w-[340px] text-right outline-none border-none pr-2 "
=======
        className=" placeholder:text-[#202020c0] h-full text-[#202020c0] rounded-full w-[340px] text-right outline-none border-none pr-2 placeholder:pr-2 text-sm"
>>>>>>> origin/Devloper
      />
    </div>
  );
};

export default SearchNav;
