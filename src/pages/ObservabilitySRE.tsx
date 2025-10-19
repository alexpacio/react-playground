import { Button } from '@/components/ui/button';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Eye,
  GraduationCap,
  Users,
  MessageSquare,
  Globe,
  CheckCircle,
  Zap,
  Shield,
  AlertCircle,
  TrendingUp,
  Clock,
  FileText,
  Layers,
  Settings,
  Server,
  Database,
  Radio
} from 'lucide-react';

export function ObservabilitySRE() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Activity className="mr-2 h-4 w-4" />
            Observability & Site Reliability Engineering
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Observability & SRE Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Build reliable, observable systems with comprehensive monitoring, SRE culture, incident management, and distributed operational tooling for global scale.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <Activity className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* The Three Pillars */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">The Three Pillars of Observability</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Complete visibility into your systems through logs, metrics, and traces - the foundation of reliable operations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Logs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Structured and unstructured log data providing detailed event records and debugging context across your infrastructure.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Metrics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Time-series data revealing system performance, resource utilization, and business KPIs at a glance.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Radio className="h-12 w-12 mb-4 mx-auto text-purple-600" />
              <h3 className="text-xl font-semibold mb-3">Traces</h3>
              <p className="text-muted-foreground leading-relaxed">
                Distributed request tracing showing the complete journey of transactions through microservices architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              End-to-end observability and SRE services from infrastructure setup to culture transformation.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Log, Traces, Metrics Infrastructure */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    High-Frequency Log, Traces, Metrics Ingestors & Data Retention
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Cost-effective observability infrastructure capable of ingesting high volumes of logs, traces, and metrics. Grafana-based visualization, OpenTelemetry integration, and compliance-ready data retention policies. Expert implementation of both open-source and commercial solutions including Datadog.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Layers className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Open-Source Stack</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Grafana for unified dashboards and visualization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Loki for log aggregation and querying</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Prometheus & Thanos for metrics storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Tempo for distributed tracing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>OpenTelemetry for standardized instrumentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Settings className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Enterprise Solutions</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Datadog expertise and optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Cost-effective data retention strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Compliance-ready archival and purging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>High-volume ingestion pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Multi-tenancy and data isolation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SRE Principles & Culture */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    SRE Principles Classrooms & Culture Spreading
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Transform your organization with Site Reliability Engineering principles. We provide comprehensive training on on-call support, tiered support structures, customer-facing support excellence, and internal team cooperation to build a culture of reliability.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">SRE Training Programs</div>
                        <p className="text-xs text-muted-foreground">Workshops on error budgets, SLIs, SLOs, and SLAs</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">On-Call Best Practices</div>
                        <p className="text-xs text-muted-foreground">Rotation schedules, escalation policies, and burnout prevention</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Layers className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Tiered Support Structure</div>
                        <p className="text-xs text-muted-foreground">L1, L2, L3 support organization and responsibilities</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Customer-Facing Support</div>
                        <p className="text-xs text-muted-foreground">Communication skills and customer empathy training</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Internal Team Cooperation</div>
                        <p className="text-xs text-muted-foreground">Dev and Ops collaboration, shared responsibility</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Continuous Improvement</div>
                        <p className="text-xs text-muted-foreground">Blameless culture and learning from failures</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Incident Management */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-red-600 rounded-lg flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Incident Rooms, Post Mortems, RCA & SRE Team Onboarding
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Establish robust incident management processes including war rooms, post-incident reviews, and root cause analysis. Comprehensive SRE team onboarding programs to ensure your teams are prepared to handle production incidents effectively.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <MessageSquare className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Incident Response</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Virtual war room setup and tooling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Incident commander role definition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Communication templates and runbooks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Severity classification and triage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Status page and stakeholder updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-2 mb-2">
                      <FileText className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Post-Incident Process</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Blameless post-mortem culture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Root cause analysis (RCA) methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Action item tracking and remediation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>Knowledge base documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">•</span>
                        <span>SRE team onboarding and mentorship</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Distributed Operations */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Distributed Operational Tooling for Global Infrastructure
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Deploy and manage operational tooling across globally distributed infrastructure. Unified control planes, multi-region observability, and automation frameworks designed for planetary-scale systems.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Multi-Region Observability</div>
                      <p className="text-sm text-muted-foreground">Global view of distributed systems and services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Unified Control Plane</div>
                      <p className="text-sm text-muted-foreground">Centralized management across regions and clouds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">GitOps at Scale</div>
                      <p className="text-sm text-muted-foreground">Infrastructure as code for global deployments</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Cross-Region Automation</div>
                      <p className="text-sm text-muted-foreground">Orchestration frameworks for distributed operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Edge Computing Support</div>
                      <p className="text-sm text-muted-foreground">Observability for edge and IoT deployments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Disaster Recovery</div>
                      <p className="text-sm text-muted-foreground">Failover automation and recovery orchestration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SRE Principles */}
        <div className="bg-gray-50 p-8 border border-border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core SRE Principles</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              We implement these fundamental SRE principles to ensure reliable, scalable systems.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <TrendingUp className="h-8 w-8 mb-3 mx-auto text-blue-600" />
              <h3 className="font-semibold mb-2">Error Budgets</h3>
              <p className="text-sm text-muted-foreground">
                Balance velocity with reliability through quantified risk tolerance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Eye className="h-8 w-8 mb-3 mx-auto text-green-600" />
              <h3 className="font-semibold mb-2">Service Level Objectives</h3>
              <p className="text-sm text-muted-foreground">
                Define and measure user-centric reliability targets
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Zap className="h-8 w-8 mb-3 mx-auto text-orange-600" />
              <h3 className="font-semibold mb-2">Toil Reduction</h3>
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks to focus on value-adding work
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Shield className="h-8 w-8 mb-3 mx-auto text-purple-600" />
              <h3 className="font-semibold mb-2">Blameless Culture</h3>
              <p className="text-sm text-muted-foreground">
                Learn from failures without assigning personal blame
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Build Reliable, Observable Systems</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Transform your operations with comprehensive observability, SRE best practices, and battle-tested incident management processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Download SRE Guide
              <FileText className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
