"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    MessageSquare,
    QrCode,
    Star,
    TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);
    const dashboardRef = useRef(null);
    const phoneRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            /* ============================================================
               INITIAL STATE
            ============================================================ */

            gsap.set(".hero-badge", {
                opacity: 0,
                y: 18,
            });

            gsap.set(".hero-word", {
                opacity: 0,
                y: 45,
            });

            gsap.set(".hero-description", {
                opacity: 0,
                y: 25,
            });

            gsap.set(".hero-actions", {
                opacity: 0,
                y: 25,
            });

            gsap.set(".hero-trust", {
                opacity: 0,
                y: 20,
            });

            gsap.set(".hero-dashboard", {
                opacity: 0,
                y: 70,
                scale: 0.94,
                rotateX: 8,
            });

            gsap.set(".hero-phone", {
                opacity: 0,
                x: 50,
                y: 30,
                rotate: 5,
            });

            gsap.set(".hero-floating-card", {
                opacity: 0,
                scale: 0.85,
            });

            /* ============================================================
               ENTRANCE ANIMATION
            ============================================================ */

            const intro = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            intro
                .to(".hero-badge", {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                })
                .to(".hero-word", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.08,
                }, "-=0.35")
                .to(".hero-description", {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                }, "-=0.45")
                .to(".hero-actions", {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                }, "-=0.45")
                .to(".hero-trust", {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                }, "-=0.4")
                .to(".hero-dashboard", {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 1.15,
                    ease: "power4.out",
                }, "-=0.75")
                .to(".hero-phone", {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    duration: 0.9,
                    ease: "power4.out",
                }, "-=0.7")
                .to(".hero-floating-card", {
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "back.out(1.4)",
                }, "-=0.5");

            /* ============================================================
               FLOATING MOTION
            ============================================================ */

            gsap.to(".hero-phone", {
                y: -10,
                duration: 3.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".hero-floating-card-1", {
                y: -7,
                duration: 3.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".hero-floating-card-2", {
                y: 7,
                duration: 3.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* ============================================================
               DASHBOARD HOVER
            ============================================================ */

            const dashboard = dashboardRef.current;

            if (dashboard) {
                const handleMove = (event) => {
                    const rect = dashboard.getBoundingClientRect();

                    const x = (event.clientX - rect.left) / rect.width - 0.5;

                    const y = (event.clientY - rect.top) / rect.height - 0.5;

                    gsap.to(dashboard, {
                        rotateY: x * 3,
                        rotateX: -y * 2,
                        duration: 0.5,
                        ease: "power3.out",
                    });
                };

                const handleLeave = () => {
                    gsap.to(dashboard, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 0.7,
                        ease: "power3.out",
                    });
                };

                dashboard.addEventListener("mousemove", handleMove);
                dashboard.addEventListener("mouseleave", handleLeave);

                return () => {
                    dashboard.removeEventListener("mousemove", handleMove);
                    dashboard.removeEventListener("mouseleave", handleLeave);
                };
            }
        }, section);

        /* ============================================================
           SUBTLE SCROLL PARALLAX
        ============================================================ */

        const parallax = gsap.to(".hero-visual", {
            y: 80,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });

        return () => {
            ctx.revert();
            parallax.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#F8F7F4] text-[#171715]">
            {/* ============================================================
          BACKGROUND
      ============================================================ */}

            <div className="pointer-events-none absolute inset-0">
                {/* Main warm glow */}

                <div className="absolute left-[20%] top-[-15%] h-[600px] w-[600px] rounded-full bg-[#B59A63]/[0.08] blur-[120px]" />

                {/* Right glow */}

                <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#B59A63]/[0.05] blur-[100px]" />

                {/* Fine grid */}

                <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(23,23,21,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,21,0.035)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
            </div>

            {/* ============================================================
          HERO CONTENT
      ============================================================ */}

            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] flex-col justify-center px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-22 xl:px-0">
                <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                    {/* ========================================================
              LEFT CONTENT
          ======================================================== */}

                    <div className="relative z-20 max-w-[600px]">
                        {/* Badge */}

                        <div className="hero-badge mb-7">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#B59A63]/25 bg-white/70 px-3.5 py-2 shadow-[0_4px_20px_rgba(23,23,21,0.04)] backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B59A63] opacity-40" />

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B59A63]" />
                                </span>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#55534D]">
                                    Built for local businesses
                                </span>
                            </div>
                        </div>

                        {/* Heading */}

                        <h1 className="max-w-[650px] text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#171715] sm:text-[64px] lg:text-[68px] xl:text-[76px]">
                            <span className="hero-word block">
                                Turn happy
                            </span>

                            <span className="hero-word block">
                                customers into
                            </span>

                            <span className="hero-word block text-[#B59A63]">
                                stronger reviews.
                            </span>
                        </h1>

                        {/* Description */}

                        <p className="hero-description mt-7 max-w-[540px] text-[15px] leading-7 text-[#77746D] sm:text-[16px]">
                            Give customers an easy way to share their experience, collect private feedback, and make it simple for satisfied customers to leave a Google review.
                        </p>

                        {/* Actions */}

                        <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link href="/authr" className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#B59A63] px-6 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5">
                                Start growing your reputation

                                <ArrowRight size={16} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link href="#how-it-works" className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-black/[0.10] bg-white/70 px-5 text-[13px] font-medium text-[#33322F] backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white">
                                See how it works

                                <ArrowUpRight size={15} strokeWidth={1.7} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>

                        {/* Trust */}

                        <div className="hero-trust mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-[#77746D]">
                            <div className="flex items-center gap-2">
                                <Check size={14} strokeWidth={2} className="text-[#B59A63]" />

                                <span>No complicated setup</span>
                            </div>

                            <div className="h-3 w-px bg-black/10" />

                            <div className="flex items-center gap-2">
                                <Check size={14} strokeWidth={2} className="text-[#B59A63]" />

                                <span>QR-powered feedback</span>
                            </div>
                        </div>
                    </div>

                    {/* ========================================================
              RIGHT PRODUCT VISUAL
          ======================================================== */}

                    <div className="hero-visual relative flex min-h-[500px] items-center justify-center lg:min-h-[620px]">
                        {/* Ambient circle */}

                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B59A63]/10 sm:h-[520px] sm:w-[520px]" />

                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B59A63]/[0.07] blur-[80px] sm:h-[400px] sm:w-[400px]" />

                        {/* ======================================================
                DASHBOARD
            ======================================================= */}

                        <div ref={dashboardRef} className="hero-dashboard relative z-10 w-full max-w-[610px] [transform-style:preserve-3d] [perspective:1200px]">
                            <div className="overflow-hidden rounded-2xl border border-black/[0.09] bg-white shadow-[0_35px_90px_rgba(23,23,21,0.14)]">
                                {/* Browser bar */}

                                <div className="flex h-11 items-center justify-between border-b border-black/[0.07] bg-[#FBFAF8] px-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                                    </div>

                                    <div className="rounded-md bg-black/[0.035] px-8 py-1.5 text-[8px] text-[#A19E96]">
                                        app.reviewflow.local
                                    </div>

                                    <div className="w-10" />
                                </div>

                                {/* Dashboard */}

                                <div className="p-4 sm:p-6">
                                    {/* Dashboard header */}

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A19E96]">
                                                Reputation overview
                                            </p>

                                            <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.035em] text-[#171715]">
                                                Your business
                                            </h3>
                                        </div>

                                        <div className="rounded-lg border border-black/[0.07] bg-[#FBFAF8] px-3 py-2 text-[9px] font-medium text-[#77746D]">
                                            Last 30 days
                                        </div>
                                    </div>

                                    {/* Stats */}

                                    <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                                        {/* Rating */}

                                        <div className="rounded-xl border border-black/[0.07] bg-[#FBFAF8] p-3 sm:p-4">
                                            <div className="flex items-center gap-1.5">
                                                <Star size={13} fill="#B59A63" className="text-[#B59A63]" />

                                                <span className="text-[8px] font-medium uppercase tracking-[0.08em] text-[#A19E96]">
                                                    Rating
                                                </span>
                                            </div>

                                            <div className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#171715]">
                                                4.8
                                            </div>

                                            <div className="mt-1 text-[8px] text-[#5D8C69]">
                                                +0.3 this month
                                            </div>
                                        </div>

                                        {/* Reviews */}

                                        <div className="rounded-xl border border-black/[0.07] bg-[#FBFAF8] p-3 sm:p-4">
                                            <div className="flex items-center gap-1.5">
                                                <MessageSquare size={13} className="text-[#B59A63]" />

                                                <span className="text-[8px] font-medium uppercase tracking-[0.08em] text-[#A19E96]">
                                                    Reviews
                                                </span>
                                            </div>

                                            <div className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#171715]">
                                                126
                                            </div>

                                            <div className="mt-1 text-[8px] text-[#5D8C69]">
                                                +18 this month
                                            </div>
                                        </div>

                                        {/* Growth */}

                                        <div className="rounded-xl border border-black/[0.07] bg-[#FBFAF8] p-3 sm:p-4">
                                            <div className="flex items-center gap-1.5">
                                                <TrendingUp size={13} className="text-[#B59A63]" />

                                                <span className="text-[8px] font-medium uppercase tracking-[0.08em] text-[#A19E96]">
                                                    Growth
                                                </span>
                                            </div>

                                            <div className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-[#171715]">
                                                24%
                                            </div>

                                            <div className="mt-1 text-[8px] text-[#5D8C69]">
                                                Review activity
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chart */}

                                    <div className="mt-3 rounded-xl border border-black/[0.07] bg-white p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[9px] font-medium text-[#77746D]">
                                                    Review activity
                                                </p>

                                                <p className="mt-1 text-[17px] font-semibold tracking-[-0.03em]">
                                                    18 new reviews
                                                </p>
                                            </div>

                                            <span className="rounded-full bg-[#EEF5EE] px-2 py-1 text-[8px] font-medium text-[#5D8C69]">
                                                +32%
                                            </span>
                                        </div>

                                        {/* Fake chart */}

                                        <div className="relative mt-5 h-[100px] overflow-hidden">
                                            <div className="absolute inset-x-0 top-0 border-t border-dashed border-black/[0.06]" />

                                            <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-black/[0.06]" />

                                            <div className="absolute inset-x-0 bottom-0 border-t border-dashed border-black/[0.06]" />

                                            <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                                                <defs>
                                                    <linearGradient id="reviewGradient" x1="0" x2="0" y1="0" y2="1">
                                                        <stop offset="0%" stopColor="#B59A63" stopOpacity="0.20" />

                                                        <stop offset="100%" stopColor="#B59A63" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>

                                                <path d="M0 80 C35 78 45 70 70 72 C95 74 105 58 130 62 C160 67 165 54 195 55 C220 56 230 45 255 48 C280 51 290 35 315 40 C345 45 355 28 380 31 C410 34 430 18 450 22 C470 26 485 12 500 8 L500 100 L0 100 Z" fill="url(#reviewGradient)" />

                                                <path d="M0 80 C35 78 45 70 70 72 C95 74 105 58 130 62 C160 67 165 54 195 55 C220 56 230 45 255 48 C280 51 290 35 315 40 C345 45 355 28 380 31 C410 34 430 18 450 22 C470 26 485 12 500 8" fill="none" stroke="#B59A63" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Recent reviews */}

                                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                                        <div className="rounded-xl border border-black/[0.07] bg-[#FBFAF8] p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map((item) => (
                                                        <Star key={item} size={9} fill="#B59A63" className="text-[#B59A63]" />
                                                    ))}
                                                </div>

                                                <span className="text-[8px] text-[#A19E96]">
                                                    Today
                                                </span>
                                            </div>

                                            <p className="mt-2 text-[9px] leading-4 text-[#55534D]">
                                                “Excellent service and very helpful staff.”
                                            </p>
                                        </div>

                                        <div className="rounded-xl border border-black/[0.07] bg-[#FBFAF8] p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map((item) => (
                                                        <Star key={item} size={9} fill="#B59A63" className="text-[#B59A63]" />
                                                    ))}
                                                </div>

                                                <span className="text-[8px] text-[#A19E96]">
                                                    Yesterday
                                                </span>
                                            </div>

                                            <p className="mt-2 text-[9px] leading-4 text-[#55534D]">
                                                “Would definitely recommend this local business.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ======================================================
                QR PHONE CARD
            ======================================================= */}

                        <div ref={phoneRef} className="hero-phone absolute bottom-[-20px] right-[-5px] z-30 w-[145px] sm:bottom-[-25px] sm:right-[15px] sm:w-[175px] lg:right-[-15px] xl:right-[-30px]">
                            <div className="overflow-hidden rounded-[25px] border-[5px] border-[#171715] bg-white shadow-[0_25px_60px_rgba(23,23,21,0.20)]">
                                <div className="p-3 sm:p-4">
                                    {/* Mobile top */}

                                    <div className="flex items-center justify-between">
                                        <span className="text-[7px] font-semibold">
                                            9:41
                                        </span>

                                        <div className="h-1.5 w-8 rounded-full bg-black/10" />

                                        <span className="text-[6px] text-black/40">
                                            ● ●
                                        </span>
                                    </div>

                                    {/* Review request */}

                                    <div className="mt-6 text-center">
                                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F7F4]">
                                            <Star size={18} fill="#B59A63" className="text-[#B59A63]" />
                                        </div>

                                        <p className="mt-3 text-[11px] font-semibold tracking-[-0.02em]">
                                            How was your visit?
                                        </p>

                                        <p className="mt-1 text-[7px] leading-3 text-[#77746D]">
                                            Your feedback helps this business improve.
                                        </p>
                                    </div>

                                    {/* Stars */}

                                    <div className="mt-4 flex justify-center gap-1">
                                        {[1, 2, 3, 4, 5].map((item) => (
                                            <div key={item} className="flex h-6 w-6 items-center justify-center rounded-md bg-[#F8F7F4]">
                                                <Star size={10} className="text-[#B59A63]" />
                                            </div>
                                        ))}
                                    </div>

                                    <button type="button" className="mt-4 flex h-8 w-full items-center justify-center rounded-lg bg-[#171715] text-[7px] font-semibold text-white">
                                        Leave feedback
                                    </button>

                                    <div className="mt-4 flex items-center justify-center gap-1">
                                        <QrCode size={10} className="text-[#B59A63]" />

                                        <span className="text-[6px] text-[#A19E96]">
                                            Powered by ReviewFlow
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ======================================================
                FLOATING CARD — QR
            ======================================================= */}

                        <div className="hero-floating-card hero-floating-card-1 absolute left-[-5px] top-[12%] z-30 hidden rounded-xl border border-black/[0.08] bg-white/95 p-3 shadow-[0_15px_40px_rgba(23,23,21,0.10)] backdrop-blur-md sm:block">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F8F7F4]">
                                    <QrCode size={17} className="text-[#B59A63]" />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold">
                                        Scan & share
                                    </p>

                                    <p className="mt-0.5 text-[8px] text-[#A19E96]">
                                        Simple customer feedback
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ======================================================
                FLOATING CARD — REVIEW
            ======================================================= */}

                        <div className="hero-floating-card hero-floating-card-2 absolute bottom-[12%] left-[2%] z-30 hidden rounded-xl border border-black/[0.08] bg-white/95 p-3 shadow-[0_15px_40px_rgba(23,23,21,0.10)] backdrop-blur-md sm:block">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F8F7F4]">
                                    <Star size={17} fill="#B59A63" className="text-[#B59A63]" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-[12px] font-semibold">
                                            4.8
                                        </span>

                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <Star key={item} size={7} fill="#B59A63" className="text-[#B59A63]" />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="mt-0.5 text-[8px] text-[#A19E96]">
                                        Stronger reputation
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ======================================================
                DECORATIVE LABEL
            ======================================================= */}

                        <div className="absolute right-0 top-[7%] hidden items-center gap-3 lg:flex">
                            <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#A19E96]">
                                Reputation
                            </span>

                            <span className="h-px w-8 bg-black/10" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
          BOTTOM FADE
      ============================================================ */}

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-[#F8F7F4] to-transparent" />
        </section>
    );
};

export default Hero;