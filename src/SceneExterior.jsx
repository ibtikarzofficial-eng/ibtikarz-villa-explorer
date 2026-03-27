import { Suspense, useRef, useCallback } from 'react';
import { Environment, ContactShadows, OrbitControls, Center, AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import Exterior from './Exterior';

export default function SceneExterior({ wallColor, sunAngle = 45 }) {
    // Convert angle (degrees) to sun XZ position on an arc above the scene
    const rad = (sunAngle * Math.PI) / 180;
    const sunX = Math.cos(rad) * 22;
    const sunZ = Math.sin(rad) * 12;
    const sunY = 18 + Math.sin(rad) * 8; // higher at midday

    // Auto-rotate resume after 2s idle
    const orbitRef = useRef();
    const idleTimer = useRef(null);
    const onInteractStart = useCallback(() => {
        if (orbitRef.current) orbitRef.current.autoRotate = false;
        clearTimeout(idleTimer.current);
    }, []);
    const onInteractEnd = useCallback(() => {
        idleTimer.current = setTimeout(() => {
            if (orbitRef.current) orbitRef.current.autoRotate = true;
        }, 2000);
    }, []);
    return (
        <>
            {/* Warm deep twilight sky — luxury feel without pitch black */}
            <color attach="background" args={['#1a1f2e']} />
            <fog attach="fog" args={['#1a1f2e', 60, 200]} />

            {/* Sunset preset = warm natural bounce + sky reflections */}
            <Environment preset="sunset" environmentIntensity={1.2} />
            {/* Boosted ambient so no face is completely black */}
            <ambientLight intensity={0.9} color="#fff5e0" />

            {/* Primary sun — driven by the daytime slider */}
            <directionalLight
                position={[sunX, sunY, sunZ]}
                intensity={3.5}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-bias={-0.0003}
                shadow-camera-near={0.5}
                shadow-camera-far={200}
                shadow-camera-left={-40}
                shadow-camera-right={40}
                shadow-camera-top={40}
                shadow-camera-bottom={-40}
                color="#ffe9b0"
            />

            {/* Cool sky fill from opposite side — simulates scattered sky light */}
            <directionalLight position={[-15, 12, -15]} intensity={1.2} color="#a8c8f0" />

            {/* Subtle warm rim light from behind to separate building from bg */}
            <pointLight position={[0, 8, -25]} intensity={2.0} color="#ff9f45" distance={80} />

            <group position={[0, -1, 0]}>
                <Suspense fallback={null}>
                    <Center top>
                        <Exterior wallColor={wallColor} />
                    </Center>
                </Suspense>
            </group>

            {/* Soft baked shadows on the ground plane */}
            <AccumulativeShadows
                temporal
                frames={16}
                color="#1a1210"
                colorBlend={2.5}
                opacity={0.75}
                scale={80}
                position={[0, -1.01, 0]}
            >
                <RandomizedLight amount={4} radius={6} ambient={0.6} position={[18, 22, 12]} bias={0.001} />
            </AccumulativeShadows>

            {/* Quick contact shadows for real-time depth */}
            <ContactShadows position={[0, -1.02, 0]} opacity={0.35} scale={50} blur={3} far={5} color="#000000" />


            <OrbitControls
                ref={orbitRef}
                makeDefault
                enableDamping
                dampingFactor={0.05}
                maxPolarAngle={Math.PI / 2.1}
                minDistance={10}
                maxDistance={50}
                autoRotate
                autoRotateSpeed={0.35}
                onStart={onInteractStart}
                onEnd={onInteractEnd}
            />
        </>
    );
}