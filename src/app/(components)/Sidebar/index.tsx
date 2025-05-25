'use client';
import { Menu } from 'lucide-react';
import React from 'react';

export default function Sidebar() {
  return (
    <div>
      <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
        <div>Logo</div>
        <h1 className='font-extrabold text-2xl'>EMPSTOCK</h1>

        <button
          className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={() => {}}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>

      {/* Links  */}
      <div className='flex-grow mt-8'></div>

      {/* footer  */}
      <div>
        <p className='text-center text-xs text-gray-500'>
          &copy; 2025 Empstock
        </p>
      </div>
    </div>
  );
}
