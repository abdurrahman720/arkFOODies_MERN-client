import React from 'react';
import cooking from '../assets/svg/cooking.svg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-mybg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img src={cooking} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;