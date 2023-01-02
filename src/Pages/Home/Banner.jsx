import React from 'react';
import cooking from '../../assets/png/cooking.png';
import logo from '../../assets/png/logo-no-background.png'

const Banner = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row  bg-mybg">
                <div className="text-center lg:text-left w-1/2 text-myprimary ">
                    <div className="flex flex-col items-center justify-center">
                    <img className="w-44 mt-0" src={logo} alt="" />
                    {/* <p className="text-sm font-custom1 text-myprimary">ARK FOODies</p> */}
            <h1 className="text-5xl font-bold font-custom1 ">Taste the global cuisine</h1>
                    </div>
                    <p className="py-6 text-2xl font-extrabold font-custom1 ">Discover and share thousands of mouthwatering recipes with our foodie community! Find and review the best dishes from around the world!</p>
                    <button className="btn btn-myprimary font-custom1">Explore Recipies</button>
                    <button className="btn btn-myprimary font-custom1 ml-4">Share</button>
          </div>
          <div className="card  flex-shrink-0 w-1/2 shadow-2xl">
            <img src={cooking} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;