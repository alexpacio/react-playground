import { Button } from '@/components/ui/button';
import {
  Code,
  ArrowRight,
  Palette,
  Cpu,
  Network,
  Users,
  Sparkles,
  Zap,
  CheckCircle,
  Shield,
  Layers,
  Lightbulb,
  Monitor,
  Gauge,
  Lock,
  Radio
} from 'lucide-react';

export function FrontendDevelopment() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Code className="mr-2 h-4 w-4" />
            Frontend Web Software Development
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Frontend Development Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Expert frontend development with Angular and React. From individual contributors and UX/UI design to cutting-edge WASM components and secure real-time communications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <Code className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Frontend Technologies</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            We build modern, responsive web applications using industry-leading frameworks and cutting-edge technologies.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Code className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Angular</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade framework for building scalable, maintainable applications with TypeScript, comprehensive tooling, and robust architecture patterns.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">React</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern component-based library for building dynamic user interfaces with excellent performance, rich ecosystem, and flexible architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive frontend development services from team augmentation to specialized expertise in design, performance, and security.
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
                    Individual Contributor (IC)
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Experienced frontend developers who integrate seamlessly with your team. Our ICs bring deep expertise in Angular and React, contributing to your projects with immediate impact and maintaining your development momentum.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Framework Expertise</div>
                      <p className="text-sm text-muted-foreground">Deep knowledge of Angular and React best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Modern Tooling</div>
                      <p className="text-sm text-muted-foreground">Proficient with latest development tools and workflows</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Component Development</div>
                      <p className="text-sm text-muted-foreground">Reusable, well-tested component libraries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Performance Focus</div>
                      <p className="text-sm text-muted-foreground">Optimization and best practices for fast applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UX/UI Designer */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    UX/UI Designer
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Creating exceptional user experiences through thoughtful design. Our designers combine aesthetic excellence with usability principles to deliver interfaces that users love and understand intuitively.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">User Research</div>
                      <p className="text-sm text-muted-foreground">Data-driven insights to inform design decisions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Wireframing & Prototyping</div>
                      <p className="text-sm text-muted-foreground">Interactive prototypes for validation and testing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Visual Design</div>
                      <p className="text-sm text-muted-foreground">Beautiful, cohesive design systems and interfaces</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Design Systems</div>
                      <p className="text-sm text-muted-foreground">Scalable component libraries and style guides</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Accessibility</div>
                      <p className="text-sm text-muted-foreground">WCAG-compliant designs for inclusive experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Usability Testing</div>
                      <p className="text-sm text-muted-foreground">Iterative testing to ensure optimal user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WASM-backed Components */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    WASM-Backed Components
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Leverage the power of WebAssembly for performance-critical components. We build high-performance UI components that execute at near-native speeds, perfect for computation-heavy tasks, data visualization, and complex interactions.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Gauge className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Performance Benefits</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Near-native execution speeds for complex calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Efficient memory management and smaller bundle sizes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Smooth 60fps experiences even with heavy workloads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Reduced main thread blocking for better responsiveness</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Layers className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Use Cases</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Complex data visualization and charting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Image and video processing in the browser</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Scientific computing and simulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Cryptography and data compression</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tailor-made Networking */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Tailor-Made Networking for Secure Real-Time Communications
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Custom networking solutions built for secure, real-time data exchange. We implement WebSockets, WebRTC, and other protocols with enterprise-grade security for applications requiring instant, reliable communication.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Radio className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Real-Time Technologies</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>WebSocket connections for bidirectional communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>WebRTC for peer-to-peer audio, video, and data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Server-Sent Events for efficient push updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Custom protocols for specialized requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Lock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Security & Reliability</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>End-to-end encryption for sensitive data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Authentication and authorization mechanisms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Automatic reconnection and state management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Rate limiting and DDoS protection</span>
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Frontend Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              We combine technical excellence with design thinking to deliver exceptional user experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Monitor className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Responsive Design</h3>
              <p className="text-sm text-muted-foreground">
                Mobile-first approach ensuring flawless experiences across all devices and screen sizes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Lightbulb className="h-8 w-8 mb-3 text-purple-600" />
              <h3 className="font-semibold mb-2">Innovation Driven</h3>
              <p className="text-sm text-muted-foreground">
                Leveraging cutting-edge technologies like WASM to push the boundaries of web capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Shield className="h-8 w-8 mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Security Minded</h3>
              <p className="text-sm text-muted-foreground">
                Built-in security practices for frontend code and secure communication protocols.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Build Amazing User Experiences</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            From beautiful designs to high-performance components and secure real-time features, we deliver frontend solutions that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              View Our Portfolio
              <Palette className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
