import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';


function AppLayout() {
  return (
    <div className="flex flex-col items-center min-h-screen">
  return (<>
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex-1 w-full flex items-center justify-center"> 
      <main className="flex-1 w-full flex items-center justify-center"> 
        <Outlet />
      </main>
    </div>
      <Footer/>
  </>
  );
}

export default AppLayout;