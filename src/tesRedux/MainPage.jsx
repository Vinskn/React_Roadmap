import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const MainPage = () => {
  return (
    <div className='p-10'>
        <h1 className='text-5xl font-bold mb-5'>MainPage</h1>
        <Link to={'page1'}>
            <h2 className='text-2xl font-bold mb-2 mt-5 hover:underline hover:underline-offset-5 cursor-pointer'>Page1 ➡️</h2>
        </Link>
        <Link to={'page2'}>
            <h2 className='text-2xl font-bold mb-2 mt-5 hover:underline hover:underline-offset-5 cursor-pointer'>Page2 ➡️</h2>
        </Link>

        <Outlet />
    </div>
  );
};

export default MainPage;