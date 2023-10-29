/* eslint-disable react/prop-types */
// import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

// const Icono = IconType
// interface SidebarItemProps {
//   icon: IconType;
//   label: string;
//   active?: boolean;
//   href: string;
// }

function SidebarItem ({ Icono: Icon, active, href }) {
  return (
    <div
      href={href}
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
        py-1`,
        active && "text-white"
        )
      }
    >
      <Icon size={26} />
      <p className="truncate w-100">soyitem</p>
    </div>
   )
}

export default SidebarItem
