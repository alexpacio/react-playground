import { Button } from '@/components/ui/button';
import {
  Network,
  ArrowRight,
  Router,
  Shield,
  GitBranch,
  Lock,
  Zap,
  CheckCircle,
  Globe,
  Cloud,
  Building2,
  Settings,
  Code2,
  Layers,
  Eye,
  ShieldAlert,
  Wifi,
  Server,
  TrendingUp
} from 'lucide-react';

export function NetworkInfrastructure() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Network className="mr-2 h-4 w-4" />
            Network Infrastructure Consultancy
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Network Infrastructure Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Carrier-grade network solutions for providers and enterprises. Expert consultancy in TCP/IP, OpenWRT, VyOS, OPNSense with custom development and advanced security.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <Network className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Built for Scale and Security</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Our network infrastructure solutions serve both service providers offering networking services and enterprises requiring robust, secure network architectures.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build carrier-grade network infrastructure to offer connectivity, VPN services, security solutions, and managed networking to your customers.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Enterprise Organizations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploy secure, high-performance network infrastructure with advanced routing, security policies, and redundancy for mission-critical operations.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Expertise */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Platform Expertise</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Deep expertise across open-source and enterprise networking platforms with proven deployment experience.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-orange-100 rounded-lg">
                <Router className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">OpenWRT</h3>
              <p className="text-muted-foreground leading-relaxed">
                Flexible Linux-based OS for routers and embedded devices. Perfect for custom networking solutions and IoT deployments.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VyOS</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade network OS with advanced routing capabilities. Ideal for software-defined networking and cloud environments.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">OPNSense</h3>
              <p className="text-muted-foreground leading-relaxed">
                Open-source firewall and routing platform with advanced security features. The go-to solution for secure network perimeters.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive network infrastructure services from design and implementation to ongoing optimization and security.
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
                    Design and deploy carrier-grade network infrastructure for both service providers and enterprises. We build resilient, high-performance networks that meet the highest standards for reliability and throughput.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Service Provider Networks</div>
                      <p className="text-sm text-muted-foreground">BGP, MPLS, and carrier-grade routing infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Enterprise Campus Networks</div>
                      <p className="text-sm text-muted-foreground">Multi-site connectivity with centralized management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Network Architecture Design</div>
                      <p className="text-sm text-muted-foreground">Scalable topologies for current and future growth</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">High Availability Design</div>
                      <p className="text-sm text-muted-foreground">Redundant paths, failover, and zero downtime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Performance Optimization</div>
                      <p className="text-sm text-muted-foreground">Traffic engineering and QoS implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Capacity Planning</div>
                      <p className="text-sm text-muted-foreground">Right-sized infrastructure for bandwidth demands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TCP/IP and Platform Expertise */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Strong TCP/IP, OpenWRT, VyOS, OPNSense Expertise
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Deep understanding of networking fundamentals and expert-level proficiency with leading open-source network platforms. We implement, configure, and optimize network infrastructure using best-in-class tools.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Network className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">TCP/IP Mastery</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Advanced routing protocols (BGP, OSPF, IS-IS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>IPv4 and IPv6 dual-stack implementations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Network troubleshooting and packet analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Performance tuning and optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Settings className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Platform Configuration</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>OpenWRT customization and package development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>VyOS deployment and advanced routing features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>OPNSense firewall rules and security policies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Integration with automation and monitoring tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Solutions Development */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Custom Solutions Development
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Tailored network solutions built to your exact specifications. We develop custom networking software, plugins, and integrations that extend platform capabilities and solve unique challenges.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Custom Protocol Implementation</div>
                      <p className="text-sm text-muted-foreground">Develop specialized network protocols and handlers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Network Automation</div>
                      <p className="text-sm text-muted-foreground">Scripts and tools for configuration management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">API Development</div>
                      <p className="text-sm text-muted-foreground">RESTful APIs for network device management</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Plugin Extensions</div>
                      <p className="text-sm text-muted-foreground">Custom modules for OpenWRT, VyOS, OPNSense</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Integration Solutions</div>
                      <p className="text-sm text-muted-foreground">Connect networking with existing systems and workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Management Interfaces</div>
                      <p className="text-sm text-muted-foreground">Custom dashboards and control panels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mesh Networking & VPN */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Mesh Networking and VPN Protocols
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Deploy resilient mesh networks and secure VPN solutions for distributed organizations. We implement modern protocols for encrypted, high-performance connectivity across sites and remote users.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Wifi className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Mesh Networking</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Self-healing network topologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Dynamic routing and automatic failover</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>BATMAN, B.A.T.M.A.N.-adv implementations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Wireless and wired mesh networks</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Lock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">VPN Solutions</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>WireGuard: Modern, fast, and secure VPN</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>IPsec/IKEv2: Enterprise-grade site-to-site VPN</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>OpenVPN: Flexible SSL-based VPN solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">•</span>
                        <span>Zero Trust network access (ZTNA)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep Inspection & WAF */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-red-600 rounded-lg flex-shrink-0">
                  <ShieldAlert className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Deep Inspection (L7) and WAF Solutions
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Advanced security with Layer 7 deep packet inspection and Web Application Firewall protection. Detect and block sophisticated attacks at the application layer with real-time threat intelligence.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Deep Packet Inspection (DPI)</div>
                        <p className="text-xs text-muted-foreground">Analyze application-layer traffic for threats and policy violations</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Intrusion Detection/Prevention</div>
                        <p className="text-xs text-muted-foreground">IDS/IPS with Suricata and custom rule development</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2">
                      <ShieldAlert className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">SSL/TLS Inspection</div>
                        <p className="text-xs text-muted-foreground">Decrypt and inspect encrypted traffic for hidden threats</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Web Application Firewall</div>
                        <p className="text-xs text-muted-foreground">Protect web apps from OWASP Top 10 vulnerabilities</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2">
                      <Lock className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">DDoS Mitigation</div>
                        <p className="text-xs text-muted-foreground">Rate limiting and attack pattern detection</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Threat Intelligence</div>
                        <p className="text-xs text-muted-foreground">Real-time feeds and automated blocking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Network Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Decades of combined experience designing and managing complex network infrastructure for demanding environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Shield className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Security First</h3>
              <p className="text-sm text-muted-foreground">
                Every network design incorporates defense-in-depth security principles from the ground up.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Zap className="h-8 w-8 mb-3 text-orange-600" />
              <h3 className="font-semibold mb-2">High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimized configurations for maximum throughput and minimal latency in every deployment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Settings className="h-8 w-8 mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Open Standards</h3>
              <p className="text-sm text-muted-foreground">
                Built on open-source platforms and industry standards to avoid vendor lock-in.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Build Your Network Infrastructure</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a service provider building carrier-grade networks or an enterprise securing your infrastructure, we deliver solutions that perform and protect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              View Network Diagrams
              <Network className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
