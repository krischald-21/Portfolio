// hooks/useActiveSection.ts
"use client";
import { useEffect, useState } from "react";

const sectionIds = ["hero", "about", "experience", "education", "projects", "contact"];

export default function useActiveSection() {
    const [active, setActive] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                        break;
                    }
                }
            },
            {
                rootMargin: "0px 0px -60% 0px", // Trigger when top 40% is in view
                threshold: 0.3,
            }
        );

        const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
        elements.forEach(el => el && observer.observe(el));

        return () => {
            elements.forEach(el => el && observer.unobserve(el));
        };
    }, []);

    return active;
}
