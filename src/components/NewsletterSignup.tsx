
import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our weekly insights on sustainable finance.",
      });
      // In a real app, this would make an API call
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 lg:py-24 relative">
      {/* Creative Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-bounce-subtle" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Card className="max-w-4xl mx-auto glass shadow-aurora border-primary/30 hover-lift">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl gradient-aurora shadow-glow animate-pulse-slow">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-playfair font-bold">
                        Weekly <span className="text-gradient-aurora">Insights</span>
                      </h2>
                    </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Get exclusive access to cutting-edge research, market analysis, 
                    and policy updates in sustainable finance delivered to your inbox.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {[
                    'Latest research findings and market trends',
                    'AI-powered investment insights and tools',
                    'Policy analysis and regulatory updates',
                    'Exclusive interviews with industry leaders',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm group-hover:text-primary transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  Join <strong>10,000+</strong> finance professionals • Free • No spam
                </div>
              </div>

              {/* Sign-up Form */}
              <div className="space-y-6">
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full group gradient-aurora text-white border-0 shadow-glow hover-glow"
                        disabled={!email}
                      >
                        Subscribe to Newsletter
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center space-y-6 py-8">
                    <div className="w-20 h-20 mx-auto rounded-full gradient-aurora shadow-glow flex items-center justify-center animate-bounce-subtle">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gradient-aurora">
                        Welcome aboard!
                      </h3>
                      <p className="text-muted-foreground">
                        Check your email for a confirmation link.
                      </p>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    By subscribing, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;
