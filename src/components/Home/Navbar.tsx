"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
// import DssaLogo from "../../../public/latestlogo.png";
import DssaLogo from "../../../public/png dsaa d.png";


// Define dropdown items (similar to subCategories in CategoryNav)
const dropdownItems = {
  "Calls": [
    { name: "Research Track", link: "/calls/research-track" },
    { name: "Applications Track", link: "/calls/application-track" },
    { name: "Industry Track", link: "/calls/industry-track" },
    { name: "Special Sessions", link: "/calls/special-sessions" },
    { name: "Tutorials", link: "/calls/tutorials" }
  ],
  "Program": [
    { name: "Technical Program", link: "/program/technical-program" },
    { name: "Keynote Speakers", link: "/program/keynote-speakers" },
    { name: "Camera-Ready Instructions", link: "/program/camera-ready-instructions" },
    { name: "Special Sessions", link: "/program/special-sessions" },
    { name: "Tutorial", link: "/program/tutorial" }
  ],
  // Organization pages are top-level routes added to the project
  "Organizers": [
    { name: "Organizing Committee", link: "/organizing-committee" },
    { name: "Program Committee", link: "/program-committee" }
  ],

  "Venue": [
    { name: "Conference Venue ", link: "/venue" },
    { name: "Tourism at Delhi, India ", link: "/about-delhi" },
    { name: "Accomodation Details", link: "/venue" }
  ]
  
};

const navItems = [
  "Home",
  "Key Dates",
  "Calls",
  "Program",
  "Attend",
  "Organizers",
  "Venue",
  "Sponsors",
  // "IEEE CIS Travel Grant",
];

// Map nav labels to actual routes (pages created in the app)
const navLinks: Record<string, string> = {
  Home: '/',
  'Key Dates': '/key-dates',
  Calls: '/calls/research-track',
  Program: '/program/technical-program',
  Attend: '/attend',
  Organization: '/organizing-committee',
  Sponsors: '/sponsor',
  Venue: '/attend',
  // 'IEEE CIS Travel Grant': '/travel-grant',
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLLIElement | HTMLDivElement)[]>([]);

  // Reset refs when items change
  menuItemsRef.current = [];
  const addToRefs = (el: HTMLLIElement | HTMLDivElement | null) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  // Handle animation when menu opens/closes
  useEffect(() => {
    if (!menuRef.current) return;
    
    if (isOpen) {
      // Reset opacity and height first
      gsap.set(menuRef.current, { opacity: 1, height: 'auto' });
      
      // Menu opening animation
      gsap.fromTo(menuRef.current, 
        { height: 0 },
        {
          height: 'auto',
          duration: 0.5,
          ease: 'power3.out',
        }
      );
      
      // Animate menu items
      gsap.fromTo(
        menuItemsRef.current, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.05,
          duration: 0.4,
          delay: 0.1,
          ease: 'power2.out'
        }
      );
    } else if (menuItemsRef.current.length > 0) {
      // Menu closing animation
      gsap.to(menuItemsRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      });
      
      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.4,
        delay: 0.1,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(menuRef.current, { opacity: 0 });
        }
      });
    }
  }, [isOpen]);

  const handleMobileDropdownToggle = (item: string) => {
    setOpenMobileDropdown(openMobileDropdown === item ? null : item);
  };

  const hasDropdown = (item: string) => {
    return dropdownItems[item as keyof typeof dropdownItems];
  };

  return (
  <nav className="sticky top-0 z-50 w-full bg-[#FAFAFB] border-b border-[#E5E7EB] backdrop-blur-lg shadow-sm">
    {/* h-20 */}
      <div className="max-w-[1795px] mx-auto flex items-center justify-between px-6 xl:px-8 md:h-[90px] h-[70px]">
        {/* Logo */}
        <div className="flex items-center z-10 mr-2 cursor-pointer max-h-[70px] xl:max-h-[85px] w-auto">
          <Link href="/" aria-label="Home">
            <Image
              src={DssaLogo}
              alt="DSAA Logo"
              width={2000}
              height={2000}
              // responsive CSS sizes: smaller on mobile, original size on large screens
              className="mr-2 w-16 h-16 sm:w-12 sm:h-12 md:w-[70px] md:h-[70px] xl:w-[85px] xl:h-[85px] cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav (>=1280px) */}
        <ul className="hidden xl:flex flex-1 justify-center items-center gap-[40px]">
          {navItems.map((item) => (
            <li 
              key={item}
              className="relative md:h-[80px] h-[70px] flex items-center"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={navLinks[item] || '/'}
                className="font-inter font-normal text-[17px] leading-[28px] text-[#364153] hover:text-[#155DFC] transition-colors duration-200 flex items-center"
              >
                {item}
                {hasDropdown(item) && (
                  <span className="ml-1 inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                )}
              </Link>
              
              {/* Dropdown menu - positioned at navbar border like CategoryNav */}
              {hasDropdown(item) && hoveredItem === item && (
                <div className="absolute top-[80px] left-0 z-50 bg-white shadow-md p-4 min-w-[200px] border border-[#EEEEEE]">
                  <ul className="flex flex-col gap-3">
                    {dropdownItems[item as keyof typeof dropdownItems].map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <Link
                          href={dropdownItem.link}
                          className="font-inter font-normal text-[14px] leading-[100%] text-[#2E2E2E] hover:text-[#155DFC] transition duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button (>=1280px) */}
        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="w-[160px] h-[46px] flex items-center justify-center px-4 py-2 rounded-[12px] bg-[#155DFC] uppercase font-inter font-medium text-[16px] leading-[28px] text-white text-center hover:bg-[#0E44C0] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger (<=1280px) */}
        <button
          className="xl:hidden text-[#364153] z-10 transition-transform duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} className="text-[#155DFC]" />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`xl:hidden bg-white overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0 h-0 pointer-events-none'}`}
        style={{ boxShadow: "0 8px 12px -6px rgba(0,0,0,0.1)" }}
      >
        <div className="px-6 py-6 space-y-6 flex flex-col">
          <ul className="flex flex-col space-y-3 border-b border-gray-100 pb-6">
            {navItems.map((item) => (
              <li key={item} ref={addToRefs} className="w-full">
                {hasDropdown(item) ? (
                  <div className="w-full">
                    <button
                      onClick={() => handleMobileDropdownToggle(item)}
                      className="w-full flex items-center justify-between font-inter font-normal text-[18px] leading-[28px] text-[#364153] hover:text-[#155DFC] transition-colors duration-200 py-1"
                    >
                      {item}
                      <span className="ml-1 inline-block">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={`transition-transform duration-200 ${
                            openMobileDropdown === item ? 'rotate-180' : ''
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    {openMobileDropdown === item && (
                      <ul className="mt-3 ml-4 space-y-2 border-l-2 border-[#E5E7EB] pl-4">
                        {dropdownItems[item as keyof typeof dropdownItems].map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <Link
                              href={dropdownItem.link}
                              className="block font-inter font-normal text-[16px] leading-[24px] text-[#64748B] hover:text-[#155DFC] transition-colors duration-200 py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                      href={navLinks[item] || '/'}
                      className="block font-inter font-normal text-[18px] leading-[28px] text-[#364153] hover:text-[#155DFC] transition-colors duration-200 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div ref={addToRefs} className="pt-2">
            <Link
              href="/contact"
              className="w-full block text-center px-4 py-3.5 rounded-[12px] bg-[#155DFC] uppercase font-inter font-medium text-[16px] leading-[24px] text-white hover:bg-[#0E44C0] transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
