import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="relative overflow-hidden bg-background min-h-screen">
      {/* Spline 3D Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-br from-gates-cyan via-gates-purple to-gates-red flex items-center justify-center">
            <div className="text-white text-xl font-bold animate-pulse font-helvetica">Loading 3D Experience...</div>
          </div>
        }>
          <Spline 
            scene="https://prod.spline.design/cCRvgy1YaEJEcJS5/scene.splinecode"
            onLoad={handleSplineLoad}
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gates-cyan via-gates-purple to-gates-red flex items-center justify-center z-50">
          <div className="text-white text-xl font-bold animate-pulse font-helvetica">Loading 3D Experience...</div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-helvetica">
              <span className="block">Finance meets</span>
              <span className="block">AI & Sustainability</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white font-bold mb-8 max-w-2xl mx-auto leading-relaxed font-helvetica">
              Exploring the intersection of financial innovation, artificial intelligence, 
              and sustainable development through research and practical applications.
            </p>

            {/* Professional Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gates-cyan to-gates-purple flex items-center justify-center mr-4">
                <span className="text-white font-bold">DN</span>
              </div>
              <div className="text-left">
                <div className="text-white font-bold font-helvetica">Duy Nguyen</div>
                <div className="text-white font-bold text-sm font-helvetica">Finance & AI Professional</div>
              </div>
            </div>
          </div>
        </div>


        {/* Quick Stats Section */}
        <div className="bg-black/20 backdrop-blur-sm py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '2', label: 'Major Banks' },
                { number: '5+', label: 'Research Papers' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold text-white font-helvetica">{stat.number}</div>
                  <div className="text-xs md:text-sm text-white font-bold font-helvetica">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;