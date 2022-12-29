import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/suleaishataladi/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/aishatibe',
      style: 'rounded-sm',
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:suleaishat990@gmail.com',
      style: 'rounded-sm',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 bg-slate-900  ml-[-100px] hover:ml-[-10px] duration-300' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white "
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
