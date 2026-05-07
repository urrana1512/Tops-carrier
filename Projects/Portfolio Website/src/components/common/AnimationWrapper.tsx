"use client";

import React, { useEffect } from "react";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  useScrollAnimations();
  return <>{children}</>;
};

export default AnimationWrapper;
