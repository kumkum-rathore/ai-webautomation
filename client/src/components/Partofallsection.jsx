import React from "react";

const Partofallsection = ({  ptitle,ptag, psubtitle }) => {
  return (
    <section>
    
      <h1 className=" text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent m-10">
        {ptitle}
                <span className="block m-10">{ptag}</span>

      </h1>

      
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto m-10">
        {psubtitle}
      </p>
    </section>
  );
};

export default Partofallsection;
