import React from 'react';

import Hero from './HomeComponents/Hero';

function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col  items-center" >
      
      <Hero/>

      <h1 className="text-4xl font-bold mb-4 w-screen h-screen ">Home Page</h1>
      
    </div>
  );
}

export default Home;
