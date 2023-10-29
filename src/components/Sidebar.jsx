/* eslint-disable react/prop-types */
// import { HiHome } from "react-icons/hi";
// import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
// import { usePathname } from "next/navigation";

// import { Song } from "@/types";
// import usePlayer from "@/hooks/usePlayer";

// import SidebarItem from "@/SidebarItem";
// import Box from "./Box";
// import Library from "./Library";
// import { useMemo } from "react";

// interface SidebarProps {
//   children: React.ReactNode;
//   songs: Song[];
// }

function Sidebar () {
  // const routes = useMemo(() => [
  //   {
  //     icon: HiHome,
  //     label: 'Home',
  //     href: '/'
  //   },
  //   {
  //     icon: BiSearch,
  //     label: 'Search',
  //     href: '/search',

  //   },
  // ], []);

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

        {/* <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box> */}
        {/* <Box className="overflow-y-auto h-full">
           <Library songs={songs} /> 
        </Box> */}
        
      </div>
      <main className="h-full  overflow-y-auto py-2">
        soy
      </main>
    </div>
  );
}
 
export default Sidebar;