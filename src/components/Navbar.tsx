"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, X } from 'lucide-react';

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    // Close sidebar when route changes
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsSidebarOpen(false);
    };

    const NavLinks = () => (
        <>
            <SignedOut>
                {isHome && (
                    <>
                        <div onClick={() => scrollToSection('home')}>
                            <MenuItem setActive={setActive} active={active} item="Home" />
                        </div>
                        <div onClick={() => scrollToSection('features')}>
                            <MenuItem setActive={setActive} active={active} item="Features" />
                        </div>
                        <div onClick={() => scrollToSection('testimonials')}>
                            <MenuItem setActive={setActive} active={active} item="Testimonials" />
                        </div>
                        <div onClick={() => scrollToSection('contact')}>
                            <MenuItem setActive={setActive} active={active} item="Contact" />
                        </div>
                    </>
                )}
            </SignedOut>
            
            <SignedIn>
                <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>
                <Link href="/weather" onClick={() => setIsSidebarOpen(false)}>
                    <MenuItem setActive={setActive} active={active} item="Weather" />
                </Link>
                <Link href="/dashboard" onClick={() => setIsSidebarOpen(false)}>
                    <MenuItem setActive={setActive} active={active} item="Dashboard" />
                </Link>
                <Link href="/news" onClick={() => setIsSidebarOpen(false)}>
                    <MenuItem setActive={setActive} active={active} item="Weather News" />
                </Link>
            </SignedIn>
        </>
    );

    return (
        <>
            {/* Mobile Sidebar Overlay */}
            <div 
                className={cn(
                    "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden",
                    isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )} 
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Sidebar */}
            <div 
                className={cn(
                    "fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden",
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="p-4 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <NavLinks />
                    </div>
                    <div className="mt-auto">
                        <SignedOut>
                            <div className="flex flex-col space-y-4">
                                <SignInButton mode="modal">
                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">
                                        Sign In
                                    </button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 rounded-lg text-sm">
                                        Sign Up
                                    </button>
                                </SignUpButton>
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex items-center justify-center">
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-40", className)}>
                <Menu setActive={setActive}>
                    <div className="flex items-center justify-between w-full">
                        <div className="hidden md:flex items-center space-x-4">
                            <NavLinks />
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <button 
                                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                onClick={() => setIsSidebarOpen(true)}
                                aria-label="Open menu"
                            >
                                <MenuIcon className="h-6 w-6" />
                            </button>
                            <div className="hidden md:flex items-center gap-3">
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">
                                            Sign In
                                        </button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 rounded-lg text-sm">
                                            Sign Up
                                        </button>
                                    </SignUpButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton afterSignOutUrl="/" />
                                </SignedIn>
                            </div>
                        </div>
                    </div>
                </Menu>
            </div>
        </>
    );
}

export default Navbar;
