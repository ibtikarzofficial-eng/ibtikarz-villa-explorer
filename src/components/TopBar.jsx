import React from 'react';
import { GOLD } from '../config/theme';

export default function TopBar({
    isLightMode,
    theme,
    onScreenshot,
    onFullscreen,
    measurementMode,
    view,
    onToggleFloorplan,
    onToggleMeasurement,
    showFloorplan,
    guidedTourActive,
    onToggleGuidedTour,
    splitScreenActive,
    onToggleSplitScreen,
    onTogglePropertyInfo, // NEW PROP
}) {
    const buttonClass = "w-10 h-10 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all hover:scale-105 active:scale-95";

    return (
        <header className="flex justify-between items-start pointer-events-auto">
            <div className="group cursor-pointer">
                <h1
                    className="text-xl md:text-2xl font-bold tracking-tight flex items-baseline transition-transform group-hover:scale-[1.01]"
                    style={{ color: theme.text }}
                >
                    IBTIKARZ<span style={{ color: GOLD }} className="ml-1 text-2xl md:text-3xl">.</span>
                </h1>
                <p style={{ color: GOLD }} className="text-[8px] md:text-[9px] tracking-[0.5em] uppercase font-semibold mt-2">
                    Exclusive Architectural Visualizer
                </p>
            </div>

            <div className="flex gap-3">
                {/* Guided Tour Toggle */}
                <button
                    onClick={onToggleGuidedTour}
                    title="Guided Tour (G)"
                    className={`${buttonClass} ${view === 'exterior' ? 'opacity-30 pointer-events-none' : ''}`}
                    style={{ backgroundColor: theme.panel, borderColor: theme.panelBorder, color: guidedTourActive && view === 'interior' ? GOLD : theme.textMuted }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </button>

                <button
                    onClick={onTogglePropertyInfo}
                    title="Property Info (I)"
                    className={buttonClass}
                    style={{ backgroundColor: theme.panel, borderColor: theme.panelBorder, color: theme.textMuted }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                </button>

                <button
                    onClick={onToggleFloorplan}
                    title="Floorplan (R)"
                    className={`${buttonClass} ${view === 'exterior' ? 'opacity-30 pointer-events-none' : ''}`}
                    style={{ backgroundColor: theme.panel, borderColor: theme.panelBorder, color: showFloorplan && view === 'interior' ? GOLD : theme.textMuted }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                </button>

                <button
                    onClick={onToggleMeasurement}
                    title="Measure (M)"
                    className={`${buttonClass} ${view === 'exterior' ? 'opacity-30 pointer-events-none' : ''}`}
                    style={{ backgroundColor: theme.panel, borderColor: theme.panelBorder, color: measurementMode ? GOLD : theme.textMuted }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4" /></svg>
                </button>

                <button onClick={onScreenshot} title="Screenshot (P)" className={buttonClass}
                    style={{ backgroundColor: theme.panel, borderColor: theme.panelBorder, color: theme.textMuted }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                </button>

                <button onClick={onFullscreen} title="Fullscreen (F)" className={buttonClass}
                    style={{ backgroundColor: theme.panel, borderColor: theme.panelBorder, color: theme.textMuted }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>
                </button>
            </div>
        </header>
    );
}