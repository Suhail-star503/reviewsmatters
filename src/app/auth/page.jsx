"use client";

import React, { useState } from "react";
import {
    ArrowRight,
    Check,
    Eye,
    EyeOff,
    LockKeyhole,
    Mail,
    ShieldCheck,
    Store,
    UserRound,
} from "lucide-react";

const AuthPage = () => {
    const [mode, setMode] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [form, setForm] = useState({
        shopName: "",
        shopkeeperName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mode === "login") {
            // Connect your login logic here.
            console.log("Login:", {
                email: form.email,
                password: form.password,
            });

            return;
        }

        // Connect your registration logic here.
        console.log("Register:", form);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#F8F7F4] text-[#171715] pt-25">
            {/* BACKGROUND */}

            <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#B59A63]/8 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#171715]/4 blur-3xl" />

            <div className="pointer-events-none absolute left-[8%] top-[22%] hidden h-20 w-20 rounded-full border border-[#B59A63]/15 bg-white/40 lg:block" />

            <div className="pointer-events-none absolute bottom-[18%] right-[8%] hidden h-14 w-14 rounded-full border border-[#171715]/8 lg:block" />

            {/* MAIN */}

            <div className="relative mx-auto flex min-h-screen max-w-[1280px] items-center px-5 py-10 sm:px-8 lg:px-10">
                <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_470px] lg:gap-20">
                    {/* LEFT CONTENT */}

                    <section className="hidden lg:block">
                        

                        <div className="mt-24 max-w-[650px]">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B59A63]/20 bg-[#B59A63]/6 px-4 py-2">
                                <ShieldCheck
                                    size={14}
                                    strokeWidth={1.8}
                                    className="text-[#B59A63]"
                                />

                                <span className="text-[11px] font-semibold tracking-[0.08em] text-[#77746D] uppercase">
                                    Customer feedback platform
                                </span>
                            </div>

                            <h1 className="max-w-[650px] text-[58px] font-semibold leading-[0.98] tracking-[-0.065em] xl:text-[68px]">
                                Understand your
                                <span className="block text-[#B59A63]">
                                    customers better.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-[560px] text-[16px] leading-8 text-[#77746D]">
                                Manage customer feedback, understand what your
                                customers think, and use real insights to
                                create better experiences for your business.
                            </p>

                            {/* BENEFITS */}

                            <div className="mt-10 grid max-w-[610px] grid-cols-3 gap-3">
                                <Benefit
                                    icon={<Check size={16} />}
                                    title="Feedback"
                                    text="Collect useful customer responses."
                                />

                                <Benefit
                                    icon={<Store size={16} />}
                                    title="Business"
                                    text="Keep everything in one place."
                                />

                                <Benefit
                                    icon={<ShieldCheck size={16} />}
                                    title="Secure"
                                    text="Simple and protected access."
                                />
                            </div>
                        </div>

                        {/* FOOTER BRAND */}

                        <div className="mt-20 flex items-center gap-2 text-[11px] text-[#77746D]">
                            <span>Powered by</span>

                            <span className="font-semibold text-[#B59A63]">
                                Kaaf11.com
                            </span>
                        </div>
                    </section>

                    
                    {/* AUTH */}

                    <AuthCard
                        mode={mode}
                        setMode={setMode}
                        form={form}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        showConfirmPassword={showConfirmPassword}
                        setShowConfirmPassword={setShowConfirmPassword}
                    />
                </div>
            </div>
        </main>
    );
};

/* =========================================================
   BENEFIT
========================================================= */

const Benefit = ({ icon, title, text }) => {
    return (
        <div className="rounded-[20px] border border-[#171715]/8 bg-white/70 p-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#B59A63]/10 text-[#B59A63]">
                {icon}
            </div>

            <p className="mt-4 text-[12px] font-semibold text-[#171715]">
                {title}
            </p>

            <p className="mt-1.5 text-[11px] leading-5 text-[#77746D]">
                {text}
            </p>
        </div>
    );
};

