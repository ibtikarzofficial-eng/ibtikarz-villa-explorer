import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GOLD, GOLD_GRADIENT } from '../config/theme';

export default function AuditModal({ open, onClose, isLightMode }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const theme = isLightMode ? {
        bg: '#f5f5f0',
        text: '#1a1a1a',
        textMuted: '#6b6b6b',
        panelBorder: 'rgba(0, 0, 0, 0.08)',
        inputBg: 'rgba(0, 0, 0, 0.05)',
    } : {
        bg: '#0e0e0e',
        text: '#ffffff',
        textMuted: '#a0a0a0',
        panelBorder: 'rgba(255, 255, 255, 0.1)',
        inputBg: 'rgba(255, 255, 255, 0.05)',
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required';
        if (!form.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const waNumber = "923247556451";
        const waMessage = `*New Digital Audit Request - IbtikarZ*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Project Details:* ${form.message || 'No details provided.'}`;
        window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');

        setForm({ name: '', email: '', message: '' });
        setErrors({});
        onClose();
    };

    const inputClass = `w-full border text-xs tracking-wider px-4 py-3.5 outline-none transition-colors rounded-lg focus:scale-[1.01]`;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="absolute inset-0 z-[100] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

                    <motion.div
                        className="relative z-10 w-full max-w-[440px] border p-8 shadow-2xl rounded-2xl"
                        initial={{ y: 30, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ backgroundColor: theme.bg, borderColor: theme.panelBorder }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: GOLD_GRADIENT }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </div>
                            <div>
                                <p style={{ color: GOLD }} className="text-[10px] tracking-[0.4em] uppercase font-bold">IbtikarZ</p>
                                <h2 className="text-lg font-semibold tracking-tight" style={{ color: theme.text }}>Direct WhatsApp Connect</h2>
                            </div>
                        </div>

                        <p className="text-xs leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                            Skip the wait. Send us your project details directly on WhatsApp, and our architectural team will respond immediately.
                        </p>

                        <form onSubmit={submit} className="flex flex-col gap-4">
                            <input
                                required
                                placeholder="Full Name"
                                value={form.name}
                                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                className={inputClass}
                                style={{ backgroundColor: theme.inputBg, borderColor: errors.name ? 'rgba(239,68,68,0.5)' : theme.panelBorder, color: theme.text }}
                            />
                            <input
                                required
                                type="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                className={inputClass}
                                style={{ backgroundColor: theme.inputBg, borderColor: errors.email ? 'rgba(239,68,68,0.5)' : theme.panelBorder, color: theme.text }}
                            />
                            <textarea
                                rows={3}
                                placeholder="Project details (optional)"
                                value={form.message}
                                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                className={`${inputClass} resize-none`}
                                style={{ backgroundColor: theme.inputBg, borderColor: theme.panelBorder, color: theme.text }}
                            />
                            <button
                                type="submit"
                                className="text-black text-[10px] tracking-[0.3em] font-bold py-4 mt-2 uppercase transition-transform hover:scale-[1.02] rounded-lg"
                                style={{ background: GOLD_GRADIENT }}
                            >
                                Connect on WhatsApp
                            </button>
                        </form>

                        <button onClick={onClose} className="absolute top-4 right-4 text-xl leading-none transition-colors hover:scale-110"
                            style={{ color: theme.textMuted }}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}