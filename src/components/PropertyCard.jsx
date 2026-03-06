import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const PropertyCard = ({ property }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6 bg-secondary/5">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="px-5 py-2 bg-white/90 backdrop-blur-md text-[11px] font-black uppercase tracking-widest text-primary rounded-full shadow-sm">
                        {property.category}
                    </span>
                </div>

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                        <ArrowUpRight size={24} />
                    </button>
                </div>
            </div>

            <div className="px-2">
                <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-black text-primary tracking-tighter line-clamp-1">
                        {property.title}
                    </h3>
                    <span className="text-xl font-bold text-accent whitespace-nowrap">
                        {property.price.split('/')[0]}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-secondary/80 text-[13px] font-bold uppercase tracking-widest mb-4">
                    <MapPin size={14} className="text-accent" />
                    <span>{property.location}</span>
                </div>

                <p className="text-secondary/70 text-[14px] leading-relaxed line-clamp-2">
                    {property.description}
                </p>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
