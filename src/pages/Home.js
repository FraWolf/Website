import React, { useEffect, useState } from 'react';

const Home = () => {
    return (
        <div className="space-x-5 mx-auto justify-center items-center lg:flex md:flex">
            <img
                class="w-52 h-52 object-cover rounded-full"
                src="https://frawolf.it/bot/api/156851568975675392"
                alt="Me :)"
            />
            <div className="text-space">
                <h1 className="text-7xl text-white font-bold max-w-7xl">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-red-500">Francesco<br />Lombardo</span>
                </h1>
                <br />
                <h1 className="text-4xl text-white font-bold max-w-4xl">
                    Junior Backend Developer.
                </h1>
            </div>
        </div>
    );
}

export default Home;