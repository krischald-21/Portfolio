"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
    const education = [
        {
            school: "Wright State University",
            degree: "M.S. in Computer Science",
            year: "2024 – 2026",
            image: "/assets/wsu.png",
            needBg: false,
            location: "Ohio, USA",
        },
        {
            school: "London Metropolitan University",
            degree: "B.Sc. (Hons) in Computing",
            year: "2021 – 2023",
            image: "/assets/lmu.png",
            needBg: true,
            location: "Kathmandu, Nepal",
        },
    ];

    return (
        <AnimatedSection>
            <section id="education" className="min-h-screen px-6 py-24 max-w-2xl mx-auto">
                <h1 className="text-4xl font-semibold mb-12 text-center">Education</h1>

                <div className="relative border-l border-gray-300 dark:border-gray-600">
                    {education.map((item, index) => (
                        <div key={index} className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-20"></div>
                            <div className=" bg-gray-200 h-40 dark:bg-gray-900 p-4 rounded-md shadow-md flex flex-row justify-between items-center">
                                <div className="text-center flex-2/5">
                                    <Image
                                        src={item.image}
                                        alt={item.school}
                                        height={150}
                                        width={150}
                                        className={item.needBg ? "bg-gray-900 dark:bg-transparent" : ""}
                                    />

                                </div>
                                <div className="flex-3/5">
                                    <h3 className="text-md font-semibold">{item.school}</h3>
                                    <div className="w-full">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.location}</span>
                                        <span>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.year}</span>
                                    </div>
                                    <p className="text-md mt-1">{item.degree}</p>
                                </div>
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 bottom-18"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AnimatedSection>
    );
}
