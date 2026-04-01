import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GOLD } from '../config/theme';

export default function RoomInfoPanel({ activeInfo, stationIdx, theme }) {
    return (
        <div className="absolute top-20 right-6 md:top-10 md:right-10 pointer-events-none z-40">
            <AnimatePresence mode="wait">
                {activeInfo && (
                    <motion.div
                        key={activeInfo.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.5 }}
                        className="w-[240px] md:w-[300px] backdrop-blur-[40px] p-6 md:p-8 border-l-[0.5px] pointer-events-auto"
                        style={{ backgroundColor: theme.panel, borderLeftColor: GOLD }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span style={{ color: GOLD }} className="text-[10px] tracking-[0.4em] font-bold">
                                STATION 0{stationIdx + 1}
                            </span>
                            <div className="h-[0.5px] flex-1" style={{ backgroundColor: theme.panelBorder }} />
                        </div>
                        <h3 className="font-semibold text-sm md:text-base tracking-[0.25em] uppercase mb-3" style={{ color: theme.text }}>
                            {activeInfo.label}
                        </h3>
                        <p className="text-[10px] md:text-[11px] leading-relaxed uppercase tracking-[0.2em]" style={{ color: theme.textMuted }}>
                            {activeInfo.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}