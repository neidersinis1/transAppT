/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge'
import MobileMenu from './MobileMenu';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiMenu } from 'react-icons/hi'
import { Link } from "react-router-dom";
import Logo from './Logo'


export default function Header ({ children, className }) {
const [ShowMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <div
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-emerald-800 
        p-2
        `,
      className
      )}
    >
      <div className=' mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            onClick={() => {}}
            className='
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-none
            '
          >
            <RxCaretLeft className='text-white select-none' size={35} />
          </button>
          <button
            onClick={() => {}}
            className='
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-nonev
            '
          >
            <RxCaretRight className='text-white select-none' size={35} />
          </button>
        </div>
        <div className='flex w-full justify-between  md:hidden gap-x-2 items-center'>
          <div className='-ml-5 select-none'>
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          <button
            onClick={toggleMobileMenu}
            className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              transition
              select-none
            '
          >
            <HiMenu className='text-black select-none' size={20} />
            <MobileMenu visible={ShowMobileMenu} />
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}
