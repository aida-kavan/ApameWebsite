import { Outlet } from 'react-router-dom';
import Header from './header';


function AppLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen"> 
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;