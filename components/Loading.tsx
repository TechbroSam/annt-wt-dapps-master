import React from 'react'
import { PropagateLoader } from 'react-spinners';

function Loading() {
  return (
        <div className="bg-[#091B18] h-screen flex flex-col items-center
        justify-center">
         <div className="flex items-center space-x-2 mb-10">
          <img 
             className="h-20 w-20"
             src="/lottery_lg-01.png"
             alt="freepik.com"/>
             <h1 className="text=lg text-white font-bold">
              Loading the ANNT DRAW</h1>
         </div>
         <PropagateLoader color="white" size={30}/>
       </div>
  );
};

export default Loading;