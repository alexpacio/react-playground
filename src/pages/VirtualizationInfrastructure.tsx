import { Button } from '@/components/ui/button';
import {
  HardDrive,
  ArrowRight,
  Server,
  Boxes,
  Workflow,
  CreditCard,
  Settings,
  Zap,
  CheckCircle,
  Shield,
  TrendingUp,
  Cloud,
  Building2,
  Cpu,
  Network,
  Gauge,
  Lock,
  Users,
  BarChart3
} from 'lucide-react';

export function VirtualizationInfrastructure() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <HardDrive className="mr-2 h-4 w-4" />
            Virtualization Infrastructure Consultancy
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Virtualization Infrastructure Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Carrier-grade virtualization solutions for providers and enterprises. Expert consultancy in KVM, Hyper-V, and VMware with complete infrastructure management.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <HardDrive className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Built for Scale and Reliability</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Our virtualization solutions serve both service providers offering infrastructure-as-a-service and enterprises requiring mission-critical virtualization platforms.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build carrier-grade infrastructure to offer VPS, dedicated servers, and cloud services to your customers with complete billing and management automation.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Enterprise Organizations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploy robust private cloud infrastructure with high availability, disaster recovery, and centralized management for your organization's workloads.
              </p>
            </div>
          </div>
        </div>

        {/* Hypervisor Technologies */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Hypervisor Expertise</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Deep expertise across all major virtualization platforms with best practices for each technology.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Server className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">KVM</h3>
              <p className="text-muted-foreground leading-relaxed">
                Linux kernel-based virtualization with excellent performance and flexibility. Ideal for large-scale deployments and service providers.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Boxes className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hyper-V</h3>
              <p className="text-muted-foreground leading-relaxed">
                Microsoft's enterprise hypervisor with seamless Windows integration. Perfect for organizations with Windows-centric infrastructure.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-green-100 rounded-lg">
                <Cloud className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VMware</h3>
              <p className="text-muted-foreground leading-relaxed">
                Industry-leading virtualization with advanced features. The gold standard for enterprise virtualization and cloud infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive virtualization infrastructure services from design to deployment and ongoing management.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Carrier-Grade Infrastructure */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Carrier-Grade Infrastructure Solutioning
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Design and deploy carrier-grade virtualization infrastructure for both service providers and enterprises. We build resilient, scalable platforms that meet the highest standards for reliability and performance.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Service Provider Solutions</div>
                      <p className="text-sm text-muted-foreground">Multi-tenant infrastructure for VPS and cloud hosting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Enterprise Private Cloud</div>
                      <p className="text-sm text-muted-foreground">Dedicated infrastructure with enterprise features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Capacity Planning</div>
                      <p className="text-sm text-muted-foreground">Right-sized infrastructure for current and future needs</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Redundancy & Resilience</div>
                      <p className="text-sm text-muted-foreground">No single points of failure, fault-tolerant design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Network Architecture</div>
                      <p className="text-sm text-muted-foreground">Optimized networking for virtualized environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Storage Solutions</div>
                      <p className="text-sm text-muted-foreground">SAN, NAS, and distributed storage systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Machines & microVM */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Virtual Machines and MicroVM
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Deploy traditional virtual machines for full OS isolation or lightweight microVMs for containerized workloads. We optimize VM configurations for performance, security, and resource efficiency.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Server className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Traditional Virtual Machines</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Full OS virtualization with complete isolation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Support for any operating system and workload</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Hardware-level isolation for security</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Snapshots, cloning, and live migration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">MicroVM Technology</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Lightweight VMs with minimal overhead</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Sub-second boot times for rapid scaling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Ideal for serverless and edge computing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Better density and resource utilization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* High Availability & Automation */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <Workflow className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    High Availability, Automation & Horizontal Scaling
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Build resilient infrastructure that never goes down. Automated failover, load balancing, and horizontal scaling ensure your services remain available and performant under any conditions.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">High Availability Clusters</div>
                        <p className="text-xs text-muted-foreground">Automatic VM failover with no service interruption</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Workflow className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Infrastructure Automation</div>
                        <p className="text-xs text-muted-foreground">Terraform, Ansible, and custom orchestration</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Auto-Scaling</div>
                        <p className="text-xs text-muted-foreground">Dynamic resource allocation based on demand</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Network className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Load Balancing</div>
                        <p className="text-xs text-muted-foreground">Distribute workloads across multiple hosts</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Gauge className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Performance Monitoring</div>
                        <p className="text-xs text-muted-foreground">Real-time metrics and alerting systems</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Lock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Disaster Recovery</div>
                        <p className="text-xs text-muted-foreground">Backup, replication, and recovery automation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Billing Solutions
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Integrated billing systems for service providers offering virtualization services. Track resource usage, generate invoices, and automate payment processing with flexible pricing models.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Usage-Based Billing</div>
                      <p className="text-sm text-muted-foreground">Hourly, monthly, or resource-based pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Automated Invoicing</div>
                      <p className="text-sm text-muted-foreground">Generate and send invoices automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Payment Gateway Integration</div>
                      <p className="text-sm text-muted-foreground">Accept credit cards, PayPal, and crypto</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Resource Metering</div>
                      <p className="text-sm text-muted-foreground">Accurate tracking of CPU, RAM, storage, bandwidth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Custom Pricing Tiers</div>
                      <p className="text-sm text-muted-foreground">Flexible plans and promotional pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Financial Reports</div>
                      <p className="text-sm text-muted-foreground">Revenue analytics and customer insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Management Panels */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-cyan-600 rounded-lg flex-shrink-0">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Self-Management Panels
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Custom control panels for customers and administrators. Empower users to manage their virtual machines while maintaining centralized control and automation.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Users className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Customer Portal</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>VM provisioning, start/stop, restart controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>Console access and VNC/SPICE connections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>Resource monitoring and usage graphs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>ISO mounting and OS reinstallation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-cyan-200">
                    <div className="flex items-start gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Admin Dashboard</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>Centralized management of all infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>User management and permissions system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>Infrastructure health and capacity planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-600">•</span>
                        <span>Audit logs and security monitoring</span>
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Virtualization Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Years of experience building and managing large-scale virtualization infrastructure for demanding environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Shield className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Carrier-Grade Quality</h3>
              <p className="text-sm text-muted-foreground">
                Infrastructure built to telco standards with redundancy, monitoring, and 99.9%+ uptime guarantees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Zap className="h-8 w-8 mb-3 text-orange-600" />
              <h3 className="font-semibold mb-2">Performance Optimized</h3>
              <p className="text-sm text-muted-foreground">
                Tuned configurations for maximum VM density and performance on your hardware investments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Settings className="h-8 w-8 mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Fully Automated</h3>
              <p className="text-sm text-muted-foreground">
                Reduce operational overhead with comprehensive automation and self-service capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Build Your Virtualization Infrastructure</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a service provider launching a new cloud platform or an enterprise modernizing your data center, we deliver virtualization solutions that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              View Architecture Diagrams
              <HardDrive className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
