
import { ArrowRight, TrendingUp, Brain, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
                Where <span className="text-gradient">Finance</span> Meets{' '}
                <span className="text-gradient">AI</span> and{' '}
                <span className="text-gradient">Sustainability</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Exploring the intersection of AI, sustainable finance, and green policy. 
                Research-driven insights for the future of responsible investing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Latest Research
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '50+', label: 'Research Papers' },
                { number: '10K+', label: 'Newsletter Readers' },
                { number: '5Y+', label: 'Industry Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Photo & Bio Card */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="space-y-6">
                {/* Professional Photo Placeholder */}
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl font-playfair text-muted-foreground">DN</span>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">Duy Nguyen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Finance professional specializing in sustainable finance and AI applications 
                    in financial markets. Expert in ESG research, green policy analysis, and 
                    innovative financial technologies.
                  </p>
                </div>

                {/* Expertise Areas */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: TrendingUp, label: 'Finance' },
                    { icon: Brain, label: 'AI/ML' },
                    { icon: Leaf, label: 'ESG' },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-secondary/50">
                      <item.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
