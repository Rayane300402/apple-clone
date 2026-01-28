import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

type ModelSwitchProps = {
  scale: number;
  isMobile: boolean;
};

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
  if (!group) return;

  group.traverse((child: THREE.Object3D) => {
    // Narrow to Mesh
    if (child instanceof THREE.Mesh) {
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      materials.forEach((mat) => {
        // Many THREE materials have opacity/transparent, but TS types vary.
        // So we narrow to Material that supports them.
        const m = mat as THREE.Material & {
          opacity: number;
          transparent: boolean;
        };
        m.transparent = true;
        gsap.to(m, { opacity, duration: ANIMATION_DURATION });
      });
    }
  });
};

const moveGroup = (group: THREE.Group | null, x: number) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitch = ({ scale, isMobile }: ModelSwitchProps) => {
  const smallMacRef = useRef<THREE.Group | null>(null);
  const largeMacRef = useRef<THREE.Group | null>(null);

  const showLarge = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLarge) {
      moveGroup(smallMacRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacRef.current, 0);

      fadeMeshes(smallMacRef.current, 0);
      fadeMeshes(largeMacRef.current, 1);
    } else {
      moveGroup(smallMacRef.current, 0);
      moveGroup(largeMacRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacRef.current, 1);
      fadeMeshes(largeMacRef.current, 0);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true, // forces it back to OG position
    speed: 1,
    zoom: 1,
    // polar : [-Math.PI, Math.PI] // helps u look at bottom of  Model
    azimuth: [-Infinity, Infinity] as [number, number], // horizontal scroll, rotate it fully once
    damping: 1
  }

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitch;
