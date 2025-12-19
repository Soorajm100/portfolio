"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Avatar() {
  const armRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (armRef.current) {
      armRef.current.rotation.z =
        Math.sin(clock.getElapsedTime() * 2) * 0.4;
    }
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#f5c7a9" />
      </mesh>

      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.35, 0.45, 1, 32]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Waving Arm */}
      <mesh ref={armRef} position={[0.6, 0.6, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#f5c7a9" />
      </mesh>
    </group>
  );
}
