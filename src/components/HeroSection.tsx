import { ArrowRight, TrendingUp, Brain, Leaf, Zap, Shield, Target, BarChart3, Cpu, Recycle, Sprout, TreePine, Wind, Calendar, Landmark, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, size: number, left: number, delay: number}>>([]);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 15
    }));
    setParticles(newParticles);
  }, []);

  const tickerKeywords = [
    'ESG', 'Sustainable Finance', 'AI Analytics', 'Green Technology', 
    'Impact Investing', 'Climate Data', 'Carbon Credits', 'Renewable Energy',
    'Ethical AI', 'Nature-Based Solutions', 'Clean Innovation', 'Biodiversity Finance'
  ];

  const expertiseIcons = [
    { icon: TrendingUp, label: 'Finance', color: 'text-green-600', bgColor: 'bg-green-100' },
    { icon: Brain, label: 'AI/ML', color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: Leaf, label: 'Sustainability', color: 'text-emerald-500', bgColor: 'bg-emerald-50' }
  ];

  const floatingElements = [
    { icon: TreePine, position: 'top-20 left-16', delay: '0s', color: 'text-green-400' },
    { icon: Wind, position: 'top-40 right-20', delay: '2s', color: 'text-blue-300' },
    { icon: Sprout, position: 'bottom-40 left-20', delay: '4s', color: 'text-emerald-400' },
    { icon: Recycle, position: 'bottom-24 right-16', delay: '6s', color: 'text-green-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-eco-hero">
      {/* Organic Background Patterns */}
      <div className="absolute inset-0 nature-pattern" />
      <div className="absolute inset-0 leaf-circuit-pattern opacity-40" />
      
      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gentle Wave Animations */}
      <div className="absolute top-1/4 left-0 w-full h-32 wave-pattern opacity-30" />
      <div className="absolute bottom-1/3 right-0 w-full h-24 wave-pattern opacity-20" style={{ animationDelay: '3s' }} />

      {/* Floating Natural Elements */}
      {floatingElements.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} float-gentle opacity-20`}
          style={{ animationDelay: item.delay }}
        >
          <item.icon className={`w-8 h-8 ${item.color}`} />
        </div>
      ))}

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Nature-Inspired Statement */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Organic Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-6 h-6 text-green-600 animate-pulse" />
                <div className="h-px flex-1 bg-gradient-to-r from-green-400 via-green-500 to-transparent opacity-50" />
                <span className="text-sm font-inter font-medium text-green-700 tracking-wider uppercase">
                  Sustainable • Intelligent • Purposeful
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Where{' '}
                <span className="text-gradient-nature inline-flex items-center gap-3">
                  Finance
                  <TrendingUp className="w-12 h-12 text-green-600 float-gentle-delayed" />
                </span>{' '}
                <br className="hidden lg:block" />
                Meets{' '}
                <span className="text-gradient-tech inline-flex items-center gap-3">
                  AI
                  <Brain className="w-12 h-12 text-blue-500 float-gentle" />
                </span>{' '}
                and{' '}
                <span className="text-gradient-nature inline-flex items-center gap-3">
                  Sustainability
                  <Leaf className="w-12 h-12 text-emerald-500 float-gentle-delayed" />
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-2xl font-inter leading-relaxed text-green-800 font-medium">
                  🌱 Nurturing the Future of Finance with Nature-Inspired Innovation
                </p>

                <p className="text-lg font-inter leading-relaxed text-muted-foreground max-w-xl">
                  Exploring how emerging technologies can create harmony between financial growth 
                  and environmental stewardship through thoughtful research and sustainable practices.
                </p>
              </div>
            </div>

            {/* Organic Expertise Badges */}
            <div className="flex flex-wrap gap-4">
              {expertiseIcons.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-5 py-3 ${item.bgColor} border border-green-200 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm font-inter font-semibold text-slate-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Eco-Friendly CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="btn-eco-glow bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-4 rounded-full group shadow-lg"
              >
                <Sprout className="mr-2 h-5 w-5" />
                Explore Research
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-eco-glow border-green-300 bg-white/80 hover:bg-green-50 text-green-700 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg"
              >
                <Wind className="mr-2 h-5 w-5" />
                Newsletter
              </Button>
            </div>

            {/* Impact Stats with Nature Icons */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '3+', label: 'Years Experience', icon: Calendar, color: 'text-blue-600' },
                { number: '2', label: 'Major Banks', icon: Landmark, color: 'text-gray-600' },
                { number: '10+', label: 'Blog Posts', icon: FileText, color: 'text-green-600' }
              ].map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${1 + index * 0.4}s` }}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 bg-white rounded-full shadow-xl border-2 border-green-200 group-hover:shadow-2xl group-hover:border-green-400 transition-all">
                      <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-125 transition-transform`} />
                    </div>
                    <div className="text-5xl font-black text-green-900 group-hover:text-green-700 transition-colors drop-shadow-lg">
                      {stat.number}
                    </div>
                    <div className="text-base text-green-800 font-inter font-bold tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Eco-Friendly Profile Card */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Natural Card with Soft Shadows */}
              <div 
                className="relative w-80 h-96 preserve-3d cursor-pointer group"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onClick={() => setIsCardFlipped(!isCardFlipped)}
              >
                {/* Front Side - Eco Card */}
                <Card className="absolute inset-0 w-full h-full p-6 eco-card overflow-hidden group-hover:shadow-2xl transition-all duration-500 backface-hidden">
                  <div className="flex flex-col h-full justify-between">
                    {/* Profile Section with Natural Elements */}
                    <div className="text-center space-y-6">
                      <div className="relative w-32 h-32 mx-auto">
                        {/* Organic Ring Animation */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 animate-pulse opacity-20" />
                        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 via-green-500 to-emerald-600 animate-rotate-slow opacity-10" />
                        
                        <Avatar className="w-28 h-28 relative z-10 ring-4 ring-green-200 shadow-xl">
                          <AvatarImage 
                            src="/lovable-uploads/ef1bf23a-a44c-46c8-b5ff-54520ca1d0a3.png" 
                            alt="Duy Nguyen" 
                            className="object-cover object-[center_20%]"
                          />
                          <AvatarFallback className="text-2xl bg-gradient-nature text-white">DN</AvatarFallback>
                        </Avatar>

                        {/* Floating Leaf Elements */}
                        <Leaf className="absolute -top-2 -right-2 w-4 h-4 text-green-400 animate-pulse" />
                        <Sprout className="absolute -bottom-1 -left-1 w-4 h-4 text-emerald-400 animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-playfair font-bold text-green-800">
                          Duy Nguyen
                        </h3>
                        <p className="text-sm text-green-600 font-inter font-medium">
                          Finance & AI Professional
                        </p>
                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span>Sustainable Innovation Advocate</span>
                        </div>
                      </div>
                    </div>

                    {/* Expertise Grid */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        {expertiseIcons.map((item, index) => (
                          <div 
                            key={index}
                            className={`flex flex-col items-center p-3 rounded-xl ${item.bgColor} border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-md`}
                          >
                            <item.icon className={`h-6 w-6 mb-1 ${item.color}`} />
                            <span className="text-xs font-inter font-medium text-slate-600">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center bg-green-50 rounded-lg p-3">
                        <p className="text-xs text-green-700 font-inter flex items-center justify-center gap-1">
                          <Leaf className="w-3 h-3" />
                          Click to discover more
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back Side - Professional Journey */}
                <Card className="absolute inset-0 w-full h-full p-6 eco-card overflow-hidden rotate-y-180 backface-hidden">
                  <div className="flex flex-col h-full justify-center space-y-6">
                    <div className="text-center">
                      <TreePine className="w-12 h-12 text-green-600 mx-auto mb-4 animate-pulse" />
                      <h4 className="text-lg font-playfair font-bold text-green-800 mb-4">
                        Growing Impact
                      </h4>
                    </div>
                    
                    <div className="space-y-6 text-sm font-inter">
                      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                        <div className="font-semibold text-green-800 mb-1">🏛️ Citibank</div>
                        <div className="text-green-700">Investment Banking & Risk Analytics</div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                        <div className="font-semibold text-blue-800 mb-1">🏦 Vietnam International Bank</div>
                        <div className="text-blue-700">Investor Relations & Data Science</div>
                      </div>
                      
                      <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                        <div className="font-semibold text-emerald-800 mb-1">🌱 Current Mission</div>
                        <div className="text-emerald-700">AI-Driven Sustainable Finance</div>
                      </div>
                    </div>

                    <div className="text-center bg-green-100 rounded-lg p-3">
                      <p className="text-xs text-green-700 font-inter flex items-center justify-center gap-1">
                        <Wind className="w-3 h-3" />
                        Click to return
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;