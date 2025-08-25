import { ArrowRight, TrendingUp, Brain, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const HeroSection = () => {
  return <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-dots opacity-40" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-bounce-subtle" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse-slow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
                Where <span className="text-gradient-aurora animate-pulse-slow">Finance</span> Meets{' '}
                <span className="text-gradient-aurora animate-pulse-slow">AI</span> and{' '}
                <span className="text-gradient-aurora animate-pulse-slow">Sustainability</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Exploring how emerging technologies can enhance transparency and impact 
                in financial systems. Insights from a finance professional transitioning 
                toward academic, purpose-driven research.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group shadow-glow hover-glow gradient-aurora text-white border-0">
                Latest Research
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="glass hover-lift border-primary/30 hover:border-primary/50">
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[{
              number: '3+',
              label: 'Years Experience'
            }, {
              number: '2',
              label: 'Major Banks'
            }, {
              number: '5+',
              label: 'Blog Posts'
            }].map((stat, index) => <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </div>

          {/* Professional Photo & Bio Card */}
          <div className="space-y-6">
            <Card className="p-8 glass hover-lift shadow-aurora border-primary/20">
              <div className="space-y-6">
                {/* Professional Photo Placeholder */}
                <div className="w-48 h-48 mx-auto rounded-full gradient-aurora p-1 shadow-glow animate-pulse-slow">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-4xl font-playfair text-gradient-aurora">DN</span>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">Duy Nguyen</h3>
                  <p className="text-muted-foreground leading-relaxed">Finance & Investor Relations professional with 3+ years of experience at Citibank and Vietnam International Bank (VIB), specializing in financial analysis, investor communications, and data analytics. Passionate about leveraging emerging technologies—especially AI—to enhance transparency and impact in financial systems.</p>
                </div>

                {/* Expertise Areas */}
                <div className="grid grid-cols-3 gap-3">
                  {[{
                  icon: TrendingUp,
                  label: 'Finance'
                }, {
                  icon: Brain,
                  label: 'AI/ML'
                }, {
                  icon: Leaf,
                  label: 'Corporate Governance'
                }].map((item, index) => <div key={index} className="text-center p-4 rounded-xl glass hover-glow transition-all duration-300 group cursor-pointer">
                      <item.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium group-hover:text-primary transition-colors">{item.label}</span>
                    </div>)}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;