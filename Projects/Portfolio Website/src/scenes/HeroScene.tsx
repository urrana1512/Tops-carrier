"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float, ContactShadows } from "@react-three/drei";

const TypistModel = () => {
  // Placeholder for the actual GLB model
  return (
    <group position={[0, -1, 0]}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      {/* Laptop placeholder */}
      <mesh position={[0, 1.1, 0.5]} rotation={[-0.5, 0, 0]}>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial color="#222" />
        <pointLight position={[0, 0.1, 0]} intensity={2} color="#00f" />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      <Suspense fallback={null}>
        <TypistModel />
        <Environment preset="city" />
      </Suspense>

      <ContactShadows 
        position={[0, -1, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4.5} 
      />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default HeroScene;
