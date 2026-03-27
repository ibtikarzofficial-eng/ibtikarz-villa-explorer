import { Suspense, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, CameraControls, Center } from '@react-three/drei';
import Interior from './Interior';

export default function SceneInterior({ station }) {
    const cameraControlsRef = useRef();
    const keys = useRef({ w: false, a: false, s: false, d: false });

    // --- WASD INPUT ---
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

    // --- FPS MOVEMENT ---
    useFrame((_, delta) => {
        if (!cameraControlsRef.current) return;
        const speed = 15 * delta;
        if (keys.current.w) cameraControlsRef.current.forward(speed, true);
        if (keys.current.s) cameraControlsRef.current.forward(-speed, true);
        if (keys.current.a) cameraControlsRef.current.truck(-speed, 0, true);
        if (keys.current.d) cameraControlsRef.current.truck(speed, 0, true);
    });

    // --- CINEMATIC WAYPOINT TRANSITION ---
    useEffect(() => {
        if (!cameraControlsRef.current || !station) return;
        cameraControlsRef.current.setLookAt(
            station.cameraPos[0], station.cameraPos[1], station.cameraPos[2],
            station.target[0], station.target[1], station.target[2],
            true
        );
    }, [station]);

    // --- VIEWFINDER HELPER (dev only) ---
    useEffect(() => {
        const handleLogCoords = () => {
            if (!cameraControlsRef.current) return;
            const pos = cameraControlsRef.current.getPosition();
            const target = cameraControlsRef.current.getTarget();
            console.log(`cameraPos: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}],`);
            console.log(`target: [${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)}],`);
        };
        window.addEventListener('log-coords', handleLogCoords);
        return () => window.removeEventListener('log-coords', handleLogCoords);
    }, []);

    return (
        <>
            <CameraControls
                ref={cameraControlsRef}
                makeDefault
                minDistance={0.1}
                maxDistance={500}
            />

            {/* Interior environment — warm apartment feel */}
            <Environment preset="apartment" environmentIntensity={0.4} />

            {/* Warm ambient — dim, like real indoor lighting */}
            <ambientLight intensity={0.8} color="#fff3d6" />

            {/* Two ceiling zones — no castShadow on point lights (too expensive) */}
            <pointLight position={[0, 8, 0]} intensity={80} color="#ffe8b0" distance={40} decay={2} />
            <pointLight position={[30, 8, 0]} intensity={50} color="#ffd890" distance={35} decay={2} />

            {/* Cool window light — simulates daylight coming through windows */}
            <directionalLight position={[50, 30, 50]} intensity={1.5} color="#c8dff0" />

            {/* THE ARCHITECTURE */}
            <Suspense fallback={null}>
                <group scale={0.03} position={[0, -3, 0]}>
                    <Center top>
                        <Interior />
                    </Center>
                </group>
            </Suspense>
        </>
    );
}