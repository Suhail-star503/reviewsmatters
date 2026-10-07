"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Star,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  
  {
    name: "How It Works",
    href: "/#how-it-works",
  },
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export default function Header() {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const actionsRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  /* ============================================================
     INITIAL ENTRANCE
     ============================================================ */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        headerRef.current,
        {
          y: -30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }
      );

      tl.fromTo(
        logoRef.current,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
        },
        "-=0.45"
      );

      tl.fromTo(
        navItemsRef.current,
        {
          y: 8,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
        },
        "-=0.35"
      );

      tl.fromTo(
        actionsRef.current,
        {
          y: 8,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.3"
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* ============================================================
     SCROLL HEADER
     ============================================================ */

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top -30",
        end: 99999,

        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(255,255,255,0.88)",
            borderColor: "rgba(23,23,21,0.10)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 10px 40px rgba(23,23,21,0.07)",
            duration: 0.3,
            ease: "power2.out",
          });
        },

        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(255,255,255,0)",
            borderColor: "rgba(23,23,21,0.06)",
            backdropFilter: "blur(0px)",
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* ============================================================
     CLOSE MOBILE MENU ON RESIZE
     ============================================================ */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ============================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
     ============================================================ */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ============================================================
     MOBILE MENU ANIMATION
     ============================================================ */

  useEffect(() => {
    if (!mobileOpen) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".mobile-menu",
        {
          opacity: 0,
          y: -12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        }
      );

      tl.fromTo(
        ".mobile-link",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
        },
        "-=0.15"
      );

      tl.fromTo(
        ".mobile-actions",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.25"
      );
    });

    return () => ctx.revert();
  }, [mobileOpen]);

  /* ============================================================
     LOGO HOVER
     ============================================================ */

  const handleLogoEnter = () => {
    gsap.to(logoRef.current, {
      scale: 1.015,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  /* ============================================================
     CLOSE MENU
     ============================================================ */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setProductOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="
          fixed
          left-0
          top-0
          z-[100]
          w-full
          opacity-0
        "
      >
        <div
          ref={navRef}
          className="
            relative
            mx-auto
            w-full
            border-b
            border-black/[0.06]
            bg-white/[0.92]
            transition-none
          "
        >
          <div
            className="
              mx-auto
              flex
              h-[72px]
              w-full
              max-w-[1280px]
              items-center
              justify-between
              px-5
              sm:px-8
              lg:h-[76px]
              lg:px-10
              xl:px-0
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              ref={logoRef}
              href="/"
              aria-label="Powered by Kaaf11.com home"
              onMouseEnter={handleLogoEnter}
              onMouseLeave={handleLogoLeave}
              className="
                group
                flex
                shrink-0
                items-center
                gap-2.5
                will-change-transform
              "
            >
              {/* Logo mark */}

              <div
                className="
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-[#171715]
                  shadow-sm
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              >
                <Star
                  size={17}
                  strokeWidth={2}
                  fill="white"
                  className="relative z-10 text-white"
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    translate-x-[-130%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-[130%]
                  "
                />
              </div>

              {/* Brand */}

              <div className="flex flex-col leading-none">
                <span
                  className="
      text-[17px]
      font-semibold
      tracking-[-0.035em]
      text-[#171715]
      sm:text-[18px]
    "
                >
                  Review<span className="text-[#B59A63]">Flow</span>
                </span>

                <span
                  className="
      mt-1
      text-[7px]
      font-medium
      tracking-[0.04em]
      text-[#77746D]
    "
                >
                  Powered by Kaaf11.com
                </span>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              aria-label="Main navigation"
              className="
                absolute
                left-1/2
                hidden
                -translate-x-1/2
                lg:block
              "
            >
              <div className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.dropdown) {
                        setProductOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.dropdown) {
                        setProductOpen(false);
                      }
                    }}
                  >
                    <Link
                      ref={(el) => {
                        navItemsRef.current[index] = el;
                      }}
                      href={item.href}
                      className="
                        group
                        relative
                        flex
                        items-center
                        gap-1.5
                        px-4
                        py-3
                        text-[12px]
                        font-medium
                        tracking-[-0.01em]
                        text-[#77746D]
                        transition-colors
                        duration-300
                        hover:text-[#171715]
                      "
                    >
                      {item.name}

                      {item.dropdown && (
                        <ChevronDown
                          size={13}
                          strokeWidth={1.8}
                          className={`
                            transition-transform
                            duration-300
                            ${productOpen
                              ? "rotate-180"
                              : ""
                            }
                          `}
                        />
                      )}

                      <span
                        className="
                          absolute
                          bottom-[5px]
                          left-4
                          right-4
                          h-px
                          origin-left
                          scale-x-0
                          bg-[#B59A63]
                          transition-transform
                          duration-500
                          ease-[cubic-bezier(.16,1,.3,1)]
                          group-hover:scale-x-100
                        "
                      />
                    </Link>

                    {/* =================================================
                        PRODUCT DROPDOWN
                    ================================================= */}

                    {item.dropdown && productOpen && (
                      <div
                        className="
                          absolute
                          left-1/2
                          top-full
                          w-[330px]
                          -translate-x-1/2
                          pt-3
                        "
                      >
                        <div
                          className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-black/[0.08]
                            bg-white
                            p-2
                            shadow-[0_20px_60px_rgba(23,23,21,0.12)]
                          "
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="
                                group/item
                                flex
                                items-start
                                justify-between
                                gap-4
                                rounded-xl
                                p-3.5
                                transition-colors
                                duration-200
                                hover:bg-[#F8F7F4]
                              "
                            >
                              <div>
                                <div
                                  className="
                                    text-[13px]
                                    font-semibold
                                    text-[#171715]
                                  "
                                >
                                  {dropdownItem.name}
                                </div>

                                <div
                                  className="
                                    mt-1
                                    text-[11px]
                                    leading-5
                                    text-[#77746D]
                                  "
                                >
                                  {dropdownItem.description}
                                </div>
                              </div>

                              <ArrowRight
                                size={15}
                                strokeWidth={1.7}
                                className="
                                  mt-1
                                  shrink-0
                                  text-[#B59A63]
                                  opacity-0
                                  transition-all
                                  duration-300
                                  group-hover/item:translate-x-1
                                  group-hover/item:opacity-100
                                "
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div
              ref={actionsRef}
              className="
                hidden
                items-center
                gap-5
                lg:flex
              "
            >
              <Link
                href="/auth"
                className="
                  text-[12px]
                  font-medium
                  text-[#55534D]
                  transition-colors
                  duration-300
                  hover:text-[#171715]
                "
              >
                Sign in
              </Link>

              <Link
                href="/auto"
                className="
                  group
                  relative
                  inline-flex
                  h-10
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-lg
                  bg-[#B59A63]
                  px-4
                  text-[12px]
                  font-semibold
                  text-white
                "
              >
                <span className="relative z-10">
                  Get started
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.8}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-black/[0.09]
                bg-white
                text-[#171715]
                transition-all
                duration-300
                hover:border-black/20
                lg:hidden
              "
            >
              {mobileOpen ? (
                <X size={19} strokeWidth={1.7} />
              ) : (
                <Menu size={19} strokeWidth={1.7} />
              )}
            </button>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          {mobileOpen && (
            <div
              className="
                mobile-menu
                absolute
                left-0
                right-0
                top-full
                max-h-[calc(100vh-72px)]
                overflow-y-auto
                border-b
                border-black/[0.08]
                bg-white
                shadow-[0_20px_50px_rgba(23,23,21,0.08)]
                lg:hidden
              "
            >
              <div className="px-5 py-5 sm:px-8">
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col"
                >
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-black/[0.07]"
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="
                          mobile-link
                          group
                          flex
                          items-center
                          justify-between
                          py-4
                          text-[14px]
                          font-medium
                          text-[#33322F]
                          transition-colors
                          duration-300
                          hover:text-[#B59A63]
                        "
                      >
                        <span>{item.name}</span>

                        {item.dropdown ? (
                          <ChevronDown
                            size={16}
                            strokeWidth={1.7}
                            className="
                              text-[#A19E96]
                            "
                          />
                        ) : (
                          <ArrowRight
                            size={16}
                            strokeWidth={1.7}
                            className="
                              text-[#A19E96]
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          />
                        )}
                      </Link>
                    </div>
                  ))}

                  {/* =================================================
                      MOBILE ACTIONS
                  ================================================= */}

                  <div
                    className="
                      mobile-actions
                      flex
                      flex-col
                      gap-3
                      pt-6
                    "
                  >
                    <Link
                      href="/auth"
                      onClick={closeMobileMenu}
                      className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-black/[0.10]
                        text-[13px]
                        font-medium
                        text-[#33322F]
                        transition-colors
                        duration-300
                        hover:bg-[#F8F7F4]
                      "
                    >
                      Sign in
                    </Link>

                    <Link
                      href="/auth"
                      onClick={closeMobileMenu}
                      className="
                        flex
                        h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-[#B59A63]
                        text-[13px]
                        font-semibold
                        text-white
                      "
                    >
                      Get started
                      <ArrowRight
                        size={15}
                        strokeWidth={1.8}
                      />
                    </Link>
                  </div>

                  {/* =================================================
                      TRUST MESSAGE
                  ================================================= */}

                  <div
                    className="
                      mt-6
                      rounded-xl
                      bg-[#F8F7F4]
                      p-4
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-white
                          shadow-sm
                        "
                      >
                        <Star
                          size={15}
                          fill="#B59A63"
                          className="text-[#B59A63]"
                        />
                      </div>

                      <div>
                        <p
                          className="
                            text-[12px]
                            font-semibold
                            text-[#33322F]
                          "
                        >
                          Build a stronger local reputation
                        </p>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            leading-5
                            text-[#77746D]
                          "
                        >
                          Manage reviews and improve your
                          local presence from one place.
                        </p>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}