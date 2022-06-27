import React from 'react';
import Header from '../layout/partials/Header';
import Footer from '../layout/partials/Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = ({ children }) => {
  return (
    <div className='default-layout'>
      <header className='header mb-2'>
        <Header />
      </header>
      <main className='main-content'>
        {children} <Outlet />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
