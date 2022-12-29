import React from 'react';
import port1 from '../assets/portfolio/port1.png';
import port2 from '../assets/portfolio/port2.png';
import port3 from '../assets/portfolio/port3.png';
import port4 from '../assets/portfolio/port4.png';
import port5 from '../assets/portfolio/port5.png';
import port6 from '../assets/portfolio/port6.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: port1,
    },
    {
      id: 2,
      src: port2,
    },
    {
      id: 3,
      src: port3,
    },
    {
      id: 4,
      src: port4,
    },
    {
      id: 5,
      src: port5,
    },
    {
      id: 6,
      src: port6,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/4 px-6 py-1 m-1 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/4 px-6 py-1 m-1 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
