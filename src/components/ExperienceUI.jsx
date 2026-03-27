import { motion, AnimatePresence } from 'framer-motion'; // For smooth UI transitions

export default function ExperienceUI({ view, setView }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-6 md:p-12">

            {/* --- TOP BAR: BRANDING --- */}
            <header className="flex justify-between items-start pointer-events-auto">
                <div className="flex flex-col">
                    <h1 className="text-white text-3xl font-black tracking-tighter leading-none">
                        IBTIKARZ<span className="text-[#d4af37]">.</span>
                    </h1>
                    <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-1">
                        Premium Architectural Visualizer
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
                    <span className="text-[#d4af37] text-xs font-bold animate-pulse">● LIVE PROTOTYPE</span>
                </div>
            </header>

            {/* --- BOTTOM SECTION: NAVIGATION & CTA --- */}
            <footer className="flex flex-col gap-6 items-center pointer-events-auto">

                {/* Project Info Card (Shows up on Interior) */}
                <AnimatePresence>
                    {view === 'interior' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="bg-black/60 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl w-full max-w-sm"
                        >
                            <h2 className="text-white font-bold text-lg">Aghaaz 5-Marla Villa</h2>
                            <div className="flex gap-4 mt-2">
                                <div className="text-white/50 text-xs italic">3 Bed</div>
                                <div className="text-white/50 text-xs italic">Attached Baths</div>
                                <div className="text-white/50 text-xs italic">Modern Kitchen</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* The Main Control Dock */}
                <div className="flex items-center gap-1 p-1.5 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] w-fit shadow-2xl">
                    <button
                        onClick={() => setView('exterior')}
                        className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all duration-500 ${view === 'exterior'
                                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                : 'text-white/40 hover:text-white'
                            }`}
                    >
                        EXTERIOR
                    </button>
                    <button
                        onClick={() => setView('interior')}
                        className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all duration-500 ${view === 'interior'
                                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                : 'text-white/40 hover:text-white'
                            }`}
                    >
                        INTERIOR
                    </button>
                </div>

                {/* High-Contrast Primary CTA */}
                <button className="w-full max-w-sm bg-[#d4af37] hover:bg-[#b8962e] text-black font-black py-4 rounded-2xl transition-all active:scale-95 shadow-xl">
                    BOOK A SITE VISIT
                </button>
            </footer>
        </div>
    );
}