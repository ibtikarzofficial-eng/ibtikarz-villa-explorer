import React, { useMemo, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export default function Exterior({ wallColor, isNight, ...props }) {
  const { scene } = useGLTF('/exterior-opt.glb');

  const getMaterial = useMemo(() => {
    return {
      asphalt: new THREE.MeshStandardMaterial({ color: '#222222', roughness: 0.9, metalness: 0.1 }),
      reflectiveGround: new THREE.MeshStandardMaterial({ color: '#151515', metalness: 0.6, roughness: 0.2 }),
      path: new THREE.MeshStandardMaterial({ color: '#d4d4d4', roughness: 0.8, metalness: 0.1 }),
      fence: new THREE.MeshStandardMaterial({ color: '#111111', metalness: 0.8, roughness: 0.3 }),

      // DOWNGRADED GLASS: Dropped transmission and clearcoat to save FPS
      glass: new THREE.MeshStandardMaterial({
        color: isNight ? '#050505' : '#8899a6',
        metalness: 0.95,
        roughness: 0.1,
        envMapIntensity: isNight ? 1.0 : 4.0,
        transparent: true,
        opacity: 0.85,
      }),

      lightFixture: new THREE.MeshStandardMaterial({
        color: '#ffffff',
        emissive: '#ffb74d',
        emissiveIntensity: isNight ? 4.0 : 0.0,
        roughness: 0.2,
      }),

      wood: new THREE.MeshStandardMaterial({ color: '#8b5a2b', roughness: 0.6, metalness: 0.05 }),
      wall: new THREE.MeshStandardMaterial({
        color: new THREE.Color(wallColor),
        roughness: 0.75,
        metalness: 0.05,
        envMapIntensity: isNight ? 0.2 : 0.8,
      }),
    };
  }, [wallColor, isNight]);

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      const name = child.name.toLowerCase();
      let shouldHide = false;
      let isLightBulb = false;

      // 1. EXACT MATCHES TO HIDE
      if (name.includes('line061') || name.includes('rectangle007') || name.includes('line005') || name.includes('line055')) {
        shouldHide = true;
      }

      // 2. RANGES TO HIDE & IDENTIFY LIGHTS
      const cylinderMatch = name.match(/cylinder(\d+)/);
      if (cylinderMatch) {
        const num = parseInt(cylinderMatch[1], 10);
        if (num >= 157 && num <= 234) shouldHide = true;

        // Target the light fixtures
        if (num >= 83 && num <= 133) isLightBulb = true;
      }

      const lineMatch = name.match(/line(\d+)/);
      if (lineMatch) {
        const num = parseInt(lineMatch[1], 10);
        if (num >= 57 && num <= 60) shouldHide = true;
      }

      const boxMatch = name.match(/box(\d+)/);
      if (boxMatch) {
        const num = parseInt(boxMatch[1], 10);
        if (num >= 48 && num <= 65) shouldHide = true;
      }

      // 3. APPLY VISIBILITY
      if (shouldHide) {
        child.visible = false;
        return;
      } else {
        child.visible = true;
      }

      // 4. APPLY SHADOWS
      child.castShadow = true;
      child.receiveShadow = true;

      // 5. MATERIAL INJECTION (NO MORE REAL LIGHTS!)
      let material;
      if (isLightBulb) {
        material = getMaterial.lightFixture;
        // NOTE: The 50 PointLights have been completely removed from here to save mobile GPUs.
      } else if (name.includes('rectangle007')) {
        material = getMaterial.reflectiveGround;
      } else if (name.includes('line061')) {
        material = getMaterial.path;
      } else if (name.includes('line055')) {
        material = getMaterial.fence;
      } else if (['box008', 'box009', 'box010', 'box011', 'box012', 'box013', 'box014', 'box015', 'box016', 'box017', 'box018', 'box019', 'box020', 'box021', 'box022', 'box066', 'box067', 'box068', 'box069', 'box070', 'box071', 'box072', 'box073', 'box074', 'box075', 'box076'].some(n => name.includes(n))) {
        material = getMaterial.glass;
      } else if (['box004', 'box005', 'box006', 'box024', 'box025', 'box026', 'box027', 'box028', 'box029', 'box030', 'box031', 'box032', 'box033', 'box034', 'box035', 'box036', 'box040', 'box041'].some(n => name.includes(n))) {
        material = getMaterial.wood;
      } else if (name.includes('box') || name.includes('line') || name.includes('object')) {
        material = getMaterial.wall;
      } else {
        return;
      }

      if (child.material !== material) {
        child.material = material;
      }
    });

  }, [scene, getMaterial]); // Removed isNight dependency since we aren't updating real lights anymore

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/exterior-opt.glb');