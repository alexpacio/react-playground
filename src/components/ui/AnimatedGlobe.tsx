import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * @name AnimatedGlobe
 * @description A React component that renders a realistic, animated 3D globe.
 * This enhanced version features continent textures, a dynamic cloud layer, a starfield background,
 * and a soft atmospheric glow, creating a beautiful and modern visual effect.
 */
export const AnimatedGlobe: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    // --- Scene, Camera, and Renderer Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // --- Texture Loading ---
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/textures/earthmap.jpg');
    const bumpTexture = textureLoader.load('/textures/earthbump.jpg');
    const cloudTexture = textureLoader.load('/textures/clouds.png');
    const starTexture = textureLoader.load('/textures/starfield.jpg');

    // --- Object Creation ---

    // 1. Starfield Background
    const starGeometry = new THREE.SphereGeometry(100, 64, 64);
    const starMaterial = new THREE.MeshBasicMaterial({
      map: starTexture,
      side: THREE.BackSide // Render on the inside of the sphere
    });
    const starfield = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starfield);

    // 2. Earth Globe
    const globeGeometry = new THREE.SphereGeometry(3, 64, 64);
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.05, // Adjust for desired terrain depth
      metalness: 0.3,
      roughness: 0.8,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // 3. Cloud Layer
    const cloudGeometry = new THREE.SphereGeometry(3.05, 64, 64); // Slightly larger than the globe
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.6,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // 4. Atmospheric Glow
    const glowGeometry = new THREE.SphereGeometry(3.2, 64, 64);
    const glowMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize( normalMatrix * normal );
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow( 0.6 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 2.0 );
          gl_FragColor = vec4( 0.3, 0.6, 1.0, 1.0 ) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(atmosphere);


    // --- Animation Loop ---
    const animate = () => {
      // Slow rotation for realism
      globe.rotation.y += 0.0005;
      clouds.rotation.y += 0.0006; // Clouds rotate slightly faster
      starfield.rotation.y -= 0.0001;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // --- Handle Window Resize ---
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      scene.traverse(object => {
          if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              // Handle material disposal, checking for arrays
              if (Array.isArray(object.material)) {
                  object.material.forEach(material => material.dispose());
              } else {
                  object.material.dispose();
              }
          }
      });

      // Dispose of textures
      earthTexture.dispose();
      bumpTexture.dispose();
      cloudTexture.dispose();
      starTexture.dispose();

      renderer.dispose();
      if (currentMount && renderer.domElement) {
        if (currentMount.contains(renderer.domElement)) {
            currentMount.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return <div ref={mountRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
};