
import { Package, Download, ExternalLink, Star, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Products = () => {
  const products = [
    {
      icon: Zap,
      title: 'ESG Score Calculator',
      description: 'An AI-powered tool that analyzes companies and provides comprehensive ESG scores with detailed breakdowns.',
      category: 'AI Tool',
      status: 'Live',
      users: '1.2K',
      rating: '4.8',
      features: ['Real-time analysis', 'Multiple data sources', 'Custom weighting', 'Export reports'],
    },
    {
      icon: Package,
      title: 'Green Bond Analyzer',
      description: 'Comprehensive analysis toolkit for green bonds, including impact assessment and risk evaluation.',
      category: 'Research Tool',
      status: 'Beta',
      users: '340',
      rating: '4.6',
      features: ['Impact tracking', 'Risk metrics', 'Market comparison', 'Compliance check'],
    },
    {
      icon: Star,
      title: 'Climate Risk Dashboard',
      description: 'Interactive dashboard for assessing climate-related financial risks across different asset classes.',
      category: 'Dashboard',
      status: 'Coming Soon',
      users: '-',
      rating: '-',
      features: ['Scenario analysis', 'Portfolio integration', 'Stress testing', 'Visual reports'],
    },
  ];

  const resources = [
    {
      title: 'Sustainable Finance Toolkit',
      description: 'Comprehensive guide and templates for ESG integration strategies.',
      type: 'PDF Guide',
      downloads: '2.3K',
    },
    {
      title: 'AI in Finance Dataset',
      description: 'Curated dataset of financial AI applications and performance metrics.',
      type: 'Data',
      downloads: '890',
    },
    {
      title: 'Green Policy Framework',
      description: 'Template framework for implementing green finance policies.',
      type: 'Template',
      downloads: '1.1K',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold">
              Products & <span className="text-gradient">Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovative tools and resources for sustainable finance professionals and researchers.
            </p>
          </div>

          {/* Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8">
              AI-Powered Tools
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant={
                        product.status === 'Live' ? 'default' : 
                        product.status === 'Beta' ? 'secondary' : 'outline'
                      }>
                        {product.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="outline">{product.category}</Badge>
                      {product.users !== '-' && (
                        <>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {product.users} users
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current text-yellow-500" />
                            {product.rating}
                          </span>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Button 
                        className="w-full" 
                        disabled={product.status === 'Coming Soon'}
                        variant={product.status === 'Coming Soon' ? 'outline' : 'default'}
                      >
                        {product.status === 'Coming Soon' ? 'Notify Me' : 'Try Now'}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8">
              Free Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{resource.type}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {resource.downloads} downloads
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                      <Button variant="outline" className="w-full">
                        Download Free
                        <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Package className="h-12 w-12 mx-auto text-primary" />
                <h2 className="text-2xl font-playfair font-bold">
                  Custom Solutions
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Need a custom tool or analysis for your organization? I offer bespoke 
                  solutions for sustainable finance challenges.
                </p>
                <Button size="lg">
                  Get in Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
