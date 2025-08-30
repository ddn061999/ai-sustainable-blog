import React from 'react';
import { Play, Calendar, ArrowRight, TrendingUp, Brain, Leaf, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RecentPosts = () => {
  const posts = [
    {
      title: 'AI-Driven ESG Risk Assessment: A New Paradigm',
      excerpt: 'How machine learning algorithms are revolutionizing environmental risk evaluation in investment portfolios.',
      date: '2024-01-15',
      category: 'TECH INSIGHTS',
      readTime: '8 min read',
      type: 'video',
      featured: true,
    },
    {
      title: 'Innovation happens when we combine curiosity with practical problem-solving',
      author: 'Duy Nguyen on building meaningful technology',
      type: 'quote',
      bgColor: 'bg-gates-cyan',
    },
    {
      title: 'Green Bonds Market Analysis Q4 2023',
      excerpt: 'Comprehensive analysis of the global green bonds market performance and emerging trends.',
      date: '2024-01-10',
      category: 'MARKET RESEARCH',
      readTime: '12 min read',
      type: 'article',
    },
    {
      title: 'EU Taxonomy Regulation: Implementation Challenges',
      excerpt: 'Breaking down the practical implications of the EU Taxonomy for financial institutions.',
      date: '2024-01-05',
      category: 'POLICY ANALYSIS',
      readTime: '10 min read',
      type: 'article',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement Section */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-12 bg-gates-gray rounded mr-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-gates-cyan rounded-full opacity-70"></div>
              </div>
              <h2 className="text-3xl lg:text-5xl font-light text-gray-600">
                My <strong className="text-gray-900">work</strong> is driven by the belief that everyone
              </h2>
            </div>
            <p className="text-3xl lg:text-5xl font-light text-gray-600 leading-relaxed">
              deserves the opportunity to lead a <strong className="text-gray-900">healthy and productive</strong> life through technology.
            </p>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Large featured video card */}
          <div className="relative gradient-tech rounded-xl overflow-hidden hover-lift">
            <div className="aspect-video bg-gradient-to-br from-gates-cyan to-gates-purple relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-white bg-opacity-90 text-gates-cyan px-3 py-1 rounded-full text-sm font-semibold">
                  TECH INSIGHTS
                </span>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Future of AI in Sustainable Finance
              </h3>
              <p className="text-gray-600 text-sm">
                Exploring emerging trends in AI-assisted ESG analysis and how it's changing the way we evaluate sustainable investments.
              </p>
            </div>
          </div>

          {/* Quote card */}
          <div className="bg-gates-cyan text-white rounded-xl p-8 flex flex-col justify-center hover-lift">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full mb-4"></div>
              <blockquote className="text-lg font-medium">
                "Innovation happens when we combine curiosity with practical problem-solving."
              </blockquote>
            </div>
            <cite className="text-white/80 text-sm">
              — Duy Nguyen on building meaningful technology
            </cite>
          </div>
        </div>

        {/* Three column content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Look Back Card */}
          <div className="space-y-6">
            <div className="relative gradient-tech rounded-xl overflow-hidden aspect-video hover-lift">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-12 w-12 text-white opacity-80" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-gates-cyan bg-opacity-90 p-3 rounded">
                <h4 className="text-white font-semibold text-sm">Look Back</h4>
                <p className="text-white/90 text-xs">My journey in finance</p>
              </div>
            </div>
          </div>

          {/* Center geometric shape */}
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 bg-gates-red rounded-lg transform rotate-45 opacity-80 hover:rotate-180 transition-transform duration-500"></div>
          </div>

          {/* Look Ahead Card */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-br from-gates-purple to-gates-red rounded-xl overflow-hidden aspect-video hover-lift">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-12 h-12 text-white opacity-80">
                  <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-gates-purple bg-opacity-90 p-3 rounded">
                <h4 className="text-white font-semibold text-sm">Look Ahead</h4>
                <p className="text-white/90 text-xs">Future of sustainable finance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.filter(post => post.type === 'article').map((post, index) => (
            <Card key={index} className="group hover-lift border-border/50 hover:border-gates-red/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-gates-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>

                <h3 className="text-xl font-bold group-hover:text-gates-red transition-colors leading-tight">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn text-gates-red hover:bg-gates-red/10">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative bottom section */}
        <div className="mt-16 text-center">
          <svg viewBox="0 0 400 100" className="w-full h-24 text-gates-red opacity-20">
            <path d="M50 50 Q100 20 150 50 T250 50 T350 50" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="50" r="4" fill="currentColor"/>
            <circle cx="200" cy="50" r="4" fill="currentColor"/>
            <circle cx="350" cy="50" r="4" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;