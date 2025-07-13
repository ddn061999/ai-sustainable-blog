
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Background = () => {
  const timeline = [
    {
      year: '2020-Present',
      title: 'Senior Finance Analyst',
      company: 'Green Investment Partners',
      description: 'Leading ESG research and sustainable investment strategies.',
    },
    {
      year: '2018-2020',
      title: 'ESG Research Specialist',
      company: 'Sustainable Capital Group',
      description: 'Developed climate risk assessment frameworks.',
    },
    {
      year: '2016-2018',
      title: 'Financial Analyst',
      company: 'Tech Innovation Fund',
      description: 'Analyzed emerging technology investments.',
    },
  ];

  const education = [
    {
      degree: 'MBA in Finance',
      institution: 'University of Pennsylvania',
      year: '2018',
    },
    {
      degree: 'MSc in Data Science',
      institution: 'Stanford University',
      year: '2016',
    },
    {
      degree: 'BSc in Economics & Computer Science',
      institution: 'UC Berkeley',
      year: '2014',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold">
              Professional <span className="text-gradient">Background</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My journey through finance, technology, and sustainable investing.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-primary font-medium">{item.company}</p>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8 flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              Education
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-primary font-medium">{item.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Background;
