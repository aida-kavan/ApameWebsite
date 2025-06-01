import { Outlet } from 'react-router-dom';
import Header from './header';


function AppLayout() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center">
      <Header />
      <main className="min-h-screen "> 
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;