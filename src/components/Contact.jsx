import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        property: '',
        budget: '',
        date: '',
    });

    const handleWhatsAppInquiry = (e) => {
        e.preventDefault();
        const { name, property, budget, date } = formData;
        const message = `Hi, I'm ${name}. I'm interested in renting ${property}. My budget is ${budget} and I would like to move in on ${date}.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/94714304378?text=${encodedMessage}`, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 bg-surface text-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 lg:p-24 shadow-[0_30px_100px_rgb(0,0,0,0.05)] border border-border/50 relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                        <div>
                            <h2 className="text-accent text-[13px] font-bold uppercase tracking-[0.3em] mb-6">Concierge</h2>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[1] sm:leading-[0.9]">
                                START YOUR <br />
                                <span className="text-secondary/40 italic">JOURNEY.</span>
                            </h1>
                            <p className="text-lg text-secondary/80 leading-relaxed font-medium mb-12 max-w-md">
                                From initial inquiry to key handover, our team is committed to providing a seamless transition into your new home.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary border border-border">
                                        <MessageCircle size={20} />
                                    </div>
                                    <span className="font-bold text-primary tracking-tight">Direct WhatsApp Support</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary border border-border">
                                        <ArrowRight size={20} />
                                    </div>
                                    <span className="font-bold text-primary tracking-tight">Personalized Property Curation</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleWhatsAppInquiry} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-secondary/40 ml-2">Name</label>
                                    <input required id="name" type="text" onChange={handleChange} className="w-full bg-surface border-b border-border px-4 py-4 focus:border-accent outline-none transition-all font-bold text-primary" placeholder="John Doe" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-secondary/40 ml-2">Property</label>
                                    <input required id="property" type="text" onChange={handleChange} className="w-full bg-surface border-b border-border px-4 py-4 focus:border-accent outline-none transition-all font-bold text-primary" placeholder="Penthouse 01" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-secondary/40 ml-2">Budget</label>
                                    <input required id="budget" type="text" onChange={handleChange} className="w-full bg-surface border-b border-border px-4 py-4 focus:border-accent outline-none transition-all font-bold text-primary" placeholder="Rs. 100k" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-secondary/40 ml-2">Move Date</label>
                                    <input required id="date" type="date" onChange={handleChange} className="w-full bg-surface border-b border-border px-4 py-4 focus:border-accent outline-none transition-all font-bold text-primary" />
                                </div>
                            </div>

                            <button type="submit" className="w-full py-6 bg-primary text-white font-black uppercase tracking-[0.3em] rounded-full hover:bg-accent transition-all duration-500 shadow-xl flex items-center justify-center gap-4 group">
                                Initiate Inquiry
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
