import React from 'react';
import aboutBg from '../assets/aboutBg1.jpg';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline">About</p>
          <div className="border-b-4 rounded-lg border-orange-800 w-20"></div>
        </div>
        <p className="text-xl mt-20">
          I am an enthusiastic programmer with strong communication, strategic,
          organizational and technical skills. I have worked as a Frontend
          Engineer as well as a Backend Engineer in IT firms both remotely and
          on-site. This has helped broaden my knowledge in the aforementioned
          tech stack. I also Learnt people management which is essential to
          drive my career further to a higher height.
          <p className="text-xl mt-20">
            I am skilled and experienced in the following: HTML/CSS, JavaScript,
            React.js, Redux, Oracle/MySQL/MongoDb and machine learning with
            Python.
          </p>
          <a href=" https://docs.google.com/document/d/1bT6iQ408iuu6R0ebLmdvNKovfAY2gxc-wRvGMC77RZY/edit?usp=sharing">
            <p className="text-xl mt-10">Click here to view resume</p>
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
