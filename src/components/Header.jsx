/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
// import { FaUserAlt } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi'
// import { HiChevronUp } from 'react-icons/hi'

// import { BiSearch } from 'react-icons/bi'

export default function Header ({ children, className }) {
  return (
    <div
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-emerald-800 
        p-6
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
            '
          >
            <RxCaretLeft className='text-white' size={35} />
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
            '
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
        <div className='flex w-full justify-between  md:hidden gap-x-2 items-center'>
          <button
            onClick={() => {}}
            className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
          >
            <HiMenu className='text-black' size={20} />
          </button>
          <button
            onClick={() => {}}
            className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
          >
            <HiChevronDown className='text-black' size={20} />
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}
