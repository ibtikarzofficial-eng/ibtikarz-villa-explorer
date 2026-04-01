import React, { useState, useRef } from 'react';
import { GOLD } from '../config/theme';

export default function MeasurementTool({ enabled, onClose, isLightMode }) {
    const [points, setPoints] = useState([]);
    const [distance, setDistance] = useState(0);

    const theme = isLightMode ? {
        bg: 'rgba(255, 255, 255, 0.95)',
        text: '#1a1a1a',
        border: 'rgba(0, 0, 0, 0.1)',
    } : {
        bg: 'rgba(10, 10, 10, 0.95)',
        text: '#ffffff',
        border: 'rgba(255, 255, 255, 0.1)',
    };

    const handleCanvasClick = (e) => {
        if (points.length >= 2) {
            setPoints([e.clientX, e.clientY]);
            setDistance(0);
            return;
        }

        const newPoints = [...points, e.clientX, e.clientY];
        setPoints(newPoints);

        if (newPoints.length === 4) {
            const dx = newPoints[2] - newPoints[0];
            const dy = newPoints[3] - newPoints[1];
            const dist = Math.sqrt(dx * dx + dy * dy) * 0.1;
            setDistance(dist.toFixed(2));
        }
    };

    if (!enabled) return null;

    return (
        <div className="absolute inset-0 z-40 pointer-events-auto">
            <div
                className="absolute top-24 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-xl border shadow-xl"
                style={{ backgroundColor: theme.bg, borderColor: theme.border }}
            >
                <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: theme.text }}>
                    {points.length === 0 ? 'Click start point' : points.length === 2 ? 'Click end point' : `Distance: ${distance}m - Click to reset`}
                </p>
            </div>

            <div onClick={handleCanvasClick} className="absolute inset-0 cursor-crosshair" />

            <button
                onClick={onClose}
                className="absolute top-24 right-10 w-10 h-10 rounded-full backdrop-blur-xl border flex items-center justify-center hover:scale-105 transition-transform"
                style={{ backgroundColor: theme.bg, borderColor: theme.border, color: theme.text }}
            >
                ✕
            </button>

            {points.length === 4 && (
                <svg className="absolute inset-0 pointer-events-none">
                    <line x1={points[0]} y1={points[1]} x2={points[2]} y2={points[3]} stroke={GOLD} strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx={points[0]} cy={points[1]} r="4" fill={GOLD} />
                    <circle cx={points[2]} cy={points[3]} r="4" fill={GOLD} />
                </svg>
            )}
        </div>
    );
}