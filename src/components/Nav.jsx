import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const menuItems = [
  { label: "Skills", link: "#" },
  { label: "Projects", link: "#" },
  { label: "Veremos", link: "#" },
];

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex items-center justify-between px-10 py-7 lg:flex-row">
        <div>
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            <CgNametag color="orange" className="mr-5" /> Daian Rene
          </a>
        </div>
        <div className="space-x-4">
          <div className="hidden sm:block space-x-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="sm:hidden">
            {toggle ? (
              <AiOutlineClose
                size={30}
                onClick={toggleMenu}
                className="text-white cursor-pointer"
              />
            ) : (
              <HiMenuAlt1
                className="text-white cursor-pointer"
                onClick={toggleMenu}
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {toggle && (
        <div className="sm:hidden flex justify-between">
          <ul className="w-full ">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className=" pl-10 text-white text-xl py-2.5 cursor-pointer hover:bg-indigo-800"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
