import { Button } from '@/components/ui/button';
import { 
  Terminal, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver exactly what advanced companies need, when they need it."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Our solutions streamline operations and maximize productivity for our clients."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Built on robust foundations that advanced companies can depend on."
    },
    {
      icon: Globe,
      title: "Scale",
      description: "Solutions designed to grow with your company's expanding needs."
    }
  ];

  const achievements = [
    "50+ Advanced Companies Served",
    "99.9% System Uptime Maintained",
    "200+ Successful Projects Delivered",
    "24/7 Dedicated Support Team"
  ];

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Users className="mr-2 h-4 w-4" />
            About Netter
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Effective Solutions for <br />
              <span className="text-muted-foreground">Advanced Companies</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              We specialize in delivering technology solutions that meet the sophisticated needs of forward-thinking organizations.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Our Mission
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              At Netter, we understand that advanced companies require more than standard solutions. 
              They need partners who can navigate complex technical challenges and deliver results 
              that drive meaningful business impact.
            </p>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Our team combines deep technical expertise with business acumen to create solutions 
              that don't just work—they excel in demanding enterprise environments.
            </p>
            <div className="pt-4">
              <Button>
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted/30 p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6">What Sets Us Apart</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              These principles guide every solution we create and every relationship we build.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-muted/30 p-6 border border-border hover:border-border/60 transition-colors duration-200"
              >
                <value.icon className="h-8 w-8 text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/30 p-8 border border-border text-center">
          <Terminal className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold tracking-tighter mb-4">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-[500px] mx-auto">
            Let's discuss how Netter can deliver effective solutions tailored to your advanced company's unique needs.
          </p>
          <div className="space-x-4">
            <Button size="lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}