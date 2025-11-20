import React from 'react';

const ChristmasTree: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Tree positioned in bottom right */}
      <div className="absolute bottom-0 right-8 sm:right-16 lg:right-24">
        {/* Tree Trunk */}
        <div className="w-8 sm:w-12 lg:w-16 h-16 sm:h-20 lg:h-24 bg-amber-800 mx-auto relative z-10 rounded-sm"></div>
        
        {/* Tree Layers - Bottom to Top */}
        {/* Bottom Layer */}
        <div className="relative -mt-4 sm:-mt-6 lg:-mt-8">
          <div className="w-32 sm:w-48 lg:w-64 h-24 sm:h-32 lg:h-40 bg-green-600 mx-auto" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
               }}>
          </div>
        </div>
        
        {/* Middle Layer */}
        <div className="relative -mt-8 sm:-mt-12 lg:-mt-16">
          <div className="w-28 sm:w-40 lg:w-52 h-20 sm:h-28 lg:h-36 bg-green-500 mx-auto" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
               }}>
          </div>
        </div>
        
        {/* Top Layer */}
        <div className="relative -mt-6 sm:-mt-10 lg:-mt-12">
          <div className="w-24 sm:w-32 lg:w-44 h-18 sm:h-24 lg:h-32 bg-green-400 mx-auto" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
               }}>
          </div>
        </div>
        
        {/* Star on Top */}
        <div className="relative -mt-2 sm:-mt-3 lg:-mt-4 flex justify-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-yellow-400 relative" 
               style={{
                 clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                 filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.2))'
               }}>
          </div>
        </div>
        
        {/* Decorative Ornaments */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Red ornaments */}
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full bottom-20 sm:bottom-28 lg:bottom-36 left-1/2 transform -translate-x-8 sm:-translate-x-12 lg:-translate-x-16"></div>
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full bottom-16 sm:bottom-20 lg:bottom-28 left-1/2 transform translate-x-6 sm:translate-x-10 lg:translate-x-12"></div>
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full bottom-32 sm:bottom-44 lg:bottom-56 left-1/2 transform -translate-x-4 sm:-translate-x-6 lg:-translate-x-8"></div>
          
          {/* Blue ornaments */}
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full bottom-24 sm:bottom-32 lg:bottom-44 left-1/2 transform translate-x-4 sm:translate-x-8 lg:translate-x-10"></div>
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full bottom-28 sm:bottom-40 lg:bottom-52 left-1/2 transform -translate-x-6 sm:-translate-x-10 lg:-translate-x-12"></div>
          
          {/* Gold ornaments */}
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full bottom-20 sm:bottom-24 lg:bottom-32 left-1/2 transform -translate-x-2 sm:-translate-x-4 lg:-translate-x-6"></div>
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full bottom-36 sm:bottom-48 lg:bottom-60 left-1/2 transform translate-x-2 sm:translate-x-4 lg:translate-x-6"></div>
        </div>
      </div>
      
      {/* Additional tree in bottom left (smaller) */}
      <div className="absolute bottom-0 left-8 sm:left-16 lg:left-24 opacity-60">
        {/* Small Tree Trunk */}
        <div className="w-4 sm:w-6 lg:w-8 h-8 sm:h-12 lg:h-16 bg-amber-800 mx-auto relative z-10 rounded-sm"></div>
        
        {/* Small Tree Layers */}
        <div className="relative -mt-2 sm:-mt-3 lg:-mt-4">
          <div className="w-16 sm:w-24 lg:w-32 h-12 sm:h-16 lg:h-20 bg-green-600 mx-auto" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
               }}>
          </div>
        </div>
        
        <div className="relative -mt-4 sm:-mt-6 lg:-mt-8">
          <div className="w-14 sm:w-20 lg:w-26 h-10 sm:h-14 lg:h-18 bg-green-500 mx-auto" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
               }}>
          </div>
        </div>
        
        <div className="relative -mt-3 sm:-mt-5 lg:-mt-6">
          <div className="w-12 sm:w-16 lg:w-22 h-9 sm:h-12 lg:h-16 bg-green-400 mx-auto" 
               style={{
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                 filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.1))'
               }}>
          </div>
        </div>
        
        {/* Small Star */}
        <div className="relative -mt-1 sm:-mt-2 flex justify-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-yellow-400" 
               style={{
                 clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                 filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))'
               }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasTree;