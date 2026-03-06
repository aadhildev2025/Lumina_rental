import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Collections', href: '#properties' },
        { name: 'Our Identity', href: '#about' },
        { name: 'Benefits', href: '#features' },
        { name: 'Gallery', href: '#gallery' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6',
                isScrolled ? 'py-4' : 'py-8'
            )}
        >
            <div
                className={cn(
                    'max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 transition-all duration-500 rounded-full border relative z-50',
                    isScrolled
                        ? 'bg-white/80 backdrop-blur-xl border-border/50 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                        : isMobileMenuOpen ? 'bg-white py-4 border-transparent' : 'bg-transparent border-transparent py-4'
                )}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <span className={cn(
                        "text-xl font-extrabold tracking-tighter uppercase",
                        isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
                    )}>
                        Lumina
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[13px] font-bold uppercase tracking-widest hover:text-accent transition-colors",
                                isScrolled ? "text-primary/95" : "text-white/95"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-widest transition-all",
                            isScrolled
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "bg-white text-primary hover:bg-white/90"
                        )}
                    >
                        Inquire
                        <ArrowRight size={14} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-full",
                        isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                    <div className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-black text-primary hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-8 px-12 py-5 bg-primary text-white rounded-full text-lg font-bold uppercase tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
