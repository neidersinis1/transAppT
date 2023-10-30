/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge'

export default function SideBarItem () {
  return (
    <div
      className={twMerge(`
        flex
        flex-row
        h-auto 
        items-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1`
        )
      }
    >
      {/* <Icon size={26} /> */}
      <p className="truncate w-100 text-white">soy item</p>
    </div>
   )
}

