import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';

const Features = () => {
    return (
        <section id="features" className="py-32 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent text-[13px] font-bold uppercase tracking-[0.3em] mb-6">Our Advantages</h2>
                        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black mb-10 tracking-tight leading-[1.1] sm:leading-[0.9] break-words">
                            UNCOMPROMISING <br />
                            <span className="text-white/30">QUALITY</span> CONTROL.
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-medium mb-12 max-w-lg">
                            We've built a platform that handles the complexities of high-end rentals so you don't have to.
                        </p>
                        <div className="w-20 h-[2px] bg-accent" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="mb-6 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-white group-hover:text-primary transition-all duration-500">
                                    <feature.icon size={20} />
                                </div>
                                <h3 className="text-xl font-black mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
