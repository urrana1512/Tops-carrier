"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const InteractiveGlobe = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          emissive="#2563eb"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const AboutScene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Suspense fallback={null}>
        <InteractiveGlobe />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AboutScene;