/* =========================================================
   AUTH CARD
========================================================= */

const AuthCard = ({
    mode,
    setMode,
    form,
    handleChange,
    handleSubmit,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
}) => {
    const isLogin = mode === "login";

    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-[30px] border border-[#171715]/10 bg-white shadow-[0_30px_80px_rgba(23,23,21,0.08)]">
                {/* TOP */}

                <div className="px-6 pb-6 pt-7 sm:px-8 sm:pb-7 sm:pt-9">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[11px] font-semibold tracking-[0.14em] text-[#B59A63] uppercase">
                                {isLogin
                                    ? "Welcome back"
                                    : "Create your account"}
                            </p>

                            <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.045em] text-[#171715]">
                                {isLogin
                                    ? "Sign in to ReviewFlow"
                                    : "Set up your business"}
                            </h2>
                        </div>

                        <div className="hidden h-11 w-11 items-center justify-center rounded-[14px] bg-[#B59A63]/10 sm:flex">
                            {isLogin ? (
                                <LockKeyhole
                                    size={20}
                                    strokeWidth={1.7}
                                    className="text-[#B59A63]"
                                />
                            ) : (
                                <Store
                                    size={20}
                                    strokeWidth={1.7}
                                    className="text-[#B59A63]"
                                />
                            )}
                        </div>
                    </div>

                    <p className="mt-3 max-w-[380px] text-[13px] leading-6 text-[#77746D]">
                        {isLogin
                            ? "Access your customer feedback dashboard using your email and password."
                            : "Create your business account to start collecting and understanding customer feedback."}
                    </p>
                </div>

                {/* TABS */}

                <div className="px-6 sm:px-8">
                    <div className="flex rounded-[14px] bg-[#F8F7F4] p-1">
                        <button
                            type="button"
                            onClick={() => setMode("login")}
                            className={`h-10 flex-1 rounded-[10px] text-[12px] font-semibold transition ${
                                isLogin
                                    ? "bg-white text-[#171715] shadow-[0_3px_12px_rgba(23,23,21,0.07)]"
                                    : "text-[#77746D] hover:text-[#171715]"
                            }`}
                        >
                            Sign in
                        </button>

                        <button
                            type="button"
                            onClick={() => setMode("register")}
                            className={`h-10 flex-1 rounded-[10px] text-[12px] font-semibold transition ${
                                !isLogin
                                    ? "bg-white text-[#171715] shadow-[0_3px_12px_rgba(23,23,21,0.07)]"
                                    : "text-[#77746D] hover:text-[#171715]"
                            }`}
                        >
                            Create account
                        </button>
                    </div>
                </div>

                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="px-6 pb-7 pt-7 sm:px-8 sm:pb-9"
                >
                    {/* REGISTER FIELDS */}

                    {!isLogin && (
                        <div className="space-y-5">
                            <InputField
                                label="Shop name"
                                name="shopName"
                                value={form.shopName}
                                onChange={handleChange}
                                placeholder="e.g. Sharma Hair Studio"
                                icon={<Store size={16} />}
                                required
                            />

                            <InputField
                                label="Shopkeeper name"
                                name="shopkeeperName"
                                value={form.shopkeeperName}
                                onChange={handleChange}
                                placeholder="e.g. Rahul Sharma"
                                icon={<UserRound size={16} />}
                                required
                            />
                        </div>
                    )}

                    {/* EMAIL */}

                    <div className={!isLogin ? "mt-5" : ""}>
                        <InputField
                            label="Email address"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            icon={<Mail size={16} />}
                            required
                        />
                    </div>

                    {/* PASSWORD */}

                    <div className="mt-5">
                        <PasswordField
                            label="Password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder={
                                isLogin
                                    ? "Enter your password"
                                    : "Create a secure password"
                            }
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            required
                        />
                    </div>

                    {/* CONFIRM PASSWORD */}

                    {!isLogin && (
                        <div className="mt-5">
                            <PasswordField
                                label="Confirm password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter your password"
                                showPassword={showConfirmPassword}
                                setShowPassword={setShowConfirmPassword}
                                required
                            />
                        </div>
                    )}

                    {/* FORGOT PASSWORD */}

                    {isLogin && (
                        <div className="mt-3 flex justify-end">
                            <button
                                type="button"
                                className="text-[11px] font-semibold text-[#77746D] transition hover:text-[#B59A63]"
                            >
                                Forgot password?
                            </button>
                        </div>
                    )}

                    {/* SUBMIT */}

                    <button
                        type="submit"
                        className="group mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#171715] text-[13px] font-semibold text-white transition duration-200 hover:bg-[#2B2B28] hover:shadow-[0_12px_25px_rgba(23,23,21,0.12)] active:scale-[0.99]"
                    >
                        {isLogin ? "Sign in" : "Create account"}

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                    </button>

                    {/* SECURITY */}

                    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-[#77746D]">
                        <ShieldCheck
                            size={13}
                            strokeWidth={1.8}
                            className="text-[#B59A63]"
                        />

                        Secure account access
                    </div>

                    {/* TERMS */}

                    {!isLogin && (
                        <p className="mx-auto mt-5 max-w-[340px] text-center text-[10px] leading-5 text-[#9A968E]">
                            By creating an account, you agree to our{" "}
                            <button
                                type="button"
                                className="font-semibold text-[#77746D] underline underline-offset-2 hover:text-[#B59A63]"
                            >
                                Terms
                            </button>{" "}
                            and{" "}
                            <button
                                type="button"
                                className="font-semibold text-[#77746D] underline underline-offset-2 hover:text-[#B59A63]"
                            >
                                Privacy Policy
                            </button>
                            .
                        </p>
                    )}
                </form>
            </div>

            {/* MOBILE BRANDING */}

            <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-[#9A968E] lg:hidden">
                <span>Powered by</span>

                <span className="font-semibold text-[#B59A63]">
                    Kaaf11.com
                </span>
            </div>
        </div>
    );
};

/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    icon,
    required = false,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-[11px] font-semibold text-[#4F4C46]"
            >
                {label}
            </label>

            <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A19C93]">
                    {icon}
                </div>

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    autoComplete={
                        type === "email"
                            ? "email"
                            : name === "shopName"
                              ? "organization"
                              : name === "shopkeeperName"
                                ? "name"
                                : "off"
                    }
                    className="h-12 w-full rounded-[13px] border border-[#E4E0D9] bg-[#FCFBF9] pl-11 pr-4 text-[13px] text-[#171715] outline-none transition placeholder:text-[#B2AEA6] focus:border-[#B59A63] focus:bg-white focus:ring-4 focus:ring-[#B59A63]/8"
                />
            </div>
        </div>
    );
};

/* =========================================================
   PASSWORD FIELD
========================================================= */

const PasswordField = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    showPassword,
    setShowPassword,
    required = false,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="mb-2 block text-[11px] font-semibold text-[#4F4C46]"
            >
                {label}
            </label>

            <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A19C93]">
                    <LockKeyhole size={16} />
                </div>

                <input
                    id={name}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    autoComplete={
                        name === "password"
                            ? "current-password"
                            : "new-password"
                    }
                    className="h-12 w-full rounded-[13px] border border-[#E4E0D9] bg-[#FCFBF9] pl-11 pr-12 text-[13px] text-[#171715] outline-none transition placeholder:text-[#B2AEA6] focus:border-[#B59A63] focus:bg-white focus:ring-4 focus:ring-[#B59A63]/8"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#9A968E] transition hover:bg-[#F3F0EB] hover:text-[#171715]"
                    aria-label={
                        showPassword
                            ? "Hide password"
                            : "Show password"
                    }
                >
                    {showPassword ? (
                        <EyeOff size={16} />
                    ) : (
                        <Eye size={16} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;