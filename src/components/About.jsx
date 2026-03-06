import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-surface overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl"
                                alt="Luxury Lifestyle"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 lg:-right-20 z-20 bg-primary p-8 sm:p-12 rounded-[1.5rem] sm:rounded-[2rem] text-white max-w-[200px] sm:max-w-xs"
                        >
                            <h4 className="text-2xl sm:text-4xl font-black mb-2 tracking-tighter">12YRS</h4>
                            <p className="text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-relaxed">
                                Defining the standard of high-end property curation in Sri Lanka.
                            </p>
                        </motion.div>

                        {/* Accent Circle */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-accent text-[13px] font-bold uppercase tracking-[0.3em] mb-6">Our Identity</h2>
                            <h1 className="text-5xl md:text-6xl font-black text-primary mb-10 tracking-tighter leading-[0.95]">
                                WE BELIEVE IN THE <br />
                                <span className="text-secondary/50 italic">SOUL</span> OF A HOME.
                            </h1>

                            <div className="space-y-8 text-lg text-secondary/80 leading-relaxed font-medium">
                                <p>
                                    LUMINA is more than a platform; it is a dedicated service for those who appreciate the intersection of architectural beauty and functional living.
                                </p>
                                <p>
                                    Our mission is to simplify the complex journey of renting by offering a curated selection that meets our rigorous standards for quality, safety, and aesthetic merit.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-4xl font-black text-primary mb-1 tracking-tighter">500+</h3>
                                    <p className="text-xs font-bold text-secondary/60 uppercase tracking-widest">Active Listings</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-primary mb-1 tracking-tighter">0%</h3>
                                    <p className="text-xs font-bold text-secondary/60 uppercase tracking-widest">Broker Fee</p>
                                </div>
                            </div>

                            <button className="mt-16 group flex items-center gap-4 bg-primary text-white pl-8 pr-2 py-2 rounded-full font-bold uppercase tracking-widest text-[13px] transition-all hover:pr-8">
                                Read Full Story
                                <div className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center transition-transform group-hover:bg-accent group-hover:text-white">
                                    <ArrowRight size={18} />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Simple ArrowRight icon placeholder since I can't import inside component code block logic here, assuming it's available or using SVG
const ArrowRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);

export default About;
