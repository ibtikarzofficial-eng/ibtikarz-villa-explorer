import React, { useState, useEffect, useCallback, useTransition, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import SceneExterior from './SceneExterior';
import SceneInterior from './SceneInterior';
import LoadingScreen from './components/LoadingScreen';
import TopBar from './components/TopBar';
import RoomInfoPanel from './components/RoomInfoPanel';
import NavigationDock from './components/NavigationDock';
import CTAButton from './components/CTAButton';
import AuditModal from './components/AuditModal';
import FloorplanRadar from './components/FloorplanRadar';
import MeasurementTool from './components/MeasurementTool';
import GuidedTourOverlay from './components/GuidedTourOverlay';
import PropertyInfoSidebar from './components/PropertyInfoSidebar';
import { getTheme, GOLD, INTERIOR_STATIONS } from './config/theme';

export default function App() {
  const [view, setView] = useState('exterior');
  const [stationIdx, setStationIdx] = useState(0);
  const [wallColor, setWallColor] = useState('#E6E4DF');
  const [isPending, startTransition] = useTransition();
  const [auditOpen, setAuditOpen] = useState(false);
  const [sunAngle, setSunAngle] = useState(45);
  const [isNight, setIsNight] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showFloorplan, setShowFloorplan] = useState(false);
  const [measurementMode, setMeasurementMode] = useState(false);
  const [guidedTourActive, setGuidedTourActive] = useState(false);
  const [tourStation, setTourStation] = useState(0);
  const [propertyInfoOpen, setPropertyInfoOpen] = useState(false);
  const canvasRef = useRef(null);

  const isLightMode = !isNight;
  const theme = getTheme(isLightMode);
  const activeInfo = view === 'interior' ? INTERIOR_STATIONS[stationIdx] : null;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!guidedTourActive || view !== 'interior') return;

    const timer = setTimeout(() => {
      if (tourStation < INTERIOR_STATIONS.length - 1) {
        setTourStation(prev => prev + 1);
        setStationIdx(prev => prev + 1);
      } else {
        setGuidedTourActive(false);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [guidedTourActive, view, tourStation]);

  const switchView = useCallback((nextView) => {
    startTransition(() => {
      setView(nextView);
      if (nextView === 'interior') {
        setStationIdx(0);
        setShowFloorplan(true);
        setTourStation(0);
      } else {
        setShowFloorplan(false);
        setGuidedTourActive(false);
      }
      setMeasurementMode(false);
    });
  }, []);

  const takeScreenshot = useCallback(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `ibtikarz-${view}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, [view]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'f') toggleFullscreen();
      if (e.key === 'p') takeScreenshot();
      if (e.key === 'Escape') {
        setAuditOpen(false);
        setMeasurementMode(false);
        setPropertyInfoOpen(false);
      }
      if (e.key === 'i') setPropertyInfoOpen(prev => !prev);
      if (e.key >= '1' && e.key <= '4') {
        const materials = ['#E6E4DF', '#7A7C7E', '#C2B8A3', '#2A2B2E'];
        setWallColor(materials[parseInt(e.key) - 1]);
      }
      if (e.key === 'ArrowLeft') setSunAngle(a => Math.max(10, a - 5));
      if (e.key === 'ArrowRight') setSunAngle(a => Math.min(170, a + 5));
      if (e.key === 'm') setMeasurementMode(prev => !prev);
      if (e.key === 'r') setShowFloorplan(prev => !prev);
      if (e.key === 'g') setGuidedTourActive(prev => !prev);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggleFullscreen, takeScreenshot]);

  const handleTourNext = () => {
    if (tourStation < INTERIOR_STATIONS.length - 1) {
      setTourStation(prev => prev + 1);
      setStationIdx(prev => prev + 1);
    }
  };

  const handleTourPrevious = () => {
    if (tourStation > 0) {
      setTourStation(prev => prev - 1);
      setStationIdx(prev => prev - 1);
    }
  };

  const handleTourSkip = () => {
    setGuidedTourActive(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans" style={{ backgroundColor: theme.bg }}>
      <AnimatePresence>{isLoading && <LoadingScreen isLightMode={isLightMode} />}</AnimatePresence>

      <style>{`
        body, canvas {
          cursor: url('image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="%23d4af37"/><circle cx="12" cy="12" r="9" stroke="%23d4af37" stroke-width="1.5" opacity="0.6"/></svg>') 12 12, crosshair !important;
        }
        button, input[type="range"], .cursor-pointer { cursor: pointer !important; }
        .measurement-mode { cursor: crosshair !important; }
        * { transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease; }
      `}</style>

      {/* Main Canvas */}
      <div ref={canvasRef} className={`absolute inset-0 z-0 ${measurementMode ? 'measurement-mode' : ''}`}>
        <Canvas
          shadows
          dpr={1}
          camera={{ position: [15, 8, 15], fov: 40 }}
          gl={{
            antialias: false,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: isLightMode ? 1.3 : 0.8,
            preserveDrawingBuffer: true,
            powerPreference: 'high-performance'
          }}
        >
          {view === 'exterior' ? (
            <SceneExterior wallColor={wallColor} sunAngle={sunAngle} isNight={isNight} isLightMode={isLightMode} />
          ) : (
            <SceneInterior
              station={INTERIOR_STATIONS[guidedTourActive ? tourStation : stationIdx]}
              isLightMode={isLightMode}
            />
          )}
        </Canvas>
      </div>

      <MeasurementTool enabled={measurementMode} onClose={() => setMeasurementMode(false)} isLightMode={isLightMode} />

      <AnimatePresence>
        {showFloorplan && view === 'interior' && (
          <FloorplanRadar stationIdx={guidedTourActive ? tourStation : stationIdx} isLightMode={isLightMode} visible={showFloorplan} />
        )}
      </AnimatePresence>

      {/* Guided Tour Overlay */}
      <GuidedTourOverlay
        active={guidedTourActive && view === 'interior'}
        isLightMode={isLightMode}
        currentStation={tourStation}
        totalStations={INTERIOR_STATIONS.length}
        onSkip={handleTourSkip}
        onNext={handleTourNext}
        onPrevious={handleTourPrevious}
      />

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
        {/* TopBar - z-50 */}
        <div className="relative z-50">
          <TopBar
            isLightMode={isLightMode}
            theme={theme}
            onScreenshot={takeScreenshot}
            onFullscreen={toggleFullscreen}
            measurementMode={measurementMode}
            view={view}
            onToggleFloorplan={() => setShowFloorplan(prev => !prev)}
            onToggleMeasurement={() => setMeasurementMode(prev => !prev)}
            showFloorplan={showFloorplan}
            guidedTourActive={guidedTourActive}
            onToggleGuidedTour={() => view === 'interior' && setGuidedTourActive(prev => !prev)}
            onTogglePropertyInfo={() => setPropertyInfoOpen(prev => !prev)}
          />
        </div>

        {/* RoomInfoPanel - z-40 (below TopBar) */}
        <div className="relative z-40">
          <RoomInfoPanel activeInfo={activeInfo} stationIdx={guidedTourActive ? tourStation : stationIdx} theme={theme} />
        </div>

        {/* Bottom Navigation - z-50 */}
        <div className="relative z-50">
          <footer className="absolute inset-x-0 bottom-6 md:bottom-12 flex flex-col md:flex-row justify-between items-center md:items-end px-4 md:px-10 pointer-events-none gap-4">
            <NavigationDock
              view={view}
              onSwitchView={switchView}
              stationIdx={guidedTourActive ? tourStation : stationIdx}
              onStationChange={setStationIdx}
              isNight={isNight}
              onToggleNight={() => setIsNight(prev => !prev)}
              sunAngle={sunAngle}
              onSunAngleChange={setSunAngle}
              wallColor={wallColor}
              onWallColorChange={setWallColor}
              theme={theme}
              guidedTourActive={guidedTourActive}
              onToggleGuidedTour={() => view === 'interior' && setGuidedTourActive(prev => !prev)}
            />
            <CTAButton onClick={() => setAuditOpen(true)} isLightMode={isLightMode} />
          </footer>
        </div>
      </div>

      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} isLightMode={isLightMode} />
      <Loader containerStyles={{ background: isLightMode ? '#f5f5f0' : '#0a0a0a' }} barStyles={{ background: GOLD }} dataStyles={{ color: GOLD, fontSize: '10px', letterSpacing: '0.3em' }} />
      <PropertyInfoSidebar
        open={propertyInfoOpen}
        onClose={() => setPropertyInfoOpen(false)}
        isLightMode={isLightMode}
      />
    </div>
  );
}