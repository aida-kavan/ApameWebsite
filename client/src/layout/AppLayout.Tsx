import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

function AppLayout() {
  return (
    <div dir="rtl" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16"> 
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;