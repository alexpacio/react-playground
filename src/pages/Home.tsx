import { Button } from '@/components/ui/button';
import { AnimatedGlobe } from '@/components/ui/AnimatedGlobe';
import { AnimatedCloud } from '@/components/ui/AnimatedCloud';
import { Terminal, ArrowRight, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Main Header */}
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 text-sm font-medium">
            <Sparkles className="mr-2 h-4 w-4" />
            Advanced Technology Solutions
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Effective Solutions for Advanced Companies
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We provide effective solutions tailored for advanced companies looking to optimize their technology infrastructure and drive business growth.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Consultancy Services */}
          <div className="bg-muted/30 p-8 border border-border text-center relative overflow-hidden">
            <AnimatedGlobe />
            <Terminal className="h-12 w-12 text-muted-foreground mx-auto mb-4 relative z-10" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold tracking-tighter mb-4">
                IT Consultancy Services
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expert guidance for software and system engineering. We help advanced companies optimize their technology infrastructure and implement best practices for scalable growth.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Software Architecture & Design
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  System Engineering & Integration
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Technology Strategy & Planning
                </div>
              </div>
              <Button size="lg">
                Explore Consultancy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Software Products */}
          <div className="bg-muted/30 p-8 border border-border text-center relative overflow-hidden">
            <AnimatedCloud />
            <div className="relative z-10" style={{ mixBlendMode: 'difference' }}>
              <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold tracking-tighter mb-4 text-white">
                Cloud Native Products
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Cutting-edge software products for distributed cloud native applications. Built for modern enterprises that demand reliability, scalability, and performance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-white/70">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Distributed System Solutions
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Cloud-Native Applications
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Microservices & Container Platforms
                </div>
              </div>
            </div>
            <div className="relative z-10" style={{ mixBlendMode: 'normal' }}>
              <Button size="lg" variant="outline" className="bg-gray-100/10 border-gray-400 text-black backdrop-blur-sm hover:bg-gray-200/20">
                View Products
                <Terminal className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}