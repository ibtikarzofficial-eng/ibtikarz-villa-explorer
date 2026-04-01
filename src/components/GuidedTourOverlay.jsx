import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GOLD } from '../config/theme';

export default function GuidedTourOverlay({ active, isLightMode, currentStation, totalStations, onSkip, onNext, onPrevious }) {
    if (!active) return null;

    const theme = isLightMode ? {
        bg: 'rgba(255, 255, 255, 0.95)',
        text: '#1a1a1a',
        textMuted: '#6b6b6b',
        border: 'rgba(0, 0, 0, 0.12)',
    } : {
        bg: 'rgba(10, 10, 10, 0.95)',
        text: '#ffffff',
        textMuted: '#a0a0a0',
        border: 'rgba(255, 255, 255, 0.12)',
    };

    const progress = ((currentStation + 1) / totalStations) * 100;

    return (
        <div className="absolute inset-0 z-[60] pointer-events-none">
            {/* Top Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: theme.border }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                    style={{ backgroundColor: GOLD }}
                />
            </div>

            {/* Station Counter */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 py-2 rounded-full backdrop-blur-xl border shadow-xl"
                    style={{ backgroundColor: theme.bg, borderColor: theme.border }}
                >
                    <p className="text-[9px] tracking-[0.3em] uppercase font-bold" style={{ color: GOLD }}>
                        Station {currentStation + 1} of {totalStations}
                    </p>
                </motion.div>
            </div>

            {/* Skip Button */}
            <button
                onClick={onSkip}
                className="absolute top-6 right-10 pointer-events-auto px-6 py-2.5 rounded-full backdrop-blur-xl border text-[9px] tracking-[0.25em] uppercase font-bold transition-all hover:scale-105 active:scale-95"
                style={{
                    backgroundColor: theme.bg,
                    borderColor: theme.border,
                    color: theme.textMuted,
                }}
            >
                Skip Tour
            </button>

            {/* Navigation Arrows */}
            <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex items-center gap-6 pointer-events-auto">
                <button
                    onClick={onPrevious}
                    disabled={currentStation === 0}
                    className="w-14 h-14 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                        backgroundColor: theme.bg,
                        borderColor: theme.border,
                        color: currentStation === 0 ? theme.textMuted : GOLD,
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="text-center">
                    <p className="text-[8px] tracking-[0.2em] uppercase font-bold mb-1" style={{ color: GOLD }}>
                        Guided Tour
                    </p>
                    <p className="text-[10px]" style={{ color: theme.textMuted }}>
                        Auto-gliding through spaces
                    </p>
                </div>

                <button
                    onClick={onNext}
                    disabled={currentStation === totalStations - 1}
                    className="w-14 h-14 rounded-full backdrop-blur-xl border flex items-center justify-center transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                        backgroundColor: theme.bg,
                        borderColor: theme.border,
                        color: currentStation === totalStations - 1 ? theme.textMuted : GOLD,
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}