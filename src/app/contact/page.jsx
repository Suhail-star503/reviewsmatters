
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ChevronDown,
    Clock3,
    FileText,
    Gavel,
    HeartHandshake,
    Landmark,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Scale,
    ShieldCheck,
    Sparkles,
    UserRound,
} from "lucide-react";

const WHATSAPP_NUMBER = "918766311237";
const CONTACT_EMAIL = "contact@example.com";

const practiceAreas = [
    "Divorce & Family Law",
    "Court Marriage",
    "Live-in Relationship",
    "Criminal Law",
    "Civil Law",
    "Corporate & Business",
    "Property Disputes",
    "Other Legal Matter",
];

const contactOptions = [
    {
        icon: MessageCircle,
        eyebrow: "QUICK ENQUIRY",
        title: "WhatsApp us",
        description:
            "Send a message about your legal concern and our team can guide you on the next steps.",
        action: "Continue on WhatsApp",
        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hello, I would like to enquire about your legal consultation services."
        )}`,
        external: true,
    },
    {
        icon: Mail,
        eyebrow: "WRITTEN ENQUIRY",
        title: "Email our team",
        description:
            "Prefer email? Send us your enquiry and include the best way to reach you.",
        action: "Compose an email",
        href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            "Legal Consultation Enquiry"
        )}`,
        external: true,
    },
];

const faqs = [
    {
        question: "How can I request a consultation?",
        answer:
            "You can contact our team through WhatsApp, email, or the enquiry form. The form on this page is currently a visual interface and does not submit enquiries.",
    },
    {
        question: "What information should I share?",
        answer:
            "Start with a brief description of your legal concern and the relevant location. Avoid sharing confidential documents or sensitive personal information before a suitable communication channel has been established.",
    },
    {
        question: "Can I discuss my matter before booking?",
        answer:
            "You can send an initial enquiry to understand the consultation process. Whether a consultation is suitable, and any applicable fees, can be confirmed directly with the advocate.",
    },
    {
        question: "Is my enquiry automatically confidential?",
        answer:
            "Please avoid sending sensitive information through this demonstration form. Confidentiality, professional duties, and the handling of information depend on the applicable circumstances and communication arrangements.",
    },
];

