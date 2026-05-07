"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, PerspectiveCamera, Environment, Float, Stars } from "@react-three/drei";

const EarthModel = () => {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial
          color="#1e3a8a"
          attach="material"
          distort={0.1}
          speed={1.5}
          roughness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.5}
        />
      </Sphere>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Float>
  );
};

const ContactScene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      
      <Suspense fallback={null}>
        <EarthModel />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
};

export default ContactScene;
