"use client";

import { Billboard, Html, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import StackIcon from "tech-stack-icons";
import { MathUtils, Vector3, type Group } from "three";
import type { SphereSkill } from "./skills";

interface SkillsSphereProps {
  skills: readonly SphereSkill[];
}

interface DistributedSkill {
  skill: SphereSkill;
  position: [number, number, number];
}

const sphereRadius = 2.04;
const logoSize = 32;

function getPrefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getPrefersReducedMotion,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function distributeSkills(skills: readonly SphereSkill[]) {
  // Fibonacci placement keeps the logo field deterministic without hand-tuned coordinates.
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  return skills.map((skill, index) => {
    const progress = skills.length === 1 ? 0.5 : index / (skills.length - 1);
    const y = 1 - progress * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = index * goldenAngle;

    return {
      skill,
      position: [
        Math.cos(theta) * radiusAtY * sphereRadius,
        y * sphereRadius,
        Math.sin(theta) * radiusAtY * sphereRadius,
      ] as [number, number, number],
    };
  });
}

function SkillLogo({ skill, position }: DistributedSkill) {
  const groupRef = useRef<Group>(null);
  const worldPosition = useMemo(() => new Vector3(), []);

  useFrame(() => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.getWorldPosition(worldPosition);

    const depth = MathUtils.clamp(
      (worldPosition.z + sphereRadius) / (sphereRadius * 2),
      0,
      1,
    );

    groupRef.current.scale.setScalar(0.9 + depth * 0.08);
  });

  return (
    <Billboard ref={groupRef} position={position}>
      {/* Drei Html avoids browser-specific SVG-to-WebGL texture failures while preserving 3D positioning. */}
      <Html
        center
        distanceFactor={5.4}
        pointerEvents="none"
        zIndexRange={[16, 0]}
      >
        <span
          aria-hidden="true"
          className="block select-none"
          style={{
            height: logoSize,
            transform: `scale(${skill.iconScale ?? 1})`,
            width: logoSize,
          }}
        >
          <StackIcon
            name={skill.icon}
            variant={skill.variant ?? "light"}
            className="block h-full w-full"
            style={{ height: "100%", width: "100%" }}
          />
        </span>
      </Html>
    </Billboard>
  );
}

function SkillsSphereScene({
  skills,
  reducedMotion,
}: SkillsSphereProps & { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null);
  const distributedSkills = useMemo(() => distributeSkills(skills), [skills]);

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef} rotation={[-0.16, -0.36, 0]}>
      {distributedSkills.map(({ skill, position }) => (
        <SkillLogo key={skill.name} skill={skill} position={position} />
      ))}
    </group>
  );
}

export function SkillsSphere({ skills }: SkillsSphereProps) {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsMounted(true));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none mx-auto flex h-[280px] w-full max-w-[340px] items-center justify-center overflow-visible sm:h-[340px] sm:max-w-[380px] lg:h-[380px] lg:max-w-[400px]"
    >
      {/* Client-only Canvas mounting keeps SSR stable while this reserved box prevents layout shift. */}
      {isMounted ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6.6], fov: 42 }}
          frameloop={prefersReducedMotion ? "demand" : "always"}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          fallback={<div className="h-full w-full" />}
        >
          <SkillsSphereScene
            skills={skills}
            reducedMotion={prefersReducedMotion}
          />
          <Preload all />
        </Canvas>
      ) : (
        <div className="h-full w-full" />
      )}
    </div>
  );
}
