
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
    <section className="py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
          <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                      Weekly Insights
                    </h2>
                  </div>
                  
                  <p className="text-base sm:text-lg text-muted-foreground font-inter leading-relaxed">
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
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-inter">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground font-inter">
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
                        className="w-full group"
                        disabled={!email}
                      >
                        Subscribe to Newsletter
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg text-green-600">
                        Welcome aboard!
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        Check your email for a confirmation link.
                      </p>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <p className="text-xs text-muted-foreground font-inter">
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
