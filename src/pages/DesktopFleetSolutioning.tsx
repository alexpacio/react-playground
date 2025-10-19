import { Button } from '@/components/ui/button';
import {
  Terminal,
  ArrowRight,
  Shield,
  Eye,
  Users,
  Cpu,
  CheckCircle,
  Lock,
  AlertTriangle,
  Monitor,
  Server,
  Activity,
  ShieldAlert,
  Layers,
  Settings,
  FileSearch,
  Wifi,
  WifiOff,
  Laptop,
  Code2,
  ShieldCheck,
  Database
} from 'lucide-react';

export function DesktopFleetSolutioning() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Terminal className="mr-2 h-4 w-4" />
            Desktop Fleet Management Solutions
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Desktop Fleet Management
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive desktop fleet management with RMM, security monitoring, policy enforcement, and SOC/NOC consulting for Windows and Linux environments.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <Terminal className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Platform Support */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Multi-Platform Support</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Unified management solutions for diverse desktop environments including Windows workstations, Linux desktops, thin clients, and laptops.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Monitor className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Windows Fleets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complete management for Windows 11 enterprise environments with Active Directory integration, Group Policy, and advanced security monitoring.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Terminal className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Linux Fleets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Centralized management for Linux desktops, thin clients, and workstations with configuration management and security hardening.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              End-to-end desktop fleet management solutions from monitoring and policy enforcement to security operations.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* RMM Solutions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    RMM Solutions
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Remote Monitoring and Management solutions for comprehensive visibility and control over your entire desktop fleet. Monitor health, deploy updates, and resolve issues remotely from a centralized dashboard.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Real-Time Monitoring</div>
                      <p className="text-sm text-muted-foreground">CPU, memory, disk, network metrics with alerting</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Patch Management</div>
                      <p className="text-sm text-muted-foreground">Automated OS and application updates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Remote Access</div>
                      <p className="text-sm text-muted-foreground">Secure remote desktop and command execution</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Asset Inventory</div>
                      <p className="text-sm text-muted-foreground">Hardware and software inventory tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Automation Scripts</div>
                      <p className="text-sm text-muted-foreground">Custom scripts for routine tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Reporting & Analytics</div>
                      <p className="text-sm text-muted-foreground">Comprehensive dashboards and reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Directory Policy Restrictions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Active Directory Policy Restrictions
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Expert implementation of Group Policy Objects (GPO) and Active Directory policies to enforce security standards, control user permissions, and maintain compliance across your Windows environment.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Settings className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Policy Configuration</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>User and computer configuration policies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Application whitelisting and blacklisting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>USB and removable media restrictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Password policies and account lockout</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Security Hardening</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Windows Firewall configuration via GPO</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>BitLocker encryption enforcement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Software restriction policies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Audit and compliance reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyber Security Real-Time Monitoring */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-red-600 rounded-lg flex-shrink-0">
                  <ShieldAlert className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Cyber Security Real-Time Monitoring Solutions
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Advanced security monitoring using OSQuery and centralized threat security platforms. Detect, analyze, and respond to security threats in real-time across your entire desktop fleet.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <FileSearch className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">OSQuery Implementation</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>SQL-powered endpoint visibility and monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Real-time query execution across fleet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Custom detection rules and queries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Integration with SIEM platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Centralized Threat Security</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>EDR (Endpoint Detection and Response)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Behavioral analysis and anomaly detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Threat intelligence feeds integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Automated incident response workflows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal NOC or SOC Creation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Internal NOC or SOC Creation Consulting
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Build your own Network Operations Center (NOC) or Security Operations Center (SOC). We provide consulting, architecture design, tool selection, and training to establish effective security and operations teams.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Server className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">NOC Setup</div>
                        <p className="text-xs text-muted-foreground">Infrastructure monitoring, alerting, and incident management</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <ShieldAlert className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">SOC Setup</div>
                        <p className="text-xs text-muted-foreground">Security monitoring, threat detection, and response</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Layers className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Tool Selection</div>
                        <p className="text-xs text-muted-foreground">SIEM, ticketing, monitoring platform evaluation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Settings className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Process Design</div>
                        <p className="text-xs text-muted-foreground">Runbooks, escalation paths, SLA definitions</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Team Training</div>
                        <p className="text-xs text-muted-foreground">Analyst training and skill development programs</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Eye className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Metrics & KPIs</div>
                        <p className="text-xs text-muted-foreground">Performance measurement and reporting frameworks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offline VMs RMM Agents */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-cyan-600 rounded-lg flex-shrink-0">
                  <WifiOff className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Offline VMs RMM Agents
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Specialized RMM agents designed for virtual machines and systems with intermittent or limited connectivity. Maintain visibility and control even when endpoints are offline or in air-gapped environments.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Queue-Based Communication</div>
                      <p className="text-sm text-muted-foreground">Store and forward data when connectivity is restored</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Local Data Collection</div>
                      <p className="text-sm text-muted-foreground">Continuous monitoring even without network access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Scheduled Sync</div>
                      <p className="text-sm text-muted-foreground">Automatic synchronization during connection windows</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Air-Gapped Support</div>
                      <p className="text-sm text-muted-foreground">Manual data transfer for isolated systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">VM Lifecycle Tracking</div>
                      <p className="text-sm text-muted-foreground">Monitor snapshot, clone, and migration events</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Bandwidth Optimization</div>
                      <p className="text-sm text-muted-foreground">Efficient data transmission for limited connections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thin Clients & Custom OSes */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-indigo-600 rounded-lg flex-shrink-0">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Thin Clients with Custom Linux/KDE Operating Systems
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Deploy thin client solutions with custom Linux-based operating systems featuring KDE desktop environments. Fully remotely managed, lightweight, and optimized for your specific use cases with centralized control.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Custom OS Development</div>
                      <p className="text-sm text-muted-foreground">Tailored Linux distributions with KDE Plasma</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Remote Management</div>
                      <p className="text-sm text-muted-foreground">Centralized configuration and update deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Lightweight Performance</div>
                      <p className="text-sm text-muted-foreground">Optimized for low-resource hardware</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Kiosk Mode Support</div>
                      <p className="text-sm text-muted-foreground">Locked-down configurations for specific tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Rapid Provisioning</div>
                      <p className="text-sm text-muted-foreground">Quick deployment and configuration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Energy Efficient</div>
                      <p className="text-sm text-muted-foreground">Reduced power consumption and TCO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Linux Enterprise Laptops/Workstations */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-teal-600 rounded-lg flex-shrink-0">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Linux-Powered Enterprise Laptop & Workstation Fleets
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Enterprise-grade Linux systems for web developers and AI workloads. Customized operating systems that meet compliance requirements while providing developers with powerful tools for modern development and local AI model execution.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-teal-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Code2 className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Developer Workstations</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>Pre-configured development environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>Modern IDEs and toolchains (VS Code, Docker, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>Secure Git and SSH key management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>Container and Kubernetes workflows</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-teal-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Cpu className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">AI/ML Workloads</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>CUDA and ROCm GPU driver optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>Local LLM and AI model execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>PyTorch, TensorFlow, and MLOps tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">•</span>
                        <span>Enterprise compliance with security controls</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Centralized Remote Control */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-amber-600 rounded-lg flex-shrink-0">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Centralized, In-House Remote Control to Prevent Data Loss
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Deploy on-premises remote control solutions that keep all data within your infrastructure. Prevent data loss through centralized session recording, file transfer monitoring, and access auditing without relying on third-party cloud services.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">On-Premises Deployment</div>
                      <p className="text-sm text-muted-foreground">Self-hosted remote access infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Session Recording</div>
                      <p className="text-sm text-muted-foreground">Full audit trail of remote sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">File Transfer Monitoring</div>
                      <p className="text-sm text-muted-foreground">Track and control data movement</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Access Control</div>
                      <p className="text-sm text-muted-foreground">Granular permissions and authentication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Encrypted Communications</div>
                      <p className="text-sm text-muted-foreground">End-to-end encryption for all sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Compliance Ready</div>
                      <p className="text-sm text-muted-foreground">Meets regulatory requirements for data sovereignty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Leak Prevention */}
            <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-rose-600 rounded-lg flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tighter mb-2">
                    Data Leak Prevention Solutions
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive data loss prevention (DLP) solutions using both open-source and custom-developed software. Detect, monitor, and prevent unauthorized data exfiltration across endpoints, network, and cloud applications.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-rose-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Database className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Content Inspection</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>Pattern matching and classification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>Sensitive data discovery and tagging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>PII, PHI, and PCI data detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>Custom rules and policies</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-rose-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Lock className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Prevention & Response</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>Block, quarantine, or encrypt sensitive data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>Email, USB, and network egress controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>Cloud application DLP (SaaS/IaaS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600">•</span>
                        <span>Incident reporting and forensics</span>
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
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Why Choose Our Desktop Fleet Solutions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive fleet management with security-first approach and proven expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Shield className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Security Focused</h3>
              <p className="text-sm text-muted-foreground">
                Every solution prioritizes security with defense-in-depth strategies and real-time threat monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Layers className="h-8 w-8 mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Unified Management</h3>
              <p className="text-sm text-muted-foreground">
                Single pane of glass for managing Windows and Linux fleets with consistent policies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Activity className="h-8 w-8 mb-3 text-purple-600" />
              <h3 className="font-semibold mb-2">Proactive Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Real-time visibility and automated responses to issues before they impact users.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Secure and Manage Your Desktop Fleet</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            From RMM and policy enforcement to security monitoring and SOC setup, we provide complete desktop fleet management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              View Security Solutions
              <ShieldAlert className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
