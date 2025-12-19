"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Sparkles, Float } from "@react-three/drei";
import RPMAvatar from "./RPMavatar";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedRings() {
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.3;
      ringRef1.current.rotation.y = time * 0.2;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.x = time * -0.2;
      ringRef2.current.rotation.z = time * 0.3;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.y = time * 0.4;
      ringRef3.current.rotation.z = time * -0.2;
    }
  });

  return (
    <>
      <mesh ref={ringRef1} position={[0, 0, -3]}>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#6366f1" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ringRef2} position={[0, 0, -3]}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ringRef3} position={[0, 0, -3]}>
        <torusGeometry args={[4, 0.05, 16, 100]} />
        <meshStandardMaterial color="#ec4899" transparent opacity={0.15} />
      </mesh>
    </>
  );
}

function FloatingParticles() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-2, 1, 1]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[2, 0.5, 0.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh position={[-1.5, -0.5, 0.8]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[1.8, 1.5, 0.3]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </>
  );
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshStandardMaterial 
        color="#1e293b" 
        wireframe 
        transparent 
        opacity={0.2} 
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [-2, 0, 5], fov: 50 }}>
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, 2, 0]} intensity={0.5} color="#60a5fa" />
        
        {/* Environment for better reflections */}
        <Environment preset="city" />
        
        {/* Animated Background Elements */}
        <AnimatedRings />
        <FloatingParticles />
        <GridFloor />
        
        {/* Sparkles for magic effect */}
        <Sparkles 
          count={50} 
          scale={10} 
          size={2} 
          speed={0.3} 
          opacity={0.6}
          color="#ffffff"
        />
        
        {/* Avatar */}
        <RPMAvatar />
        
        {/* Contact Shadow for depth */}
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          target={[0, 0.6, 0]}
        />
      </Canvas>
    </div>
  );
}