import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GOLD, GOLD_GRADIENT } from '../config/theme';

export default function PropertyInfoSidebar({ open, onClose, isLightMode }) {
    const [activeTab, setActiveTab] = useState('overview');

    const theme = isLightMode ? {
        bg: 'rgba(255, 255, 255, 0.95)',
        text: '#1a1a1a',
        textMuted: '#6b6b6b',
        border: 'rgba(0, 0, 0, 0.12)',
        cardBg: 'rgba(0, 0, 0, 0.05)',
    } : {
        bg: 'rgba(10, 10, 10, 0.95)',
        text: '#ffffff',
        textMuted: '#a0a0a0',
        border: 'rgba(255, 255, 255, 0.12)',
        cardBg: 'rgba(255, 255, 255, 0.05)',
    };

    const propertyData = {
        overview: {
            title: 'Property Overview',
            specs: [
                { label: 'Total Area', value: '4,500 sq ft' },
                { label: 'Bedrooms', value: '4' },
                { label: 'Bathrooms', value: '5' },
                { label: 'Floors', value: '3' },
                { label: 'Parking', value: '4 Cars' },
                { label: 'Year Built', value: '2026' },
            ],
        },
        features: {
            title: 'Premium Features',
            items: [
                'Smart Home Automation System',
                'Italian Marble Flooring',
                'Central AC with Zoned Control',
                'Rooftop Terrace with Pergola',
                'Private Elevator',
                'Home Theater Room',
                'Gym & Spa Area',
                '24/7 Security System',
            ],
        },
        location: {
            title: 'Location',
            details: [
                { label: 'Address', value: 'DHA Phase 6, Lahore' },
                { label: 'Nearby', value: 'Golf Course, Schools, Hospitals' },
                { label: 'Distance to Airport', value: '15 minutes' },
            ],
        },
    };

    const currentTab = propertyData[activeTab];

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Panel */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: open ? 0 : '100%' }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-full md:w-[420px] z-[90] shadow-2xl overflow-hidden"
                style={{ backgroundColor: theme.bg }}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between px-6 py-5 border-b"
                    style={{ borderColor: theme.border }}
                >
                    <div>
                        <p className="text-[9px] tracking-[0.3em] uppercase font-bold" style={{ color: GOLD }}>
                            Property Details
                        </p>
                        <h2 className="text-lg font-semibold mt-1" style={{ color: theme.text }}>
                            Modern Luxury Villa
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                        style={{ backgroundColor: theme.cardBg, color: theme.textMuted }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b px-6" style={{ borderColor: theme.border }}>
                    {Object.keys(propertyData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="flex-1 py-3 text-[9px] tracking-[0.2em] uppercase font-semibold transition-colors border-b-2"
                            style={{
                                color: activeTab === tab ? GOLD : theme.textMuted,
                                borderColor: activeTab === tab ? GOLD : 'transparent',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-5 pb-48">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-sm font-semibold mb-4" style={{ color: theme.text }}>
                                {currentTab.title}
                            </h3>

                            {currentTab.specs && (
                                <div className="space-y-3">
                                    {currentTab.specs.map((spec, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between items-center py-3 px-4 rounded-xl"
                                            style={{ backgroundColor: theme.cardBg }}
                                        >
                                            <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: theme.textMuted }}>
                                                {spec.label}
                                            </span>
                                            <span className="text-sm font-semibold" style={{ color: theme.text }}>
                                                {spec.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {currentTab.items && (
                                <div className="space-y-2">
                                    {currentTab.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 py-3 px-4 rounded-xl"
                                            style={{ backgroundColor: theme.cardBg }}
                                        >
                                            <div
                                                className="w-1.5 h-1.5 rounded-full"
                                                style={{ backgroundColor: GOLD }}
                                            />
                                            <span className="text-[11px] leading-relaxed" style={{ color: theme.text }}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {currentTab.details && (
                                <div className="space-y-3">
                                    {currentTab.details.map((detail, idx) => (
                                        <div
                                            key={idx}
                                            className="py-3 px-4 rounded-xl"
                                            style={{ backgroundColor: theme.cardBg }}
                                        >
                                            <p className="text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: theme.textMuted }}>
                                                {detail.label}
                                            </p>
                                            <p className="text-sm font-semibold" style={{ color: theme.text }}>
                                                {detail.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Developer Info */}
                    <div className="mt-8 pt-6 border-t" style={{ borderColor: theme.border }}>
                        <p className="text-[9px] tracking-[0.3em] uppercase font-bold mb-4" style={{ color: GOLD }}>
                            Developed By
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold"
                                style={{ background: GOLD_GRADIENT, color: '#000' }}
                            >
                                Z
                            </div>
                            <div>
                                <p className="text-sm font-semibold" style={{ color: theme.text }}>Zameen Developers</p>
                                <p className="text-[10px]" style={{ color: theme.textMuted }}>Trusted since 2010</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixed CTA Buttons at Bottom */}
                <div
                    className="absolute bottom-0 left-0 right-0 p-6 border-t space-y-3"
                    style={{
                        backgroundColor: theme.bg,
                        borderColor: theme.border,
                    }}
                >
                    {/* Book Virtual Tour */}
                    <a
                        href="https://wa.me/923247556451?text=I'm%20interested%20in%20booking%20a%20virtual%20tour%20of%20the%20property"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: GOLD_GRADIENT, color: '#000' }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Book Virtual Tour</span>
                    </a>

                    {/* Contact Agent */}
                    <a
                        href="mailto:info@ibtikarz.com"
                        className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] border"
                        style={{
                            backgroundColor: theme.cardBg,
                            borderColor: theme.border,
                            color: theme.text,
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Contact Agent</span>
                    </a>

                    {/* Download Brochure */}
                    <button
                        className="w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{ color: theme.textMuted }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span className="text-[9px] tracking-[0.2em] uppercase font-semibold">Download Brochure (PDF)</span>
                    </button>
                </div>
            </motion.div>
        </>
    );
}