"use client";

import { Billboard, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CanvasTexture,
  LinearFilter,
  MathUtils,
  SRGBColorSpace,
  Vector3,
  type Group,
  type MeshBasicMaterial,
} from "three";
import type { SphereSkill } from "./skills";

interface SkillsSphereProps {
  skills: readonly SphereSkill[];
}

interface DistributedSkill {
  skill: SphereSkill;
  position: [number, number, number];
}

const sphereRadius = 2.45;

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
  // Fibonacci placement keeps the label layout deterministic without hand-tuned coordinates.
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

function createSkillTexture(skill: SphereSkill) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 192;

  const context = canvas.getContext("2d");

  if (context) {
    const isPrimary = skill.emphasis === "primary";

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = `${isPrimary ? 700 : 600} ${
      isPrimary ? 78 : 68
    }px Arial, sans-serif`;
    context.fillStyle = "#F4F2ED";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(skill.label, canvas.width / 2, canvas.height / 2);
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;

  return texture;
}

function SkillWord({ skill, position }: DistributedSkill) {
  const groupRef = useRef<Group>(null);
  const materialRef = useRef<MeshBasicMaterial>(null);
  const worldPosition = useMemo(() => new Vector3(), []);
  const texture = useMemo(() => createSkillTexture(skill), [skill]);
  const baseWidth = MathUtils.clamp(skill.label.length * 0.16 + 0.72, 1.1, 2.75);
  const baseHeight = skill.emphasis === "primary" ? 0.56 : 0.5;

  useEffect(() => () => texture.dispose(), [texture]);

  useFrame(() => {
    if (!groupRef.current || !materialRef.current) {
      return;
    }

    groupRef.current.getWorldPosition(worldPosition);

    const depth = MathUtils.clamp(
      (worldPosition.z + sphereRadius) / (sphereRadius * 2),
      0,
      1,
    );
    // Depth styling is mutated directly so animation never schedules React renders.
    materialRef.current.opacity = 0.84 + depth * 0.12;
    groupRef.current.scale.setScalar(
      (skill.emphasis === "primary" ? 1.08 : 1) * (0.98 + depth * 0.05),
    );
  });

  return (
    <Billboard ref={groupRef} position={position}>
      <mesh scale={[baseWidth, baseHeight, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          ref={materialRef}
          map={texture}
          transparent
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
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
        <SkillWord key={skill.label} skill={skill} position={position} />
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
      className="mx-auto flex h-[280px] w-full max-w-[340px] items-center justify-center overflow-visible sm:h-[340px] sm:max-w-[380px] lg:h-[380px] lg:max-w-[400px]"
    >
      {/* Client-only Canvas mounting keeps SSR stable while this reserved box prevents layout shift. */}
      {isMounted ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6.8], fov: 42 }}
          frameloop={prefersReducedMotion ? "demand" : "always"}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
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