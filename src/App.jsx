import { useState, Suspense, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import SceneExterior from './SceneExterior';
import SceneInterior from './SceneInterior';

// ─── Brand constants ────────────────────────────────────────────────
const GOLD = '#d4af37';

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

// ─── Fade overlay ───────────────────────────────────────────────────
function FadeOverlay({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="fade"
          className="absolute inset-0 z-20 bg-black pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        />
      )}
    </AnimatePresence>
  );
}

// ─── Audit modal ────────────────────────────────────────────────────
function AuditModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { onClose(); setSent(false); setForm({ name: '', email: '', message: '' }); }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

          {/* Card */}
          <motion.div
            className="relative z-10 w-[90vw] max-w-[420px] bg-[#0e0e0e] border border-white/10 p-8 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {!sent ? (
              <>
                <p style={{ color: GOLD }} className="text-[9px] tracking-[0.4em] uppercase font-bold mb-2">Ibtikarz</p>
                <h2 className="text-white text-xl font-semibold tracking-tight mb-1">Request A Digital Audit</h2>
                <p className="text-white/40 text-xs leading-relaxed mb-6">Our team will review your property and deliver a full architectural analysis within 48 hours.</p>

                <form onSubmit={submit} className="flex flex-col gap-4">
                  <input
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-xs tracking-wider px-4 py-3 outline-none focus:border-[#d4af37]/50 transition-colors"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-xs tracking-wider px-4 py-3 outline-none focus:border-[#d4af37]/50 transition-colors"
                  />
                  <textarea
                    rows={3}
                    placeholder="Brief project description (optional)"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-xs tracking-wider px-4 py-3 outline-none focus:border-[#d4af37]/50 transition-colors resize-none"
                  />
                  <button type="submit" style={{ backgroundColor: GOLD }} className="text-black text-[9px] tracking-[0.3em] font-bold py-3.5 uppercase hover:brightness-110 transition-all">
                    Send Request
                  </button>
                </form>

                <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white text-lg leading-none transition-colors">✕</button>
              </>
            ) : (
              <div className="text-center py-8">
                <div style={{ color: GOLD }} className="text-4xl mb-4">✓</div>
                <p className="text-white font-medium tracking-wide">Request Received</p>
                <p className="text-white/40 text-xs mt-2">We'll be in touch within 48 hours.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main App ────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState('exterior');
  const [stationIdx, setStationIdx] = useState(0);
  const [activeInfo, setActiveInfo] = useState(null);
  const [wallColor, setWallColor] = useState(MATERIALS[0].hex);
  const [fading, setFading] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [tooltip, setTooltip] = useState(null);          // { name, x, y }
  const [sunAngle, setSunAngle] = useState(45);            // degrees 0–180
  const canvasRef = useRef(null);
  const pendingView = useRef(null);

  // ── Active station info ─────────────────────────────────────────
  useEffect(() => {
    setActiveInfo(view === 'interior' ? INTERIOR_STATIONS[stationIdx] : null);
  }, [view, stationIdx]);

  // ── Crossfade scene switch ──────────────────────────────────────
  const switchView = useCallback((nextView) => {
    if (nextView === view || fading) return;
    pendingView.current = nextView;
    setFading(true);
    setTimeout(() => {
      setView(pendingView.current);
      setFading(false);
    }, 380);
  }, [view, fading]);

  // ── Screenshot ──────────────────────────────────────────────────
  const takeScreenshot = useCallback(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'ibtikarz-villa.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  // ── Fullscreen ──────────────────────────────────────────────────
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const onFSChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFSChange);
    return () => document.removeEventListener('fullscreenchange', onFSChange);
  }, []);

  // ── Keyboard shortcuts ──────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'p' || e.key === 'P') takeScreenshot();
      if (e.key === 'Escape' && auditOpen) setAuditOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggleFullscreen, takeScreenshot, auditOpen]);

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: '#0a0a0a', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── 3D CANVAS ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" ref={canvasRef}>
        <Canvas
          shadows
          dpr={[1, 1.2]}
          performance={{ min: 0.5 }}
          camera={{ position: [12, 5, 12], fov: 45 }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.15,
            preserveDrawingBuffer: true,   // needed for screenshot
            powerPreference: 'high-performance',
          }}
        >
          {view === 'exterior' ? (
            <SceneExterior wallColor={wallColor} sunAngle={sunAngle} />
          ) : (
            <SceneInterior station={INTERIOR_STATIONS[stationIdx]} />
          )}
        </Canvas>
      </div>

      {/* ── CROSSFADE ─────────────────────────────────────── */}
      <FadeOverlay visible={fading} />

      {/* ── UI OVERLAY ────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 md:p-6">

        {/* TOP BAR */}
        <header className="flex justify-between items-start pointer-events-auto w-full">
          {/* Logo */}
          <div className="flex flex-col group cursor-pointer">
            <h1 className="text-white text-lg md:text-xl font-bold tracking-tighter flex items-baseline transition-transform group-hover:scale-[1.02]">
              IBTIKARZ<span style={{ color: GOLD }} className="ml-1 text-xl md:text-2xl leading-none">.</span>
            </h1>
            <p style={{ color: GOLD }} className="text-[7px] md:text-[8px] tracking-[0.4em] uppercase font-medium mt-1 opacity-80">
              Architectural Visualizer
            </p>
          </div>

          {/* Top-right utility buttons */}
          <div className="flex items-center gap-2">
            {/* Screenshot */}
            <button
              onClick={takeScreenshot}
              title="Screenshot (P)"
              className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:border-white/30 flex items-center justify-center transition-all"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </button>
            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              title="Fullscreen (F)"
              className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/50 hover:text-white hover:border-white/30 flex items-center justify-center transition-all"
            >
              {isFullscreen ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* ROOM INFO CARD */}
        <div className="absolute top-20 right-4 md:top-6 md:right-6 pointer-events-none z-50">
          <AnimatePresence mode="wait">
            {activeInfo && (
              <motion.div
                key={activeInfo.label}
                initial={{ opacity: 0, x: 10, filter: 'blur(5px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 5, filter: 'blur(2px)' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-[220px] md:w-[260px] bg-black/40 backdrop-blur-md p-4 md:p-5 shadow-2xl pointer-events-auto"
                style={{ borderLeft: `1px solid ${GOLD}` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ color: GOLD }} className="text-[8px] tracking-[0.3em] font-bold">0{stationIdx + 1}</span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>
                <h3 className="text-white font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-2">{activeInfo.label}</h3>
                <p className="text-white/50 text-[9px] md:text-[10px] leading-[1.6] uppercase tracking-widest">{activeInfo.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM CONTROLS */}
        <footer className="w-full flex flex-col items-center gap-3 md:gap-4 pointer-events-auto pb-2">

          {/* Daytime Slider (exterior only) */}
          <AnimatePresence>
            {view === 'exterior' && (
              <motion.div
                key="sun-slider"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <input
                  type="range"
                  min="5"
                  max="175"
                  value={sunAngle}
                  onChange={e => setSunAngle(Number(e.target.value))}
                  className="w-24 md:w-32 accent-[#d4af37] cursor-pointer"
                  title="Sun angle"
                />
                <span className="text-white/40 text-[9px] tracking-widest w-10">{sunAngle}°</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dynamic center controls */}
          <div className="h-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {view === 'exterior' ? (
                /* Material picker with tooltips */
                <motion.div
                  key="exterior-controls"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="relative flex gap-3 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full"
                >
                  {MATERIALS.map((m) => (
                    <div key={m.hex} className="relative">
                      <button
                        onClick={() => setWallColor(m.hex)}
                        onMouseEnter={(e) => setTooltip({ name: m.name, x: e.currentTarget.getBoundingClientRect().left, y: e.currentTarget.getBoundingClientRect().top })}
                        onMouseLeave={() => setTooltip(null)}
                        className={`w-5 h-5 md:w-6 md:h-6 rounded-full transition-all duration-300 hover:scale-110 ${wallColor === m.hex ? 'scale-110 ring-[1.5px] ring-offset-1 ring-offset-black' : 'opacity-40 hover:opacity-100'}`}
                        style={{ backgroundColor: m.hex, outlineColor: GOLD, '--tw-ring-color': GOLD }}
                      />
                      {/* Tooltip */}
                      {tooltip?.name === m.name && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none whitespace-nowrap bg-black/90 border border-white/10 text-white text-[9px] tracking-widest uppercase px-2.5 py-1.5 rounded-sm">
                          {m.name}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              ) : (
                /* Interior waypoint nav */
                <motion.div
                  key="interior-controls"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex items-center gap-3 md:gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5"
                >
                  <button
                    onClick={() => setStationIdx((p) => (p - 1 + 3) % 3)}
                    className="w-8 h-8 rounded-full text-white/50 hover:text-white flex items-center justify-center transition-all"
                    style={{ '--hover-color': GOLD }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  </button>
                  <span style={{ color: GOLD }} className="text-[9px] tracking-[0.3em] font-bold w-14 text-center">
                    Area {stationIdx + 1}
                  </span>
                  <button
                    onClick={() => setStationIdx((p) => (p + 1) % 3)}
                    className="w-8 h-8 rounded-full text-white/50 hover:text-white flex items-center justify-center transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* View Toggle */}
          <div className="flex bg-black/60 backdrop-blur-xl border border-white/10 p-1 rounded-full shadow-lg w-[220px] md:w-[240px]">
            {['exterior', 'interior'].map((v) => (
              <button
                key={v}
                onClick={() => { switchView(v); if (v === 'interior') setStationIdx(0); }}
                className="flex-1 py-2.5 md:py-3 rounded-full text-[8px] md:text-[9px] tracking-[0.2em] font-bold transition-all duration-400"
                style={view === v
                  ? { backgroundColor: GOLD, color: '#000', boxShadow: `0 0 15px ${GOLD}33` }
                  : { color: 'rgba(255,255,255,0.4)' }}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => setAuditOpen(true)}
            className="group relative overflow-hidden bg-transparent border border-white/20 hover:border-[#d4af37] text-white hover:text-[#d4af37] text-[8px] md:text-[9px] tracking-[0.3em] font-bold py-3 md:py-3.5 px-8 md:px-10 rounded-[2px] transition-all duration-500 uppercase mt-1"
          >
            <span className="relative z-10">Request A Digital Audit</span>
            <div className="absolute inset-0 bg-[#d4af37]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>
        </footer>
      </div>

      {/* ── AUDIT MODAL ───────────────────────────────────── */}
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />

      {/* ── LOADER ────────────────────────────────────────── */}
      <Loader
        containerStyles={{ background: '#0a0a0a' }}
        barStyles={{ background: GOLD }}
        dataStyles={{ color: GOLD, fontSize: '10px', letterSpacing: '0.3em' }}
      />
    </div>
  );
}
