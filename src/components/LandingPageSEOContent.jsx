
"use client";
import Link from "next/link";

import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    BriefcaseBusiness,
    Check,
    ChevronDown,
    Clock3,
    FileText,
    HeartHandshake,
    Landmark,
    LockKeyhole,
    Menu,
    MessageCircle,
    Phone,
    Scale,
    ShieldCheck,
    Sparkles,
    Users,
    X,
} from "lucide-react";
import { useState } from "react";

const PHONE_NUMBER = "+918766311237";
const DISPLAY_PHONE = "+91 8766311237";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`;

const practiceAreas = [
    {
        number: "01",
        icon: HeartHandshake,
        title: "Divorce & Separation",
        description:
            "Understand the legal process, available options, documentation, and important considerations when navigating separation.",
        tags: ["Divorce", "Separation"],
    },
    {
        number: "02",
        icon: Users,
        title: "Mutual Consent Divorce",
        description:
            "Learn about eligibility, settlement discussions, documentation, and the general procedure for mutual consent divorce in India.",
        tags: ["Family law", "Legal guidance"],
    },
    {
        number: "03",
        icon: Landmark,
        title: "Court Marriage",
        description:
            "Get guidance on marriage registration, applicable legal requirements, documents, notices, and the relevant procedure.",
        tags: ["Marriage", "Registration"],
    },
    {
        number: "04",
        icon: ShieldCheck,
        title: "Live-in Relationships",
        description:
            "Understand relevant legal rights, protections, responsibilities, and available remedies based on your circumstances.",
        tags: ["Rights", "Protection"],
    },
    {
        number: "05",
        icon: BriefcaseBusiness,
        title: "Family Disputes",
        description:
            "Explore legal options for family disagreements, maintenance matters, child-related issues, and related proceedings.",
        tags: ["Family matters", "Resolution"],
    },
    {
        number: "06",
        icon: Scale,
        title: "Other Legal Matters",
        description:
            "Discuss your situation and understand whether your matter requires a different legal specialist or area of practice.",
        tags: ["Consultation", "Next steps"],
    },
];

const processSteps = [
    {
        number: "01",
        title: "Tell us about your matter",
        description:
            "Share a brief overview of your concern and the type of legal assistance you are looking for.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Discuss your options",
        description:
            "Speak with a legal professional about the relevant facts, possible approaches, and applicable legal considerations.",
        icon: Users,
    },
    {
        number: "03",
        title: "Understand the next steps",
        description:
            "Clarify documentation, likely procedures, timelines, and the appropriate next actions for your circumstances.",
        icon: FileText,
    },
    {
        number: "04",
        title: "Move forward with clarity",
        description:
            "Make informed decisions with a clearer understanding of your options and the process ahead.",
        icon: ArrowUpRight,
    },
];

const benefits = [
    {
        icon: LockKeyhole,
        title: "Respect for confidentiality",
        description:
            "Sensitive family and personal matters deserve careful handling and appropriate privacy safeguards.",
    },
    {
        icon: FileText,
        title: "Clear legal explanations",
        description:
            "Understand legal terminology, relevant documents, procedures, and important questions before proceeding.",
    },
    {
        icon: HeartHandshake,
        title: "A considered approach",
        description:
            "Explore appropriate options based on your circumstances instead of relying on assumptions or generic advice.",
    },
    {
        icon: Clock3,
        title: "Understand the process",
        description:
            "Learn about procedural stages, possible delays, and the factors that may influence your matter.",
    },
];

const legalInsights = [
    {
        category: "DIVORCE & FAMILY LAW",
        readTime: "6 min read",
        title: "Mutual Consent Divorce in India: Process, Documents and Important Considerations",
        description:
            "Learn the general stages of mutual consent divorce, the importance of a settlement, essential documents, and why individual circumstances matter.",
        points: [
            "Basic legal requirements",
            "Documents to prepare",
            "Settlement and court procedure",
        ],
    },
    {
        category: "MARRIAGE & REGISTRATION",
        readTime: "5 min read",
        title: "Court Marriage in India: Documents, Eligibility and Legal Procedure",
        description:
            "Understand the difference between marriage registration and marriage under the Special Marriage Act, along with common documentation questions.",
        points: [
            "Applicable marriage laws",
            "Notice and documentation",
            "Questions to clarify before applying",
        ],
    },
    {
        category: "PERSONAL RIGHTS",
        readTime: "5 min read",
        title: "Live-in Relationships in India: Understanding Your Legal Rights",
        description:
            "Explore general legal considerations surrounding adult relationships, protection from abuse, and circumstances in which legal advice may be important.",
        points: [
            "Legal context and eligibility",
            "Available legal protections",
            "When to seek individual advice",
        ],
    },
];

const faqs = [
    {
        question: "How can I book a legal consultation?",
        answer:
            "Use the consultation button, call the listed number, or contact us on WhatsApp. Briefly explain your legal concern so the appropriate next step can be discussed.",
    },
    {
        question: "What information should I prepare before a consultation?",
        answer:
            "Prepare a short timeline of events, the main questions you need answered, and a list of relevant documents. Share sensitive documents only through an appropriate and secure channel.",
    },
    {
        question: "Can I get advice about mutual consent divorce?",
        answer:
            "You can seek guidance about the general procedure, applicable legal requirements, settlement considerations, documentation, and court process. The appropriate advice depends on your individual circumstances.",
    },
    {
        question: "What documents are required for court marriage?",
        answer:
            "Requirements depend on the applicable law, personal circumstances, and the relevant marriage officer. Identity and age proof, address proof, photographs, and other prescribed documents may be required. Confirm the current local requirements before applying.",
    },
    {
        question: "How long does a divorce or court marriage take?",
        answer:
            "There is no single timeline for every matter. The applicable law, statutory requirements, court schedules, documentation, and individual circumstances can affect the time involved.",
    },
    {
        question: "Will my personal information remain confidential?",
        answer:
            "Sensitive legal matters should be handled with appropriate confidentiality safeguards. Ask about information handling before sharing documents or personal details. Do not send highly sensitive information through an unsecured channel.",
    },
    {
        question: "Does contacting your team automatically create an advocate-client relationship?",
        answer:
            "Not necessarily. The nature of any professional relationship, scope of work, fees, and engagement terms should be confirmed directly before relying on legal representation.",
    },
    {
        question: "Can I get legal help if I am outside your city?",
        answer:
            "Possibly. Availability depends on the type of matter, applicable jurisdiction, professional requirements, and whether in-person court appearances or local representation are necessary.",
    },
];

function SectionLabel({ children, dark = false }) {
    return (
        <span
            className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? "text-[#D0B16F]" : "text-[#9D7D3E]"
                }`}
        >
            <span className="h-px w-7 bg-current" />
            {children}
        </span>
    );
}

