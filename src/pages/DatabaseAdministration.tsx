import { Button } from '@/components/ui/button';
import {
  Database,
  ArrowRight,
  Wrench,
  Gauge,
  GraduationCap,
  Server,
  HardDrive,
  Zap,
  CheckCircle,
  GitBranch,
  Shield,
  Globe,
  Layers,
  RefreshCw,
  BarChart3,
  Settings,
  FileText,
  TrendingUp,
  Network,
  Cpu
} from 'lucide-react';

export function DatabaseAdministration() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Database className="mr-2 h-4 w-4" />
            Database Administration Services
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Expert DBA Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive database administration for MySQL, PostgreSQL, MongoDB, and Redis. From design engineering to performance tuning and technical training.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Database Technologies */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Database Expertise</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Deep expertise across the most popular relational, document-based, and in-memory database systems.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-blue-100 rounded-lg">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">MySQL</h3>
              <p className="text-muted-foreground leading-relaxed">
                World's most popular open-source relational database. Expert optimization, replication, and high-availability configurations.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-indigo-100 rounded-lg">
                <Server className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">PostgreSQL</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced open-source relational database with powerful features. Expertise in complex queries, extensions, and scalability.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-green-100 rounded-lg">
                <Layers className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">MongoDB</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leading NoSQL document database. Specialized in schema design, sharding, replica sets, and performance optimization.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center bg-red-100 rounded-lg">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Redis</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-performance in-memory data store. Expert in caching strategies, pub/sub, data structures, and cluster configurations.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              End-to-end database administration services from initial design to ongoing optimization and training.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Database Design Engineering */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 rounded-lg flex-shrink-0">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Relational and Document-Based Database Design Engineering
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Expert database architecture and design for both relational (MySQL, PostgreSQL) and document-based (MongoDB) systems. We create scalable, efficient database schemas optimized for your specific use case and access patterns.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Schema Design & Normalization</div>
                      <p className="text-sm text-muted-foreground">Optimal data structure for relational databases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Document Modeling</div>
                      <p className="text-sm text-muted-foreground">Efficient document structures for NoSQL databases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Data Relationships</div>
                      <p className="text-sm text-muted-foreground">Foreign keys, constraints, and referential integrity</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Scalability Planning</div>
                      <p className="text-sm text-muted-foreground">Design for future growth and performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Migration Strategies</div>
                      <p className="text-sm text-muted-foreground">Safe schema evolution and data migration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Best Practices</div>
                      <p className="text-sm text-muted-foreground">Industry standards and proven patterns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Maintenance & Administrative Tooling */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-purple-600 rounded-lg flex-shrink-0">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Database Maintenance and Administrative Tooling
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Custom utilities and automated solutions for perfect database maintenance. We build specialized tools for your specific needs, including fast backup solutions designed for large-scale databases.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-16">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Settings className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Custom Maintenance Utilities</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Automated monitoring and alerting systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Intelligent health check and diagnostics tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Automated cleanup and maintenance scripts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Configuration management automation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <HardDrive className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="font-semibold">Fast Backup Solutions</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-7">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>High-speed backup systems for large databases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Incremental and differential backup strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Point-in-time recovery capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Backup validation and restoration testing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Performance Tuning */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-600 rounded-lg flex-shrink-0">
                  <Gauge className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Database Performance Tuning
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive performance optimization services to maximize database efficiency and speed. From engine parameters to clustering solutions, we optimize every aspect of your database infrastructure.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Cpu className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">DB Engine Parameters Optimization</div>
                        <p className="text-xs text-muted-foreground">Fine-tune memory, cache, buffers, and engine-specific settings</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <BarChart3 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Database Indexing Tuning</div>
                        <p className="text-xs text-muted-foreground">Strategic index creation and optimization for faster queries</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <RefreshCw className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">DB Clustering Solutions</div>
                        <p className="text-xs text-muted-foreground">Sync/async replication for high availability and load distribution</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Geo-Replication</div>
                        <p className="text-xs text-muted-foreground">Multi-region data distribution for global applications</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Automated Scaling Solutions</div>
                        <p className="text-xs text-muted-foreground">Horizontal and vertical scaling based on demand</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Network className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Reverse Proxies</div>
                        <p className="text-xs text-muted-foreground">Load balancing and connection management layers</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Layers className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Connection Pooling</div>
                        <p className="text-xs text-muted-foreground">Efficient connection management to reduce overhead</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Smart Query Caching Layers</div>
                        <p className="text-xs text-muted-foreground">Transparent caching for frequently accessed data</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <HardDrive className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Hardware Gaps & Benchmarks</div>
                        <p className="text-xs text-muted-foreground">Identify bottlenecks and performance testing</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-orange-200">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm mb-1">Queries Optimization</div>
                        <p className="text-xs text-muted-foreground">Analyze and rewrite slow queries for better performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Debt Reduction Classrooms */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center bg-green-600 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Classrooms for Technical Debt Reduction
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Specialized training programs focused on identifying, understanding, and eliminating database technical debt. We empower your team with the knowledge and skills to maintain healthy, efficient database systems.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Database Anti-Patterns</div>
                      <p className="text-sm text-muted-foreground">Identify and fix common database design mistakes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Performance Analysis</div>
                      <p className="text-sm text-muted-foreground">Tools and techniques for query profiling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Migration Best Practices</div>
                      <p className="text-sm text-muted-foreground">Safe schema changes and data migrations</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Monitoring & Alerting</div>
                      <p className="text-sm text-muted-foreground">Set up proactive database health monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Hands-On Workshops</div>
                      <p className="text-sm text-muted-foreground">Practical exercises with real-world scenarios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Custom Curriculum</div>
                      <p className="text-sm text-muted-foreground">Tailored to your specific database stack and challenges</p>
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our DBA Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Decades of combined experience managing mission-critical database systems at scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Shield className="h-8 w-8 mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Data Integrity First</h3>
              <p className="text-sm text-muted-foreground">
                Every optimization and change prioritizes data safety and consistency above all else.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Zap className="h-8 w-8 mb-3 text-orange-600" />
              <h3 className="font-semibold mb-2">Performance Obsessed</h3>
              <p className="text-sm text-muted-foreground">
                Relentless focus on squeezing every ounce of performance from your database infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <GraduationCap className="h-8 w-8 mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Knowledge Transfer</h3>
              <p className="text-sm text-muted-foreground">
                We don't just fix problems—we teach your team to prevent them in the future.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Database Infrastructure</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            From initial design to ongoing performance tuning and team training, we provide comprehensive DBA services that keep your databases running at peak efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Database Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              View Success Stories
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
