import React, { useState, Suspense, useEffect, useRef, useCallback, useTransition } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import SceneExterior from './SceneExterior';
import SceneInterior from './SceneInterior';

// ─── Brand constants ────────────────────────────────────────────────
const GOLD = '#d4af37';
const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD}, #b57c1c)`; // or just use GOLD if you prefer solid

const MATERIALS = [
  { name: 'Matte Alabaster', hex: '#E6E4DF' },
  { name: 'Satin Grey', hex: '#7A7C7E' },
  { name: 'Travertine Stone', hex: '#C2B8A3' },
  { name: 'Charcoal', hex: '#2A2B2E' },
];

const INTERIOR_STATIONS = [
  {
    label: 'Living Lounge',
    description: 'Bespoke entertainment zone with custom lounge seating and panoramic views.',
    cameraPos: [-32.42, 22.96, -11.99],
    target: [-18.70, 20.93, -0.37],
  },
  {
    label: 'Dining Area',
    description: 'Modern 6-seater minimalist arrangement designed for luxury hosting.',
    cameraPos: [55.36, 18.45, 19.46],
    target: [50.88, 17.95, 18.52],
  },
  {
    label: 'Gourmet Kitchen',
    description: 'Italian marble countertops paired with integrated smart-home appliances.',
    cameraPos: [53.60, 19.75, -26.55],
    target: [53.64, 19.15, -21.99],
  },
];

// ─── Error Boundary ────────────────────────────────────────────────
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return <div className="flex items-center justify-center h-screen text-white">Something went wrong. Please refresh.</div>;
    }
    return this.props.children;
  }
}

