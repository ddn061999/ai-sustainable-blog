
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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const achievements = [
    {
      icon: Briefcase,
      title: 'Experience',
      items: [
        'Financial Analyst, Citibank (2021-2023)',
        'Investment Banking Associate, VIB (2020-2021)',
        'Data Analytics & Financial Strategy Specialist',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'Bachelor of Finance & Information Systems (Foster School of Business, US)',
        'Data Analytics Certification',
        'AI in Finance Professional Course',
      ],
    },
    {
      icon: Award,
      title: 'Focus Areas',
      items: [
        'Financial Strategy & Analysis',
        'Investor Relations Management',
        'AI Applications in Finance',
      ],
    },
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: 'Financial Strategy',
      description: 'Financial analysis, investor relations, strategic planning, and data-driven decision making.',
    },
    {
      icon: Brain,
      title: 'AI in Finance',
      description: 'Exploring how artificial intelligence can enhance transparency and efficiency in financial systems.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Finance',
      description: 'Researching the intersection of technology, finance, and environmental sustainability.',
    },
  ];

  const blogPosts = [
    {
      title: 'AI-Driven Financial Analysis: Enhancing Transparency in Banking',
      description: 'Exploring how artificial intelligence can transform financial analysis and improve transparency in banking operations.',
      date: 'January 2024',
      readTime: '8 min read',
    },
    {
      title: 'Data Analytics in Investor Relations: A Modern Approach',
      description: 'How modern data analytics tools are revolutionizing investor communications and relationship management.',
      date: 'December 2023',
      readTime: '6 min read',
    },
    {
      title: 'The Future of Financial Technology in Emerging Markets',
      description: 'Examining the potential impact of fintech innovations on emerging market economies and financial inclusion.',
      date: 'November 2023',
      readTime: '10 min read',
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
              A finance professional with experience at major banks, passionate about the intersection 
              of technology, finance, and sustainability in modern financial systems.
            </p>
          </div>

          {/* Professional Photo & Bio */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Card className="p-6">
                <div className="space-y-6">
                  {/* Professional Photo Placeholder */}
                  <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center overflow-hidden">
                    <Avatar className="w-full h-full rounded-lg">
                      <AvatarImage 
                        src="/lovable-uploads/ef1bf23a-a44c-46c8-b5ff-54520ca1d0a3.png" 
                        alt="Duy Nguyen" 
                        className="object-cover rounded-lg w-full h-full"
                      />
                      <AvatarFallback className="text-6xl font-playfair rounded-lg">DN</AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-semibold">Duy Nguyen</h2>
                    <p className="text-muted-foreground">Finance Professional</p>
                    <div className="flex justify-center space-x-2">
                      <Badge>Citibank</Badge>
                      <Badge>VIB</Badge>
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
                    I'm Duy Nguyen, a finance professional with over 3 years of experience at 
                    Citibank and VIB, specializing in financial strategy, investor relations, 
                    and data analytics. Throughout my career in banking, I've developed a deep 
                    understanding of financial systems and the critical role that data plays 
                    in modern finance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about how emerging technologies—especially AI—can enhance 
                    transparency and impact in financial systems. This interest has led me to 
                    explore the intersection of technology and finance, focusing on how innovation 
                    can drive more sustainable and efficient financial practices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This site shares my insights and research as I transition toward a more 
                    academic, purpose-driven career. Here, I explore the evolving landscape 
                    of finance, the potential of AI in transforming financial markets, and 
                    the importance of sustainable practices in modern banking.
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

          {/* Recent Blog Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8">
              Recent Blog Posts
            </h2>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {post.date}
                          </span>
                          <Badge variant="outline">{post.readTime}</Badge>
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
                  Interested in discussing finance, AI applications in banking, or exploring 
                  sustainable finance trends? I'd love to connect and share insights.
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
