
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
        'PhD in Financial Economics, MIT (2015)',
        'MSc in Environmental Economics, LSE (2011)',
        'BSc in Mathematics & Economics, Cambridge (2009)',
      ],
    },
    {
      icon: Briefcase,
      title: 'Experience',
      items: [
        'Senior Research Fellow, Green Finance Institute (2020-Present)',
        'Principal Economist, World Bank Group (2017-2020)',
        'Quantitative Analyst, Goldman Sachs (2015-2017)',
      ],
    },
    {
      icon: Award,
      title: 'Recognition',
      items: [
        'UN Environment Finance Initiative Award (2023)',
        'Best Paper Award - Journal of Sustainable Finance (2022)',
        'Young Economist of the Year - Financial Times (2021)',
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
      title: 'Machine Learning for ESG Risk Assessment: A Comprehensive Framework',
      journal: 'Journal of Financial Innovation',
      year: '2024',
      citations: '127',
    },
    {
      title: 'The Green Bond Premium: Evidence from Global Markets',
      journal: 'Review of Financial Studies',
      year: '2023',
      citations: '89',
    },
    {
      title: 'Climate Stress Testing: Methodological Advances and Policy Implications',
      journal: 'Journal of Banking & Finance',
      year: '2023',
      citations: '156',
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
              About <span className="text-gradient">Dr. Sarah Mitchell</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A leading voice in sustainable finance research, bridging the gap between 
              academic rigor and practical applications in ESG investing and climate finance.
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
                      <span className="text-6xl font-playfair text-muted-foreground">SM</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-semibold">Dr. Sarah Mitchell</h2>
                    <p className="text-muted-foreground">Senior Research Fellow</p>
                    <div className="flex justify-center space-x-2">
                      <Badge>Finance PhD</Badge>
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
                    Dr. Sarah Mitchell is a distinguished researcher and thought leader in sustainable finance, 
                    with over a decade of experience spanning academia, policy institutions, and financial markets. 
                    Her work focuses on the critical intersection of artificial intelligence, environmental policy, 
                    and financial innovation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently serving as a Senior Research Fellow at the Green Finance Institute, Dr. Mitchell 
                    leads groundbreaking research on ESG integration methodologies and climate risk assessment 
                    frameworks. Her expertise has shaped policy discussions at the highest levels, including 
                    contributions to the UN Sustainable Development Goals and EU Taxonomy development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 50 peer-reviewed publications and frequent media appearances, Dr. Mitchell 
                    continues to bridge the gap between academic research and practical financial applications, 
                    helping to accelerate the transition to a more sustainable global economy.
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
                  Interested in collaboration, speaking opportunities, or discussing the latest 
                  developments in sustainable finance? I'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a 
                    href="mailto:sarah@example.com"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="#"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Download CV
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
