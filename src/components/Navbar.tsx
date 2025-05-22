"use client";
import React, { useState } from "react";
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
 
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const pathname = usePathname();
    const isHome = pathname === '/';

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div className="flex items-center justify-between w-full">
                    {/* Left side navigation links */}
                    <div className="flex items-center space-x-4">
                        {/* Show these links on the homepage for non-authenticated users */}
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
                        
                        {/* Show these links for authenticated users */}
                        <SignedIn>
                            <Link href="/">
                                <MenuItem setActive={setActive} active={active} item="Home" />
                            </Link>
                            <Link href="/weather">
                                <MenuItem setActive={setActive} active={active} item="Weather" />
                            </Link>
                            <Link href="/dashboard">
                                <MenuItem setActive={setActive} active={active} item="Dashboard" />
                            </Link>
                            <Link href="/news">
                                <MenuItem setActive={setActive} active={active} item="Weather News" />
                            </Link>
                        </SignedIn>
                    </div>
                    
                    {/* Right side auth buttons */}
                    <div className="flex items-center gap-3">
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
            </Menu>
        </div>
    );
}

export default Navbar;
