"use client";
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    amount?: number;
}

export default function AnimatedSection({
    children,
    delay = 0.2,
    amount = 0.4,
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,   // ✅ Trigger only once
        amount,       // % of section that must be visible
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.section>
    );
}
