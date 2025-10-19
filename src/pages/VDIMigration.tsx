import { Button } from '@/components/ui/button';
import {
  MonitorSmartphone,
  ArrowRight,
  Zap,
  Cpu,
  Monitor,
  DollarSign,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  Server,
  Gauge,
  Sparkles,
  Lock,
  Cloud,
  Layers,
  Settings,
  Boxes
} from 'lucide-react';

export function VDIMigration() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <MonitorSmartphone className="mr-2 h-4 w-4" />
            Virtual Desktop Infrastructure Migration
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              VDI Migration Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Migrate large workstation fleets to virtual desktop environments with GPU acceleration, multi-protocol support, and cost-effective solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <MonitorSmartphone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Migrate to VDI?</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Virtual Desktop Infrastructure offers centralized management, enhanced security, and flexibility for modern workforces.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Data stays in the data center, not on endpoints. Centralized security policies and easier compliance management.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access workstations from anywhere, on any device. Perfect for remote work and BYOD policies.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Settings className="h-12 w-12 mb-4 mx-auto text-purple-600" />
              <h3 className="text-xl font-semibold mb-3">Simplified Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Centralized updates, provisioning, and troubleshooting. Reduce IT overhead and improve efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our VDI Migration Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive migration services from assessment and planning to deployment and optimization.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Large Fleet Migrations */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Large Fleet Workstation Migrations to Virtual Desktop Environments
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Seamlessly migrate hundreds or thousands of physical workstations to virtual desktop infrastructure. We manage the entire process with minimal disruption to your operations, ensuring a smooth transition for all users.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Assessment & Planning</div>
                      <p className="text-sm text-muted-foreground">Analyze workloads, user profiles, and infrastructure needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Phased Migration</div>
                      <p className="text-sm text-muted-foreground">Gradual rollout to minimize risk and disruption</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">User Training</div>
                      <p className="text-sm text-muted-foreground">Comprehensive training for end users and IT staff</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Application Compatibility</div>
                      <p className="text-sm text-muted-foreground">Ensure all business applications work in VDI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Performance Optimization</div>
                      <p className="text-sm text-muted-foreground">Tune for optimal user experience and resource usage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">24/7 Support</div>
                      <p className="text-sm text-muted-foreground">Post-migration support to ensure success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GPU Accelerated VMs */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    GPU Accelerated VMs Expertise
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Deploy GPU-accelerated virtual desktops for demanding workloads. Perfect for CAD, 3D modeling, video editing, machine learning, and other graphics-intensive applications that require dedicated GPU resources.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">GPU Technologies</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>NVIDIA vGPU and GPU passthrough</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>AMD MxGPU virtualization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Intel GVT-g graphics virtualization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>GPU sharing and partitioning strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Boxes className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Use Cases</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>CAD/CAM and engineering workstations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Video editing and media production</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>3D rendering and animation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>AI/ML development and data science</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Remote Desktop Protocols */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Linux and Windows OS Remote Desktop Protocols
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Expert implementation of remote desktop protocols for both Linux and Windows environments. We optimize protocol configurations for the best balance of performance, security, and user experience.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Server className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Windows Protocols</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>RDP (Remote Desktop Protocol) optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>Citrix HDX and ICA protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>VMware Blast Extreme and PCoIP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>RemoteFX for enhanced graphics</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Layers className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Linux Protocols</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>X2Go for remote X11 sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>SPICE protocol for KVM/QEMU VMs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>NoMachine NX for high-performance access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>VNC variants (TigerVNC, TurboVNC)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Reliable, Fast, and Cheap Solutions */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Reliable, Fast, and Cheap Solutions
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We deliver VDI solutions that excel in all three critical areas: reliability for business continuity, speed for user productivity, and cost-effectiveness for your budget. No compromise necessary.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-orange-200 h-full">
                    <div className="flex items-start gap-2 mb-3">
                      <Shield className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Reliable</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>99.9%+ uptime SLA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Redundant infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Automated failover</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Regular backups</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>24/7 monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-orange-200 h-full">
                    <div className="flex items-start gap-2 mb-3">
                      <Zap className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Fast</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>SSD/NVMe storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Optimized protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Low-latency networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>GPU acceleration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Performance tuning</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-orange-200 h-full">
                    <div className="flex items-start gap-2 mb-3">
                      <DollarSign className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Cost-Effective</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Lower hardware costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Reduced energy usage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Simplified management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Extend device lifespan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Flexible licensing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VDI Platforms */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">VDI Platform Expertise</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              We work with all major VDI platforms to find the best fit for your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <Cloud className="h-8 w-8 mb-3 mx-auto text-blue-600" />
              <h3 className="font-semibold mb-2">VMware Horizon</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise VDI with advanced features
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Server className="h-8 w-8 mb-3 mx-auto text-orange-600" />
              <h3 className="font-semibold mb-2">Citrix Virtual Apps</h3>
              <p className="text-sm text-muted-foreground">
                Application and desktop delivery
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Monitor className="h-8 w-8 mb-3 mx-auto text-green-600" />
              <h3 className="font-semibold mb-2">Microsoft AVD</h3>
              <p className="text-sm text-muted-foreground">
                Azure Virtual Desktop solution
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Layers className="h-8 w-8 mb-3 mx-auto text-purple-600" />
              <h3 className="font-semibold mb-2">Open Source VDI</h3>
              <p className="text-sm text-muted-foreground">
                KVM, Proxmox, Apache Guacamole
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Migrate to VDI?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Transform your desktop infrastructure with reliable, fast, and cost-effective VDI solutions. Let's discuss your migration plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Download Migration Guide
              <MonitorSmartphone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
