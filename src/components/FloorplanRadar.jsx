import React from 'react';
import { motion } from 'framer-motion';
import { GOLD, INTERIOR_STATIONS } from '../config/theme';

export default function FloorplanRadar({ stationIdx, isLightMode, visible }) {
    if (!visible) return null;

    const theme = isLightMode ? {
        bg: 'rgba(255, 255, 255, 0.95)',
        border: 'rgba(0, 0, 0, 0.12)',
        text: '#1a1a1a',
        line: '#1a1a1a',
    } : {
        bg: 'rgba(10, 10, 10, 0.95)',
        border: 'rgba(255, 255, 255, 0.12)',
        text: '#ffffff',
        line: '#ffffff',
    };

    const rooms = [
        { name: 'LIVING', x: 30, y: 35, pos: 0 },
        { name: 'DINING', x: 70, y: 35, pos: 1 },
        { name: 'KITCHEN', x: 70, y: 70, pos: 2 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-32 md:bottom-40 left-6 md:left-10 z-50 pointer-events-auto"
        >
            <div
                className="w-36 h-36 md:w-44 md:h-44 rounded-3xl backdrop-blur-2xl border shadow-2xl overflow-hidden relative"
                style={{
                    backgroundColor: theme.bg,
                    borderColor: theme.border,
                    boxShadow: isLightMode
                        ? '0 8px 32px rgba(0,0,0,0.12)'
                        : '0 8px 32px rgba(0,0,0,0.4)'
                }}
            >
                {/* Floorplan SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Outer walls */}
                    <rect
                        x="12" y="12" width="76" height="76"
                        fill="none"
                        stroke={theme.line}
                        strokeWidth="2.5"
                        rx="4"
                    />

                    {/* Room divisions */}
                    <line x1="50" y1="12" x2="50" y2="55" stroke={theme.line} strokeWidth="1.5" />
                    <line x1="12" y1="55" x2="88" y2="55" stroke={theme.line} strokeWidth="1.5" />

                    {/* Room labels */}
                    {rooms.map((room) => (
                        <text
                            key={room.name}
                            x={room.x}
                            y={room.y}
                            fontSize="3.5"
                            fill={theme.text}
                            textAnchor="middle"
                            style={{ fontWeight: '600', letterSpacing: '0.1em' }}
                        >
                            {room.name}
                        </text>
                    ))}
                </svg>

                {/* Animated Radar Dot */}
                <motion.div
                    key={stationIdx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full"
                    style={{
                        backgroundColor: GOLD,
                        left: `${INTERIOR_STATIONS[stationIdx]?.floorplanPos?.x || 50}%`,
                        top: `${INTERIOR_STATIONS[stationIdx]?.floorplanPos?.y || 50}%`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: `0 0 20px ${GOLD}, 0 0 40px ${GOLD}40`
                    }}
                >
                    {/* Pulse rings */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{ scale: 2.5, opacity: 0 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: 'easeOut'
                            }}
                            className="absolute inset-0 rounded-full"
                            style={{
                                border: `2px solid ${GOLD}`,
                                backgroundColor: 'transparent'
                            }}
                        />
                    ))}
                </motion.div>

                {/* Label Badge */}
                <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-[7px] tracking-[0.25em] uppercase font-bold whitespace-nowrap shadow-lg"
                    style={{
                        backgroundColor: GOLD,
                        color: '#000000',
                    }}
                >
                    Floorplan
                </div>
            </div>
        </motion.div>
    );
}