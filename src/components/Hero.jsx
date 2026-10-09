
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowRight,
    ArrowUpRight,
    Scale,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);
    const imageWrapRef = useRef(null);
    const imageParallaxRef = useRef(null);
    const imageMouseRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const imageWrap = imageWrapRef.current;
        const imageParallax = imageParallaxRef.current;
        const imageMouse = imageMouseRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            const revealSelectors = [
                ".law-hero-eyebrow",
                ".law-hero-title-line",
                ".law-hero-description",
                ".law-hero-actions",
                ".law-hero-trust",
                ".law-hero-scroll",
            ];

            if (reduceMotion) return;

            gsap.set(revealSelectors, { autoAlpha: 0 });
            gsap.set(".law-hero-eyebrow", { y: 16 });
            gsap.set(".law-hero-title-line", { y: 28 });
            gsap.set(".law-hero-description", { y: 16 });
            gsap.set(".law-hero-actions", { y: 16 });
            gsap.set(".law-hero-trust", { y: 12 });
            gsap.set(".law-hero-scroll", { y: 8 });

            gsap.set(imageParallax, {
                autoAlpha: 0,
                scale: 1.025,
            });

            gsap.set(imageMouse, { x: 0, y: 0 });

            const intro = gsap.timeline({
                defaults: { ease: "power3.out" },
            });

            intro
                .to(imageParallax, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.9,
                })
                .to(
                    ".law-hero-eyebrow",
                    { autoAlpha: 1, y: 0, duration: 0.5 },
                    "-=0.55"
                )
                .to(
                    ".law-hero-title-line",
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.07,
                    },
                    "-=0.25"
                )
                .to(
                    ".law-hero-description",
                    { autoAlpha: 1, y: 0, duration: 0.45 },
                    "-=0.25"
                )
                .to(
                    ".law-hero-actions",
                    { autoAlpha: 1, y: 0, duration: 0.45 },
                    "-=0.2"
                )
                .to(
                    ".law-hero-trust",
                    { autoAlpha: 1, y: 0, duration: 0.4 },
                    "-=0.15"
                )
                .to(
                    ".law-hero-scroll",
                    { autoAlpha: 1, y: 0, duration: 0.35 },
                    "-=0.15"
                );

            gsap.to(imageParallax, {
                yPercent: 1.5,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            if (
                imageWrap &&
                imageMouse &&
                window.matchMedia("(pointer: fine)").matches
            ) {
                const xTo = gsap.quickTo(imageMouse, "x", {
                    duration: 0.5,
                    ease: "power3.out",
                });

                const yTo = gsap.quickTo(imageMouse, "y", {
                    duration: 0.5,
                    ease: "power3.out",
                });

                const handleMove = (event) => {
                    const rect = imageWrap.getBoundingClientRect();

                    if (!rect.width || !rect.height) return;

                    xTo(((event.clientX - rect.left) / rect.width - 0.5) * 3);
                    yTo(((event.clientY - rect.top) / rect.height - 0.5) * 2);
                };

                const handleLeave = () => {
                    xTo(0);
                    yTo(0);
                };

                imageWrap.addEventListener("mousemove", handleMove);
                imageWrap.addEventListener("mouseleave", handleLeave);

                return () => {
                    imageWrap.removeEventListener("mousemove", handleMove);
                    imageWrap.removeEventListener("mouseleave", handleLeave);
                };
            }
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-[#111417] text-white pt-10 md:pt-20"
        >
            {/* BACKGROUND */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-0 top-0 h-24 w-24 border-l border-t border-[#B59A63]/10 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
                <div className="absolute bottom-0 right-0 h-24 w-24 border-b border-r border-[#B59A63]/10 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
            </div>

            {/* MAIN CONTENT */}

            <div className="relative z-10 mx-auto flex w-full max-w-[1540px] flex-col lg:min-h-[min(850px,calc(100svh-76px))] lg:flex-row lg:items-stretch">
                {/* TEXT CONTENT */}

                <div className="relative z-10 flex min-w-0 w-full items-center px-5 pb-8 pt-24 min-[480px]:px-8 sm:pb-10 sm:pt-28 md:px-12 lg:w-[48%] lg:px-8 lg:py-16 xl:px-14 2xl:px-20">
                    <div className="w-full max-w-[590px]">
                        <div className="law-hero-eyebrow mb-5 inline-flex max-w-full items-center gap-2.5 border border-[#B59A63]/20 bg-white/[0.025] px-3 py-2 sm:mb-7 sm:gap-3 sm:px-4 sm:py-2.5">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-[#B59A63]/40">
                                <Scale size={11} strokeWidth={1.5} className="text-[#C7A96B]" />
                            </span>
                            <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#C7A96B] min-[380px]:text-[9px] sm:text-[10px] sm:tracking-[0.22em]">
                                Advocates &amp; Legal Consultants
                            </span>
                        </div>

                        <h1 className="max-w-[650px] text-[clamp(2.6rem,7vw,5.1rem)] font-medium leading-[0.98] tracking-[-0.055em] text-white lg:text-[clamp(3rem,4.2vw,4.6rem)] xl:text-[clamp(3.5rem,4.3vw,5rem)]">
                            <span className="law-hero-title-line block font-serif">
                                Trusted counsel.
                            </span>
                            <span className="law-hero-title-line block font-serif">
                                Strong
                            </span>
                            <span className="law-hero-title-line block font-serif italic text-[#C7A96B]">
                                representation.
                            </span>
                        </h1>

                        <div className="mt-5 flex items-center gap-3 sm:mt-7 sm:gap-4">
                            <span className="h-px w-10 bg-[#B59A63] sm:w-14" />
                            <span className="h-px w-4 bg-[#B59A63]/30 sm:w-5" />
                        </div>

                        <p className="law-hero-description mt-5 max-w-[460px] text-[13px] leading-6 text-white/60 sm:mt-6 sm:text-[15px] sm:leading-7">
                            Thoughtful legal guidance backed by experience,
                            strategic counsel, and a commitment to protecting
                            what matters most to you.
                        </p>

                        <div className="law-hero-actions mt-6 flex w-full flex-col gap-3 min-[480px]:flex-row min-[480px]:items-center sm:mt-8">
                            <Link
                                href="/contact-us"
                                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#B59A63] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#111417] transition-colors duration-300 hover:bg-[#D0B77B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7A96B] min-[480px]:w-auto sm:px-6 sm:text-[11px]"
                            >
                                <span>Book a Consultation</span>
                                <ArrowRight size={16} strokeWidth={1.8} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="#practice-areas"
                                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 border border-white/15 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.08em] text-white/85 transition-colors duration-300 hover:border-[#B59A63]/60 hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C7A96B] min-[480px]:w-auto sm:px-5 sm:text-[11px]"
                            >
                                <span>Explore Practice Areas</span>
                                <ArrowUpRight size={15} strokeWidth={1.7} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>

                        <div className="law-hero-trust mt-8 grid w-full max-w-[510px] grid-cols-1 border-t border-white/10 pt-5 min-[480px]:grid-cols-2 sm:mt-10 sm:pt-6">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-4 min-[480px]:border-b-0 min-[480px]:border-r min-[480px]:pr-4 min-[480px]:pb-0">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#B59A63]/25">
                                    <ShieldCheck size={15} strokeWidth={1.5} className="text-[#C7A96B]" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-white/75 sm:text-[10px]">
                                        Confidential
                                    </p>
                                    <p className="mt-1 text-[9px] text-white/45 sm:text-[10px]">
                                        Discreet legal counsel
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-3 min-[480px]:mt-0 min-[480px]:pl-4 sm:pl-5">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#B59A63]/25">
                                    <Sparkles size={14} strokeWidth={1.5} className="text-[#C7A96B]" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-white/75 sm:text-[10px]">
                                        Strategic
                                    </p>
                                    <p className="mt-1 text-[9px] text-white/45 sm:text-[10px]">
                                        Focused legal solutions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LARGE, RESPONSIVE IMAGE */}

                <div
                    ref={imageWrapRef}
                    className="relative mx-auto h-[105vw] max-h-[620px] min-h-[360px] w-full min-w-0 max-w-[620px] overflow-hidden sm:h-[78vw] sm:min-h-[460px] md:h-[68vw] md:min-h-[520px] lg:mx-0 lg:h-auto lg:max-h-none lg:min-h-0 lg:w-[52%] lg:max-w-none"
                >
                    <div
                        ref={imageParallaxRef}
                        className="absolute inset-0 will-change-transform"
                    >
                        <div
                            ref={imageMouseRef}
                            className="absolute inset-0 will-change-transform"
                        >
                            <Image
                                src="/heromain1.png"
                                alt="Legal professional representing a law firm"
                                fill
                                priority
                                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 52vw"
                                className="object-cover object-[center_25%]"
                            />
                        </div>
                    </div>

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111417]/35 to-transparent lg:hidden"
                    />
                </div>
            </div>

            {/* SCROLL INDICATOR */}

            <div className="law-hero-scroll pointer-events-none absolute bottom-6 left-5 z-30 hidden items-center gap-4 sm:flex md:left-8 lg:left-10 xl:left-14 2xl:left-20">
                <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/40">
                    Scroll to explore
                </span>
                <span className="h-px w-10 bg-white/25 sm:w-14" />
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-px bg-[#B59A63]/40" />
        </section>
    );
};

export default Hero;