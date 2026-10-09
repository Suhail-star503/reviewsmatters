
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    ChevronRight,
    Clock3,
    FileText,
    Gavel,
    HeartHandshake,
    Landmark,
    Lightbulb,
    Menu,
    Search,
    ShieldCheck,
    Scale,
    SlidersHorizontal,
    Users,
    X,
} from "lucide-react";

const categories = [
    "All Articles",
    "Family Law",
    "Criminal Law",
    "Property Law",
    "Consumer Rights",
    "Cyber Law",
    "Business Law",
    "General Legal",
];

const articles = [
    {
        slug: "divorce-process-in-india",
        title: "Divorce in India: Understanding the Legal Process",
        description:
            "Learn about mutual consent divorce, contested divorce, required documents, and the general steps involved in ending a marriage legally.",
        category: "Family Law",
        date: "Legal Guide",
        readTime: "6 min read",
        featured: true,
        icon: HeartHandshake,
        tag: "Family & Matrimonial",
    },
    {
        slug: "court-marriage-in-india",
        title: "Court Marriage in India: Documents and Procedure",
        description:
            "Understand eligibility, commonly required documents, notice requirements, and the procedure for civil marriage in India.",
        category: "Family Law",
        date: "Marriage & Family",
        readTime: "5 min read",
        icon: Users,
        tag: "Marriage",
    },
    {
        slug: "domestic-violence-legal-rights-india",
        title: "Domestic Violence: Legal Rights and Available Remedies",
        description:
            "An introductory guide to legal protections, protection orders, support services, and where to seek help in India.",
        category: "Family Law",
        date: "Rights & Protection",
        readTime: "6 min read",
        icon: ShieldCheck,
        tag: "Legal Protection",
    },
    {
        slug: "fir-in-india",
        title: "How to File an FIR in India",
        description:
            "Understand what an FIR is, where to report a cognizable offence, what information to provide, and what to do if police refuse to register it.",
        category: "Criminal Law",
        date: "Criminal Justice",
        readTime: "5 min read",
        icon: Gavel,
        tag: "Police & Procedure",
    },
    {
        slug: "property-dispute-legal-options-india",
        title: "Property Disputes in India: Your Legal Options",
        description:
            "Explore common property disputes, the importance of ownership documents, and possible legal routes for resolving disagreements.",
        category: "Property Law",
        date: "Property & Ownership",
        readTime: "7 min read",
        icon: Landmark,
        tag: "Property",
    },
    {
        slug: "consumer-complaint-india",
        title: "How to File a Consumer Complaint in India",
        description:
            "Learn how to document a defective product or poor service, approach the appropriate consumer forum, and explore available complaint channels.",
        category: "Consumer Rights",
        date: "Consumer Protection",
        readTime: "5 min read",
        icon: CheckCircle2,
        tag: "Consumer Rights",
    },
    {
        slug: "cybercrime-complaint-india",
        title: "Online Fraud in India: How to Report Cybercrime",
        description:
            "Find out what to do after an online scam, which evidence to preserve, and how to report suspected cybercrime through official channels.",
        category: "Cyber Law",
        date: "Digital Safety",
        readTime: "4 min read",
        icon: ShieldCheck,
        tag: "Online Safety",
    },
    {
        slug: "legal-notice-in-india",
        title: "Legal Notice in India: Meaning and When It Is Needed",
        description:
            "Discover why legal notices are sent, what information they commonly contain, and why getting legal advice before responding can matter.",
        category: "General Legal",
        date: "Legal Basics",
        readTime: "5 min read",
        icon: FileText,
        tag: "Legal Documents",
    },
    {
        slug: "cheque-bounce-case-india",
        title: "Cheque Bounce Cases in India: A Basic Legal Guide",
        description:
            "Understand the general legal framework for dishonoured cheques, why deadlines matter, and when to consult an advocate.",
        category: "Business Law",
        date: "Business & Finance",
        readTime: "6 min read",
        icon: BriefcaseBusiness,
        tag: "Financial Disputes",
    },
    {
        slug: "free-legal-aid-india",
        title: "Free Legal Aid in India: Who Can Get Legal Assistance?",
        description:
            "Learn about legal aid services, eligibility under applicable rules, and how to contact the relevant Legal Services Authority.",
        category: "General Legal",
        date: "Access to Justice",
        readTime: "4 min read",
        icon: Scale,
        tag: "Legal Assistance",
    },
];

