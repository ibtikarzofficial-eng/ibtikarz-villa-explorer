import React, { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Environment, OrbitControls, Center, useTexture, Sky, Stars, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ToneMapping } from '@react-three/postprocessing';
import Exterior from './Exterior';

const Ground = React.memo(({ isNight, isLightMode }) => {
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
                color={isNight ? "#1a1a1a" : isLightMode ? "#e8e6df" : "#c5c5c5"}
                metalness={0.0}
                roughness={0.9}
            />
        </mesh>
    );
});

export default function SceneExterior({ wallColor, sunAngle = 45, isNight, isLightMode }) {
    const rad = (sunAngle * Math.PI) / 180;
    const sunPos = useMemo(() => [Math.cos(rad) * 30, 12, Math.sin(rad) * 30], [sunAngle]);

    // FIXED: Proper night mode lighting values
    const envIntensity = isNight ? 0.15 : 0.6 + Math.sin(rad) * 0.4;
    const fogColor = isNight ? '#0a0a0f' : isLightMode ? '#f5f5f0' : '#c2cbd2';
    const fogNear = isNight ? 20 : 40;
    const fogFar = isNight ? 100 : 150;
    const ambientColor = isNight ? '#1a1a2e' : isLightMode ? '#f5f3ed' : '#e6f0ff';
    const ambientIntensity = isNight ? 0.35 : isLightMode ? 0.5 : 0.4;
    const sunIntensity = isNight ? 0 : isLightMode ? 4.0 : 3.5;
    const exposure = isNight ? 0.8 : isLightMode ? 1.3 : 1.2;

    return (
        <>
            {/* FIXED: Proper sky handling for day/night */}
            {!isNight && (
                <Sky
                    sunPosition={sunPos}
                    turbidity={0.3}
                    rayleigh={0.8}
                    mieCoefficient={0.005}
                    mieDirectionalG={0.8}
                />
            )}

            {isNight && (
                <>
                    <Stars
                        radius={100}
                        depth={50}
                        count={5000}
                        factor={4}
                        saturation={0}
                        fade
                        speed={1}
                    />
                    {/* Subtle night gradient via fog */}
                    <fog attach="fog" args={['#0a0a0f', 10, 80]} />
                </>
            )}

            <Environment preset="city" environmentIntensity={envIntensity} />

            {/* FIXED: Smooth fog transition, no harsh horizon */}
            {!isNight && (
                <fog attach="fog" args={[fogColor, fogNear, fogFar]} />
            )}

            {/* FIXED: Sun only visible during day */}
            {!isNight && (
                <directionalLight
                    position={sunPos}
                    intensity={sunIntensity}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                    shadow-bias={-0.0005}
                    color={isLightMode ? "#fff5e6" : "#ffe8c4"}
                >
                    <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 100]} />
                </directionalLight>
            )}

            {/* FIXED: Better ambient light for night mode */}
            <ambientLight intensity={ambientIntensity} color={ambientColor} />

            {/* FIXED: Add subtle fill lights for night mode to prevent pitch black */}
            {isNight && (
                <>
                    <pointLight position={[10, 15, 10]} intensity={30} color="#ffe8b0" distance={50} decay={2} />
                    <pointLight position={[-10, 15, -10]} intensity={20} color="#c8dff0" distance={40} decay={2} />
                </>
            )}

            <Suspense fallback={null}>
                <Ground isNight={isNight} isLightMode={isLightMode} />
                <Center top position={[0, 0, 0]}>
                    <Exterior wallColor={wallColor} isNight={isNight} />
                </Center>

                <ContactShadows
                    position={[0, 0.01, 0]}
                    scale={40}
                    resolution={1024}
                    far={10}
                    blur={2}
                    opacity={isNight ? 0.7 : 0.6}
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
                enablePan={false}
            />

            <EffectComposer disableNormalPass multisampling={0}>
                {/* FIXED: Better bloom for night mode */}
                <Bloom
                    luminanceThreshold={isNight ? 0.5 : 1.2}
                    intensity={isNight ? 2.0 : 0.15}
                    mipmapBlur
                    resolutionScale={0.25}
                />
                <ToneMapping mode={THREE.ACESFilmicToneMapping} exposure={exposure} />
                <Vignette darkness={0.4} offset={0.2} />
            </EffectComposer>
        </>
    );
}