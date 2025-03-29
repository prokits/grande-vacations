"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white ">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            GrandeVacations
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-gray-900">
                            Home
                        </Link>
                        <a href="/about" className="text-gray-700 hover:text-gray-900">
                            About
                        </a>
                        <a href="/services" className="text-gray-700 hover:text-gray-900">
                            Services
                        </a>
                        <a href="/contact" className="text-gray-700 hover:text-gray-900">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Home
                            </Link>
                            <a
                                href="/about"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                About
                            </a>
                            <a
                                href="/services"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Services
                            </a>
                            <a
                                href="/contact"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
