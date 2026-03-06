import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(properties.map(p => p.category))];

    const filteredProperties = activeCategory === 'All'
        ? properties
        : properties.filter(p => p.category === activeCategory);

    return (
        <section id="properties" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-accent text-[13px] font-bold uppercase tracking-[0.3em] mb-4">The Selection</h2>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-primary tracking-tighter leading-[1.1] sm:leading-none">
                                CURATED <br />
                                <span className="text-secondary/20 italic">COLLECTIONS</span>
                            </h1>

                            <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 scroll-smooth">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                            ? 'bg-primary text-white'
                                            : 'bg-surface text-secondary/40 hover:text-primary'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {filteredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="px-12 py-5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-black uppercase tracking-[0.2em] transition-all text-sm">
                        View All Listings
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PropertyList;
