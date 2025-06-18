"use client";
import { useState } from "react";
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
            "Led development of a full-stack student-sport-school platform adopted by 2 pilot schools in India, streamlining sports tracking and student progression for 1,000+ users using .NET, jQuery, and SQL Server",
            "Improved application performance by 20% and reduced feature delivery time by 2–3x by optimizing SQL queries and automating deployments via Azure DevOps CI/CD pipeline",
            "Automated bulk data import, grade promotion, and score entry modules—cutting manual admin effort by 80% and saving 20+ staff-hours per month",
            "Mentored a junior developer who later independently shipped two production features, improving their velocity and code quality over 4 months",
            "Resolved high-priority production bugs within 24–48 hours and consistently shipped client-driven features each sprint, improving satisfaction and delivery confidence"
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
            "Delivered a full-stack community dashboard for TearFund Nepal within 4 months, enabling the NGO to visualize post-earthquake development efforts across 50+ rural communities",
            "Built and deployed REST APIs using .NET Framework, dynamic ReactJS frontend components, and complex SQL queries to provide real-time insights across sectors like Disaster Risk Reduction (DRR) and health",
            "Led a critical sprint as scrum master, achieving 200% of sprint goals in just 3 days by coordinating task breakdown, team velocity tracking, and daily standups",
            "Integrated LeafletJS maps to visualize live geographic data across 100+ project sites; deployed via CI/CD pipelines using Azure DevOps and GitHub for agile collaboration"
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
            "Annotated 50+ video lessons to contain pop-up quizzes and report generation on an integrated video platform",
            "Tested 100+ testpapers, e-books and question banks to ensure the highest quality of content"
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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <AnimatedSection>
            <main className="min-h-screen px-6 py-24 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-semibold mb-12"
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
                                transition={{ duration: 0.75, delay: index * 0.2 }}
                                onClick={() => toggleIndex(index)}
                                className={`group min-h-[25rem] max-h-[25rem] bg-gray-600 rounded-xs flex gap-10 p-3 items-center duration-500 transition-all ease-in-out ${isActive ? "w-[48rem] px-6 cursor-default" : "w-20 cursor-pointer"
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
                                    <div className="flex flex-3/4 flex-col justify-start gap-3 text-white max-w-xl">
                                        <div>
                                            <h1 className="text-2xl font-bold">{exp.title}</h1>
                                            <p className="text-sm text-gray-300">{exp.start} - {exp.end}</p>
                                        </div>
                                        <ul className="list-disc ml-5 space-y-1 text-sm">
                                            {exp.description.map((des, id) => (
                                                <li key={id}>{des}</li>
                                            ))}
                                        </ul>
                                        <div className="mt-2">
                                            <a
                                                href={exp.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-300 hover:underline flex items-center gap-1"
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
