import React from 'react';
import { useSelector } from 'react-redux';

const Page2 = () => {
    const counter = useSelector((state) => state.counter.value);
  return (
    <div className='mt-10'>
        <h1 className='text-5xl font-bold mb-5'>Page 2</h1>

        <p className='text-2xl font-bold'>{counter}</p>
    </div>
  );
};

export default Page2;