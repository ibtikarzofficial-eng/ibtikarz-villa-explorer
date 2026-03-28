import React, { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Environment, OrbitControls, Center, useTexture, Sky, Stars, ContactShadows } from '@react-three/drei';
import { EffectComposer, N8AO, Bloom, Vignette, ToneMapping } from '@react-three/postprocessing';
import Exterior from './Exterior';

const Ground = React.memo(({ isNight }) => {
    const textures = useTexture({
        map: '/textures/grass_color.jpg',
        normalMap: '/textures/grass_normal.jpg',
        roughnessMap: '/textures/grass_roughness.jpg',
    });

    useMemo(() => {
        Object.values(textures).forEach(texture => {
            if (texture) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(240, 240);
                texture.anisotropy = 16;
            }
        });
    }, [textures]);

    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            <planeGeometry args={[800, 800]} />
            <meshStandardMaterial
                {...textures}
                color={isNight ? "#4a4a4a" : "#e0e0e0"} // Darken grass at night
                metalness={0.0}
            />
        </mesh>
    );
});

export default function SceneExterior({ wallColor, sunAngle = 45, isNight }) {
    const rad = (sunAngle * Math.PI) / 180;
    const sunPos = useMemo(() => [Math.cos(rad) * 30, 12, Math.sin(rad) * 30], [sunAngle]);

    // Dynamic lighting calculations
    const envIntensity = isNight ? 0.05 : 0.6 + Math.sin(rad) * 0.4;
    const fogColor = isNight ? '#030508' : '#c2cbd2';
    const ambientColor = isNight ? '#2b3a55' : '#e6f0ff';
    const ambientIntensity = isNight ? 0.2 : 0.4;
    const sunIntensity = isNight ? 0 : 3.5;

    return (
        <>
            {!isNight && <Sky sunPosition={sunPos} turbidity={0.3} rayleigh={0.8} />}
            {isNight && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}

            <Environment preset="city" environmentIntensity={envIntensity} />
            <fog attach="fog" args={[fogColor, 40, 150]} />

            {/* Turn off the sun at night to save performance */}
            {!isNight && (
                <directionalLight
                    position={sunPos}
                    intensity={sunIntensity}
                    castShadow
                    shadow-mapSize={[1024, 1024]} // DOWNGRADED FROM 4096
                    shadow-bias={-0.0005}
                    color="#ffe8c4"
                >
                    <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 100]} />
                </directionalLight>
            )}

            <ambientLight intensity={ambientIntensity} color={ambientColor} />

            <Suspense fallback={null}>
                <Ground isNight={isNight} />
                <Center top position={[0, 0, 0]}>
                    <Exterior wallColor={wallColor} isNight={isNight} />
                </Center>

                <ContactShadows
                    position={[0, 0.01, 0]}
                    scale={40}
                    resolution={1024}
                    far={10}
                    blur={2}
                    opacity={isNight ? 0.9 : 0.6}
                    color="#000000"
                />
            </Suspense>

            <OrbitControls
                makeDefault
                enableDamping
                dampingFactor={0.05}
                maxPolarAngle={Math.PI / 2.05}
                minDistance={10}
                maxDistance={40}
                target={[0, 4, 0]}
            />

            <EffectComposer disableNormalPass multisampling={0}>
                {/* REMOVED N8AO COMPLETELY. Mobile GPUs cannot handle it. */}
                {/* Reduced bloom resolution to save massive memory */}
                <Bloom luminanceThreshold={isNight ? 0.8 : 1.2} intensity={isNight ? 1.5 : 0.15} mipmapBlur resolutionScale={0.25} />
                <ToneMapping mode={THREE.ACESFilmicToneMapping} exposure={1.1} />
                <Vignette darkness={0.4} offset={0.2} />
            </EffectComposer>
        </>
    );
}