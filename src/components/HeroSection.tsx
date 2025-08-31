import { ArrowRight, TrendingUp, Brain, Leaf, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const HeroSection = () => {
  // Sample data for the chart similar to the reference image
  const growthData = [
    { month: '09-24', value: 20 },
    { month: '10-24', value: 36 },
    { month: '11-24', value: 80, highlight: true },
    { month: '12-24', value: 22 },
  ];

  const trustedPartners = [
    'Citibank',
    'VIB Bank',
    'Foster School',
    'Research Institute',
    'FinTech Partners',
    'AI Consortium'
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Achieve Your Goals
                <br />
                with Smart{' '}
                <span className="text-primary">Financial</span>
                <br />
                Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Unlock your potential with tailored financial research and insights 
                designed to meet your unique needs in AI and sustainability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-4 text-base font-medium">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-base font-medium">
                Our Research
              </Button>
            </div>
          </div>

          {/* Right Content - Chart */}
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border/50 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Research Impact</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">2024</span>
                </div>
                
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-primary">80%</span> highest Growth in November 2024
                </div>

                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={growthData}>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        className="text-xs"
                      />
                      <YAxis hide />
                      <Bar 
                        dataKey="value" 
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                        className="opacity-80"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-center">
                  <div className="text-xs text-muted-foreground">
                    <span className="inline-block w-3 h-1 bg-primary rounded mr-1"></span>
                    Growth
                  </div>
                  <div className="text-sm font-medium text-foreground mt-1">Report in 2024</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Trusted Partners Section */}
        <div className="mt-20 text-center space-y-8">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Our Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedPartners.map((partner, index) => (
              <span key={index} className="text-lg font-medium text-muted-foreground">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;