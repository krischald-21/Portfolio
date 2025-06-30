"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { LinkIcon } from "lucide-react";
import "../public/css/experience.css";

const experience = [
    {
        title: "Software Engineer",
        company: "Kathmandu Codes",
        location: "Kathmandu, Nepal",
        description: [
            "Led the development of a full-stack student-sport-school platform used by 1,000+ users across pilot schools in India, streamlining sports tracking and academic progression. Optimized performance, automated key admin tasks, and implemented CI/CD pipelines, reducing manual effort by 80% and accelerating feature delivery by up to 3×. Also mentored a junior developer and ensured rapid resolution of high-priority production issues."
        ],
        start: "May 2023",
        end: "August 2024",
        image: "/assets/ktmcodes.png",
        url: "https://kathmandu.codes/"
    },
    {
        title: "Solutions Developer Intern",
        company: "Kathmandu Codes",
        location: "Kathmandu, Nepal",
        description: [
            "Delivered a full-stack community dashboard for TearFund Nepal in just 4 months, enabling real-time visualization of development efforts across 50+ rural communities. Built REST APIs, dynamic ReactJS components, and integrated geographic data using LeafletJS maps. Also led a high-impact sprint as scrum master, achieving 200% of sprint goals while ensuring smooth CI/CD deployment via Azure DevOps and GitHub."
        ],
        start: "September 2022",
        end: "January 2023",
        image: "/assets/ktmcodes.png",
        url: "https://kathmandu.codes/"
    },
    {
        title: "IVy Intern",
        company: "MySecondTeacher",
        location: "Kathmandu, Nepal",
        description: [
            "Enhanced an interactive video learning platform by annotating 50+ lessons with embedded quizzes and automated reporting features. Ensured high content quality by testing over 100 test papers, e-books, and question banks for accuracy and consistency."
        ],
        start: "June 2022",
        end: "September 2022",
        image: "/assets/mst.png",
        url: "https://www.mysecondteacher.com/"
    },
    {
        title: "Translation Typist",
        company: "MySecondTeacher",
        location: "Kathmandu, Nepal",
        description: [
            "Translated over 100 scripts for video lessons, from English to Nepali",
        ],
        start: "May 2021",
        end: "June 2022",
        image: "/assets/mst.png",
        url: "https://www.mysecondteacher.com/"
    }
]

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-cycle effect
    useEffect(() => {
        // Clear any previous timer
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev === experience.length - 1 ? 0 : prev + 1));
        }, 7000); // 7 seconds
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [activeIndex]);

    const toggleIndex = (index: number) => {
        setActiveIndex(index);
        // Reset timer on manual click
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    return (
        <AnimatedSection>
            <main className="min-h-screen px-6 py-24 max-w-7xl mx-auto text-gray-800 dark:text-gray-100">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-semibold mb-12 text-center"
                >
                    Experience
                </motion.h1>

                <div className="flex flex-col justify-center md:flex-row gap-3 overflow-x-auto no-scrollbar mt-[5rem]">
                    {experience.map((exp, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.75, delay: index * 0.2 }}
                                onClick={() => toggleIndex(index)}
                                className={`group min-h-[25rem] max-h-[25rem] shadow-md hover:bg-gray-100 hover:dark:bg-gray-900 rounded-xs flex gap-10 p-3 items-center duration-500 transition-all ease-in-out ${isActive ? "w-[48rem] bg-gray-100 dark:bg-gray-900 px-6" : "w-20 dark:bg-gray-600 bg-gray-200"
                                    }`}
                            >
                                {/* Image + Title Block */}
                                <div className="flex-1/4 text-center">
                                    <Image
                                        height={200}
                                        width={200}
                                        src={exp.image}
                                        alt={exp.company}
                                        className={`transition-all duration-500 group-hover:grayscale-0 object-cover ${isActive ? "grayscale-0" : "grayscale"
                                            }`}
                                    />
                                    {isActive && (
                                        <>
                                            <h2 className="mt-5 text-md font-bold">{exp.company}</h2>
                                            <h2>{exp.location}</h2>
                                        </>
                                    )}
                                </div>

                                {/* Expanded Content */}
                                {isActive && (
                                    <div className="flex flex-3/4 flex-col justify-start gap-3 dark:text-white max-w-xl">
                                        <div>
                                            <h1 className="text-2xl font-bold">{exp.title}</h1>
                                            <p className="text-sm dark:text-gray-300 text-gray-600">{exp.start} - {exp.end}</p>
                                        </div>
                                        <div className=" text-sm">
                                            {exp.description.map((des, id) => (
                                                <p key={id}>{des}</p>
                                            ))}
                                        </div>
                                        <div className="mt-2">
                                            <a
                                                href={exp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1"
                                            >
                                                <LinkIcon size={18} /> Visit Company
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </main>
        </AnimatedSection>
    );
}
