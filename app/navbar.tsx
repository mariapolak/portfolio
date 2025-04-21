"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Navigation items array
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div>
            <div className="lg:hidden">
                {/* Icon for Mobile Menu */}
                <div className="fixed top-0 right-0 p-4  z-50">
                    <button
                        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center 
                        align-middle text-xs font-medium uppercase text-inherit
                        transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={toggleMobileMenu}
                        type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 hover:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 flex h-[calc(100vh-20rem)] w-full max-w-[20rem] flex-col pt-4 pl-2 text-gray-700
                        tansform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden z-50`}>
                    <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal">
                        {navItems.map((item, index) => (
                        <div role="button" key={index}
                            className="flex items-center w-full p-3 leading-tight transition-all text-start">
                            <Link
                                href={item.href}
                                className="flex items-center hover:text-gray-400 hover:underline underline-offset-5 active:text-blue-500 relative pl-5"
                                id={`nav-link-${item.href.replace("#", "")}`}
                            >
                                {typeof window !== "undefined" && window.location.hash === item.href && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full"></span>
                                )}
                                0{index} {item.name}
                            </Link>
                        </div>
                    ))}
                    </nav>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block fixed top-0 flex h-[calc(100vh-20rem)] w-full max-w-[20rem] flex-col pt-4 pl-2 text-gray-700">
                <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal">
                    {navItems.map((item, index) => (
                        <div role="button" key={index}
                            className="flex items-center w-full p-3 leading-tight transition-all text-start">
                            <Link
                                href={item.href}
                                className="flex items-center hover:text-gray-400 hover:underline underline-offset-5 active:text-blue-500 relative pl-5"
                                id={`nav-link-${item.href.replace("#", "")}`}
                            >
                                {typeof window !== "undefined" && window.location.hash === item.href && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full"></span>
                                )}
                                0{index} {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}