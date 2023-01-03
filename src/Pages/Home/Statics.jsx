import React from 'react';

const Statics = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-2xl">
        <div class="grid row-gap-8 sm:grid-cols-3">
          <div class="text-center">
            <h6 class="text-5xl font-bold text-myprimary font-custom1">2K</h6>
            <p class="font-bold font-custom2 text-myprimary">Recipes</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-myprimary font-custom1">14.9K</h6>
            <p class="font-bold text-myprimary font-custom2">Reviews</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-myprimary font-custom1">27.3K</h6>
            <p class="font-bold text-myprimary font-custom2">Users</p>
          </div>
        </div>
      </div>
    );
};

export default Statics;