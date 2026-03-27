import { Suspense, useEffect, useRef } from 'react';
import { Environment, ContactShadows, CameraControls, Html } from '@react-three/drei';
import Exterior from './Exterior';
import Interior from './Interior';
import Hotspot from './Hotspot';

export default function Scene({ mode, wallColor, station }) {
    const cameraControlsRef = useRef();

    // THIS FLIES THE CAMERA
    useEffect(() => {
        if (!cameraControlsRef.current) return;

        if (mode === 'interior') {
            cameraControlsRef.current.setLookAt(
                station.cameraPos[0], station.cameraPos[1], station.cameraPos[2],
                station.target[0], station.target[1], station.target[2],
                true
            );
        } else {
            cameraControlsRef.current.setLookAt(12, 5, 12, 0, 1, 0, true);
        }
    }, [mode, station]);

    return (
        <>
            <CameraControls ref={cameraControlsRef} makeDefault minDistance={2} maxDistance={5000} />
            <Environment preset="city" />
            <ambientLight intensity={mode === 'interior' ? 2 : 0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />

            <group position={[0, -1, 0]}>
                <Suspense fallback={null}>

                    {/* EXTERIOR (No Center tag) */}
                    <group visible={mode === 'exterior'}>
                        <Exterior wallColor={wallColor} />
                    </group>

                    {/* INTERIOR (No Center tag) */}
                    <group visible={mode === 'interior'}>
                        <Interior />
                        <pointLight position={[0, 500, 0]} intensity={2} color="#ffffff" distance={2000} />
                        <Hotspot position={station.hotspotPos || [0, 0, 0]} />
                    </group>

                </Suspense>
            </group>

            {/* --- THE DEVELOPER VIEWFINDER (ONLY SHOWS IN INTERIOR) --- */}
            {mode === 'interior' && (
                <Html fullscreen zIndexRange={[100, 0]}>
                    <div className="absolute top-10 left-10 pointer-events-auto">
                        <button
                            onClick={() => {
                                const pos = cameraControlsRef.current.getPosition();
                                const target = cameraControlsRef.current.getTarget();
                                console.log(`\n--- COPY THIS INTO APP.JSX ---`);
                                console.log(`cameraPos: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}],`);
                                console.log(`target: [${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)}],`);
                                console.log(`hotspotPos: [${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)}]`);
                                alert("Check your F12 Console for the exact coordinates!");
                            }}
                            className="bg-red-600 hover:bg-red-500 text-white font-black text-xs px-4 py-3 rounded shadow-2xl border-2 border-white/50"
                        >
                            📸 LOG PERFECT COORDINATES
                        </button>
                    </div>
                </Html>
            )}

            <ContactShadows position={[0, -1.05, 0]} opacity={0.6} scale={40} blur={2} />
        </>
    );
}