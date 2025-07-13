
import { Lightbulb, Target, Rocket, Brain, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FutureDirections = () => {
  const futureProjects = [
    {
      icon: Brain,
      title: 'AI-Powered ESG Analytics Platform',
      description: 'Developing an advanced machine learning platform for real-time ESG scoring and risk assessment.',
      timeline: '2024-2025',
      status: 'In Development',
    },
    {
      icon: Globe,
      title: 'Global Climate Finance Database',
      description: 'Creating a comprehensive database of climate finance flows and green investment patterns worldwide.',
      timeline: '2024-2026',
      status: 'Planning',
    },
    {
      icon: Zap,
      title: 'Quantum Computing in Portfolio Optimization',
      description: 'Exploring quantum algorithms for solving complex sustainable portfolio optimization problems.',
      timeline: '2025-2027',
      status: 'Research Phase',
    },
  ];

  const researchGoals = [
    {
      category: 'Technology Integration',
      goals: [
        'Advance AI applications in sustainable finance',
        'Develop blockchain solutions for green bond verification',
        'Create predictive models for climate risk assessment',
      ],
    },
    {
      category: 'Policy Impact',
      goals: [
        'Influence regulatory frameworks for ESG reporting',
        'Contribute to carbon pricing mechanism design',
        'Support transition finance policy development',
      ],
    },
    {
      category: 'Industry Collaboration',
      goals: [
        'Partner with fintech companies on green solutions',
        'Collaborate with central banks on climate stress testing',
        'Work with academia on sustainable finance education',
      ],
    },
  ];

  const visionPoints = [
    'Bridge the gap between traditional finance and environmental sustainability',
    'Make ESG investing more accessible through technology',
    'Contribute to global climate finance initiatives',
    'Educate the next generation of sustainable finance professionals',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold">
              Future <span className="text-gradient">Directions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Exploring new frontiers in sustainable finance, AI, and policy innovation.
            </p>
          </div>

          {/* Vision Statement */}
          <Card className="mb-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <Lightbulb className="h-12 w-12 mx-auto text-primary" />
                <h2 className="text-2xl font-playfair font-bold">Research Vision</h2>
                <div className="space-y-3 max-w-4xl mx-auto">
                  {visionPoints.map((point, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      • {point}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Rocket className="h-8 w-8 text-primary" />
              Upcoming Projects
            </h2>
            <div className="space-y-6">
              {futureProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <project.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                          <h3 className="text-xl font-semibold">{project.title}</h3>
                          <div className="flex gap-2">
                            <Badge variant="outline">{project.timeline}</Badge>
                            <Badge variant={
                              project.status === 'In Development' ? 'default' : 
                              project.status === 'Planning' ? 'secondary' : 'outline'
                            }>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Goals */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              Strategic Research Goals
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {researchGoals.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="text-center bg-gradient-to-br from-secondary/20 to-accent/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold">
                  Collaborate with Me
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Interested in collaborating on sustainable finance research, AI applications, 
                  or policy development? Let's discuss how we can work together to shape the future.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FutureDirections;
