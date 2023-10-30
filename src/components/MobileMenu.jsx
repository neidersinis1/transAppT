/* eslint-disable react/prop-types */
const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-16 z-30 right-0 py-5 flex-col rounded border-2 boder-neutral-800 flex">
      <div className=" flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">Series</div>
        <div className="px-3 text-center text-white hover:underline">Films</div>
        <div className="px-3 text-center text-white hover:underline">New</div>
        <div className="px-3 text-center text-white hover:underline">My List</div>
        <div className="px-3 text-center text-white hover:underline">Browse by Languages</div>
      </div>
    </div>
  );
};

export default MobileMenu;