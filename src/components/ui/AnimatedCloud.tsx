import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * @name AnimatedCloud
 * @description A React component that renders an animated 3D scene with various modern shapes using three.js.
 * This component replaces the previous low-poly cloud and simple sphere with more complex geometries and materials
 * that react to lighting, providing a more visually appealing and dynamic background.
 */
export const AnimatedCloud: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the mount point is available
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    // --- Scene, Camera, and Renderer Setup ---
    const scene = new THREE.Scene();
    
    // Get container dimensions
    const containerWidth = currentMount.clientWidth || 400;
    const containerHeight = currentMount.clientHeight || 300;
    
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    camera.position.z = 8; // Closer for better visibility in small container

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true // Make background transparent
    });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    currentMount.appendChild(renderer.domElement);

    // --- Lighting ---
    // Ambient light provides a soft, even light across the entire scene.
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light mimics a light source like the sun, creating shadows and highlights.
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // --- Object Creation ---
    // An array to hold our animated objects for easy management in the animation loop.
    const animatedObjects: { mesh: THREE.Mesh; update: (elapsedTime: number) => void }[] = [];

    // Define cloud-native specific geometries
    const createDatabaseGeometry = () => {
      const group = new THREE.Group();
      // Cylinder for database body
      const body = new THREE.CylinderGeometry(1.5, 1.5, 3, 16);
      const bodyMesh = new THREE.Mesh(body);
      // Top disk
      const topDisk = new THREE.CylinderGeometry(1.5, 1.5, 0.3, 16);
      const topMesh = new THREE.Mesh(topDisk);
      topMesh.position.y = 1.5;
      // Bottom disk
      const bottomDisk = new THREE.CylinderGeometry(1.5, 1.5, 0.3, 16);
      const bottomMesh = new THREE.Mesh(bottomDisk);
      bottomMesh.position.y = -1.5;
      group.add(bodyMesh, topMesh, bottomMesh);
      return group;
    };

    const createMicrovmGeometry = () => {
      // Cube with rounded edges for container/VM
      return new THREE.BoxGeometry(2, 2, 2, 8, 8, 8);
    };

    const createEventArchGeometry = () => {
      // Multiple connected spheres for event nodes
      const group = new THREE.Group();
      const positions = [
        [0, 0, 0], [-2, 1, 0], [2, -1, 0], [0, 2, 0], [1, -2, 1]
      ];
      positions.forEach(pos => {
        const sphere = new THREE.SphereGeometry(0.4, 8, 8);
        const mesh = new THREE.Mesh(sphere);
        mesh.position.set(pos[0], pos[1], pos[2]);
        group.add(mesh);
      });
      return group;
    };

    const createApiGatewayGeometry = () => {
      // Octahedron for API gateway
      return new THREE.OctahedronGeometry(2);
    };

    const createLoadBalancerGeometry = () => {
      // Torus for load balancer (traffic flow)
      return new THREE.TorusGeometry(1.5, 0.5, 8, 16);
    };

    const geometries = [
      createDatabaseGeometry(),
      createMicrovmGeometry(),
      createEventArchGeometry(), 
      createApiGatewayGeometry(),
      createLoadBalancerGeometry()
    ];

    // Define materials with modern properties (MeshStandardMaterial reacts to light)
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.4, metalness: 0.6 }),
      new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.5, metalness: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.6, metalness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, metalness: 0.7 }),
      // Added Wireframe Material for the sphere
      new THREE.MeshBasicMaterial({ color: 0x9ca3af, wireframe: true, transparent: true, opacity: 0.4 }),
    ];
    
    // Create and position several cloud-native shapes
    for (let i = 0; i < 8; i++) { // More objects for better coverage
        const geometryOrGroup = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        
        let mesh: THREE.Object3D;
        
        // Handle both geometries and groups
        if (geometryOrGroup instanceof THREE.Group) {
          mesh = geometryOrGroup.clone();
          // Apply material to all meshes in the group
          mesh.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
        } else {
          mesh = new THREE.Mesh(geometryOrGroup, material);
        }

        // Assign random initial positions and scales - spread across larger area
        mesh.position.set(
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 4
        );
        mesh.scale.setScalar(Math.random() * 0.4 + 0.2); // Slightly bigger scales

        // Store unique animation properties for each object
        const rotationSpeed = {
            x: (Math.random() - 0.5) * 0.005,
            y: (Math.random() - 0.5) * 0.005,
        };
        const movementSpeed = (Math.random() * 0.03 + 0.03); // Medium movement speed
        const movementRadius = Math.random() * 1.5 + 1; // Larger movement radius
        const initialPosition = mesh.position.clone();

        scene.add(mesh);
        
        animatedObjects.push({
            mesh: mesh as THREE.Mesh, // Type assertion for compatibility
            update: (elapsedTime) => {
                // Self-rotation
                mesh.rotation.x += rotationSpeed.x;
                mesh.rotation.y += rotationSpeed.y;
                
                // Slow movement on a plane using elapsed time for smoothness
                const time = elapsedTime;
                mesh.position.x = initialPosition.x + Math.cos(time * movementSpeed) * movementRadius;
                mesh.position.y = initialPosition.y + Math.sin(time * movementSpeed) * movementRadius;
            }
        });
    }

    // --- Animation Loop ---
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      // Update each object in the scene
      animatedObjects.forEach(obj => obj.update(elapsedTime));

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // --- Handle Window Resize ---
    const handleResize = () => {
      // On resize, use the container's dimensions
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    // This function is called when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Dispose of three.js objects to free up GPU memory
      scene.traverse(object => {
          if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              if (Array.isArray(object.material)) {
                  object.material.forEach(material => material.dispose());
              } else {
                  object.material.dispose();
              }
          }
      });

      renderer.dispose();
      
      if (currentMount && renderer.domElement) {
        // Check if the renderer's element is still a child before removing
        if (currentMount.contains(renderer.domElement)) {
            currentMount.removeChild(renderer.domElement);
        }
      }
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Use absolute positioning to fit within the parent container
  return <div ref={mountRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
};

