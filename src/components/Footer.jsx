/* eslint-disable react/prop-types */
// import useConversation from "@/app/hooks/useConversation";
// import useRoutes from "@/app/hooks/useRoutes";
// import MobileItem from "./MobileItem";
import { HiHome } from 'react-icons/hi'
import { HiChatAlt } from 'react-icons/hi'
// import { BiSearch } from 'react-icons/bi'
// import { FiMessageSquare, FiUserPlus, FiUsers } from 'react-icons/fi'

import { twMerge } from 'tailwind-merge'

const MobileFooter = ({ className }) => {
//   const routes = useRoutes();
//   const { isOpen } = useConversation();

//   if (isOpen) {
//     return null;
//   }


  return ( 
    <div 
    className={twMerge(`
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
      border-t-[1px] 
      lg:hidden
    `,
     className
    )}
    >
        <div className='
          flex 
          w-full  
          md:hidden 
          gap-x-2 
          items-center
          justify-between'
        >
          <button
            onClick={() => {}}
            className='
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
          >
            <HiHome className='text-black' size={20} />
          </button>
          <button
            onClick={() => {}}
            className='
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
          >
            <HiChatAlt className='text-black' size={20} />
          </button>
        </div>
    </div>
   );
}
 
export default MobileFooter;