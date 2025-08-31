
import { Brain, TrendingUp, Leaf, BookOpen, Award, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Research = () => {
  const researchAreas = [
    {
      icon: TrendingUp,
      title: 'Sustainable Finance',
      description: 'ESG integration strategies, green bond analysis, and climate risk assessment methodologies.',
      papers: 12,
    },
    {
      icon: Brain,
      title: 'AI in Finance',
      description: 'Machine learning applications in portfolio management and algorithmic trading systems.',
      papers: 8,
    },
    {
      icon: Shield,
      title: 'Corporate Governance',
      description: 'Board effectiveness, executive compensation structures, and stakeholder engagement frameworks in modern corporations.',
      papers: 10,
    },
  ];

  const publications = [
    {
      title: 'AI-Driven ESG Scoring: A New Framework for Sustainable Investment',
      journal: 'Journal of Sustainable Finance',
      year: '2024',
      citations: '89',
      status: 'peer-reviewed',
    },
    {
      title: 'Green Bond Market Analysis: Trends and Future Opportunities',
      journal: 'Finance & Sustainability Review',
      year: '2023',
      citations: '67',
      status: 'peer-reviewed',
    },
    {
      title: 'Climate Risk Assessment in Modern Portfolio Theory',
      journal: 'Environmental Finance Quarterly',
      year: '2023',
      citations: '112',
      status: 'peer-reviewed',
    },
    {
      title: 'Machine Learning Applications in ESG Data Analysis',
      journal: 'AI Finance Conference Proceedings',
      year: '2024',
      citations: '34',
      status: 'conference',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Research <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of finance, technology, and sustainability through rigorous research.
            </p>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Research Focus Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="space-y-4 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <area.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl">{area.title}</h3>
                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        {area.description}
                      </p>
                      <Badge variant="outline" className="mt-2">
                        {area.papers} papers published
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              Recent Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                        <h3 className="text-lg flex-1">{pub.title}</h3>
                        <div className="flex gap-2">
                          <Badge variant={pub.status === 'peer-reviewed' ? 'default' : 'secondary'}>
                            {pub.status}
                          </Badge>
                          <Badge variant="outline">{pub.citations} citations</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {pub.journal}
                        </span>
                        <span>{pub.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, number: '26', label: 'Total Publications' },
              { icon: Award, number: '302', label: 'Total Citations' },
              { icon: Users, number: '15', label: 'Collaborations' },
              { icon: TrendingUp, number: '4.2', label: 'H-Index' },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <stat.icon className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
