"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text, MeshDistortMaterial, Sphere, useProgress } from "@react-three/drei";

const LoadingScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>
      <Text
        position={[0, 0, 2]}
        fontSize={0.2}
        color="white"
        font="/fonts/Geist-Bold.ttf"
      >
        UR.
      </Text>
    </Canvas>
  );
};

const Preloader = () => {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!active && progress === 100) {
      const timer = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center"
        >
          <div className="w-full h-1/2">
            <LoadingScene />
          </div>
          <div className="mt-8 flex flex-col items-center">
            <motion.div 
              className="text-4xl font-bold text-gradient mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Udit Rana
            </motion.div>
            <div className="w-64 h-1 bg-gray-200/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-foreground/50 tabular-nums">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
