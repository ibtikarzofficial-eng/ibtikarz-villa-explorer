import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  BakeShadows,
  Loader
} from '@react-three/drei'
import './App.css'

// Placeholder Model Component (We will drop your .glb here next)
function VillaModel({ mode }) {
  return (
    <mesh>
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial color={mode === 'exterior' ? "#d4af37" : "#ffffff"} />
    </mesh>
  )
}

function App() {
  const [view, setView] = useState('exterior') // State: exterior | interior

  return (
    <div className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">

      {/* 1. THE 3D CANVAS */}
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={45} />

        {/* Luxury Lighting Setup */}
        <color attach="background" args={['#0a0a0a']} />
        <Environment preset="city" intensity={0.5} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        <Suspense fallback={null}>
          <VillaModel mode={view} />

          {/* Professional Ground Shadow */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={20}
            blur={2.4}
            far={4.5}
          />

          <BakeShadows /> {/* Optimized performance for mobile */}
        </Suspense>

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2.1} // Prevents looking under the floor
        />
      </Canvas>

      {/* 2. THE LUXURY UI OVERLAY */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 p-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
        <button
          onClick={() => setView('exterior')}
          className={`px-8 py-3 rounded-xl transition-all duration-500 font-medium ${view === 'exterior' ? 'bg-white text-black shadow-lg scale-105' : 'text-white/60 hover:text-white'}`}
        >
          EXTERIOR
        </button>
        <button
          onClick={() => setView('interior')}
          className={`px-8 py-3 rounded-xl transition-all duration-500 font-medium ${view === 'interior' ? 'bg-white text-black shadow-lg scale-105' : 'text-white/60 hover:text-white'}`}
        >
          INTERIOR
        </button>
      </div>

      {/* Brand Watermark */}
      <div className="absolute top-8 left-8">
        <h1 className="text-white font-bold tracking-tighter text-2xl">IBTIKARZ<span className="text-[#d4af37]">.</span></h1>
        <p className="text-white/40 text-xs tracking-widest uppercase">Villa Explorer Prototype</p>
      </div>

      <Loader /> {/* Sleek default loading bar */}
    </div>
  )
}

export default App