// ─── Custom Tooltip ───────────────────────────────────────────────
function Tooltip({ text, visible, position }) {
  return (
    <AnimatePresence>
      {/* ADDED STRICT TEXT CHECK HERE TO KILL THE EMPTY PILL */}
      {visible && text && position && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className="fixed z-50 bg-black/80 text-white text-[10px] px-2 py-1 rounded pointer-events-none whitespace-nowrap"
          style={{ left: position.x + 15, top: position.y - 25 }}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main App ────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState('exterior');
  const [stationIdx, setStationIdx] = useState(0);
  const [wallColor, setWallColor] = useState(MATERIALS[0].hex);
  const [isPending, startTransition] = useTransition();
  const [auditOpen, setAuditOpen] = useState(false);
  const [sunAngle, setSunAngle] = useState(45);
  const [isNight, setIsNight] = useState(false); // <-- NEW NIGHT STATE
  const [tooltip, setTooltip] = useState(null);
  const canvasRef = useRef(null);

  const activeInfo = view === 'interior' ? INTERIOR_STATIONS[stationIdx] : null;

  // Smooth scene transition
  const switchView = useCallback((nextView) => {
    startTransition(() => {
      setView(nextView);
      if (nextView === 'interior') setStationIdx(0);
    });
  }, []);

  // Screenshot
  const takeScreenshot = useCallback(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `ibtikarz-${view}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, [view]);

  // Fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'f') toggleFullscreen();
      if (e.key === 'p') takeScreenshot();
      if (e.key === 'Escape') setAuditOpen(false);
      if (e.key >= '1' && e.key <= '4') {
        setWallColor(MATERIALS[parseInt(e.key) - 1].hex);
      }
      if (e.key === 'ArrowLeft') setSunAngle(a => Math.max(10, a - 5));
      if (e.key === 'ArrowRight') setSunAngle(a => Math.min(170, a + 5));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggleFullscreen, takeScreenshot]);

  // Track mouse for tooltip
  const handleMouseMove = useCallback((e) => {
    if (tooltip) {
      setTooltip(prev => ({ ...prev, position: { x: e.clientX, y: e.clientY } }));
    }
  }, [tooltip]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <ErrorBoundary>
      <div className="relative w-screen h-screen overflow-hidden bg-black font-sans">

        {/* INJECT THIS PREMIUM CUSTOM CURSOR GLOBALLY */}
        <style>{`
          body, canvas {
            cursor: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="%23d4af37"/><circle cx="12" cy="12" r="9" stroke="%23d4af37" stroke-width="1.5" opacity="0.6"/></svg>') 12 12, crosshair !important;
          }
          button, input[type="range"], .cursor-pointer {
            cursor: pointer !important;
          }
        `}</style>

        {/* Canvas */}
        <div ref={canvasRef} className="absolute inset-0 z-0">
          <Canvas
            shadows
            dpr={1} // HARD CAP. THIS SAVES THE PHONE.
            camera={{ position: [15, 8, 15], fov: 40 }}
            gl={{
              antialias: false,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.2,
              preserveDrawingBuffer: true,
              powerPreference: 'high-performance'
            }}
          >{view === 'exterior' ? (
            // Pass isNight down to the scene
            <SceneExterior wallColor={wallColor} sunAngle={sunAngle} isNight={isNight} />
          ) : (
            <SceneInterior station={INTERIOR_STATIONS[stationIdx]} />
          )}
          </Canvas>
        </div>

        {/* UI Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
          {/* Top Bar */}
          <header className="flex justify-between items-start pointer-events-auto">
            <div className="group cursor-pointer">
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-tight flex items-baseline transition-transform group-hover:scale-[1.01]">
                IBTIKARZ<span style={{ color: GOLD }} className="ml-1 text-2xl md:text-3xl">.</span>
              </h1>
              <p style={{ color: GOLD }} className="text-[8px] md:text-[9px] tracking-[0.5em] uppercase font-semibold mt-2">
                Exclusive Architectural Visualizer
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={takeScreenshot} title="Screenshot (P)" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-lg border border-white/5 text-white/40 hover:text-white hover:border-[#d4af37]/50 flex items-center justify-center transition-all">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              </button>
              <button onClick={toggleFullscreen} title="Fullscreen (F)" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-lg border border-white/5 text-white/40 hover:text-white hover:border-[#d4af37]/50 flex items-center justify-center transition-all">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>
              </button>
            </div>
          </header>

          {/* Room Info Panel */}
          <div className="absolute top-24 right-6 md:top-10 md:right-10 pointer-events-none z-50">
            <AnimatePresence mode="wait">
              {activeInfo && (
                <motion.div
                  key={activeInfo.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="w-[240px] md:w-[300px] bg-black/30 backdrop-blur-[40px] p-6 md:p-8 border-l-[0.5px] border-white/10 pointer-events-auto"
                  style={{ borderLeftColor: GOLD }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span style={{ color: GOLD }} className="text-[10px] tracking-[0.4em] font-bold">STATION 0{stationIdx + 1}</span>
                    <div className="h-[0.5px] flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base tracking-[0.25em] uppercase mb-3">{activeInfo.label}</h3>
                  <p className="text-white/40 text-[10px] md:text-[11px] leading-relaxed uppercase tracking-[0.2em]">{activeInfo.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom UI Dock & CTA */}
          {/* Bottom UI Dock & CTA */}
          <footer className="absolute inset-x-0 bottom-20 md:bottom-12 flex flex-col md:flex-row justify-between items-center md:items-end px-4 md:px-10 pointer-events-none gap-6 z-50">

            {/* Left/Center: The Command Dock */}
            <div className="pointer-events-auto flex items-center bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-full pl-6 pr-4 py-3 shadow-2xl scale-90 md:scale-100 origin-bottom">

              {/* Scene Toggle */}
              <div className="flex items-center gap-3 pr-6 border-r border-white/10">
                <button
                  onClick={() => switchView('exterior')}
                  className={`text-[9px] tracking-[0.3em] font-bold transition-colors ${view === 'exterior' ? 'text-[#d4af37]' : 'text-white/30 hover:text-white'}`}
                >
                  EXTERIOR
                </button>
                <span className="text-white/10 text-[10px]">/</span>
                <button
                  onClick={() => switchView('interior')}
                  className={`text-[9px] tracking-[0.3em] font-bold transition-colors ${view === 'interior' ? 'text-[#d4af37]' : 'text-white/30 hover:text-white'}`}
                >
                  INTERIOR
                </button>
              </div>

              {/* Dynamic Controls based on View */}
              <AnimatePresence mode="wait">
                {view === 'exterior' ? (
                  <motion.div
                    key="ext-controls"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex items-center overflow-hidden"
                  >
                    {/* Time & Lighting */}
                    <div className="flex items-center gap-4 px-6 border-r border-white/10">
                      <button
                        onClick={() => setIsNight(!isNight)}
                        className={`transition-colors ${isNight ? 'text-[#d4af37]' : 'text-white/40 hover:text-white'}`}
                        title="Toggle Day/Night"
                      >
                        {isNight ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        )}
                      </button>

                      <div className={`flex items-center gap-3 transition-opacity ${isNight ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                        <input
                          type="range"
                          min="10"
                          max="170"
                          value={sunAngle}
                          onChange={e => setSunAngle(Number(e.target.value))}
                          className="w-24 md:w-32 h-1 bg-white/10 rounded-lg appearance-none accent-[#d4af37] cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Materials */}
                    <div className="flex items-center gap-3 pl-6 pr-2">
                      {MATERIALS.map((m, idx) => (
                        <button
                          key={m.hex}
                          onClick={() => setWallColor(m.hex)}
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${wallColor === m.hex ? 'scale-125 ring-1 ring-offset-2 ring-offset-[#0a0a0a]' : 'opacity-40 hover:opacity-100 hover:scale-110'}`}
                          style={{ backgroundColor: m.hex, '--tw-ring-color': GOLD }}
                          title={`${m.name} (${idx + 1})`}
                          onMouseEnter={(e) => setTooltip({ text: m.name, position: { x: e.clientX, y: e.clientY } })}
                          onMouseLeave={() => setTooltip(null)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="int-controls"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="flex items-center gap-6 px-6 overflow-hidden"
                  >
                    <button
                      onClick={() => setStationIdx(i => (i - 1 + 3) % 3)}
                      className="text-white/30 hover:text-[#d4af37] transition-all"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <span style={{ color: GOLD }} className="text-[9px] tracking-[0.4em] font-bold w-24 text-center uppercase">AREA 0{stationIdx + 1}</span>
                    <button
                      onClick={() => setStationIdx(i => (i + 1) % 3)}
                      className="text-white/30 hover:text-[#d4af37] transition-all"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: The CTA */}
            <button
              onClick={() => setAuditOpen(true)}
              className="pointer-events-auto group relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 hover:border-[#d4af37] text-white/70 hover:text-[#d4af37] text-[9px] tracking-[0.3em] font-bold py-3.5 px-8 rounded-full transition-all duration-500 uppercase shadow-2xl"
            >
              <span className="relative z-10">Request Audit</span>
              <div className="absolute inset-0 bg-[#d4af37]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>

          </footer>
        </div>

        {/* Modal & Loader */}
        <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
        <Loader containerStyles={{ background: '#0a0a0a' }} barStyles={{ background: GOLD }} dataStyles={{ color: GOLD, fontSize: '10px', letterSpacing: '0.3em' }} />
        <Tooltip text={tooltip?.text} visible={!!tooltip} position={tooltip?.position} />
      </div>
    </ErrorBoundary>
  );
}

// ─── Audit Modal ─────────────────────────────────────────────────────
function AuditModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Convert local number to international format for the WhatsApp API
    const waNumber = "923247556451";

    // Format the form data into a bolded WhatsApp message
    const waMessage = `*New Digital Audit Request - IbtikarZ*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Project Details:* ${form.message || 'No details provided.'}`;

    // Trigger WhatsApp in a new tab
    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');

    // Clean up and close the modal
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

          <motion.div
            className="relative z-10 w-full max-w-[440px] bg-[#0e0e0e] border border-white/10 p-8 shadow-2xl rounded-2xl"
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: GOLD_GRADIENT }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div>
                <p style={{ color: GOLD }} className="text-[10px] tracking-[0.4em] uppercase font-bold">IbtikarZ</p>
                <h2 className="text-white text-lg font-semibold tracking-tight">Direct WhatsApp Connect</h2>
              </div>
            </div>

            <p className="text-white/50 text-xs leading-relaxed mb-6">
              Skip the wait. Send us your project details directly on WhatsApp, and our architectural team will respond immediately.
            </p>

            <form onSubmit={submit} className="flex flex-col gap-4">
              <div>
                <input
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/30 text-xs tracking-wider px-4 py-3.5 outline-none focus:border-[#d4af37]/70 transition-colors rounded-lg`}
                />
              </div>

              <div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/30 text-xs tracking-wider px-4 py-3.5 outline-none focus:border-[#d4af37]/70 transition-colors rounded-lg`}
                />
              </div>

              <textarea
                rows={3}
                placeholder="Project details (optional)"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-xs tracking-wider px-4 py-3.5 outline-none focus:border-[#d4af37]/70 transition-colors rounded-lg resize-none"
              />

              <button
                type="submit"
                className="text-black text-[10px] tracking-[0.3em] font-bold py-4 mt-2 uppercase transition-transform hover:scale-[1.02] rounded-lg"
                style={{ background: GOLD_GRADIENT }}
              >
                Connect on WhatsApp
              </button>
            </form>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/30 hover:text-white text-xl leading-none transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}