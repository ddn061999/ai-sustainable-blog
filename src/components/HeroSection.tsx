import React, { Suspense, useState } from 'react';
import { TrendingUp, Brain, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';
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
            <div className="text-white text-xl font-medium animate-pulse">Loading 3D Experience...</div>
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
          <div className="text-white text-xl font-medium animate-pulse">Loading 3D Experience...</div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Finance meets</span>
              <span className="block text-gradient">AI & Sustainability</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of financial innovation, artificial intelligence, 
              and sustainable development through research and practical applications.
            </p>

            {/* Professional Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gates-cyan to-gates-purple flex items-center justify-center mr-4">
                <span className="text-white font-bold">DN</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Duy Nguyen</div>
                <div className="text-white/80 text-sm">Finance & AI Professional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards - Desktop */}
        <div className="hidden lg:block">
          {/* Featured Article Card */}
          <div className="absolute top-1/4 left-8 max-w-sm">
            <Card className="p-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover-lift">
              <div className="text-sm font-semibold text-gates-red mb-2">INNOVATION SPOTLIGHT</div>
              <h3 className="text-xl font-bold text-gates-navy mb-3">
                Where Finance Meets AI and Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
                How emerging technologies are enhancing transparency and impact in financial systems.
              </p>
            </Card>
          </div>

          {/* Bio Card */}
          <div className="absolute top-1/3 right-8 max-w-xs">
            <Card className="p-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover-lift">
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <h4 className="text-lg font-bold text-gates-navy">Professional Focus</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    3+ years at Citibank and VIB, specializing in sustainable finance and emerging technologies.
                  </p>
                </div>

                {/* Expertise Areas */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: TrendingUp, label: 'Finance' },
                    { icon: Brain, label: 'AI/ML' },
                    { icon: Leaf, label: 'ESG' }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-2 rounded bg-gates-gray">
                      <item.icon className="h-4 w-4 mx-auto mb-1 text-gates-cyan" />
                      <span className="text-xs font-medium text-gates-navy">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
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
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs md:text-sm text-white/80 font-medium">{stat.label}</div>
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