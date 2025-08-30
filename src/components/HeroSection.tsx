import React from 'react';
import { Play, TrendingUp, Brain, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
          {/* Left side - Red geometric pattern */}
          <div className="relative bg-gates-red p-8 lg:p-12">
            {/* Geometric patterns */}
            <div className="absolute inset-0 opacity-20 pattern-dots"></div>
            
            {/* Abstract tech illustration */}
            <div className="relative z-10">
              <svg viewBox="0 0 300 200" className="w-full h-48 text-white opacity-60">
                <defs>
                  <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                    <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="300" height="200" fill="url(#dots)"/>
                <path d="M50 50 L100 80 L150 60 L200 100 L250 70" stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="100" cy="80" r="8" fill="currentColor"/>
                <rect x="140" y="52" width="20" height="16" fill="currentColor" opacity="0.7"/>
                <path d="M180 90 L220 110 L200 130 Z" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>

            {/* Featured Article Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-gates-pink bg-opacity-90 p-6 rounded-lg">
              <div className="text-sm font-semibold text-gates-red mb-2">INNOVATION SPOTLIGHT</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Where Finance Meets AI and Sustainability
              </h2>
              <p className="text-gray-700 text-sm">
                How emerging technologies are enhancing transparency and impact in financial systems.
              </p>
            </div>
          </div>

          {/* Right side - Blue technical illustrations */}
          <div className="relative bg-gates-gray p-8 lg:p-12">
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-10 pattern-grid"></div>

            {/* Technical illustrations */}
            <div className="relative z-10">
              <svg viewBox="0 0 300 250" className="w-full h-64 text-gates-cyan">
                {/* Laptop/Computer */}
                <rect x="50" y="80" width="80" height="50" fill="currentColor" opacity="0.7" rx="4"/>
                <rect x="55" y="85" width="70" height="35" fill="white" rx="2"/>
                <rect x="60" y="135" width="60" height="8" fill="currentColor" opacity="0.5" rx="4"/>
                
                {/* Network connections */}
                <path d="M130 105 L180 90 L230 110" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                <circle cx="180" cy="90" r="6" fill="currentColor"/>
                <circle cx="230" cy="110" r="6" fill="currentColor"/>
                
                {/* Code blocks */}
                <rect x="160" y="140" width="100" height="60" fill="currentColor" opacity="0.2" rx="4"/>
                <rect x="170" y="150" width="80" height="4" fill="currentColor" opacity="0.6" rx="2"/>
                <rect x="170" y="160" width="60" height="4" fill="currentColor" opacity="0.6" rx="2"/>
                <rect x="170" y="170" width="70" height="4" fill="currentColor" opacity="0.6" rx="2"/>
                
                {/* Microscope illustration */}
                <g transform="translate(200,30)">
                  <path d="M20 40 L40 60 L45 55 L25 35 Z" fill="currentColor" opacity="0.8"/>
                  <circle cx="30" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="30" cy="25" r="6" fill="currentColor" opacity="0.3"/>
                  <rect x="25" y="60" width="10" height="20" fill="currentColor" opacity="0.6"/>
                </g>
              </svg>
            </div>

            {/* Professional Photo & Bio Card */}
            <div className="absolute bottom-8 left-8 right-8">
              <Card className="p-6 bg-white/90 backdrop-blur border-border/50">
                <div className="space-y-4">
                  {/* Professional Photo Placeholder */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gates-cyan to-gates-purple flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                      <span className="text-lg font-playfair text-gates-navy">DN</span>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-bold text-gates-navy">Duy Nguyen</h3>
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