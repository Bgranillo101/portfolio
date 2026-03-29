"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function AnimatedShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <torusKnotGeometry args={[1, 0.35, 200, 32]} />
        <MeshDistortMaterial
          color="#7c3aed"
          roughness={0.15}
          metalness={0.8}
          distort={0.25}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
        <directionalLight position={[-3, -2, 4]} intensity={0.4} color="#06b6d4" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#7c3aed" />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
