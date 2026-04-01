import React from 'react';
import { GOLD } from '../config/theme';

export default function CTAButton({ onClick, isLightMode }) {
    return (
        <button
            onClick={onClick}
            className="pointer-events-auto group relative overflow-hidden backdrop-blur-xl border text-[9px] tracking-[0.3em] font-bold py-3.5 px-8 rounded-full transition-all duration-500 uppercase shadow-2xl shrink-0 hover:scale-105 active:scale-95"
            style={{
                backgroundColor: isLightMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.1)',
                borderColor: 'rgba(255,255,255,0.1)',
                color: isLightMode ? '#ffffff' : '#a0a0a0',
            }}
        >
            <span className="relative z-10">Request Audit</span>
            <div className="absolute inset-0 bg-[#d4af37]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
    );
}