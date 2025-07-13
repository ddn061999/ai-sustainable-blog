
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Leaf, Target } from 'lucide-react';

const ResearchInsights = () => {
  // Sample data for visualizations
  const greenBondsData = [
    { year: '2020', amount: 270 },
    { year: '2021', amount: 490 },
    { year: '2022', amount: 486 },
    { year: '2023', amount: 418 },
    { year: '2024', amount: 520 },
  ];

  const esgScoresData = [
    { month: 'Jan', score: 72 },
    { month: 'Feb', score: 74 },
    { month: 'Mar', score: 73 },
    { month: 'Apr', score: 76 },
    { month: 'May', score: 78 },
    { month: 'Jun', score: 80 },
  ];

  const sectorAllocation = [
    { name: 'Renewable Energy', value: 35, color: '#10b981' },
    { name: 'Green Transport', value: 25, color: '#059669' },
    { name: 'Energy Efficiency', value: 20, color: '#047857' },
    { name: 'Water Management', value: 12, color: '#065f46' },
    { name: 'Other', value: 8, color: '#064e3b' },
  ];

  const keyMetrics = [
    {
      title: 'Global ESG Assets',
      value: '$35.3T',
      change: '+12.3%',
      icon: DollarSign,
      description: 'Assets under management globally',
    },
    {
      title: 'Green Bond Issuance',
      value: '$520B',
      change: '+24.6%',
      icon: Leaf,
      description: '2024 projected issuance',
    },
    {
      title: 'AI Adoption Rate',
      value: '67%',
      change: '+15.2%',
      icon: TrendingUp,
      description: 'Financial institutions using AI',
    },
    {
      title: 'Climate Targets',
      value: '73%',
      change: '+8.1%',
      icon: Target,
      description: 'Companies with net-zero commitments',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold">
              Research Insights & Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key metrics and trends shaping the sustainable finance landscape, 
              backed by comprehensive research and data analysis.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <metric.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-sm text-green-600 font-medium">{metric.change}</div>
                      <div className="text-xs text-muted-foreground">{metric.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Green Bonds Issuance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Green Bonds Issuance (Billions USD)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={greenBondsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* ESG Scores Trend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Average ESG Score Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={esgScoresData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" domain={[70, 85]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Sector Allocation Chart */}
          <Card className="lg:w-2/3 mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-center justify-center">
                <Target className="h-5 w-5 text-primary" />
                Green Investment Sector Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={sectorAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {sectorAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {sectorAllocation.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                      <span className="text-sm font-medium ml-auto">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchInsights;
