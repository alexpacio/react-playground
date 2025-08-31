import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

/**
 * @name AnimatedCloudNative
 * @description A React component that renders animated 3D cloud native software concepts.
 * Features containers, microservices, load balancers, APIs, and other distributed system elements
 * with sophisticated geometry and dynamic animations.
 */

function CloudNativeElements() {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    
    // Gentle group rotation
    groupRef.current.rotation.y = elapsedTime * 0.1;
    
    // Animate individual elements
    groupRef.current.children.forEach((child, index) => {
      const offset = index * 0.5;
      child.rotation.x = Math.sin(elapsedTime + offset) * 0.2;
      child.rotation.z = Math.cos(elapsedTime + offset) * 0.1;
      
      // Floating movement
      child.position.y += Math.sin(elapsedTime * 2 + offset) * 0.005;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Docker Container - Cube */}
      <Box args={[1.5, 1, 2]} position={[-3, 2, 0]}>
        <meshStandardMaterial 
          color="#0ea5e9" 
          metalness={0.7} 
          roughness={0.3}
          emissive="#0284c7"
          emissiveIntensity={0.2}
        />
      </Box>
      
      {/* Kubernetes Pod - Octahedron */}
      <Octahedron args={[1.2]} position={[0, 3, -2]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </Octahedron>
      
      {/* Load Balancer - Torus */}
      <Torus args={[1.5, 0.4, 8, 16]} position={[3, 1, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.6} 
          roughness={0.4}
          emissive="#059669"
          emissiveIntensity={0.2}
        />
      </Torus>
      
      {/* API Gateway - Diamond */}
      <Octahedron args={[1]} position={[-2, -1, 2]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial 
          color="#f59e0b" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#d97706"
          emissiveIntensity={0.4}
        />
      </Octahedron>
      
      {/* Database - Cylinder Stack */}
      <group position={[2, -2, -1]}>
        <Cylinder args={[1, 1, 0.5]} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#dc2626" metalness={0.5} roughness={0.6} />
        </Cylinder>
        <Cylinder args={[1, 1, 0.5]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.6} />
        </Cylinder>
        <Cylinder args={[1, 1, 0.5]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#f87171" metalness={0.5} roughness={0.6} />
        </Cylinder>
      </group>
      
      {/* Microservice - Small interconnected spheres */}
      <group position={[-1, 0, -3]}>
        <Sphere args={[0.4]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ec4899" metalness={0.7} roughness={0.3} />
        </Sphere>
        <Sphere args={[0.3]} position={[0.8, 0.5, 0]}>
          <meshStandardMaterial color="#f472b6" metalness={0.7} roughness={0.3} />
        </Sphere>
        <Sphere args={[0.3]} position={[-0.8, -0.5, 0]}>
          <meshStandardMaterial color="#f472b6" metalness={0.7} roughness={0.3} />
        </Sphere>
        <Sphere args={[0.3]} position={[0, 0, 0.8]}>
          <meshStandardMaterial color="#f472b6" metalness={0.7} roughness={0.3} />
        </Sphere>
      </group>
      
      {/* Message Queue - Elongated boxes */}
      <Box args={[3, 0.5, 0.5]} position={[1, 2, 3]}>
        <meshStandardMaterial 
          color="#06b6d4" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#0891b2"
          emissiveIntensity={0.3}
        />
      </Box>
      
      {/* Service Mesh - Wireframe torus */}
      <Torus args={[2, 0.2, 8, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#64748b" 
          wireframe 
          transparent 
          opacity={0.6}
        />
      </Torus>
      
      {/* Cloud Provider - Large transparent sphere */}
      <Sphere args={[4]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#e2e8f0" 
          transparent 
          opacity={0.1}
          wireframe
        />
      </Sphere>
    </group>
  );
}

export const AnimatedCloudNative: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [8, 6, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          color="#ffffff"
        />
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={0.8} 
          color="#3b82f6"
        />
        <pointLight 
          position={[5, -3, -5]} 
          intensity={0.6} 
          color="#8b5cf6"
        />
        
        <CloudNativeElements />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};