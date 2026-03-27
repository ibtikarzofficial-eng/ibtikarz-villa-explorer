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
import ExperienceUI from './components/ExperienceUI';

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
  const [view, setView] = useState('exterior');

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
      <ExperienceUI view={view} setView={setView} />

      <Canvas shadows dpr={[1, 2]}>
        <VillaModel mode={view} />
      </Canvas>
    </div>
  );
}

export default App