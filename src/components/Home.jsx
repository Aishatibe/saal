import React from 'react';
import { Link } from 'react-scroll';
import heroImage from '../assets/heroImage.png';
import { MdArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-orange-300 via-orange-400 to-slate-900 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center px-4 justify-center px-4 h-full md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-slate-200">
            I'am a Full Stack Developer
          </h2>
          <p className="text-white font-bold py-4 max-w-md">
            A Software Engineer with +5 years of experience in building web
            applications and backend API's. My area of expertise are React.js,
            Node.js, JavaScript, HTML/CSS, MongoDB/Express, Angular.js, Vue.js.
            I have worked as a Frontend Engineer as well as a Backend Engineer
            in IT firms both remotely and on-site. This has helped broaden my
            knowledge in the aforementioned tech stack. I also Learnt people
            management which is essential to drive my career further to a higher
            height.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-300 via-orange-900 to-orange-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            {/* <button className="group flex flex-row items-center bg-gradient-to-r from-orange-300 via-orange-900 to-orange-900 rounded-md px-6 py-3 font-bold text-white w-fit">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={25} />
              </span>
            </button> */}
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="hero image"
            className="mx-auto w-2/3 md:w-full py-20  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
