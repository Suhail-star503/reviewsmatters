"use client";

import {
    ArrowRight,
    Check,
    ChevronDown,
    MessageCircle,
    QrCode,
    Sparkles,
    TrendingUp,
} from "lucide-react";

const WHATSAPP_NUMBER = "918766311237";

const plans = [
    {
        name: "Starter",
        description:
            "A simple starting point for small businesses building a stronger connection with their customers.",
        price: "199",
        period: "/month",
        popular: false,
        scale: "Up to 100 customer responses / month",
        features: [
            "1 business profile",
            "Customer feedback page",
            "Business QR code",
            "Customer ratings",
            "Feedback dashboard",
            "Feedback history",
            "Customer insights",
            "Mobile-friendly experience",
        ],
        button: "Choose Starter",
    },
    {
        name: "Growth",
        description:
            "For growing businesses that receive more customers and want deeper customer insights.",
        price: "599",
        period: "/month",
        popular: true,
        scale: "Up to 1,000 customer responses / month",
        features: [
            "1 business profile",
            "Customer feedback page",
            "Business QR code",
            "Customer ratings",
            "Feedback dashboard",
            "Feedback history",
            "Customer insights",
            "Mobile-friendly experience",
        ],
        button: "Choose Growth",
    },
    {
        name: "Professional",
        description:
            "For busy businesses handling a high volume of customers and customer responses every month.",
        price: "1,999",
        period: "/month",
        popular: false,
        scale: "Up to 5,000 customer responses / month",
        features: [
            "1 business profile",
            "Customer feedback page",
            "Business QR code",
            "Customer ratings",
            "Feedback dashboard",
            "Feedback history",
            "Customer insights",
            "Mobile-friendly experience",
        ],
        button: "Choose Professional",
    },
];

const faqs = [
    {
        question: "What's different between the plans?",
        answer:
            "All plans include the same core ReviewFlow experience. The main difference is the number of customer responses your business can handle each month.",
    },
    {
        question: "What is a customer response?",
        answer:
            "A customer response is an interaction where a customer uses your ReviewFlow experience to share a rating or feedback about their experience.",
    },
    {
        question: "Can I upgrade when my business grows?",
        answer:
            "Yes. You can move to a higher plan when your business starts receiving more customer responses.",
    },
    {
        question: "Do I need a website for my business?",
        answer:
            "No. ReviewFlow is designed for local businesses and does not require you to build a separate website.",
    },
    {
        question: "How does the QR code work?",
        answer:
            "You receive a dedicated QR code for your business. Customers can scan it with their phone and access your customer feedback experience.",
    },
];

