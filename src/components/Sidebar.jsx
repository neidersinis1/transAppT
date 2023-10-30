/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

import SideBarItem from "./SideBarItem";

function Sidebar () {

  return (
    <div 
      className={twMerge(`
        flex 
        h-full
        `,
       'h-[calc(100%-80px)]'
      )}
    >
      <div 
        className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2
        "
      >
        <div className="flex flex-col gap-y-4 px-5 py-4">
          <SideBarItem />
        </div>
      </div>
      <main className="h-full w-full text-white overflow-y-auto py-2">
        soy sidebar
      </main>
    </div>
  );
}
 
export default Sidebar;