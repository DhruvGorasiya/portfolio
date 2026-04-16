import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" },
};

const StatNumber = ({ target, decimals = 0, suffix = "", label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let step = 0;
        const steps = 60;
        const timer = setInterval(() => {
            step++;
            const eased = 1 - Math.pow(1 - step / steps, 3);
            setValue(eased * target);
            if (step >= steps) { setValue(target); clearInterval(timer); }
        }, 1400 / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Accent-coloured number */}
            <p
                className="font-mono font-medium tabular-nums leading-none"
                style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#E8FF47" }}
            >
                {formatted}{suffix}
            </p>
            <p className="font-mono text-xs text-muted mt-2">{label}</p>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-32 border-t border-divider">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">

                {/* Label */}
                <motion.div
                    className="flex items-center gap-4 mb-6"
                    {...fadeUp}
                >
                    <motion.div
                        className="h-px bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: 32 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    />
                    <p className="font-mono text-xs text-muted uppercase tracking-widest">
                        01 — About
                    </p>
                </motion.div>

                {/* Large section title */}
                <motion.h2
                    className="font-serif text-cream leading-none tracking-tight mb-20"
                    style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                >
                    About
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                    {/* Bio */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.p
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.1 }}
                            className="font-mono text-cream/75 leading-relaxed"
                            style={{ fontSize: 15 }}
                        >
                            I'm a software developer with a Computer Science degree from California
                            State University, Long Beach. My work lives at the boundary between
                            applied machine learning and production engineering, writing systems
                            that have to be both intelligent and fast.
                        </motion.p>

                        {/* Blockquote */}
                        <motion.blockquote
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.15 }}
                            className="relative pl-6 my-8"
                        >
                            <motion.span
                                className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent block origin-top"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            />
                            <p className="font-serif italic text-cream leading-snug"
                                style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>
                                I build intelligent systems at the intersection of rigorous
                                engineering and applied AI.
                            </p>
                        </motion.blockquote>

                        <motion.p
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.2 }}
                            className="font-mono text-cream/75 leading-relaxed"
                            style={{ fontSize: 15 }}
                        >
                            My interests are in large-scale retrieval, RAG pipelines, and
                            algorithmic research. I care about systems that perform under pressure
                            and not just in demos.
                        </motion.p>
                    </div>

                    {/* Accent stats */}
                    <div className="flex flex-row lg:flex-col gap-10 lg:gap-14 justify-start">
                        <StatNumber target={50} suffix="K+" label="daily requests handled" />
                        <StatNumber target={3.9} decimals={2} label="GPA" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
