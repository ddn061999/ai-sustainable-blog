
import { Calendar, ArrowRight, TrendingUp, Brain, Leaf, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RecentPosts = () => {
  const posts = [
    {
      title: 'AI-Driven ESG Risk Assessment: A New Paradigm',
      excerpt: 'How machine learning algorithms are revolutionizing environmental risk evaluation in investment portfolios.',
      date: '2024-01-15',
      category: 'AI & Finance',
      readTime: '8 min read',
      icon: Brain,
      tags: ['AI', 'ESG', 'Risk Management'],
    },
    {
      title: 'Green Bonds Market Analysis Q4 2023',
      excerpt: 'Comprehensive analysis of the global green bonds market performance and emerging trends in sustainable debt instruments.',
      date: '2024-01-10',
      category: 'Market Research',
      readTime: '12 min read',
      icon: TrendingUp,
      tags: ['Green Bonds', 'Market Analysis', 'Sustainability'],
    },
    {
      title: 'EU Taxonomy Regulation: Implementation Challenges',
      excerpt: 'Breaking down the practical implications of the EU Taxonomy for financial institutions and corporate reporting.',
      date: '2024-01-05',
      category: 'Policy Analysis',
      readTime: '10 min read',
      icon: FileText,
      tags: ['EU Taxonomy', 'Regulation', 'Compliance'],
    },
    {
      title: 'Climate Stress Testing: Methodological Advances',
      excerpt: 'Latest developments in climate scenario analysis and stress testing frameworks for financial institutions.',
      date: '2023-12-28',
      category: 'Research',
      readTime: '15 min read',
      icon: Leaf,
      tags: ['Climate Risk', 'Stress Testing', 'Banking'],
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-12 xl:py-16 pb-4 sm:pb-6 lg:pb-8">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Latest Insights & Analysis
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Stay updated with my latest thoughts on sustainable finance, AI applications, 
              and policy developments shaping the future of green investing.
            </p>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <post.icon className="h-4 w-4 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>

                  <h3 className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
