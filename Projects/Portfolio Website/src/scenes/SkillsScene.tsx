"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  "React", "Next.js", "Three.js", "Tailwind", "Node.js", 
  "MongoDB", "TypeScript", "GSAP", "Figma", "Redux",
  "PostgreSQL", "Docker", "AWS", "Python", "GraphQL"
];

const SkillText = ({ text, pos }: { text: string, pos: THREE.Vector3 }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group ref={meshRef} position={pos}>
      <Text
        fontSize={0.2}
        color="#3b82f6"
        font="/fonts/Geist-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const SkillSphere = () => {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const p = [];
    const count = skills.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = 2.5 * Math.cos(theta) * Math.sin(phi);
      const y = 2.5 * Math.sin(theta) * Math.sin(phi);
      const z = 2.5 * Math.cos(phi);
      p.push(new THREE.Vector3(x, y, z));
    }
    return p;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillText key={i} text={skill} pos={points[i]} />
      ))}
    </group>
  );
};

const SkillsScene = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 7]} />
      <ambientLight intensity={1} />
      <SkillSphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SkillsScene;