const PricingPage = () => {
    const handlePlanSelect = (plan) => {
        const message = [
            `Hi, I am interested in the ${plan.name} plan for ReviewFlow.`,
            "",
            `Plan: ${plan.name}`,
            `Price: INR ${plan.price}/month`,
            "",
            "I would like to know more about getting started.",
        ].join("\n");

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    const handleTalkToUs = () => {
        const message =
            "Hi, I would like to know more about ReviewFlow pricing and which plan would be suitable for my business.";

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="min-h-screen bg-[#F8F7F4] text-[#171715]">
            {/* HERO */}
            <section className="border-b border-[#171715]/8">
                <div className="mx-auto max-w-[1200px] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
                    <div className="mx-auto max-w-[780px] text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#171715]/10 bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.1em] text-[#77746D] uppercase shadow-[0_4px_20px_rgba(23,23,21,0.04)]">
                            <Sparkles
                                size={14}
                                strokeWidth={1.8}
                                className="text-[#B59A63]"
                            />
                            Simple & transparent pricing
                        </div>

                        <h1 className="mt-7 text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[58px] lg:text-[72px]">
                            Pricing that grows
                            <span className="block text-[#B59A63]">
                                with your business.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-7 text-[#77746D] sm:text-[18px]">
                            Every plan gives you the same powerful customer
                            feedback experience. Choose your plan based on how
                            many customers your business serves.
                        </p>

                        <div className="mx-auto mt-8 flex max-w-fit items-center gap-2 rounded-full border border-[#B59A63]/20 bg-[#B59A63]/6 px-4 py-2 text-[12px] font-medium text-[#62583F]">
                            <TrendingUp
                                size={15}
                                className="text-[#B59A63]"
                            />
                            More customer responses → higher plan
                        </div>
                    </div>

                    {/* PRICING */}
                    <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col rounded-[28px] border p-7 transition duration-300 sm:p-8 ${
                                    plan.popular
                                        ? "border-[#B59A63] bg-[#171715] text-white shadow-[0_24px_70px_rgba(23,23,21,0.15)] lg:-translate-y-3"
                                        : "border-[#171715]/10 bg-white hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,23,21,0.07)]"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#B59A63] px-4 py-1.5 text-[10px] font-semibold tracking-[0.1em] text-white uppercase">
                                        Most Popular
                                    </div>
                                )}

                                {/* PLAN HEADING */}
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h2
                                            className={`text-[20px] font-semibold tracking-[-0.025em] ${
                                                plan.popular
                                                    ? "text-white"
                                                    : "text-[#171715]"
                                            }`}
                                        >
                                            {plan.name}
                                        </h2>

                                        {plan.name === "Starter" && (
                                            <QrCode
                                                size={21}
                                                strokeWidth={1.7}
                                                className="text-[#B59A63]"
                                            />
                                        )}

                                        {plan.name === "Growth" && (
                                            <TrendingUp
                                                size={21}
                                                strokeWidth={1.7}
                                                className="text-[#B59A63]"
                                            />
                                        )}

                                        {plan.name === "Professional" && (
                                            <Sparkles
                                                size={21}
                                                strokeWidth={1.7}
                                                className="text-[#B59A63]"
                                            />
                                        )}
                                    </div>

                                    <p
                                        className={`mt-3 min-h-[72px] text-[14px] leading-6 ${
                                            plan.popular
                                                ? "text-white/60"
                                                : "text-[#77746D]"
                                        }`}
                                    >
                                        {plan.description}
                                    </p>
                                </div>

                                {/* PRICE */}
                                <div className="mt-7">
                                    <div className="flex items-end">
                                        <span
                                            className={`text-[42px] font-semibold leading-none tracking-[-0.05em] ${
                                                plan.popular
                                                    ? "text-white"
                                                    : "text-[#171715]"
                                            }`}
                                        >
                                            INR {plan.price}
                                        </span>

                                        <span
                                            className={`mb-1 ml-2 text-[13px] ${
                                                plan.popular
                                                    ? "text-white/45"
                                                    : "text-[#77746D]"
                                            }`}
                                        >
                                            {plan.period}
                                        </span>
                                    </div>
                                </div>

                                {/* BUTTON */}
                                <button
                                    type="button"
                                    onClick={() => handlePlanSelect(plan)}
                                    className={`mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-full text-[14px] font-semibold transition ${
                                        plan.popular
                                            ? "bg-[#B59A63] text-white hover:bg-[#A98E58]"
                                            : "bg-[#171715] text-white hover:bg-[#292926]"
                                    }`}
                                >
                                    {plan.button}
                                    <ArrowRight size={16} />
                                </button>

                                {/* DIVIDER */}
                                <div
                                    className={`my-8 h-px ${
                                        plan.popular
                                            ? "bg-white/10"
                                            : "bg-[#171715]/8"
                                    }`}
                                />

                                {/* FEATURES */}
                                <p
                                    className={`mb-5 text-[11px] font-semibold tracking-[0.1em] uppercase ${
                                        plan.popular
                                            ? "text-white/40"
                                            : "text-[#77746D]"
                                    }`}
                                >
                                    Everything included
                                </p>

                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >
                                            <span
                                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                                    plan.popular
                                                        ? "bg-[#B59A63]/20"
                                                        : "bg-[#B59A63]/10"
                                                }`}
                                            >
                                                <Check
                                                    size={12}
                                                    strokeWidth={2.5}
                                                    className="text-[#B59A63]"
                                                />
                                            </span>

                                            <span
                                                className={`text-[13px] leading-5 ${
                                                    plan.popular
                                                        ? "text-white/70"
                                                        : "text-[#55534E]"
                                                }`}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* BOTTOM HINT */}
                                <p
                                    className={`mt-auto pt-8 text-[11px] leading-5 ${
                                        plan.popular
                                            ? "text-white/35"
                                            : "text-[#77746D]"
                                    }`}
                                >
                                    Need more capacity? You can move to a
                                    higher plan as your business grows.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW PRICING WORKS */}
            <section className="border-b border-[#171715]/8">
                <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#B59A63] uppercase">
                                How pricing works
                            </p>

                            <h2 className="mt-5 max-w-[500px] text-[36px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-[48px]">
                                Your business grows.
                                <span className="block text-[#B59A63]">
                                    Your plan grows with it.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-[#77746D]">
                                We keep the core experience available across
                                every plan. The difference is simply how much
                                customer activity your business needs to
                                handle.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                {
                                    number: "01",
                                    title: "Start small",
                                    text: "Begin with the Starter plan and get your customer feedback system running.",
                                },
                                {
                                    number: "02",
                                    title: "Grow naturally",
                                    text: "As more customers interact with your business, your monthly response capacity can grow.",
                                },
                                {
                                    number: "03",
                                    title: "Scale when ready",
                                    text: "Move to a higher plan when your business needs more capacity.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.number}
                                    className="rounded-[22px] border border-[#171715]/8 bg-white p-6"
                                >
                                    <span className="text-[12px] font-semibold text-[#B59A63]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-[13px] leading-6 text-[#77746D]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section>
                <div className="mx-auto max-w-[850px] px-5 py-20 sm:px-8 sm:py-24">
                    <div className="text-center">
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#B59A63] uppercase">
                            Questions
                        </p>

                        <h2 className="mt-4 text-[36px] font-semibold tracking-[-0.045em] sm:text-[48px]">
                            Pricing, made simple.
                        </h2>
                    </div>

                    <div className="mt-12 divide-y divide-[#171715]/8 border-y border-[#171715]/8">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group py-6"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold">
                                    {faq.question}

                                    <ChevronDown
                                        size={18}
                                        className="shrink-0 text-[#B59A63] transition-transform duration-300 group-open:rotate-180"
                                    />
                                </summary>

                                <p className="mt-4 max-w-[700px] text-[14px] leading-6 text-[#77746D]">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 pb-10 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[30px] bg-[#171715] px-6 py-14 text-center text-white sm:px-10 sm:py-20">
                    <div className="mx-auto max-w-[650px]">
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#B59A63] uppercase">
                            Ready when you are
                        </p>

                        <h2 className="mt-5 text-[36px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[52px]">
                            Start listening to your
                            <span className="block text-[#B59A63]">
                                customers today.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-6 text-white/55 sm:text-[15px]">
                            Choose a plan that fits your current customer
                            volume. You can always scale as your business
                            grows.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => handlePlanSelect(plans[1])}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#B59A63] px-7 text-[14px] font-semibold text-white transition hover:bg-[#A98E58]"
                            >
                                Start with Growth
                                <ArrowRight size={16} />
                            </button>

                            <button
                                type="button"
                                onClick={handleTalkToUs}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-[14px] font-semibold text-white transition hover:bg-white/5"
                            >
                                <MessageCircle size={16} />
                                Talk to us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PricingPage;