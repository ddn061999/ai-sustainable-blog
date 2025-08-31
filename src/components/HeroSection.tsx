import { ArrowRight, TrendingUp, Brain, Leaf, Zap, Shield, Target, BarChart3, Cpu, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';

const HeroSection = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const tickerKeywords = [
    'ESG', 'Artificial Intelligence', 'Transparency', 'Corporate Governance', 
    'Impact Investing', 'Sustainable Finance', 'Machine Learning', 'Risk Analytics',
    'Green Bonds', 'Climate Finance', 'Data Science', 'Financial Innovation'
  ];

  const expertiseIcons = [
    { icon: TrendingUp, label: 'Finance', color: 'text-emerald-400' },
    { icon: Brain, label: 'AI/ML', color: 'text-blue-400' },
    { icon: Leaf, label: 'Sustainability', color: 'text-green-400' }
  ];

  const floatingIcons = [
    { icon: BarChart3, position: 'top-20 left-20', delay: '0s' },
    { icon: Cpu, position: 'top-32 right-32', delay: '1s' },
    { icon: Recycle, position: 'bottom-32 left-32', delay: '2s' },
    { icon: Shield, position: 'bottom-20 right-20', delay: '3s' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} float opacity-20 animate-pulse-glow`}
          style={{ animationDelay: item.delay }}
        >
          <item.icon className="w-8 h-8 text-primary" />
        </div>
      ))}

      {/* Energy Flow Lines */}
      <div className="absolute top-0 left-0 w-full h-1 energy-flow opacity-60" />
      <div className="absolute bottom-0 right-0 w-full h-1 energy-flow opacity-60" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Bold Statement */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 gradient-tech rounded-full animate-pulse-glow" />
                <span className="text-sm font-inter font-medium text-primary-foreground/80 tracking-wider uppercase">
                  Finance • AI • Sustainability
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-primary-foreground">
                Where{' '}
                <span className="text-gradient-tech block lg:inline">Finance</span>{' '}
                Meets{' '}
                <span className="text-gradient block lg:inline">AI</span>{' '}
                and{' '}
                <span className="text-gradient-tech block lg:inline">Sustainability</span>
              </h1>

              <p className="text-xl font-inter leading-relaxed text-primary-foreground/90 max-w-2xl">
                Shaping the Future of Finance with Purpose-Driven Innovation
              </p>

              <p className="text-lg font-inter leading-relaxed text-primary-foreground/70 max-w-xl">
                Exploring how emerging technologies can enhance transparency and impact 
                in financial systems through rigorous research and practical implementation.
              </p>
            </div>

            {/* Animated Icon Badges */}
            <div className="flex flex-wrap gap-4">
              {expertiseIcons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 bg-card/10 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-card/20 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-inter font-medium text-primary-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Dynamic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-full group"
              >
                Latest Research
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-glow border-primary/30 bg-card/10 hover:bg-card/20 text-primary-foreground backdrop-blur-sm px-8 py-4 rounded-full"
              >
                <Zap className="mr-2 h-5 w-5" />
                Newsletter
              </Button>
            </div>

            {/* Quick Impact Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '3+', label: 'Years Experience', icon: Target },
                { number: '2', label: 'Major Banks', icon: TrendingUp },
                { number: '5+', label: 'Research Papers', icon: Brain }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${1 + index * 0.3}s` }}>
                  <div className="flex flex-col items-center gap-2">
                    <stat.icon className="w-6 h-6 text-primary mb-1 group-hover:animate-pulse-glow" />
                    <div className="text-3xl font-bold text-primary-foreground drop-shadow-sm group-hover:text-gradient-tech transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primary-foreground/70 font-inter">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Profile Card */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Card Container with Flip Effect */}
              <div 
                className="relative w-80 h-96 preserve-3d cursor-pointer"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onClick={() => setIsCardFlipped(!isCardFlipped)}
              >
                {/* Front Side */}
                <Card className="absolute inset-0 w-full h-full p-6 bg-card/20 backdrop-blur-xl border border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-500 animate-pulse-glow backface-hidden">
                  <div className="flex flex-col h-full justify-between">
                    {/* Profile Section */}
                    <div className="text-center space-y-4">
                      <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-tech animate-rotate-slow opacity-30" />
                        <Avatar className="w-30 h-30 relative z-10 ring-4 ring-primary/30">
                          <AvatarImage 
                            src="/lovable-uploads/ef1bf23a-a44c-46c8-b5ff-54520ca1d0a3.png" 
                            alt="Duy Nguyen" 
                            className="object-cover object-[center_20%]"
                          />
                          <AvatarFallback className="text-2xl bg-gradient-tech text-primary-foreground">DN</AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-playfair font-bold text-primary-foreground mb-2">
                          Duy Nguyen
                        </h3>
                        <p className="text-sm text-primary-foreground/70 font-inter">
                          Finance & AI Professional
                        </p>
                      </div>
                    </div>

                    {/* Interactive Elements */}
                    <div className="space-y-4">
                      {/* Expertise Icons */}
                      <div className="grid grid-cols-3 gap-3">
                        {expertiseIcons.map((item, index) => (
                          <div 
                            key={index}
                            className="flex flex-col items-center p-3 rounded-lg bg-card/20 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                          >
                            <item.icon className={`h-6 w-6 mb-1 ${item.color}`} />
                            <span className="text-xs font-inter font-medium text-primary-foreground/80">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center">
                        <p className="text-xs text-primary-foreground/50 font-inter">
                          Click to flip card
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back Side */}
                <Card className="absolute inset-0 w-full h-full p-6 bg-card/20 backdrop-blur-xl border border-primary/20 overflow-hidden rotate-y-180 backface-hidden">
                  <div className="flex flex-col h-full justify-center text-center space-y-6">
                    <h4 className="text-lg font-playfair font-bold text-primary-foreground">
                      Professional Journey
                    </h4>
                    
                    <div className="space-y-4 text-sm font-inter text-primary-foreground/80">
                      <div className="space-y-2">
                        <div className="font-semibold text-primary">Citibank</div>
                        <div>Investment Banking & Risk Analytics</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="font-semibold text-primary">Vietnam International Bank</div>
                        <div>Investor Relations & Data Science</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="font-semibold text-primary">Current Focus</div>
                        <div>AI-Driven Sustainable Finance Research</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-primary-foreground/50 font-inter">
                        Click to flip back
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Ticker */}
        <div className="absolute bottom-8 left-0 w-full overflow-hidden">
          <div className="bg-card/10 backdrop-blur-sm border-t border-primary/20 py-3">
            <div className="whitespace-nowrap ticker-scroll">
              <span className="text-sm font-inter text-primary-foreground/60 mr-8">
                {tickerKeywords.join(' • ')} • {tickerKeywords.join(' • ')}
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;