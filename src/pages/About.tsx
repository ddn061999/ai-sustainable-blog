
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen, 
  Briefcase, 
  Globe,
  TrendingUp,
  Brain,
  Leaf
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'MBA in Finance, University of Pennsylvania (2018)',
        'MSc in Data Science, Stanford University (2016)',
        'BSc in Economics & Computer Science, UC Berkeley (2014)',
      ],
    },
    {
      icon: Briefcase,
      title: 'Experience',
      items: [
        'Senior Finance Analyst, Green Investment Partners (2020-Present)',
        'ESG Research Specialist, Sustainable Capital Group (2018-2020)',
        'Financial Analyst, Tech Innovation Fund (2016-2018)',
      ],
    },
    {
      icon: Award,
      title: 'Recognition',
      items: [
        'Sustainable Finance Innovation Award (2023)',
        'Best ESG Analysis Paper - Finance Review (2022)',
        'Rising Star in Green Finance - Industry Times (2021)',
      ],
    },
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: 'Sustainable Finance',
      description: 'ESG integration, green bonds, climate risk assessment, and sustainable investment strategies.',
    },
    {
      icon: Brain,
      title: 'AI in Finance',
      description: 'Machine learning applications, algorithmic trading, risk modeling, and fintech innovations.',
    },
    {
      icon: Leaf,
      title: 'Climate Policy',
      description: 'Carbon pricing, regulatory frameworks, transition pathways, and policy impact analysis.',
    },
  ];

  const publications = [
    {
      title: 'AI-Driven ESG Scoring: A New Framework for Sustainable Investment',
      journal: 'Journal of Sustainable Finance',
      year: '2024',
      citations: '89',
    },
    {
      title: 'Green Bond Market Analysis: Trends and Future Opportunities',
      journal: 'Finance & Sustainability Review',
      year: '2023',
      citations: '67',
    },
    {
      title: 'Climate Risk Assessment in Modern Portfolio Theory',
      journal: 'Environmental Finance Quarterly',
      year: '2023',
      citations: '112',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold">
              About <span className="text-gradient">Duy Nguyen</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate finance professional specializing in sustainable finance, 
              bridging technology and environmental responsibility in modern investing.
            </p>
          </div>

          {/* Professional Photo & Bio */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Card className="p-6">
                <div className="space-y-6">
                  {/* Professional Photo Placeholder */}
                  <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                    <div className="w-5/6 aspect-square rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-6xl font-playfair text-muted-foreground">DN</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-semibold">Duy Nguyen</h2>
                    <p className="text-muted-foreground">Finance Professional</p>
                    <div className="flex justify-center space-x-2">
                      <Badge>Finance MBA</Badge>
                      <Badge>ESG Expert</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Professional Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Duy Nguyen is a dedicated finance professional with a strong focus on sustainable 
                    investing and the integration of artificial intelligence in financial markets. 
                    With over 8 years of experience in finance and technology, Duy specializes in 
                    ESG research, green finance strategies, and data-driven investment approaches.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently working as a Senior Finance Analyst at Green Investment Partners, 
                    Duy leads innovative research on sustainable finance methodologies and climate 
                    risk assessment frameworks. His expertise spans across traditional finance, 
                    environmental policy analysis, and cutting-edge financial technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Through this blog, Duy shares insights on the evolving landscape of sustainable 
                    finance, explores the potential of AI in transforming financial markets, and 
                    discusses policy implications for a more sustainable economic future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <area.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{area.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Publications */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8">
              Recent Publications
            </h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-lg">{pub.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {pub.journal}
                          </span>
                          <span>{pub.year}</span>
                          <Badge variant="outline">{pub.citations} citations</Badge>
                        </div>
                      </div>
                      <Globe className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Interested in collaboration, discussing sustainable finance trends, 
                  or exploring the latest developments in AI-driven investing? I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a 
                    href="mailto:duy@example.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="#"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Download Resume
                  </a>
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

export default About;
