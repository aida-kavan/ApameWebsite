import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './Footer';


function AppLayout() {
  return (<>
   <div className='flex flex-col items-center min-h-screen '>
    <Header/>
    <div className='mt-46'>


    <Outlet/>
    </div>

    <Footer/>
   </div>
  </>
  );
}

export default AppLayout;