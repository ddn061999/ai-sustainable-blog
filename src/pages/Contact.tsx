
import { Mail, Linkedin, Twitter, MapPin, Calendar, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'duy@example.com',
      description: 'Best for detailed inquiries and collaboration proposals',
      action: 'mailto:duy@example.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/duynguyen',
      description: 'Professional networking and industry discussions',
      action: '#',
    },
    {
      icon: Twitter,
      title: 'Twitter',
      value: '@duynguyen_finance',
      description: 'Follow for real-time insights and market commentary',
      action: '#',
    },
  ];

  const opportunities = [
    {
      title: 'Research Collaboration',
      description: 'Joint research projects in sustainable finance, AI applications, or climate policy analysis.',
    },
    {
      title: 'Speaking Engagements',
      description: 'Conference presentations, webinars, and panel discussions on finance and sustainability.',
    },
    {
      title: 'Consulting Services',
      description: 'ESG strategy development, climate risk assessment, and sustainable finance implementation.',
    },
    {
      title: 'Media Interviews',
      description: 'Expert commentary on market trends, policy developments, and sustainable finance topics.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's discuss sustainable finance, AI applications, or potential collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair font-bold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <method.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="space-y-2 flex-1">
                            <h3 className="font-semibold">{method.title}</h3>
                            <p className="text-primary font-mono text-sm">{method.value}</p>
                            <p className="text-muted-foreground text-sm">{method.description}</p>
                            <a 
                              href={method.action}
                              className="inline-flex items-center text-sm text-primary hover:underline"
                            >
                              Connect
                              <Send className="ml-1 h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location & Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Based in San Francisco, CA</p>
                    <p className="text-muted-foreground text-sm">
                      Available for remote consultations worldwide
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Response Time
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Typically within 24-48 hours for inquiries
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Collaboration Opportunities */}
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">
                Collaboration Opportunities
              </h2>
              <div className="space-y-4">
                {opportunities.map((opportunity, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {opportunity.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <Card className="text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Mail className="h-12 w-12 mx-auto text-primary" />
                <h2 className="text-2xl font-playfair font-bold">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Subscribe to my newsletter for the latest insights on sustainable finance, 
                  AI applications, and market analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
                  <Button size="lg" className="flex-1">
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
