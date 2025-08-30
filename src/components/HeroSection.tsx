import React, { Suspense } from 'react';
import { TrendingUp, Brain, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Spline 3D Scene Background */}
      <div className="relative h-screen w-full">
        <Suspense fallback={
          <div className="h-screen w-full bg-gradient-to-br from-gates-red to-gates-purple flex items-center justify-center">
            <div className="text-white text-xl">Loading 3D Experience...</div>
          </div>
        }>
          <Spline 
            scene="https://prod.spline.design/cCRvgy1YaEJEcJS5/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto h-full flex items-end pb-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full pointer-events-auto">
              {/* Featured Article Card */}
              <Card className="bg-gates-pink/90 backdrop-blur-sm p-6 rounded-xl border-0 hover-lift">
                <div className="text-sm font-semibold text-gates-red mb-2 uppercase tracking-wide">
                  INNOVATION SPOTLIGHT
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gates-navy mb-3 font-playfair">
                  Where Finance Meets AI and Sustainability
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  How emerging technologies are enhancing transparency and impact in financial systems.
                </p>
              </Card>

              {/* Professional Bio Card */}
              <Card className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border-0 hover-lift">
                <div className="space-y-4">
                  {/* Professional Photo Placeholder */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gates-cyan to-gates-purple flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <span className="text-lg font-playfair text-gates-navy font-bold">DN</span>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-bold text-gates-navy font-playfair">Duy Nguyen</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Finance & AI professional with 3+ years at Citibank and VIB, 
                      specializing in sustainable finance and emerging technologies.
                    </p>
                  </div>

                  {/* Expertise Areas */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: TrendingUp, label: 'Finance' },
                      { icon: Brain, label: 'AI/ML' },
                      { icon: Leaf, label: 'ESG' }
                    ].map((item, index) => (
                      <div key={index} className="text-center p-2 rounded-lg bg-gates-gray/50">
                        <item.icon className="h-4 w-4 mx-auto mb-1 text-gates-cyan" />
                        <span className="text-xs font-medium text-gates-navy">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '2', label: 'Major Banks' },
              { number: '5+', label: 'Research Papers' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-gates-red">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;