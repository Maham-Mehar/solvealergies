'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
const NavContent = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const linkClasses = (path: string) =>
        `transition-colors duration-200 ${pathname === path ? 'text-[#11401C]' : 'text-[#BCB5B5]'} hover:text-[#11401C]`;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full bg-white px-4 py-3 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div>
                    <img src="/images/logo.png" alt="Logo" className="h-10" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex lg:gap-15 md:gap-10 font-bold text-sm">
                    <Link href="/" className={linkClasses('/')}>Home</Link>
                    <Link href="/features" className={linkClasses('/features')}>Features</Link>
                    <Link href="/faqs" className={linkClasses('/faqs')}>FAQs</Link>
                    <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button className="bg-[#11401C] text-sm font-bold text-white px-8 py-3 rounded-full">
                        Watch Webinar
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden mt-4">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col gap-6">
                    <button onClick={toggleMenu} className="self-end">
                        <X size={24} />
                    </button>
                    <Link href="/" className={linkClasses('/')} onClick={toggleMenu}>Home</Link>
                    <Link href="/features" className={linkClasses('/features')} onClick={toggleMenu}>Features</Link>
                    <Link href="/faqs" className={linkClasses('/faqs')} onClick={toggleMenu}>FAQs</Link>
                    <Link href="/contact" className={linkClasses('/contact')} onClick={toggleMenu}>Contact</Link>
                    <button className="self-start bg-[#11401C] text-sm font-bold text-white px-4 py-2 rounded-full mt-2">
                        Watch Webinar
                    </button>

                </div>
            </div>
        </header>
    );
};

export default NavContent;