export default function ArticlesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Articles");
    const [showAll, setShowAll] = useState(false);

    const filteredArticles = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return articles.filter((article) => {
            const matchesCategory =
                activeCategory === "All Articles" ||
                article.category === activeCategory;

            const matchesSearch =
                !query ||
                article.title.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.tag.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, activeCategory]);

    const featuredArticle = articles[0];

    const visibleArticles = showAll
        ? filteredArticles
        : filteredArticles.slice(0, 6);

    const hasActiveFilter =
        activeCategory !== "All Articles" || searchQuery.trim() !== "";

    const resetFilters = () => {
        setSearchQuery("");
        setActiveCategory("All Articles");
        setShowAll(false);
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#F8F7F4] pt-[100px] text-[#171715] sm:pt-[112px]">
            {/* EDITORIAL HERO */}

            <section className="relative">
                <div className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-[#B59A63]/[0.07] blur-3xl" />

                <div className="relative mx-auto max-w-[1240px] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-10 lg:pt-12">
                    <div className="grid items-end gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
                        <div className="max-w-[760px]">
                            <div className="mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#9A7B43] sm:text-[11px]">
                                <span className="h-px w-7 bg-[#B59A63]" />
                                The Legal Journal
                            </div>

                            <h1 className="max-w-[720px] text-[43px] font-medium leading-[1.07] tracking-[-0.055em] sm:text-[58px] lg:text-[72px]">
                                Clear answers to
                                <span className="block text-[#A7874D]">
                                    important legal questions.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-[570px] text-[14px] leading-7 text-[#77746D] sm:text-[15px] sm:leading-8">
                                Practical legal guides to help you understand
                                Indian law, know your rights, and make more
                                informed decisions.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] text-[#77746D]">
                                <span className="inline-flex items-center gap-2">
                                    <BookOpen
                                        size={15}
                                        className="text-[#A7874D]"
                                    />
                                    Easy-to-understand guides
                                </span>

                                <span className="hidden h-4 w-px bg-[#DCD7CE] sm:block" />

                                <span className="inline-flex items-center gap-2">
                                    <Scale
                                        size={15}
                                        className="text-[#A7874D]"
                                    />
                                    Indian legal topics
                                </span>
                            </div>
                        </div>

                        <div className="hidden border-l border-[#DCD7CE] pl-7 pb-1 lg:block">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A7B43]">
                                The essentials
                            </span>

                            <p className="mt-4 text-[25px] font-medium leading-tight tracking-[-0.04em]">
                                Know your rights.
                                <span className="block text-[#8B877F]">
                                    Understand your options.
                                </span>
                            </p>

                            <p className="mt-4 text-[12px] leading-6 text-[#77746D]">
                                Start with a topic, explore the basics, and
                                identify when professional legal advice may
                                be appropriate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEARCH AND CATEGORY FILTERS */}

            <section
                id="article-library"
                className="border-y border-[#171715]/[0.08] bg-white"
            >
                <div className="mx-auto max-w-[1240px] px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7874D]">
                                Browse the library
                            </p>

                            <h2 className="mt-2 text-[25px] font-medium tracking-[-0.04em] sm:text-[29px]">
                                Explore legal articles
                            </h2>
                        </div>

                        <div className="relative w-full lg:max-w-[390px]">
                            <Search
                                size={17}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#89857D]"
                            />

                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(event) => {
                                    setSearchQuery(event.target.value);
                                    setShowAll(false);
                                }}
                                placeholder="Search legal topics..."
                                aria-label="Search legal articles"
                                className="h-[49px] w-full rounded-full border border-[#E5E1D9] bg-[#FCFBF9] pl-11 pr-11 text-[13px] text-[#171715] outline-none transition placeholder:text-[#A19C93] focus:border-[#B59A63] focus:bg-white focus:ring-4 focus:ring-[#B59A63]/10"
                            />

                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    aria-label="Clear search"
                                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#77746D] hover:bg-[#F0EDE7]"
                                >
                                    <X size={15} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="mt-7 flex items-center gap-2">
                        <SlidersHorizontal
                            size={14}
                            className="mr-1 shrink-0 text-[#8A857C]"
                        />

                        <div className="flex min-w-0 flex-1 flex-wrap gap-2">
                            {categories.map((category) => {
                                const isActive =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setShowAll(false);
                                        }}
                                        aria-pressed={isActive}
                                        className={`rounded-full border px-4 py-2.5 text-[11px] font-medium transition duration-200 ${
                                            isActive
                                                ? "border-[#171715] bg-[#171715] text-white"
                                                : "border-[#E6E2DA] bg-white text-[#68645D] hover:border-[#B59A63] hover:text-[#171715]"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED ARTICLE */}

            {!hasActiveFilter && (
                <section className="mx-auto max-w-[1240px] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7874D]">
                                Start here
                            </p>

                            <h2 className="mt-2 text-[25px] font-medium tracking-[-0.04em] sm:text-[30px]">
                                Featured legal guide
                            </h2>
                        </div>

                        <span className="hidden text-[11px] text-[#89857D] sm:block">
                            Our editor&apos;s pick
                        </span>
                    </div>

                    <Link
                        href={`/articles/${featuredArticle.slug}`}
                        className="group grid overflow-hidden rounded-[24px] border border-[#E5E0D6] bg-white transition duration-300 hover:border-[#C7B38D] hover:shadow-[0_18px_50px_rgba(23,23,21,0.06)] md:grid-cols-[0.88fr_1.12fr]"
                    >
                        <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden bg-[#20201D] p-7 text-white sm:min-h-[270px] sm:p-9 lg:p-11">
                            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/[0.08]" />

                            <div className="pointer-events-none absolute -right-1 top-8 h-44 w-44 rounded-full border border-[#B59A63]/25" />

                            <div className="pointer-events-none absolute -bottom-16 left-12 h-48 w-48 rounded-full border border-white/[0.06]" />

                            <div className="relative flex items-center justify-between">
                                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D4BD8C]">
                                    Featured article
                                </span>

                                <Scale
                                    size={21}
                                    strokeWidth={1.3}
                                    className="text-[#C5AB75]"
                                />
                            </div>

                            <div className="relative mt-12">
                                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                                    A guide to Indian law
                                </p>

                                <p className="mt-3 max-w-[320px] text-[30px] font-medium leading-tight tracking-[-0.045em] sm:text-[37px]">
                                    Understand the process.
                                    <span className="block text-[#C5AB75]">
                                        Know your options.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A7874D]">
                                <span>{featuredArticle.category}</span>

                                <span className="h-1 w-1 rounded-full bg-[#C8C1B4]" />

                                <span>Popular guide</span>
                            </div>

                            <h3 className="mt-4 max-w-[530px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] transition-colors group-hover:text-[#92733F] sm:text-[34px]">
                                {featuredArticle.title}
                            </h3>

                            <p className="mt-4 max-w-[500px] text-[13px] leading-7 text-[#77746D] sm:text-[14px]">
                                {featuredArticle.description}
                            </p>

                            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#EAE6DF] pt-5">
                                <span className="inline-flex items-center gap-2 text-[11px] text-[#77746D]">
                                    <Clock3 size={14} />
                                    {featuredArticle.readTime}
                                </span>

                                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#171715]">
                                    Read article

                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </span>
                            </div>
                        </div>
                    </Link>
                </section>
            )}

            {/* ARTICLE GRID */}

            <section className="mx-auto max-w-[1240px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A7874D]">
                            The article collection
                        </p>

                        <h2 className="mt-2 text-[27px] font-medium tracking-[-0.045em] sm:text-[33px]">
                            {hasActiveFilter
                                ? "Search results"
                                : "More legal essentials"}
                        </h2>

                        <p className="mt-2 text-[12px] leading-6 text-[#89857D]">
                            {filteredArticles.length}{" "}
                            {filteredArticles.length === 1
                                ? "article"
                                : "articles"}{" "}
                            {hasActiveFilter
                                ? "match your selection."
                                : "to help you get started."}
                        </p>
                    </div>

                    {hasActiveFilter && (
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="inline-flex w-fit items-center gap-2 text-[11px] font-semibold text-[#8C7041] transition hover:text-[#171715]"
                        >
                            Clear filters
                            <X size={13} />
                        </button>
                    )}
                </div>

                {visibleArticles.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                            {visibleArticles.map((article, index) => {
                                const ArticleIcon = article.icon;

                                return (
                                    <article
                                        key={article.slug}
                                        className="group flex min-w-0 flex-col rounded-[20px] border border-[#E5E0D6] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C7B38D] hover:shadow-[0_16px_40px_rgba(23,23,21,0.055)] sm:p-6"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#E9E1D2] bg-[#F8F5EF] text-[#A7874D] transition duration-300 group-hover:border-[#B59A63]/40 group-hover:bg-[#A7874D] group-hover:text-white">
                                                <ArticleIcon
                                                    size={19}
                                                    strokeWidth={1.6}
                                                />
                                            </div>

                                            <span className="pt-1 text-[10px] text-[#89857D]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                        </div>

                                        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-medium text-[#A7874D]">
                                            <span>{article.category}</span>

                                            <span className="h-1 w-1 rounded-full bg-[#D0C9BC]" />

                                            <span className="text-[#89857D]">
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <h3 className="mt-3 text-[19px] font-medium leading-[1.35] tracking-[-0.035em] text-[#22221F] transition-colors group-hover:text-[#92733F] sm:text-[20px]">
                                            {article.title}
                                        </h3>

                                        <p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#77746D] sm:text-[13px]">
                                            {article.description}
                                        </p>

                                        <div className="mt-6 border-t border-[#ECE8E1] pt-4">
                                            <Link
                                                href={`/articles/${article.slug}`}
                                                className="inline-flex min-h-8 items-center gap-2 text-[12px] font-semibold text-[#252520] transition-colors hover:text-[#A7874D]"
                                                aria-label={`Read ${article.title}`}
                                            >
                                                Read article

                                                <ArrowRight
                                                    size={15}
                                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {!showAll && filteredArticles.length > 6 && (
                            <div className="mt-10 flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setShowAll(true)}
                                    className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#DCD6CA] bg-white px-7 text-[12px] font-semibold text-[#34342F] transition hover:border-[#B59A63] hover:bg-[#F8F5EF]"
                                >
                                    View all {filteredArticles.length} articles

                                    <ArrowDownRight
                                        size={16}
                                        className="transition-transform duration-200 group-hover:translate-y-0.5"
                                    />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="rounded-[22px] border border-dashed border-[#D9D2C6] bg-white px-5 py-16 text-center sm:px-10">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F2E9] text-[#A7874D]">
                            <Search size={22} strokeWidth={1.5} />
                        </div>

                        <h3 className="mt-5 text-[21px] font-medium tracking-[-0.035em]">
                            No matching articles found
                        </h3>

                        <p className="mx-auto mt-2 max-w-[360px] text-[12px] leading-6 text-[#77746D]">
                            Try another search term or choose a different
                            legal category to explore our guides.
                        </p>

                        <button
                            type="button"
                            onClick={resetFilters}
                            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#171715] px-6 text-[12px] font-semibold text-white transition hover:bg-[#363630]"
                        >
                            View all articles
                            <ArrowRight size={15} />
                        </button>
                    </div>
                )}
            </section>

            {/* LEGAL HELP CTA */}

            <section className="border-t border-[#E5E0D6] bg-white">
                <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
                    <div className="relative overflow-hidden rounded-[24px] bg-[#20201D] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/[0.07]" />

                        <div className="pointer-events-none absolute -right-3 -top-12 h-56 w-56 rounded-full border border-[#B59A63]/20" />

                        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                            <div className="max-w-[600px]">
                                <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C8AD78]">
                                    <Lightbulb size={14} />
                                    Need guidance?
                                </div>

                                <h2 className="mt-4 text-[29px] font-medium leading-tight tracking-[-0.045em] sm:text-[38px]">
                                    Every legal situation is different.
                                </h2>

                                <p className="mt-4 max-w-[520px] text-[12px] leading-7 text-white/65 sm:text-[13px]">
                                    Our articles provide general information.
                                    For advice tailored to your circumstances,
                                    consider speaking with an advocate.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="group inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#B59A63] px-6 text-[12px] font-semibold text-white transition hover:bg-[#C3A975]"
                            >
                                Contact Our Team

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* DISCLAIMER */}

            <footer className="border-t border-[#E5E0D6] bg-[#F8F7F4]">
                <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-7 sm:px-8 md:flex-row md:items-start md:justify-between lg:px-10">
                    <div className="flex items-start gap-3">
                        <Scale
                            size={17}
                            className="mt-0.5 shrink-0 text-[#A7874D]"
                        />

                        <div>
                            <p className="text-[11px] font-semibold text-[#393832]">
                                General legal information
                            </p>

                            <p className="mt-1 max-w-[720px] text-[10px] leading-6 text-[#89857D]">
                                These articles are for general educational
                                purposes and are not a substitute for
                                personalised legal advice. Laws, procedures,
                                and applicable deadlines may vary according
                                to the facts, jurisdiction, and subsequent
                                legal developments. Consult a qualified
                                advocate for advice on your circumstances.
                            </p>
                        </div>
                    </div>

                    <span className="shrink-0 text-[10px] text-[#A19C93]">
                        Indian Law · Legal Insights
                    </span>
                </div>
            </footer>
        </main>
    );
}
