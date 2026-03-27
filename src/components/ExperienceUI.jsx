import { motion, AnimatePresence } from 'framer-motion'; // For smooth UI transitions

export default function ExperienceUI({ view, setView }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-8">
            {/* Top Navigation - Matching your Website */}
            <div className="flex justify-between items-center pointer-events-auto">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold tracking-tight">IBTIKARZ<span className="text-[#d4af37]">.</span></h1>
                    <p className="text-[#d4af37] text-[9px] tracking-[0.4em] uppercase font-light">Architectural Visualizer</p>
                </div>
                <div className="hidden md:flex gap-8 text-[10px] tracking-widest uppercase text-white/60">
                    <span className="cursor-pointer hover:text-white transition-colors">Services</span>
                    <span className="cursor-pointer hover:text-white transition-colors">Products</span>
                    <span className="cursor-pointer hover:text-white transition-colors">About</span>
                </div>
            </div>

            {/* Center Display - Only shows when loading or switching */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-20">
                <h2 className="text-white text-6xl font-serif italic tracking-tighter">Aghaaz</h2>
            </div>

            {/* Bottom Controls - Configurator Style */}
            <div className="flex flex-col items-center gap-8 pointer-events-auto">

                {/* Mode Toggles */}
                <div className="flex bg-black/40 backdrop-blur-3xl border border-white/5 p-1 rounded-full shadow-2xl">
                    <button
                        onClick={() => setView('exterior')}
                        className={`px-10 py-3 rounded-full text-[10px] tracking-[0.2em] font-bold transition-all duration-700 ${view === 'exterior' ? 'bg-[#d4af37] text-black' : 'text-white/40 hover:text-white'
                            }`}
                    >
                        EXTERIOR
                    </button>
                    <button
                        onClick={() => setView('interior')}
                        className={`px-10 py-3 rounded-full text-[10px] tracking-[0.2em] font-bold transition-all duration-700 ${view === 'interior' ? 'bg-[#d4af37] text-black' : 'text-white/40 hover:text-white'
                            }`}
                    >
                        INTERIOR
                    </button>
                </div>

                {/* Primary Action */}
                <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] tracking-[0.3em] font-bold py-5 px-16 rounded-sm transition-all uppercase active:scale-95">
                    Request A Digital Audit
                </button>
            </div>
        </div>
    );
}