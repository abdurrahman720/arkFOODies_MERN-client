import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
    return (
        <div className="hero  my-20  bg-mybg">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://i.ibb.co/xJdbCKs/community.png")`,
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md bg-mybg bg-opacity-80 shadow-xl md:p-44 md:max-w-full ">
              <h1 className="mb-5 md:text-5xl font-bold text-myprimary font-custom1">
                The Biggest Global Foodies Community!
              </h1>
              <p className="mb-5 text-myprimary md:text-xl font-bold font-custom1">
                Got the best Recipe for a special dish? Post your recipe here and let the world taste your cusine food!
                Join the food community , post recipes and reviews today!
              </p>
              <Link to="/login">
                <button className="btn btn-myprimary font-custom1">
                  Join today!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Community;