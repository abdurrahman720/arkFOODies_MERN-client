import React from "react";
import { Link } from "react-router-dom";
import cooking from "../../assets/png/cooking.png";
import logo from "../../assets/png/logo-no-background.png";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10 md:flex-row mx-auto  bg-mybg">
      <div className="text-center lg:text-left w-1/2 text-myprimary ">
        <div className="flex flex-col items-center justify-center w-full">
          <img className="w-44 mt-0" src={logo} alt="" />
          {/* <p className="text-sm font-custom1 text-myprimary">ARK FOODies</p> */}
          <h1 className="text-5xl font-bold font-custom1 ">
            Taste the global cuisine
          </h1>
        </div>
        <p className="py-6 text-2xl font-extrabold font-custom1 ">
          Discover and share thousands of mouthwatering recipes with our foodie
          community! Find and review the best dishes from around the world!
        </p>
       <Link to='/recipes'> <button className="btn btn-myprimary font-custom1">
          Explore Recipies
        </button></Link>
        <button className="btn btn-myprimary font-custom1 ml-4">Share</button>
      </div>
      <div className="card  flex-shrink-0 w-1/2 ">
        <img src={cooking} alt="" />
      </div>
    </div>
  );
};

export default Banner;
