import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary pt-32 pb-16 text-white/60 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32">
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-primary rounded-full" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter uppercase text-white">Lumina</span>
                        </div>
                        <p className="text-xl font-medium leading-[1.4] text-white/70">
                            The standard of high-end property curation. Experience architectural excellence and uncompromising luxury.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
                        <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-accent mb-8">Navigation</h5>
                            <ul className="space-y-4 text-sm font-bold text-white/50">
                                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">Identity</a></li>
                                <li><a href="#properties" className="hover:text-white transition-colors">Collections</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Concierge</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-accent mb-8">Categories</h5>
                            <ul className="space-y-4 text-sm font-bold text-white/50">
                                <li><a href="#" className="hover:text-white transition-colors">Villas</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Apartments</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Offices</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Studios</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-accent mb-8">Social</h5>
                            <ul className="space-y-4 text-sm font-bold text-white/50">
                                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-[11px] font-black text-white/40 uppercase tracking-[0.5em]">
                        LUMINA © 2024
                    </div>
                    <div className="flex gap-12 text-[11px] font-black uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    </div>
                    <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] hidden lg:block">
                        Colombo, Sri Lanka
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