function SectionHeading({ eyebrow, title, highlight, description, dark = false }) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <SectionLabel dark={dark}>{eyebrow}</SectionLabel>
            <h2
                className={`mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[48px] ${dark ? "text-white" : "text-[#171717]"
                    }`}
            >
                {title}{" "}
                {highlight && (
                    <span className="font-serif italic font-medium text-[#C6A665]">
                        {highlight}
                    </span>
                )}
            </h2>
            {description && (
                <p
                    className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-white/60" : "text-[#77736C]"
                        }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}

function ContactActions({ compact = false }) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row">
            <a
                href={`tel:${PHONE_NUMBER}`}
                className={`inline-flex min-h-12 items-center justify-center gap-2 bg-[#C6A665] px-6 text-xs font-bold text-[#171717] transition hover:bg-[#D6BC84] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A665] ${compact ? "rounded-lg" : "rounded-sm"
                    }`}
            >
                <Phone size={15} />
                Book a consultation
                <ArrowRight size={15} />
            </a>
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-6 text-xs font-semibold text-white transition hover:border-[#C6A665] hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A665] ${compact ? "rounded-lg" : "rounded-sm"
                    }`}
            >
                <MessageCircle size={16} />
                WhatsApp us
                <ArrowUpRight size={15} />
            </a>
        </div>
    );
}

export default function LandingPageSEOContent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <main className="min-h-screen overflow-x-clip bg-[#F6F5F2] font-sans text-[#171717] selection:bg-[#C6A665]/30">

            {/* INTRODUCTION */}
            <section id="about" className="bg-[#F8F7F4]">
                <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
                    <div>
                        <SectionLabel>About our approach</SectionLabel>
                        <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                            Legal matters deserve{" "}
                            <span className="font-serif italic font-medium text-[#B39456]">
                                clarity, not confusion.
                            </span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-sm leading-7 text-[#66635D] sm:text-base sm:leading-8">
                            Legal questions often arise during important personal moments.
                            Knowing which law applies, what documents are needed, and what
                            steps come next can make the process easier to understand.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-[#66635D] sm:text-base sm:leading-8">
                            This website helps you explore common legal topics and connect
                            about the assistance you may need. Every matter is different,
                            and the appropriate course of action depends on the facts,
                            applicable law, and jurisdiction.
                        </p>
                        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-[#B39456] pb-2 text-xs font-bold uppercase tracking-[0.08em] transition hover:text-[#9D7D3E]">
                            Discuss your situation <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRACTICE AREAS */}
            <section id="practice-areas" className="border-y border-black/[0.06] bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
                    <SectionHeading
                        eyebrow="Our practice areas"
                        title="Find guidance for"
                        highlight="what matters to you."
                        description="Explore common legal matters, understand the questions worth asking, and identify an appropriate starting point for your consultation."
                    />

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                        {practiceAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <article
                                    key={area.number}
                                    className="group flex h-full flex-col border border-black/[0.08] bg-[#F8F7F4] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C6A665]/60 hover:bg-white hover:shadow-[0_18px_45px_rgba(23,23,23,0.06)] sm:p-7"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="flex h-12 w-12 items-center justify-center border border-[#C6A665]/30 bg-white text-[#A7874D] transition group-hover:bg-[#171717] group-hover:text-[#C6A665]">
                                            <Icon size={21} strokeWidth={1.5} />
                                        </span>
                                        <span className="font-serif text-sm text-[#B9B3A8]">{area.number}</span>
                                    </div>
                                    <h3 className="mt-7 text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                                        {area.title}
                                    </h3>
                                    <p className="mt-3 flex-1 text-[13px] leading-6 text-[#77736C] sm:text-sm">
                                        {area.description}
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {area.tags.map((tag) => (
                                            <span key={tag} className="border border-black/[0.07] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[#77736C]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href="/contact"
                                        aria-label={`Enquire about ${area.title}`}
                                        className="mt-6 inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-[0.08em] text-[#8D713D] transition group-hover:gap-3"
                                    >
                                        Discuss this matter <ArrowRight size={14} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section id="how-it-works" className="bg-[#111416] text-white">
                <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
                    <SectionHeading
                        dark
                        eyebrow="The consultation process"
                        title="A clearer path"
                        highlight="forward."
                        description="A straightforward starting point for understanding your legal concern and deciding what to do next."
                    />

                    <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <article key={step.number} className="relative border-t border-white/15 pt-6">
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-3xl text-[#C6A665]">{step.number}</span>
                                        <Icon size={22} strokeWidth={1.4} className="text-[#C6A665]" />
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold sm:text-lg">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-white/55">{step.description}</p>
                                    {index !== processSteps.length - 1 && (
                                        <ArrowDownRight size={18} className="mt-5 hidden text-[#C6A665]/70 lg:block" />
                                    )}
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-12 flex flex-col items-start justify-between gap-5 border border-white/10 bg-white/[0.035] p-5 sm:p-7 md:flex-row md:items-center">
                        <div>
                            <h3 className="text-lg font-semibold">Not sure where your matter fits?</h3>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                                Start with a brief enquiry and explain what kind of assistance you need.
                            </p>
                        </div>
                        <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#C6A665] px-5 text-xs font-bold text-[#171717] transition hover:bg-[#D6BC84]">
                            Contact us <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="bg-[#F8F7F4]">
                <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
                    <div>
                        <SectionLabel>What matters in legal guidance</SectionLabel>
                        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                            More clarity.
                            <br />
                            Better-informed{" "}
                            <span className="font-serif italic font-medium text-[#B39456]">
                                decisions.
                            </span>
                        </h2>
                        <p className="mt-5 max-w-lg text-sm leading-7 text-[#77736C] sm:text-base">
                            Good legal guidance should help you understand the issues, ask
                            the right questions, and make decisions with a clearer view of
                            the available options.
                        </p>
                        <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#8D713D]">
                            Speak with us <ArrowRight size={15} />
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <article key={benefit.title} className="border border-black/[0.07] bg-white p-5 sm:p-6">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#F5F0E6] text-[#9D7D3E]">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A7874D]">
                                        0{index + 1}
                                    </p>
                                    <h3 className="mt-2 text-base font-semibold">{benefit.title}</h3>
                                    <p className="mt-3 text-[13px] leading-6 text-[#77736C]">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LEGAL INSIGHTS / BLOGS */}
            <section id="legal-insights" className="border-y border-black/[0.06] bg-white">
                <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
                    <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <SectionLabel>Legal insights</SectionLabel>
                            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                                Understand the law.
                                <br />
                                <span className="font-serif italic font-medium text-[#B39456]">
                                    Know your options.
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#77736C]">
                                Explore practical introductions to common legal questions
                                before deciding what to discuss with a legal professional.
                            </p>
                        </div>
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 border border-black/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#77736C] transition-all duration-300 hover:border-[#A7874D]/40 hover:bg-[#A7874D]/5 hover:text-[#A7874D]"
                        >
                            <FileText size={15} className="text-[#A7874D]" />
                            Legal information library
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                        {legalInsights.map((article, index) => (
                            <article
                                key={article.title}
                                className="flex h-full flex-col border border-black/[0.08] bg-[#F8F7F4] transition hover:border-[#C6A665]/50 hover:shadow-[0_15px_40px_rgba(23,23,23,0.05)]"
                            >
                                <div className="relative flex h-36 items-center justify-between overflow-hidden border-b border-black/[0.06] bg-[#111416] px-6 sm:h-44">
                                    <div className="absolute -right-5 -top-12 h-40 w-40 rounded-full border border-[#C6A665]/20" />
                                    <div className="absolute -right-1 -top-5 h-28 w-28 rounded-full border border-[#C6A665]/15" />
                                    <span className="relative z-10 flex h-12 w-12 items-center justify-center border border-[#C6A665]/40 text-[#C6A665]">
                                        {index === 0 ? <HeartHandshake size={23} /> : index === 1 ? <Landmark size={23} /> : <ShieldCheck size={23} />}
                                    </span>
                                    <span className="relative z-10 self-end pb-1 font-serif text-5xl text-white/[0.12]">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#9D7D3E]">
                                            {article.category}
                                        </span>
                                        <span className="text-[10px] text-[#89847A]">{article.readTime}</span>
                                    </div>

                                    <h3 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.025em]">
                                        {article.title}
                                    </h3>

                                    <p className="mt-3 text-[13px] leading-6 text-[#77736C]">
                                        {article.description}
                                    </p>

                                    <ul className="mt-5 space-y-2 border-t border-black/[0.07] pt-4">
                                        {article.points.map((point) => (
                                            <li key={point} className="flex items-start gap-2 text-xs leading-5 text-[#66635D]">
                                                <Check size={13} className="mt-0.5 shrink-0 text-[#A7874D]" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className="mt-6 inline-flex items-center gap-2 self-start border-b border-[#C6A665]/60 pb-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8D713D] transition hover:gap-3"
                                    >
                                        Discuss this topic <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-6 text-xs leading-6 text-[#89847A]">
                        These are introductory topic summaries, not substitutes for
                        complete legal articles or advice specific to an individual case.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section id="faqs" className="bg-[#F8F7F4]">
                <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
                    <div>
                        <SectionLabel>Frequently asked questions</SectionLabel>
                        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[44px]">
                            Questions before you{" "}
                            <span className="font-serif italic font-medium text-[#B39456]">
                                get started.
                            </span>
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-[#77736C]">
                            Find answers to common questions about consultations,
                            documentation, legal processes, and getting started.
                        </p>
                        <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#8D713D]">
                            Have another question? <ArrowRight size={15} />
                        </Link>
                    </div>

                    <div className="border-t border-black/10">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div key={faq.question} className="border-b border-black/10">
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                        className="flex min-h-[68px] w-full items-center justify-between gap-4 py-5 text-left"
                                    >
                                        <span className="text-sm font-semibold leading-6 sm:text-[15px]">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className={`shrink-0 text-[#9D7D3E] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <p className="max-w-2xl pb-6 pr-6 text-[13px] leading-7 text-[#77736C] sm:text-sm">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section id="contact" className="bg-[#111416] text-white">
                <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
                    <div className="relative overflow-hidden border border-white/10 bg-[#171A1C] px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[#C6A665]/20 sm:h-96 sm:w-96" />
                        <div className="pointer-events-none absolute -right-8 -top-20 h-56 w-56 rounded-full border border-[#C6A665]/15 sm:h-72 sm:w-72" />

                        <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_auto] lg:gap-12">
                            <div className="max-w-3xl">
                                <SectionLabel dark>Take the next step</SectionLabel>
                                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[52px]">
                                    Your concerns deserve
                                    <br />
                                    <span className="font-serif italic font-medium text-[#C6A665]">
                                        thoughtful attention.
                                    </span>
                                </h2>
                                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                                    Start a conversation about your legal matter. Get clarity on
                                    the questions to ask, the documents to prepare, and the next
                                    steps worth considering.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:min-w-[215px] lg:flex-col">
                                <a href={`tel:${PHONE_NUMBER}`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#C6A665] px-5 text-xs font-bold text-[#171717] transition hover:bg-[#D6BC84]">
                                    <Phone size={15} /> Call for a consultation
                                </a>
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-5 text-xs font-semibold text-white transition hover:border-[#C6A665] hover:bg-white/[0.05]">
                                    <MessageCircle size={16} /> WhatsApp enquiry
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-5 border-b border-white/10 pb-9 sm:grid-cols-3">
                        {[
                            ["01", "Share your concern", "Explain the general nature of your matter."],
                            ["02", "Discuss your questions", "Identify the legal information you need."],
                            ["03", "Clarify next steps", "Understand the appropriate way forward."],
                        ].map(([number, title, description]) => (
                            <div key={number} className="flex items-start gap-3">
                                <span className="font-serif text-lg text-[#C6A665]">{number}</span>
                                <div>
                                    <h3 className="text-sm font-semibold">{title}</h3>
                                    <p className="mt-1.5 text-xs leading-6 text-white/45">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-3 text-[11px] leading-6 text-white/40 sm:flex-row sm:items-start sm:justify-between">
                        <p className="max-w-3xl">
                            Legal information on this website is general in nature and is not
                            a substitute for professional legal advice. Outcomes, procedures,
                            and timelines depend on the applicable law and individual facts.
                        </p>
                        <a href="#home" className="inline-flex shrink-0 items-center gap-2 self-start text-[#C6A665] hover:text-[#D6BC84]">
                            Back to top <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </section>

            {/* FLOATING CONTACT ACTIONS */}
            <div className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    aria-label={`Call us at ${DISPLAY_PHONE}`}
                    className="group flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.13)] transition hover:-translate-y-0.5 hover:border-[#C6A665] sm:px-4"
                >
                    <Phone size={16} className="text-[#252525]" />
                    <span className="text-[11px] font-bold text-[#252525]">Call us</span>
                </a>
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp us at ${DISPLAY_PHONE}`}
                    className="flex h-12 items-center gap-2 rounded-full border border-[#C6A665]/40 bg-[#D8BE83] px-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.13)] transition hover:-translate-y-0.5 hover:bg-[#E4CD9C] sm:px-4"
                >
                    <MessageCircle size={17} className="text-[#171717]" />
                    <span className="text-[11px] font-bold text-[#171717]">WhatsApp</span>
                </a>
            </div>
        </main>
    );
}
