import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
  return (
    <div className="flex justify-between items-center w-full px-4 h-10 text-white fixed bg-gradient-to-b from-orange-300 via-orange-900 to-orange-900">
      <div>
        <h1 className="text-3xl ml-2 font-bold font-signature">SAAL</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-slate-200 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li>
          <a
            className="px-4 cursor-pointer capitalize font-medium text-slate-200 hover:scale-105 duration-200"
            href="https:talkworld.com.ng"
          >
            Blog
          </a>
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden text-slate-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className=" scale-x-100 duration-100 bg-gradient-to-b from-orange-300 via-orange-900 to-orange-900 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  text-gray-900 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-slate-200 text-1xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <a
              className="px-4 cursor-pointer capitalize font-medium text-slate-200 hover:scale-105 duration-200"
              href="https:talkworld.com.ng"
            >
              Blog
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
