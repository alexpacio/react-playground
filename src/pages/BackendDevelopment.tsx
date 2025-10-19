import { Button } from '@/components/ui/button';
import {
  Server,
  ArrowRight,
  Code2,
  Users,
  Briefcase,
  GraduationCap,
  FileCode,
  GitBranch,
  Shield,
  Zap,
  CheckCircle,
  Target,
  Lightbulb,
  BookOpen
} from 'lucide-react';

export function BackendDevelopment() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Server className="mr-2 h-4 w-4" />
            Backend Web Software Development
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Backend Development Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Expert backend development services using Rust, Node.js, and Golang. From individual contributors to full project management and technical training.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <Server className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Technology Stack</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            We specialize in modern, high-performance backend technologies that power scalable web applications.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-orange-100 rounded-lg">
                <Code2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rust</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-performance, memory-safe systems programming for mission-critical services and microservices architectures.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Node.js</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fast, event-driven JavaScript runtime ideal for real-time applications, APIs, and microservices with rich ecosystem support.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Golang</h3>
              <p className="text-muted-foreground leading-relaxed">
                Efficient, concurrent programming language perfect for cloud-native applications, containerized services, and distributed systems.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive backend development services tailored to your needs, from augmenting your team to managing entire projects.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Individual Contributor Service */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Individual Contributor (IC) Outsourcing
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Augment your team with experienced backend engineers who seamlessly integrate into your workflow. Our ICs work directly within your development processes, providing immediate impact.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Seamless Integration</div>
                      <p className="text-sm text-muted-foreground">Work directly with your team using your tools and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Flexible Engagement</div>
                      <p className="text-sm text-muted-foreground">Scale up or down based on project demands</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Rapid Onboarding</div>
                      <p className="text-sm text-muted-foreground">Quick ramp-up to maintain development velocity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Expertise on Demand</div>
                      <p className="text-sm text-muted-foreground">Access specialized skills when you need them</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Project Management
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    End-to-end project management for your backend initiatives. We handle everything from requirements gathering to deployment, ensuring successful delivery on time and within budget.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Complete Ownership</div>
                      <p className="text-sm text-muted-foreground">Full responsibility from conception to deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Architecture Design</div>
                      <p className="text-sm text-muted-foreground">Scalable system design and technology selection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Team Coordination</div>
                      <p className="text-sm text-muted-foreground">Manage timelines, resources, and stakeholder communication</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Quality Assurance</div>
                      <p className="text-sm text-muted-foreground">Comprehensive testing and code review processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">DevOps Integration</div>
                      <p className="text-sm text-muted-foreground">CI/CD pipelines and infrastructure automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Risk Management</div>
                      <p className="text-sm text-muted-foreground">Proactive identification and mitigation of project risks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Debt & Training */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Technical Debt Classification & Technical Classes
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive technical debt assessment and customized training programs. We help your team understand, prioritize, and eliminate technical debt while building internal expertise.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <FileCode className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Technical Debt Assessment</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Comprehensive codebase analysis and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Classification by impact and remediation effort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Prioritized roadmap for debt reduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Metrics and KPIs for tracking progress</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Technical Training Programs</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Customized curriculum for Rust, Node.js, and Go</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>In-house or remote training sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Best practices and design patterns workshops</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Hands-on coding exercises and code reviews</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Backend Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              We bring deep expertise, proven methodologies, and a commitment to excellence in every engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <GitBranch className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Modern Practices</h3>
              <p className="text-sm text-muted-foreground">
                Test-driven development, continuous integration, and agile methodologies baked into every project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Lightbulb className="h-8 w-8 mb-3 text-purple-600" />
              <h3 className="font-semibold mb-2">Innovation Focus</h3>
              <p className="text-sm text-muted-foreground">
                Stay ahead with cutting-edge technologies and architectural patterns that drive competitive advantage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Shield className="h-8 w-8 mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Security First</h3>
              <p className="text-sm text-muted-foreground">
                Security best practices integrated from day one, ensuring robust and secure backend systems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you need a dedicated developer, full project management, or technical training, we're here to help your team succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              View Case Studies
              <FileCode className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
