import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery_1.png';
import gallery2 from '../assets/gallery_2.png';
import gallery3 from '../assets/gallery_3.png';
import gallery4 from '../assets/gallery_4.png';
import gallery5 from '../assets/gallery_5.png';

const Gallery = () => {
    const images = [
        { src: gallery1, title: 'Modern Living', span: 'col-span-2 row-span-2' },
        { src: gallery2, title: 'Luxury Pool Side', span: 'col-span-1 row-span-1' },
        { src: gallery3, title: 'Minimalist Studio', span: 'col-span-1 row-span-1' },
        { src: gallery4, title: 'Elegant Facade', span: 'col-span-1 row-span-2' },
        { src: gallery5, title: 'Premium Interiors', span: 'col-span-1 row-span-1' },
    ];

    return (
        <section id="gallery" className="py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-accent text-[13px] font-bold uppercase tracking-[0.3em] mb-4">The Gallery</h2>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tighter leading-none">
                            VISUAL <br />
                            <span className="text-secondary/20 italic">EXCELLENCE</span>
                        </h1>
                    </motion.div>
                    <p className="max-w-sm text-secondary/60 text-sm font-medium leading-relaxed">
                        A visual documentation of our most prestigious architectural offerings.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className={`relative rounded-[2rem] overflow-hidden group ${img.span.replace('col-span-2', 'sm:col-span-2')}`}
                        >
                            <img
                                src={img.src}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt={img.title}
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-6 py-2 bg-white text-primary rounded-full text-[11px] font-black uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    View Space
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
