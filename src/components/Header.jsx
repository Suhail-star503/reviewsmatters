"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Scale,
  Gavel,
  HeartHandshake,
  Building2,
  FileText,
  ShieldCheck,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Divorce & Family Law",
    description: "Professional guidance for family and matrimonial matters.",
    href: "/practice-areas/divorce-family-law",
    icon: HeartHandshake,
  },
  {
    title: "Court Marriage",
    description: "Complete legal assistance for court marriage procedures.",
    href: "/practice-areas/court-marriage",
    icon: Scale,
  },
  {
    title: "Live-in Relationship",
    description: "Legal advice and protection for live-in relationships.",
    href: "/practice-areas/live-in-relationship",
    icon: ShieldCheck,
  },
  {
    title: "Criminal Law",
    description: "Strong legal representation for criminal matters.",
    href: "/practice-areas/criminal-law",
    icon: Gavel,
  },
  {
    title: "Civil Law",
    description: "Representation for civil disputes and legal claims.",
    href: "/practice-areas/civil-law",
    icon: FileText,
  },
  {
    title: "Corporate & Business",
    description: "Legal solutions for businesses and entrepreneurs.",
    href: "/practice-areas/corporate-business",
    icon: Building2,
  },
];

const navLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const ctaRef = useRef(null);
  const megaMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [practiceOpen, setPracticeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* INITIAL NAVBAR ANIMATION */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        headerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      tl.fromTo(
        logoRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.45"
      );

      tl.fromTo(
        ".desktop-nav-item",
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 },
        "-=0.3"
      );

      tl.fromTo(
        ctaRef.current,
        { x: 15, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.25"
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* SCROLL NAVBAR */

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY > 35) {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255,255,255,0.98)",
          borderColor: "rgba(17,17,17,0.09)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.07)",
          backdropFilter: "blur(18px)",
          duration: 0.35,
          ease: "power2.out",
        });
      } else {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255,255,255,0.96)",
          borderColor: "rgba(17,17,17,0.06)",
          boxShadow: "0 4px 25px rgba(0,0,0,0.025)",
          backdropFilter: "blur(10px)",
          duration: 0.35,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* PRACTICE AREA MEGA MENU */

  useEffect(() => {
    if (!megaMenuRef.current || !practiceOpen) return;

    gsap.fromTo(
      megaMenuRef.current,
      { opacity: 0, y: -12, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
    );

    gsap.fromTo(
      ".practice-item",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.045,
        delay: 0.05,
        ease: "power3.out",
      }
    );
  }, [practiceOpen]);

  /* MOBILE MENU */

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4 }
      );

      tl.fromTo(
        ".mobile-nav-item",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 },
        "-=0.2"
      );
    }, mobileMenuRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* CTA HOVER */

  const handleCtaEnter = () => {
    gsap.to(ctaRef.current, {
      y: -2,
      scale: 1.015,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleCtaLeave = () => {
    gsap.to(ctaRef.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  /* CLOSE MOBILE */

  const closeMobile = () => {
    setMobileOpen(false);
    setPracticeOpen(false);
  };

  return (
    <header ref={headerRef} className="fixed left-0 top-0 z-[100] w-full">
      <div ref={navRef} className="relative border-b border-black/[0.06] bg-white/[0.96]">
        <div className="mx-auto flex h-[78px] w-full max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-10 xl:px-0">

          {/* LOGO */}

          <Link ref={logoRef} href="/" onClick={closeMobile} className="group flex shrink-0 items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#151515] text-white">
              <Scale size={19} strokeWidth={1.5} className="relative z-10 transition-transform duration-500 group-hover:rotate-[-8deg]" />

              <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            </div>

            <div className="leading-none">
              <div className="text-[18px] font-semibold tracking-[-0.035em] text-[#151515] sm:text-[20px]">
                DEMO<span className="text-[#A88448]"> OF LAW</span>
              </div>

              <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.2em] text-[#777777]">
                Legal Excellence
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden items-center gap-1 lg:flex">

            {/* PRACTICE AREAS */}

            <div className="relative" onMouseEnter={() => setPracticeOpen(true)} onMouseLeave={() => setPracticeOpen(false)}>
              <button type="button" className="desktop-nav-item group relative flex items-center gap-1.5 px-4 py-3 text-[13px] font-medium text-[#303030] transition-colors duration-300 hover:text-[#A88448]">
                Practice Areas

                <ChevronDown size={14} strokeWidth={1.7} className={`transition-transform duration-300 ${practiceOpen ? "rotate-180" : ""}`} />

                <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-[#A88448] transition-transform duration-500 group-hover:scale-x-100" />
              </button>

              {/* MEGA MENU */}

              {practiceOpen && (
                <div ref={megaMenuRef} className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                    <div className="grid grid-cols-2 gap-1">
                      {practiceAreas.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link key={item.title} href={item.href} className="practice-item group flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-[#F7F5F0]">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/[0.08] bg-white text-[#A88448] transition-all duration-300 group-hover:border-[#A88448]/30 group-hover:bg-[#A88448] group-hover:text-white">
                              <Icon size={17} strokeWidth={1.6} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <h3 className="text-[13px] font-semibold text-[#171717]">
                                  {item.title}
                                </h3>

                                <ArrowUpRight size={14} className="shrink-0 text-[#777777] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                              </div>

                              <p className="mt-1 max-w-[280px] text-[11px] leading-5 text-[#707070]">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* MEGA MENU FOOTER */}

                    <div className="mt-2 flex items-center justify-between rounded-xl bg-[#F7F5F0] px-5 py-4">
                      <div>
                        <p className="text-[12px] font-semibold text-[#171717]">
                          Not sure which service you need?
                        </p>

                        <p className="mt-1 text-[10px] text-[#707070]">
                          Speak with our legal team.
                        </p>
                      </div>

                      <Link href="/contact" className="group flex items-center gap-1.5 text-[11px] font-semibold text-[#A88448]">
                        Get legal help

                        <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* NORMAL LINKS */}

            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="desktop-nav-item group relative px-4 py-3 text-[13px] font-medium text-[#303030] transition-colors duration-300 hover:text-[#A88448]">
                {item.label}

                <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-[#A88448] transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}

          <div className="hidden lg:block">
            <Link ref={ctaRef} href="/contact" onMouseEnter={handleCtaEnter} onMouseLeave={handleCtaLeave} className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#151515] px-5 text-[12px] font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#252525]">
              <span className="text-white">Book a Consultation</span>

              <ArrowUpRight size={14} strokeWidth={1.8} className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}

          <button type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((prev) => !prev)} className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] bg-white text-[#151515] lg:hidden">
            {mobileOpen ? (
              <X size={19} strokeWidth={1.6} />
            ) : (
              <Menu size={19} strokeWidth={1.6} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}

        {mobileOpen && (
          <div ref={mobileMenuRef} className="absolute left-0 right-0 top-full max-h-[calc(100vh-78px)] overflow-y-auto border-b border-black/[0.08] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.1)] lg:hidden">
            <div className="px-5 py-6 sm:px-8">
              <nav className="flex flex-col">

                {/* MOBILE PRACTICE AREAS */}

                <div className="mobile-nav-item border-b border-black/[0.07]">
                  <button type="button" onClick={() => setPracticeOpen((prev) => !prev)} className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium text-[#171717]">
                    Practice Areas

                    <ChevronDown size={17} className={`text-[#444444] transition-transform duration-300 ${practiceOpen ? "rotate-180" : ""}`} />
                  </button>

                  {practiceOpen && (
                    <div className="pb-3">
                      {practiceAreas.map((item) => (
                        <Link key={item.title} href={item.href} onClick={closeMobile} className="flex items-center gap-3 rounded-lg px-3 py-3 text-[13px] text-[#4A4A4A] transition-colors hover:bg-[#F7F5F0] hover:text-[#111111]">
                          <item.icon size={15} className="shrink-0 text-[#A88448]" />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* MOBILE LINKS */}

                {navLinks.map((item) => (
                  <Link key={item.label} href={item.href} onClick={closeMobile} className="mobile-nav-item flex items-center justify-between border-b border-black/[0.07] py-4 text-[15px] font-medium text-[#171717] transition-colors hover:text-[#A88448]">
                    <span>{item.label}</span>

                    <ArrowUpRight size={16} className="text-[#888888]" />
                  </Link>
                ))}

                {/* MOBILE CTA */}

                <div className="mobile-nav-item pt-6">
                  <Link href="/contact" onClick={closeMobile} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#151515] text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#252525]">
                    <span className="text-white">Book a Consultation</span>

                    <ArrowUpRight size={15} className="text-white" />
                  </Link>
                </div>

                {/* TRUST MESSAGE */}

                <div className="mobile-nav-item mt-6 rounded-xl bg-[#F7F5F0] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A88448]">
                    Legal assistance
                  </p>

                  <p className="mt-2 text-[12px] leading-5 text-[#606060]">
                    Speak with our legal team about your situation and understand your available options.
                  </p>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}