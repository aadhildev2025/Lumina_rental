import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center bg-primary overflow-hidden">
            {/* Split Screen Background */}
            <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-full bg-primary" />
                <div className="w-full lg:w-1/2 h-full relative">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
                        className="w-full h-full object-cover"
                        alt="Modern Architecture"
                    />
                    <div className="absolute inset-0 bg-primary/20 lg:bg-transparent lg:bg-gradient-to-r lg:from-primary lg:to-transparent" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 lg:pt-20 lg:pb-0">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 text-accent text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.3em] mb-6 sm:mb-8">
                            <span className="w-6 sm:w-8 h-[1px] bg-accent" />
                            Curated Living
                        </span>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-[1.1] sm:leading-[0.9] mb-8 sm:mb-10 tracking-tighter">
                            THE ART OF <br />
                            <span className="text-white/20 outline-text">MODERN</span> <br className="sm:hidden" /> LIVING
                        </h1>

                        <p className="text-sm sm:text-lg md:text-xl text-white/70 mb-10 sm:mb-12 max-w-xl leading-relaxed font-medium">
                            Experience architectural excellence and uncompromising luxury. We connect you with the most exclusive rental properties in Sri Lanka.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                            <a
                                href="#properties"
                                className="group flex items-center gap-4 text-white text-[13px] sm:text-[15px] font-bold uppercase tracking-widest border-b-2 border-accent pb-2 transition-all hover:border-white"
                            >
                                Explore Collections
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>

                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-secondary/20 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-white/60 text-[11px] sm:text-[13px] font-bold">12k+ Renters</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-12 left-6 right-6 hidden lg:flex items-end justify-between z-10">
                <div className="flex gap-4">
                    <div className="w-12 h-[2px] bg-white/20" />
                    <div className="w-12 h-[2px] bg-white" />
                    <div className="w-12 h-[2px] bg-white/20" />
                </div>
                <div className="text-white/20 text-sm font-black uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">
                    Est. 2024
                </div>
            </div>

            <style>{`
                .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                }
            `}</style>
        </section>
    );
};

export default Hero;
