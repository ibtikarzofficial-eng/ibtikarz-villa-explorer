import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GOLD, MATERIALS } from '../config/theme';

// Just add these new props to the function signature (no other changes needed):
export default function NavigationDock({
    view,
    onSwitchView,
    stationIdx,
    onStationChange,
    isNight,
    onToggleNight,
    sunAngle,
    onSunAngleChange,
    wallColor,
    onWallColorChange,
    theme,
    guidedTourActive,
    onToggleGuidedTour,
    splitScreenActive,
    onToggleSplitScreen,
    onTogglePropertyInfo, // NEW PROP (for mobile access)
}) {
    return (
        <div
            className="pointer-events-auto flex flex-col md:flex-row items-center backdrop-blur-xl border rounded-[24px] md:rounded-full shadow-2xl w-full md:w-auto"
            style={{ backgroundColor: theme.navBg, borderColor: theme.navBorder }}
        >
            {/* Scene Toggle */}
            <div className="flex items-center justify-center w-full md:w-auto gap-3 px-6 py-3 border-b md:border-b-0 md:border-r"
                style={{ borderColor: theme.navBorder }}
            >
                <button
                    onClick={() => onSwitchView('exterior')}
                    className={`text-[9px] tracking-[0.3em] font-bold transition-colors ${view === 'exterior' ? 'text-[#d4af37]' : ''}`}
                    style={{ color: view === 'exterior' ? GOLD : theme.textMuted }}
                >
                    EXTERIOR
                </button>
                <span style={{ color: theme.navBorder }} className="text-[10px]">/</span>
                <button
                    onClick={() => onSwitchView('interior')}
                    className={`text-[9px] tracking-[0.3em] font-bold transition-colors ${view === 'interior' ? 'text-[#d4af37]' : ''}`}
                    style={{ color: view === 'interior' ? GOLD : theme.textMuted }}
                >
                    INTERIOR
                </button>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center px-4 py-3 w-full md:w-auto min-w-[280px]">
                <AnimatePresence mode="wait">
                    {view === 'exterior' ? (
                        <motion.div
                            key="ext-controls"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-4 w-full"
                        >
                            <div className="flex items-center gap-3 pr-4 border-r" style={{ borderColor: theme.navBorder }}>
                                {/* FIXED: Only show Sun/Moon toggle, no separate theme toggle */}
                                <button
                                    onClick={onToggleNight}
                                    className="transition-colors hover:scale-110"
                                    style={{ color: isNight ? GOLD : theme.textMuted }}
                                    title={isNight ? 'Switch to Day' : 'Switch to Night'}
                                >
                                    {isNight ? (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="5"></circle>
                                            <line x1="12" y1="1" x2="12" y2="3"></line>
                                            <line x1="12" y1="21" x2="12" y2="23"></line>
                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                            <line x1="1" y1="12" x2="3" y2="12"></line>
                                            <line x1="21" y1="12" x2="23" y2="12"></line>
                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                        </svg>
                                    )}
                                </button>

                                <div className={`flex items-center transition-opacity ${isNight ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                                    <input
                                        type="range" min="10" max="170" value={sunAngle}
                                        onChange={e => onSunAngleChange(Number(e.target.value))}
                                        className="w-20 md:w-28 h-1 bg-white/10 rounded-lg appearance-none accent-[#d4af37] cursor-pointer"
                                        style={{ backgroundColor: theme.navBorder }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 md:gap-3">
                                {MATERIALS.map((m) => (
                                    <button
                                        key={m.hex} onClick={() => onWallColorChange(m.hex)}
                                        className={`w-4 h-4 rounded-full transition-all duration-300 ${wallColor === m.hex ? 'scale-125 ring-1 ring-offset-2' : 'opacity-40 hover:opacity-100 hover:scale-110'}`}
                                        style={{ backgroundColor: m.hex, '--tw-ring-color': GOLD, ringOffsetColor: theme.navBg }}
                                        title={m.name}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="int-controls"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-6 w-full"
                        >
                            <button onClick={() => onStationChange((i) => (i - 1 + 3) % 3)} className="transition-colors hover:scale-110"
                                style={{ color: theme.textMuted }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            </button>
                            <span style={{ color: GOLD }} className="text-[9px] tracking-[0.4em] font-bold w-24 text-center uppercase">
                                AREA 0{stationIdx + 1}
                            </span>
                            <button onClick={() => onStationChange((i) => (i + 1) % 3)} className="transition-colors hover:scale-110"
                                style={{ color: theme.textMuted }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}