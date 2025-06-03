<<<<<<< HEAD
const Home = () => {
  return <section className="w-[85%] h-[85vh]  rounded-3xl">
    
  </section>
=======
function Home() {
  return (
    <section className="w-[85%] h-[85vh]  rounded-3xl p-6">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
        <div className="bg-gray-100 rounded-4xl col-span-2 row-span-2 flex items-center justify-center text-blue-800 text-2xl font-bold">
          باکس بزرگ
        </div>

        <div className="gap-3 grid">
         <div className="bg-gray-100 rounded-4xl flex items-center justify-center text-blue-800 text-xl font-bold h-24">
          باکس 2
         </div>

         <div className="bg-gray-100 rounded-4xl flex items-center justify-center text-blue-800 text-xl font-bold h-40">
          باکس 1
         </div>
        </div>
        
        <div className="bg-gray-100 rounded-4xl row-span-2 flex items-center justify-center text-blue-800 text-xl font-bold">
          باکس  5
        </div>
        
        <div className="bg-gray-100 rounded-4xl flex items-center justify-center text-blue-800 text-xl font-bold">
          باکس  4
        </div>
        
        <div className="bg-gray-100 rounded-4xl flex items-center justify-center text-blue-800 text-xl font-bold">
          باکس 3
        </div>
      </div>
    </section>
  );
>>>>>>> origin/Devloper
}

export default Home;