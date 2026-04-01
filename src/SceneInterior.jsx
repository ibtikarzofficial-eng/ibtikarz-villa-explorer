import { Suspense, useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, CameraControls, Center, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Interior from './Interior';

export default function SceneInterior({ station, isLightMode, selectedMaterial, onStationComplete }) {
    const cameraControlsRef = useRef();
    const keys = useRef({ w: false, a: false, s: false, d: false });
    const { camera, scene } = useThree();
    const [hoveredMesh, setHoveredMesh] = useState(null);
    const isTransitioning = useRef(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key.toLowerCase();
            if (Object.prototype.hasOwnProperty.call(keys.current, key)) keys.current[key] = true;
        };
        const handleKeyUp = (e) => {
            const key = e.key.toLowerCase();
            if (Object.prototype.hasOwnProperty.call(keys.current, key)) keys.current[key] = false;
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useFrame((_, delta) => {
        if (!cameraControlsRef.current || isTransitioning.current) return;
        const speed = 15 * delta;
        if (keys.current.w) cameraControlsRef.current.forward(speed, true);
        if (keys.current.s) cameraControlsRef.current.forward(-speed, true);
        if (keys.current.a) cameraControlsRef.current.truck(-speed, 0, true);
        if (keys.current.d) cameraControlsRef.current.truck(speed, 0, true);
    });

    useEffect(() => {
        if (!cameraControlsRef.current || !station) return;

        isTransitioning.current = true;

        cameraControlsRef.current.setLookAt(
            station.cameraPos[0],
            station.cameraPos[1],
            station.cameraPos[2],
            station.target[0],
            station.target[1],
            station.target[2],
            true
        );

        const timer = setTimeout(() => {
            isTransitioning.current = false;
            if (onStationComplete) onStationComplete();
        }, 1500);

        return () => clearTimeout(timer);
    }, [station, onStationComplete]);

    useEffect(() => {
        if (!selectedMaterial || !scene) return;

        scene.traverse((child) => {
            if (child.isMesh && child === hoveredMesh) {
                child.material = child.material.clone();
                child.material.color = new THREE.Color(selectedMaterial);
            }
        });
    }, [selectedMaterial, hoveredMesh, scene]);

    const handleClick = (e) => {
        e.stopPropagation();
        if (e.object) {
            setHoveredMesh(e.object);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!camera) return;
            const mouse = new THREE.Vector2();
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);

            if (intersects.length > 0) {
                document.body.style.cursor = 'pointer';
            } else {
                document.body.style.cursor = 'default';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [camera, scene]);

    return (
        <>
            <CameraControls
                ref={cameraControlsRef}
                makeDefault
                minDistance={0.5}
                maxDistance={100}
                enabled={!isTransitioning.current}
                smoothTime={0.3}
            />

            <color attach="background" args={[isLightMode ? '#f5f5f0' : '#0a0a0a']} />

            <Environment preset="apartment" environmentIntensity={isLightMode ? 0.5 : 0.3} />

            <ambientLight intensity={isLightMode ? 1.2 : 0.6} color={isLightMode ? "#fff8f0" : "#1a1a2e"} />

            <pointLight position={[0, 8, 0]} intensity={isLightMode ? 120 : 60} color={isLightMode ? "#fff5e6" : "#ffe8b0"} distance={50} decay={2} />
            <pointLight position={[30, 8, 0]} intensity={isLightMode ? 80 : 40} color={isLightMode ? "#ffe8c4" : "#ffd890"} distance={40} decay={2} />
            <pointLight position={[-30, 8, 0]} intensity={isLightMode ? 80 : 40} color={isLightMode ? "#ffe8c4" : "#ffd890"} distance={40} decay={2} />

            <directionalLight position={[50, 30, 50]} intensity={isLightMode ? 2.5 : 0.8} color={isLightMode ? "#e8f0f8" : "#2a3a5a"} />

            <pointLight position={[0, 2, 0]} intensity={isLightMode ? 30 : 15} color="#fff8e7" distance={20} decay={2} />

            <Suspense fallback={null}>
                <group scale={0.03} position={[0, -3, 0]} onClick={handleClick}>
                    <Center top>
                        <Interior />
                    </Center>
                </group>
            </Suspense>

            {hoveredMesh && (
                <Html position={[0, 0, 0]} center distanceFactor={10}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="px-4 py-2 rounded-full text-[9px] tracking-[0.25em] uppercase pointer-events-none shadow-xl"
                        style={{
                            backgroundColor: isLightMode ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.95)',
                            color: isLightMode ? '#fff' : '#000',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        Click to Apply Material
                    </motion.div>
                </Html>
            )}
        </>
    );
}