export default function ContactPage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        practiceArea: "",
        preferredContact: "WhatsApp",
        message: "",
    });

    const [faqOpen, setFaqOpen] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleDemoSubmit = (event) => {
        event.preventDefault();
        // UI only: connect your enquiry API or form service later.
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#F8F7F4] pt-[100px] text-[#171715] sm:pt-[112px]">
            {/* HERO */}

            <section className="relative border-b border-[#171715]/[0.07]">
                <div className="pointer-events-none absolute -right-36 -top-20 h-[400px] w-[400px] rounded-full bg-[#B59A63]/[0.08] blur-3xl" />

                <div className="relative mx-auto max-w-[1240px] px-5 pb-12 pt-9 sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20">
                    <div className="grid items-end gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
                        <div className="max-w-[750px]">
                            <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A7B43] sm:text-[11px]">
                                <span className="h-px w-7 bg-[#B59A63]" />
                                Contact our legal team
                            </div>

                            <h1 className="mt-6 text-[43px] font-medium leading-[1.06] tracking-[-0.055em] sm:text-[58px] lg:text-[72px]">
                                Let's understand
                                <span className="block text-[#A7874D]">
                                    your legal needs.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-[570px] text-[14px] leading-7 text-[#77746D] sm:text-[15px] sm:leading-8">
                                Every legal matter is different. Tell us a
                                little about what you need, and explore the
                                right way to take the next step.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-[#77746D]">
                                <span className="inline-flex items-center gap-2">
                                    <ShieldCheck
                                        size={15}
                                        className="text-[#A7874D]"
                                    />
                                    Professional legal assistance
                                </span>

                                <span className="hidden h-4 w-px bg-[#DCD7CE] sm:block" />

                                <span className="inline-flex items-center gap-2">
                                    <MessageCircle
                                        size={15}
                                        className="text-[#A7874D]"
                                    />
                                    Multiple contact options
                                </span>
                            </div>
                        </div>

                        <div className="hidden border-l border-[#DCD7CE] pb-1 pl-7 lg:block">
                            <Scale
                                size={25}
                                strokeWidth={1.3}
                                className="text-[#A7874D]"
                            />

                            <p className="mt-5 text-[23px] font-medium leading-tight tracking-[-0.04em]">
                                Start with a conversation.
                            </p>

                            <p className="mt-3 text-[12px] leading-6 text-[#77746D]">
                                A clear understanding of your situation helps
                                identify the appropriate next steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT OPTIONS */}

            <section className="mx-auto max-w-[1240px] px-5 pt-10 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
                <div className="mb-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7874D]">
                        Get in touch
                    </p>

                    <h2 className="mt-2 text-[25px] font-medium tracking-[-0.04em] sm:text-[30px]">
                        Choose how you'd like to connect
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {contactOptions.map((option) => {
                        const Icon = option.icon;

                        return (
                            <a
                                key={option.title}
                                href={option.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex min-w-0 flex-col rounded-[22px] border border-[#E5E0D6] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C7B38D] hover:shadow-[0_16px_40px_rgba(23,23,21,0.055)] sm:p-8"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#E9E1D2] bg-[#F8F5EF] text-[#A7874D] transition duration-300 group-hover:bg-[#A7874D] group-hover:text-white">
                                        <Icon size={21} strokeWidth={1.6} />
                                    </div>

                                    <ArrowUpRight
                                        size={19}
                                        className="text-[#8B877F] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A7874D]"
                                    />
                                </div>

                                <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#A7874D]">
                                    {option.eyebrow}
                                </p>

                                <h3 className="mt-2 text-[22px] font-medium tracking-[-0.035em]">
                                    {option.title}
                                </h3>

                                <p className="mt-3 max-w-[440px] flex-1 text-[12px] leading-7 text-[#77746D] sm:text-[13px]">
                                    {option.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2 border-t border-[#ECE8E1] pt-5 text-[12px] font-semibold text-[#252520]">
                                    {option.action}

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-200 group-hover:translate-x-1"
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </section>

            {/* FORM AND SIDEBAR */}

            <section className="mx-auto max-w-[1240px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24">
                <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px] lg:gap-12">
                    {/* CONTACT FORM */}

                    <div className="min-w-0 overflow-hidden rounded-[24px] border border-[#E5E0D6] bg-white shadow-[0_12px_45px_rgba(23,23,21,0.035)]">
                        <div className="border-b border-[#ECE8E1] px-6 py-7 sm:px-9 sm:py-9">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7874D]">
                                        Consultation enquiry
                                    </p>

                                    <h2 className="mt-3 text-[27px] font-medium leading-tight tracking-[-0.045em] sm:text-[34px]">
                                        Tell us about your matter.
                                    </h2>
                                </div>

                                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#F8F5EF] text-[#A7874D] sm:flex">
                                    <FileText size={21} strokeWidth={1.5} />
                                </div>
                            </div>

                            <p className="mt-3 max-w-[520px] text-[12px] leading-6 text-[#77746D] sm:text-[13px]">
                                Complete the fields below to prepare your
                                enquiry. This form is a UI demonstration and
                                does not send or save your information.
                            </p>
                        </div>

                        <form
                            onSubmit={handleDemoSubmit}
                            className="space-y-6 px-6 py-7 sm:px-9 sm:py-9"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormField
                                    label="Full name"
                                    htmlFor="fullName"
                                    required
                                >
                                    <div className="relative">
                                        <UserRound
                                            size={16}
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A19C93]"
                                        />

                                        <input
                                            id="fullName"
                                            name="fullName"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            autoComplete="name"
                                            required
                                            className={inputClass}
                                        />
                                    </div>
                                </FormField>

                                <FormField
                                    label="Email address"
                                    htmlFor="email"
                                    required
                                >
                                    <div className="relative">
                                        <Mail
                                            size={16}
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A19C93]"
                                        />

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            autoComplete="email"
                                            required
                                            className={inputClass}
                                        />
                                    </div>
                                </FormField>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormField
                                    label="Phone number"
                                    htmlFor="phone"
                                    optional
                                >
                                    <div className="relative">
                                        <Phone
                                            size={16}
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A19C93]"
                                        />

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            autoComplete="tel"
                                            className={inputClass}
                                        />
                                    </div>
                                </FormField>

                                <FormField
                                    label="Area of legal assistance"
                                    htmlFor="practiceArea"
                                    required
                                >
                                    <div className="relative">
                                        <Scale
                                            size={16}
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A19C93]"
                                        />

                                        <select
                                            id="practiceArea"
                                            name="practiceArea"
                                            value={form.practiceArea}
                                            onChange={handleChange}
                                            required
                                            className={`${inputClass} appearance-none pr-10 ${
                                                form.practiceArea
                                                    ? "text-[#171715]"
                                                    : "text-[#A19C93]"
                                            }`}
                                        >
                                            <option value="" disabled>
                                                Select a legal area
                                            </option>

                                            {practiceAreas.map((area) => (
                                                <option
                                                    key={area}
                                                    value={area}
                                                >
                                                    {area}
                                                </option>
                                            ))}
                                        </select>

                                        <ChevronDown
                                            size={15}
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#89857D]"
                                        />
                                    </div>
                                </FormField>
                            </div>

                            <FormField
                                label="Preferred contact method"
                                htmlFor="preferredContact"
                            >
                                <div className="grid grid-cols-2 gap-3">
                                    {["WhatsApp", "Email"].map((method) => {
                                        const active =
                                            form.preferredContact === method;

                                        return (
                                            <button
                                                key={method}
                                                type="button"
                                                onClick={() =>
                                                    setForm((previous) => ({
                                                        ...previous,
                                                        preferredContact:
                                                            method,
                                                    }))
                                                }
                                                aria-pressed={active}
                                                className={`flex min-h-[48px] items-center justify-center gap-2 rounded-[12px] border text-[12px] font-medium transition ${
                                                    active
                                                        ? "border-[#B59A63] bg-[#B59A63]/[0.08] text-[#8B6D37]"
                                                        : "border-[#E5E0D6] bg-white text-[#77746D] hover:border-[#C7B38D]"
                                                }`}
                                            >
                                                {method === "WhatsApp" ? (
                                                    <MessageCircle size={15} />
                                                ) : (
                                                    <Mail size={15} />
                                                )}

                                                {method}

                                                {active && (
                                                    <CheckCircle2 size={14} />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </FormField>

                            <FormField
                                label="Brief description of your enquiry"
                                htmlFor="message"
                                required
                            >
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Briefly describe the type of legal assistance you are looking for..."
                                    required
                                    rows={5}
                                    className="min-h-[140px] w-full resize-y rounded-[13px] border border-[#E4E0D9] bg-[#FCFBF9] px-4 py-3.5 text-[13px] leading-6 text-[#171715] outline-none transition placeholder:text-[#B2AEA6] focus:border-[#B59A63] focus:bg-white focus:ring-4 focus:ring-[#B59A63]/[0.08]"
                                />
                            </FormField>

                            <div className="flex items-start gap-3 rounded-[13px] border border-[#EAE4D8] bg-[#F9F6F0] p-4">
                                <ShieldCheck
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#A7874D]"
                                />

                                <p className="text-[11px] leading-5 text-[#77746D]">
                                    Please do not include confidential
                                    information, passwords, financial details,
                                    or sensitive documents in this demo form.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="group flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#171715] px-6 text-[13px] font-semibold text-white transition duration-200 hover:bg-[#30302B] active:scale-[0.99]"
                            >
                                Prepare enquiry

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                />
                            </button>

                            <p className="text-center text-[10px] leading-5 text-[#969188]">
                                UI preview only. No enquiry will be sent or
                                stored.
                            </p>
                        </form>
                    </div>

                    {/* CONTACT INFORMATION SIDEBAR */}

                    <aside className="space-y-5">
                        <div className="rounded-[22px] bg-[#20201D] p-6 text-white sm:p-7">
                            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] text-[#C6AC78]">
                                <HeartHandshake
                                    size={21}
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3 className="mt-5 text-[23px] font-medium leading-tight tracking-[-0.04em]">
                                How we can help
                            </h3>

                            <p className="mt-3 text-[12px] leading-6 text-white/60">
                                Share the nature of your legal concern so the
                                team can help you understand the appropriate
                                next steps.
                            </p>

                            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                                {[
                                    "Understand your options",
                                    "Identify relevant legal services",
                                    "Discuss the consultation process",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2
                                            size={16}
                                            className="mt-0.5 shrink-0 text-[#C6AC78]"
                                        />

                                        <span className="text-[12px] leading-5 text-white/75">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[22px] border border-[#E5E0D6] bg-white p-6 sm:p-7">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7874D]">
                                Contact information
                            </p>

                            <h3 className="mt-3 text-[21px] font-medium tracking-[-0.04em]">
                                Reach our team
                            </h3>

                            <div className="mt-6 space-y-5">
                                <ContactDetail
                                    icon={Mail}
                                    title="Email"
                                    value={CONTACT_EMAIL}
                                    href={`mailto:${CONTACT_EMAIL}`}
                                />

                                <ContactDetail
                                    icon={MessageCircle}
                                    title="WhatsApp"
                                    value="+91 87663 11237"
                                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                    external
                                />
                            </div>

                            <div className="mt-6 flex items-start gap-3 border-t border-[#ECE8E1] pt-5">
                                <Clock3
                                    size={16}
                                    className="mt-0.5 shrink-0 text-[#A7874D]"
                                />

                                <div>
                                    <p className="text-[12px] font-semibold">
                                        Availability
                                    </p>

                                    <p className="mt-1 text-[11px] leading-5 text-[#89857D]">
                                        Contact the team to confirm current
                                        office hours and consultation
                                        availability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[22px] border border-[#E5E0D6] bg-[#F2EFE8] p-6">
                            <div className="flex items-center gap-2 text-[#A7874D]">
                                <Landmark size={17} />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
                                    Legal resources
                                </span>
                            </div>

                            <p className="mt-3 text-[17px] font-medium tracking-[-0.025em]">
                                Have a general legal question?
                            </p>

                            <p className="mt-2 text-[11px] leading-6 text-[#77746D]">
                                Browse our introductory articles to understand
                                common legal topics before contacting us.
                            </p>

                            <Link
                                href="/articles"
                                className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#8B6D37] transition hover:text-[#171715]"
                            >
                                Explore legal articles

                                <ArrowUpRight size={14} />
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            {/* FAQ */}

            <section className="border-t border-[#E5E0D6] bg-white">
                <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-20">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7874D]">
                            Helpful information
                        </p>

                        <h2 className="mt-4 max-w-[400px] text-[32px] font-medium leading-tight tracking-[-0.05em] sm:text-[42px]">
                            Before you get in touch.
                        </h2>

                        <p className="mt-4 max-w-[370px] text-[12px] leading-7 text-[#77746D] sm:text-[13px]">
                            A few answers to common questions about contacting
                            an advocate and arranging a consultation.
                        </p>
                    </div>

                    <div className="divide-y divide-[#EAE6DF] border-y border-[#EAE6DF]">
                        {faqs.map((faq, index) => {
                            const isOpen = faqOpen === index;

                            return (
                                <div key={faq.question} className="py-5">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFaqOpen(
                                                isOpen ? -1 : index
                                            )
                                        }
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-5 text-left"
                                    >
                                        <span className="text-[13px] font-semibold leading-6 text-[#282823] sm:text-[14px]">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={17}
                                            className={`shrink-0 text-[#A7874D] transition-transform duration-200 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <p className="mt-3 max-w-[600px] pr-5 text-[12px] leading-7 text-[#77746D]">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FOOTER DISCLAIMER */}

            <footer className="border-t border-[#E5E0D6] bg-[#F8F7F4]">
                <div className="mx-auto flex max-w-[1240px] items-start gap-3 px-5 py-7 sm:px-8 lg:px-10">
                    <Scale
                        size={17}
                        className="mt-0.5 shrink-0 text-[#A7874D]"
                    />

                    <p className="max-w-[850px] text-[10px] leading-6 text-[#89857D]">
                        Contacting the firm does not by itself establish an
                        advocate-client relationship. Do not send sensitive
                        information until appropriate communication and
                        engagement arrangements have been confirmed.
                    </p>
                </div>
            </footer>
        </main>
    );
}

const inputClass =
    "h-[49px] w-full rounded-[13px] border border-[#E4E0D9] bg-[#FCFBF9] pl-11 pr-4 text-[12px] text-[#171715] outline-none transition placeholder:text-[#B2AEA6] focus:border-[#B59A63] focus:bg-white focus:ring-4 focus:ring-[#B59A63]/[0.08]";

function FormField({ label, htmlFor, required, optional, children }) {
    return (
        <div className="min-w-0">
            <label
                htmlFor={htmlFor}
                className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#4F4C46]"
            >
                {label}

                {required && (
                    <span className="text-[#A7874D]">*</span>
                )}

                {optional && (
                    <span className="font-normal text-[#A19C93]">
                        (Optional)
                    </span>
                )}
            </label>

            {children}
        </div>
    );
}

function ContactDetail({ icon: Icon, title, value, href, external }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex min-w-0 items-start gap-3"
        >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#F7F4ED] text-[#A7874D] transition group-hover:bg-[#A7874D] group-hover:text-white">
                <Icon size={16} />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[10px] text-[#89857D]">{title}</p>

                <p className="mt-1 break-words text-[12px] font-medium text-[#34342F] transition-colors group-hover:text-[#A7874D]">
                    {value}
                </p>
            </div>

            <ArrowUpRight
                size={14}
                className="mt-1 shrink-0 text-[#A19C93] transition group-hover:text-[#A7874D]"
            />
        </a>
    );
}
