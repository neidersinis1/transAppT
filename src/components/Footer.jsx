/* eslint-disable react/prop-types */
import { HiHome } from 'react-icons/hi'
import { HiChatAlt } from 'react-icons/hi'
import { HiUsers } from 'react-icons/hi'
import { Link } from "react-router-dom";

import { twMerge } from 'tailwind-merge'

export default function Footer ({ className }) {

  return ( 
    <div 
    className={twMerge(`
      bg-black
      h-fit 
      bg-gradient-to-b
      from-emerald-800 
      p-6
      fixed 
      justify-between 
      w-full 
      bottom-0 
      z-40 
      flex 
      items-center 
      
      lg:hidden
    `,
     className
    )}
    >
        <div className='
           
          flex 
          w-full  
          gap-x-2 
          items-center
          justify-between'
        >
          <button
        onClick={() => {}}
        className='
          bg-white
          rounded-full
          p-2
          flex
          items-center
          justify-center
          cursor-pointer
          hover:opacity-75
          transition
          select-none
          '
          >
            <Link to={'users'}>
              <HiUsers className='text-black select-none' size={20} />
            </Link>
            
          </button>
          <button
            onClick={() => {}}
            className='
              bg-white
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-none
            '
          >
            <Link to={'/'}>
              <HiHome className='text-black select-none' size={20} />
            </Link>
            
          </button>
          <button
            onClick={() => {}}
            className='
              bg-white
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-none
            '
          >
            <Link to={'messages'}>
              <HiChatAlt className='text-black select-none' size={20} />
            </Link>
          </button>
        </div>
    </div>
   );
}
 