import { Button } from '@/components/ui/button';
import { 
  Database, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Workflow, 
  CheckCircle,
  TrendingUp,
  Lock,
  Layers,
  Building2,
  Cloud,
  Users,
  MessageSquare,
  Repeat,
  FileText
} from 'lucide-react';

// Import local images
import aiImage from '@/assets/shubham-dhage-MBfYGVsDEp8-unsplash.jpg';
import transactionImage from '@/assets/shubham-dhage-km9umcj61Ow-unsplash.jpg';
import analyticsImage from '@/assets/shubham-dhage-lY0-Y3kX5ps-unsplash.jpg';
import ollapImage from '@/assets/shubham-dhage-pXdzCRJNum0-unsplash.jpg';
import streamingImage from '@/assets/max-petrunin-VKC2jxpRms0-unsplash.jpg';

export function NetterDSQL() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Database className="mr-2 h-4 w-4" />
            Beyond Distributed SQL Database
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Netter DSQL
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Unify multiple database workloads in a single platform with ACID transactions, fault tolerance, and limitless scalability for OLTP, OLAP, and streaming.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
              <Database className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Built for Modern Organizations</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground mb-12">
            Netter DSQL is designed to serve the diverse needs of cloud providers and businesses of any size, from startups to enterprise organizations.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Cloud Providers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Offer your customers a unified database-as-a-service platform that handles OLTP, OLAP, and streaming workloads with enterprise-grade reliability and infinite scalability.
              </p>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Any Size Business</h3>
              <p className="text-muted-foreground leading-relaxed">
                From lean startups needing rapid scaling to large enterprises requiring mission-critical reliability, Netter DSQL adapts to your business requirements and growth trajectory.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid gap-8 lg:gap-12 mb-16">
          {/* AI-Powered Features */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 border border-border relative overflow-hidden" style={{backgroundImage: `url(${aiImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}>
              <Sparkles className="h-12 w-12 text-white mb-4" />
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                AI-Powered Intelligence
              </h2>
              <p className="text-white mb-6 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
                Native vector similarity search and LLM-ready SQL queries enable semantic search and intelligent recommendations with enterprise-grade performance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Native Vector Similarity Search
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <ArrowRight className="h-4 w-4 mr-2" />
                  LLM-Ready SQL Queries
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Semantic Search & Recommendations
                </div>
              </div>
            </div>
          </div>

          {/* Transactional Power */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-border relative overflow-hidden" style={{backgroundImage: `url(${transactionImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg ml-auto" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}>
              <Shield className="h-12 w-12 text-white mb-4" />
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                Global ACID Transactions
              </h2>
              <p className="text-white mb-6 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
                Ensure data consistency across distributed systems with strong ACID guarantees, online scalability, and real-time change data capture.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Strong Consistency Guarantees
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Online Scalability
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Change Data Capture (CDC)
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Performance */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 border border-border relative overflow-hidden" style={{backgroundImage: `url(${analyticsImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}>
              <BarChart3 className="h-12 w-12 text-white mb-4" />
              <h2 className="text-2xl font-bold tracking-tight mb-4 text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                Massively Parallel Analytics
              </h2>
              <p className="text-white mb-6 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
                Columnar storage with vectorized MPP query engine delivers top-tier performance for analytical workloads with federated query support.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Columnar Storage Engine
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Vectorized Query Processing
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Federated Query Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OLTP & OLAP Capabilities */}
        <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 border border-border relative overflow-hidden mb-16" style={{backgroundImage: `url(${ollapImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg ml-auto" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}>
            <Users className="h-12 w-12 text-white mb-4" />
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
              Unified OLTP & OLAP Engine
            </h2>
            <p className="text-white mb-6 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
              Single platform handling both Online Transaction Processing (OLTP) for real-time operations and Online Analytical Processing (OLAP) for complex business intelligence queries.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-white mb-2 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>OLTP Features</div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  High-frequency transactions
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Sub-millisecond latency
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  ACID compliance
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-semibold text-white mb-2 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>OLAP Features</div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Complex analytical queries
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Columnar data processing
                </div>
                <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Petabyte-scale analytics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kafka-Compatible Event Streaming */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 border border-border relative overflow-hidden mb-16" style={{backgroundImage: `url(${streamingImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-2/3 shadow-lg" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}>
            <MessageSquare className="h-12 w-12 text-white mb-4" />
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
              Event Queue & Stream Processing
            </h2>
            <p className="text-white mb-6 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
              Netter DSQL serves as both a database and a persistent, distributed event queue system. Unlike traditional Kafka deployments, our events are stored with full database durability and consistency guarantees.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-black/60 p-4 backdrop-blur-sm">
                <div className="flex items-center text-sm font-semibold text-white mb-2 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                  <Repeat className="h-4 w-4 mr-2" />
                  Persistent & Distributed
                </div>
                <p className="text-xs text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  Events are stored persistently across multiple nodes with automatic replication and fault tolerance, ensuring zero data loss.
                </p>
              </div>
              <div className="bg-black/60 p-4 backdrop-blur-sm">
                <div className="flex items-center text-sm font-semibold text-white mb-2 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                  <Database className="h-4 w-4 mr-2" />
                  Database-Native Streaming
                </div>
                <p className="text-xs text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  Stream processing capabilities are built into the database engine, eliminating the need for separate streaming infrastructure.
                </p>
              </div>
              <div className="bg-black/60 p-4 backdrop-blur-sm">
                <div className="flex items-center text-sm font-semibold text-white mb-2 drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
                  <Workflow className="h-4 w-4 mr-2" />
                  Kafka API Compatibility
                </div>
                <p className="text-xs text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                  Full Kafka 3.4.0 API compatibility means your existing applications work without modification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming & Real-time */}
        <div className="bg-gray-900 p-8 border border-border relative overflow-hidden mb-16" style={{backgroundImage: `url(${streamingImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="relative z-20 backdrop-blur-sm bg-black/60 p-6 w-full lg:w-1/2 shadow-lg ml-auto" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}>
            <Workflow className="h-12 w-12 text-white mb-4" />
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">
              Real-time Streaming
            </h2>
            <p className="text-white mb-6 leading-relaxed drop-shadow-md" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}>
              Kafka API 3.4.0 compatibility with exactly-once delivery and seamless topic-table transactional integration for modern streaming applications.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                <Zap className="h-4 w-4 mr-2" />
                Kafka API Compatible
              </div>
              <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                <Zap className="h-4 w-4 mr-2" />
                Exactly-Once Delivery
              </div>
              <div className="flex items-center text-sm text-white drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                <Zap className="h-4 w-4 mr-2" />
                Transactional Integration
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Options */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Deployment Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Globe className="h-8 w-8 mb-4 mx-auto text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Open Source</h3>
              <p className="text-muted-foreground mb-4">Apache 2.0 licensed, deploy anywhere with full community support.</p>
              <Button variant="outline">
                Download
              </Button>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Lock className="h-8 w-8 mb-4 mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mb-3">Enterprise Edition</h3>
              <p className="text-muted-foreground mb-4">Enhanced security, support, and enterprise-grade features.</p>
              <Button variant="outline">
                Contact Sales
              </Button>
            </div>
            <div className="p-6 border border-border bg-white hover:shadow-lg transition-shadow">
              <Layers className="h-8 w-8 mb-4 mx-auto text-purple-600" />
              <h3 className="text-xl font-semibold mb-3">Cloud Managed</h3>
              <p className="text-muted-foreground mb-4">Fully managed service with 99.99% availability guarantee.</p>
              <Button variant="outline">
                Try Cloud
              </Button>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gray-50 p-8 border border-border text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Enterprise-Grade Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Scalability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">ACID</div>
              <div className="text-sm text-muted-foreground">Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3-in-1</div>
              <div className="text-sm text-muted-foreground">Workloads</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}