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

  // src/App.jsx
  return (
    <main className="w-full h-screen bg-[#050505] relative">
      <ExperienceUI view={view} setView={setView} />
      <Canvas
        camera={{ position: [15, 15, 15], fov: 35 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <VillaModel view={view} />
          <ContactShadows opacity={0.5} scale={20} blur={2} />
        </Suspense>
        <OrbitControls makeDefault enableDamping />
      </Canvas>
    </main>
  );
}



export default App