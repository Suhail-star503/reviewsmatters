"use client";

import { useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Check,
    MessageCircle,
    Phone,
    QrCode,
    ShieldCheck,
    Sparkles,
    Star,
    ThumbsUp,
    TrendingUp,
    Users,
} from "lucide-react";

const PHONE_NUMBER = "+918766311237";
const DISPLAY_PHONE = "+91 8766311237";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace("+", "")}`;

const LandingPageSEOContent = () => {
    const workflow = [
        {
            number: "01",
            icon: QrCode,
            title: "Create your business QR",
            description:
                "Set up your ReviewFlow (Powered By Kaaf11.com) profile and get a dedicated QR code that customers can scan after visiting or using your business.",
        },
        {
            number: "02",
            icon: Users,
            title: "Customers scan & respond",
            description:
                "Place the QR code at your counter, table, reception, packaging, invoice, or anywhere customers interact with your business.",
        },
        {
            number: "03",
            icon: Star,
            title: "Customers share their experience",
            description:
                "Customers can quickly rate their experience and leave genuine feedback about the service, product, staff, or overall visit.",
        },
        {
            number: "04",
            icon: TrendingUp,
            title: "Improve & grow",
            description:
                "Use customer feedback to discover problems, improve your service, encourage genuine public reviews, and build a stronger local reputation.",
        },
    ];

    const features = [
        {
            icon: QrCode,
            number: "01",
            title: "One simple QR code",
            description:
                "Give customers one easy place to start their feedback journey. Display your QR code wherever customer interactions happen.",
        },
        {
            icon: Star,
            number: "02",
            title: "Customer ratings",
            description:
                "Let customers quickly tell you how their experience went without forcing them through a complicated process.",
        },
        {
            icon: TrendingUp,
            number: "03",
            title: "Built for local growth",
            description:
                "Turn customer experience into an ongoing growth process that helps your business earn trust and attract more potential customers.",
        },
    ];

    const benefits = [
        {
            number: "01",
            title: "Make it easier for customers to respond",
            description:
                "Give customers a simple way to share their experience after visiting your business, without complicated forms or lengthy steps.",
        },
        {
            number: "02",
            title: "Understand what customers really think",
            description:
                "Collect useful feedback about your service, products, staff, waiting time, and overall customer experience.",
        },
        {
            number: "03",
            title: "Find opportunities to improve",
            description:
                "Spot common concerns, recurring issues, and areas where your business can create a better experience for customers.",
        },
        {
            number: "04",
            title: "Build better customer experiences",
            description:
                "Use real customer insights to make informed improvements, strengthen customer relationships, and deliver a better experience over time.",
        },
    ];

    const businessTypes = [
        {
            title: "Restaurants & Cafes",
            description:
                "Collect feedback about food, service, staff, waiting time, cleanliness, atmosphere, and the overall dining experience.",
        },
        {
            title: "Salons & Beauty",
            description:
                "Make it simple for customers to share feedback after hair, beauty, spa, grooming, or other personal-care services.",
        },
        {
            title: "Retail & Local Shops",
            description:
                "Understand what customers think about products, staff, pricing, availability, service, and their shopping experience.",
        },
        {
            title: "Home Services",
            description:
                "Collect feedback after plumbing, electrical, cleaning, repair, installation, maintenance, and other local services.",
        },
        {
            title: "Agencies & Professionals",
            description:
                "Create a structured feedback process for clients and understand satisfaction with communication, delivery, and service quality.",
        },
        {
            title: "Clinics & Healthcare",
            description:
                "Provide patients and visitors with a convenient channel to share feedback about their overall experience.",
        },
    ];

    const scrollToHowItWorks = () => {
        document.getElementById("how-it-works")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <section className="w-full overflow-hidden bg-[#F8F7F4] text-[#171715]">

                {/* =========================================================
                    HOW IT WORKS
                ========================================================= */}

                <section
                    id="how-it-works"
                    className="relative border-y border-black/[0.07] bg-[#F8F7F4]"
                >
                    <div
                        className="
                            pointer-events-none absolute inset-0 opacity-[0.25]
                            [background-image:linear-gradient(rgba(23,23,21,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,21,0.035)_1px,transparent_1px)]
                            [background-size:70px_70px]
                            [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
                        "
                    />

                    <div className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#B59A63]/[0.035] blur-3xl" />

                    <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-0">

                        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                            {/* LEFT */}
                            <div>

                                <div className="inline-flex items-center gap-2 rounded-full border border-[#B59A63]/20 bg-white/70 px-3.5 py-2 shadow-[0_4px_20px_rgba(23,23,21,0.035)]">
                                    <Sparkles size={13} className="text-[#B59A63]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77746D]">
                                        How it works
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-[650px] text-[36px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[48px] lg:text-[56px]">
                                    One simple way to{" "}
                                    <span className="text-[#B59A63]">
                                        listen, improve, and grow.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#77746D] sm:text-[16px]">
                                    ReviewFlow (Powered By Kaaf11.com) gives local businesses a simple
                                    way to connect customers with feedback,
                                    understand their experience, manage their
                                    reputation, and continuously improve the
                                    way they serve their customers.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-2.5">
                                    {[
                                        "QR feedback",
                                        "Customer ratings",
                                        "Review management"
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-black/[0.08] bg-white px-3.5 py-2 text-[11px] font-medium text-[#66635C] shadow-[0_3px_12px_rgba(23,23,21,0.025)]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={scrollToHowItWorks}
                                    className="group mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-[#171715] px-5 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    See the workflow

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                            </div>

                            {/* RIGHT WORKFLOW CARD */}
                            <div className="relative">

                                <div className="absolute -inset-8 rounded-[40px] bg-[#B59A63]/[0.045] blur-3xl" />

                                <div className="relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-white shadow-[0_30px_80px_rgba(23,23,21,0.10)]">

                                    <div className="flex items-center justify-between border-b border-black/[0.07] bg-[#FBFAF8] px-5 py-4 sm:px-6">

                                        <div>
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A19E96]">
                                                Customer journey
                                            </p>

                                            <p className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-[#171715]">
                                                From QR scan to better business
                                            </p>
                                        </div>

                                        <div className="rounded-lg border border-black/[0.06] bg-white px-3 py-1.5 text-[9px] font-semibold text-[#77746D]">
                                            ReviewFlow (Powered By Kaaf11.com)
                                        </div>

                                    </div>

                                    <div className="p-5 sm:p-7">

                                        {workflow.map((step, index) => {
                                            const Icon = step.icon;

                                            return (
                                                <div
                                                    key={step.number}
                                                    className="relative flex gap-4"
                                                >

                                                    {index !== workflow.length - 1 && (
                                                        <div className="absolute left-[19px] top-11 h-[calc(100%-11px)] w-px bg-black/[0.08]" />
                                                    )}

                                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#B59A63]/20 bg-[#F8F7F4] text-[#B59A63]">
                                                        <Icon size={17} strokeWidth={1.8} />
                                                    </div>

                                                    <div className="pb-8">

                                                        <div className="flex items-center gap-2">

                                                            <span className="text-[9px] font-bold tracking-[0.15em] text-[#B59A63]">
                                                                {step.number}
                                                            </span>

                                                            <h3 className="text-[14px] font-semibold tracking-[-0.015em] text-[#171715]">
                                                                {step.title}
                                                            </h3>

                                                        </div>

                                                        <p className="mt-2 max-w-[520px] text-[12.5px] leading-5 text-[#77746D]">
                                                            {step.description}
                                                        </p>

                                                    </div>

                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* =========================================================
                    CORE VALUE
                ========================================================= */}

                <section className="bg-white">

                    <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-0">

                        <div className="mx-auto max-w-[850px] text-center">

                            <span className="inline-flex items-center rounded-full border border-[#B59A63]/20 bg-[#F8F7F4] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77746D]">
                                Customer feedback & reputation
                            </span>

                            <h2 className="mt-6 text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-[48px] lg:text-[58px]">
                                Your customers are already{" "}
                                <span className="text-[#B59A63]">
                                    talking about you.
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-[720px] text-[15px] leading-7 text-[#77746D] sm:text-[17px]">
                                ReviewFlow (Powered By Kaaf11.com) helps you create a structured
                                process for listening to those customers,
                                understanding their experience, and turning
                                their feedback into practical improvements.
                            </p>

                        </div>


                        {/* VISUAL FLOW */}
                        <div className="relative mt-16">

                            <div className="hidden lg:block absolute left-[16.66%] right-[16.66%] top-[72px] h-px bg-black/[0.08]" />

                            <div className="grid gap-6 lg:grid-cols-3">

                                {/* CUSTOMER */}
                                <div className="relative rounded-[24px] border border-black/[0.08] bg-[#FBFAF8] p-7 text-center">

                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_25px_rgba(23,23,21,0.06)]">
                                        <Users size={22} className="text-[#B59A63]" />
                                    </div>

                                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B59A63]">
                                        Customer
                                    </p>

                                    <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.025em]">
                                        Has an experience
                                    </h3>

                                    <p className="mt-3 text-[13px] leading-6 text-[#77746D]">
                                        A customer visits your business,
                                        purchases something, or receives your
                                        service.
                                    </p>

                                </div>


                                {/* FEEDBACK */}
                                <div className="relative rounded-[24px] border border-[#B59A63]/20 bg-white p-7 text-center shadow-[0_15px_45px_rgba(23,23,21,0.055)]">

                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F7F4]">
                                        <MessageCircle size={22} className="text-[#B59A63]" />
                                    </div>

                                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B59A63]">
                                        Feedback
                                    </p>

                                    <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.025em]">
                                        Shares their experience
                                    </h3>

                                    <p className="mt-3 text-[13px] leading-6 text-[#77746D]">
                                        The customer scans your QR code and
                                        gets a simple way to rate and explain
                                        their experience.
                                    </p>

                                </div>


                                {/* BUSINESS */}
                                <div className="relative rounded-[24px] border border-black/[0.08] bg-[#171715] p-7 text-center text-white">

                                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.07]">
                                        <TrendingUp size={22} className="text-[#B59A63]" />
                                    </div>

                                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B59A63]">
                                        Business
                                    </p>

                                    <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.025em]">
                                        Learns & improves
                                    </h3>

                                    <p className="mt-3 text-[13px] leading-6 text-white/50">
                                        You discover what customers like,
                                        identify problems, and improve the
                                        experience you provide.
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* =========================================================
                    FEATURES
                ========================================================= */}

                <section
                    id="features"
                    className="border-y border-black/[0.07] bg-[#F8F7F4]"
                >

                    <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-0">

                        <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B59A63]">
                                    Everything in one workflow
                                </span>

                                <h2 className="mt-5 text-[35px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-[48px]">
                                    Built to help local businesses{" "}
                                    <span className="text-[#B59A63]">
                                        grow smarter.
                                    </span>
                                </h2>

                            </div>

                            <p className="max-w-[620px] text-[14px] leading-7 text-[#77746D] sm:text-[15px]">
                                From the first QR scan to ongoing customer
                                improvement, ReviewFlow (Powered By Kaaf11.com) brings the important
                                parts of your feedback workflow together in
                                one simple system.
                            </p>

                        </div>


                        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <article
                                        key={feature.number}
                                        className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_8px_30px_rgba(23,23,21,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B59A63]/25 hover:shadow-[0_18px_45px_rgba(23,23,21,0.08)]"
                                    >

                                        <div className="flex items-center justify-between">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F7F4]">
                                                <Icon
                                                    size={18}
                                                    strokeWidth={1.7}
                                                    className="text-[#B59A63]"
                                                />
                                            </div>

                                            <span className="text-[10px] font-semibold tracking-[0.15em] text-[#B2AEA5]">
                                                {feature.number}
                                            </span>

                                        </div>

                                        <h3 className="mt-7 text-[17px] font-semibold tracking-[-0.025em]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-[13.5px] leading-6 text-[#77746D]">
                                            {feature.description}
                                        </p>

                                        <div className="mt-6 h-px w-8 bg-[#B59A63]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#B59A63]" />

                                    </article>
                                );
                            })}

                        </div>
                    </div>
                </section>


                {/* =========================================================
                    NEGATIVE / POSITIVE FEEDBACK CONCEPT
                ========================================================= */}

                <section className="bg-white">

                    <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-0">

                        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B59A63]">
                                    Listen. Learn. Improve.
                                </span>

                                <h2 className="mt-5 text-[36px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-[48px]">
                                    Every rating can tell you{" "}
                                    <span className="text-[#B59A63]">
                                        something useful.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-[550px] text-[15px] leading-7 text-[#77746D]">
                                    A high rating can show you what your
                                    customers appreciate. A low rating can
                                    reveal where the experience needs
                                    attention. ReviewFlow (Powered By Kaaf11.com) helps you capture
                                    both signals and turn them into action.
                                </p>

                                <div className="mt-8 space-y-3">

                                    {[
                                        "Understand customer satisfaction",
                                        "Identify recurring service problems",
                                        "Respond to customer concerns",
                                        "Improve products and services",
                                        "Build a stronger customer experience",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3EEE4]">
                                                <Check
                                                    size={13}
                                                    className="text-[#A08A58]"
                                                />
                                            </div>

                                            <span className="text-[13px] font-medium text-[#66635C]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>


                            <div className="relative">

                                <div className="absolute -inset-8 rounded-[40px] bg-[#B59A63]/[0.045] blur-3xl" />

                                <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#FBFAF8] p-5 shadow-[0_30px_70px_rgba(23,23,21,0.08)] sm:p-7">

                                    <div className="rounded-2xl border border-black/[0.07] bg-white p-6">

                                        <div className="flex items-center justify-between">

                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A19E96]">
                                                    Customer feedback
                                                </p>

                                                <p className="mt-1 text-[15px] font-semibold">
                                                    Recent experience
                                                </p>
                                            </div>

                                            <div className="rounded-lg bg-[#F8F7F4] px-3 py-2 text-[10px] font-semibold text-[#77746D]">
                                                Feedback
                                            </div>

                                        </div>


                                        <div className="mt-7 flex items-center gap-2">

                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={18}
                                                    className={
                                                        star <= 4
                                                            ? "fill-[#B59A63] text-[#B59A63]"
                                                            : "text-[#D8D4CC]"
                                                    }
                                                />
                                            ))}

                                            <span className="ml-2 text-[12px] font-semibold text-[#77746D]">
                                                4 / 5
                                            </span>

                                        </div>


                                        <div className="mt-6 rounded-xl border border-black/[0.06] bg-[#FBFAF8] p-4">

                                            <p className="text-[12px] font-semibold text-[#171715]">
                                                Customer feedback
                                            </p>

                                            <p className="mt-2 text-[12px] leading-5 text-[#77746D]">
                                                "The service was good, but the
                                                waiting time could be improved."
                                            </p>

                                        </div>


                                        <div className="mt-5 grid grid-cols-2 gap-3">

                                            <div className="rounded-xl border border-black/[0.06] bg-white p-4">

                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F8F3]">
                                                    <ThumbsUp
                                                        size={14}
                                                        className="text-[#4D8A5A]"
                                                    />
                                                </div>

                                                <p className="mt-3 text-[11px] font-semibold">
                                                    What works
                                                </p>

                                                <p className="mt-1 text-[10px] leading-4 text-[#A19E96]">
                                                    Service quality
                                                </p>

                                            </div>


                                            <div className="rounded-xl border border-black/[0.06] bg-white p-4">

                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3EEE4]">
                                                    <TrendingUp
                                                        size={14}
                                                        className="text-[#A08A58]"
                                                    />
                                                </div>

                                                <p className="mt-3 text-[11px] font-semibold">
                                                    Improve
                                                </p>

                                                <p className="mt-1 text-[10px] leading-4 text-[#A19E96]">
                                                    Waiting time
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>


                {/* =========================================================
                    BENEFITS
                ========================================================= */}

                <section className="border-y border-black/[0.07] bg-[#FBFAF8]">

                    <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-0">

                        <div className="mx-auto max-w-[780px] text-center">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B59A63]">
                                Why businesses use it
                            </span>

                            <h2 className="mt-5 text-[35px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-[48px]">
                                Don't just collect reviews.{" "}
                                <span className="text-[#B59A63]">
                                    Learn from customers.
                                </span>
                            </h2>

                            <p className="mt-5 text-[14px] leading-7 text-[#77746D] sm:text-[16px]">
                                A strong local reputation starts with a strong
                                customer experience.
                            </p>

                        </div>


                        <div className="mt-14 grid gap-4 md:grid-cols-2">

                            {benefits.map((benefit) => (
                                <article
                                    key={benefit.number}
                                    className="rounded-[22px] border border-black/[0.08] bg-white p-6 sm:p-7"
                                >

                                    <div className="flex items-start gap-5">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#171715] text-[10px] font-semibold text-white">
                                            {benefit.number}
                                        </div>

                                        <div>

                                            <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
                                                {benefit.title}
                                            </h3>

                                            <p className="mt-3 text-[13.5px] leading-6 text-[#77746D]">
                                                {benefit.description}
                                            </p>

                                        </div>

                                    </div>

                                </article>
                            ))}

                        </div>

                    </div>
                </section>


                {/* =========================================================
                    BUSINESS TYPES
                ========================================================= */}

                <section className="relative overflow-hidden bg-[#171715] text-white">

                    <div className="pointer-events-none absolute left-[10%] top-[-20%] h-[450px] w-[450px] rounded-full bg-[#B59A63]/[0.08] blur-[120px]" />

                    <div className="pointer-events-none absolute bottom-[-20%] right-[5%] h-[400px] w-[400px] rounded-full bg-[#B59A63]/[0.06] blur-[110px]" />

                    <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-0">

                        <div className="mx-auto max-w-[780px] text-center">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B59A63]">
                                Built for local businesses
                            </span>

                            <h2 className="mt-5 text-[35px] font-semibold leading-[1.04] tracking-[-0.05em] sm:text-[48px]">
                                Wherever customer experience{" "}
                                <span className="text-[#B59A63]">
                                    matters.
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-[680px] text-[14px] leading-7 text-white/55 sm:text-[16px]">
                                Restaurants, salons, shops, clinics,
                                professionals, agencies, and service
                                businesses can use a simple QR-based workflow
                                to stay closer to their customers.
                            </p>

                        </div>


                        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                            {businessTypes.map((business) => (
                                <article
                                    key={business.title}
                                    className="group rounded-2xl border border-white/[0.09] bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B59A63]/30 hover:bg-white/[0.055]"
                                >

                                    <div className="mb-6 flex items-center justify-between">

                                        <div className="h-px w-8 bg-[#B59A63] transition-all duration-300 group-hover:w-12" />

                                        <ArrowUpRight
                                            size={15}
                                            className="text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#B59A63]"
                                        />

                                    </div>

                                    <h3 className="text-[16px] font-semibold tracking-[-0.02em]">
                                        {business.title}
                                    </h3>

                                    <p className="mt-2.5 text-[13px] leading-6 text-white/50">
                                        {business.description}
                                    </p>

                                </article>
                            ))}

                        </div>

                    </div>
                </section>


                {/* =========================================================
                    LOCAL GROWTH MESSAGE
                ========================================================= */}

                <section className="bg-[#F8F7F4]">

                    <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-0">

                        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B59A63]">
                                    From feedback to growth
                                </span>

                                <h2 className="mt-5 max-w-[700px] text-[36px] font-semibold leading-[1.03] tracking-[-0.05em] sm:text-[50px]">
                                    Better customer experiences can create{" "}
                                    <span className="text-[#B59A63]">
                                        stronger local businesses.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#77746D] sm:text-[16px]">
                                    When businesses consistently listen to
                                    customers, they can identify problems
                                    earlier, improve service quality, build
                                    trust, and create experiences customers
                                    are more likely to talk about.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">

                                    {[
                                        "Listen to customers",
                                        "Fix recurring problems",
                                        "Improve service",
                                        "Build trust",
                                        "Grow locally",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3.5 py-2"
                                        >

                                            <Check
                                                size={12}
                                                className="text-[#B59A63]"
                                            />

                                            <span className="text-[11px] font-medium text-[#66635C]">
                                                {item}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>


                            <div className="relative">

                                <div className="rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-[0_25px_70px_rgba(23,23,21,0.08)] sm:p-8">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A19E96]">
                                                Growth loop
                                            </p>

                                            <p className="mt-1 text-[15px] font-semibold">
                                                Customer experience
                                            </p>

                                        </div>

                                        <TrendingUp
                                            size={20}
                                            className="text-[#B59A63]"
                                        />

                                    </div>


                                    <div className="mt-8 space-y-3">

                                        {[
                                            ["01", "Customer visits", "A real customer interacts with your business."],
                                            ["02", "Feedback collected", "Their experience becomes useful business information."],
                                            ["03", "Problems improved", "You identify issues and improve the experience."],
                                            ["04", "Trust grows", "Better experiences can lead to stronger customer relationships."],
                                        ].map(([number, title, description]) => (
                                            <div
                                                key={number}
                                                className="flex gap-4 rounded-xl border border-black/[0.06] bg-[#FBFAF8] p-4"
                                            >

                                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#171715] text-[9px] font-bold text-white">
                                                    {number}
                                                </div>

                                                <div>

                                                    <p className="text-[12px] font-semibold">
                                                        {title}
                                                    </p>

                                                    <p className="mt-1 text-[10.5px] leading-4 text-[#A19E96]">
                                                        {description}
                                                    </p>

                                                </div>

                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =========================================================
                    FINAL CTA
                ========================================================= */}

                <section className="bg-[#F8F7F4]">

                    <div className="mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28 xl:px-0">

                        <div className="relative overflow-hidden rounded-[28px] bg-[#171715] px-6 py-14 text-center sm:px-12 sm:py-20">

                            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#B59A63]/[0.10] blur-[100px]" />

                            <div className="relative mx-auto max-w-[760px]">

                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B59A63]/25 bg-[#B59A63]/10">
                                    <Star
                                        size={19}
                                        className="text-[#B59A63]"
                                    />
                                </div>

                                <span className="mt-6 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B59A63]">
                                    Build a better feedback process
                                </span>

                                <h2 className="mt-5 text-[34px] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[48px]">
                                    Give your customers a better way to{" "}
                                    <span className="text-[#B59A63]">
                                        be heard.
                                    </span>
                                </h2>

                                <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-white/50 sm:text-[16px]">
                                    Start turning customer feedback into
                                    actionable insights, better experiences,
                                    and a stronger local reputation.
                                </p>

                                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                                    <a
                                        href={`tel:${PHONE_NUMBER}`}
                                        className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#B59A63] px-6 text-[12px] font-semibold text-[#171715] transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        Talk to us

                                        <ArrowRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </a>

                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09]"
                                        style={{color:"white"}}
                                    >
                                        WhatsApp us
                                        <MessageCircle size={15} />
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </section>


            {/* =============================================================
                FIXED CONTACT ACTIONS
            ============================================================= */}

            <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2.5 sm:bottom-6 sm:right-6">

                <a
                    href={`tel:${PHONE_NUMBER}`}
                    aria-label={`Call ${DISPLAY_PHONE}`}
                    className="group flex h-12 items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-4 shadow-[0_12px_35px_rgba(23,23,21,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,23,21,0.18)]"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171715]">
                        <Phone
                            size={14}
                            strokeWidth={2}
                            className="text-white"
                        />
                    </span>

                    <span className="hidden text-[11px] font-semibold text-[#171715] sm:block">
                        Call us
                    </span>
                </a>


                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${DISPLAY_PHONE}`}
                    className="group flex h-12 items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-4 shadow-[0_12px_35px_rgba(23,23,21,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(23,23,21,0.18)]"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B59A63]">
                        <MessageCircle
                            size={15}
                            strokeWidth={2}
                            className="text-[#171715]"
                        />
                    </span>

                    <span className="hidden text-[11px] font-semibold text-[#171715] sm:block">
                        WhatsApp
                    </span>
                </a>

            </div>
        </>
    );
};

export default LandingPageSEOContent;