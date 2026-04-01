import React from 'react';
import { motion } from 'framer-motion';
import { GOLD, GOLD_GRADIENT } from '../config/theme';

export default function LoadingScreen({ isLightMode }) {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ backgroundColor: isLightMode ? '#f5f5f0' : '#0a0a0a' }}
        >
            <div className="flex flex-col items-center gap-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    <h1
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                        style={{ color: isLightMode ? '#1a1a1a' : '#ffffff' }}
                    >
                        IBTIKARZ<span style={{ color: GOLD }}>.</span>
                    </h1>
                    <p
                        className="text-[8px] tracking-[0.5em] uppercase font-semibold mt-2"
                        style={{ color: GOLD }}
                    >
                        Exclusive Architectural Visualizer
                    </p>
                </motion.div>

                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[1px] rounded-full overflow-hidden"
                    style={{ backgroundColor: isLightMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}
                >
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="h-full w-full"
                        style={{ background: GOLD_GRADIENT }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-[9px] tracking-[0.3em] uppercase"
                    style={{ color: isLightMode ? '#6b6b6b' : '#a0a0a0' }}
                >
                    Loading Experience
                </motion.p>
            </div>
        </motion.div>
    );
}