"use client";
import { Home, User, Code, Mail } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";

const sections = [
    { href: "#hero", icon: Home, id: "hero", label: "Home" },
    { href: "#about", icon: User, id: "about", label: "About" },
    { href: "#projects", icon: Code, id: "projects", label: "Projects" },
    { href: "#contact", icon: Mail, id: "contact", label: "Contact" },
];

export default function Sidebar() {
    const active = useActiveSection();

    return (
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-8 bg-gray-600 p-3 py-6 rounded-full shadow-lg backdrop-blur">
            {sections.map((section, index) => {
                const Icon = section.icon;
                const isActive = active === section.id;

                return (
                    <a
                        key={index}
                        href={section.href}
                        className={`transition ${isActive
                                ? "text-blue-500 scale-110"
                                : "text-gray-300 hover:text-blue-400"
                            }`}
                        aria-label={section.label}
                    >
                        <Icon size={20} />
                    </a>
                );
            })}
        </div>
    );
}
