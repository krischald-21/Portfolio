"use client";
import { motion } from "framer-motion";
import { Anchor, Github, Link2, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Crypto Market Tracker",
        description: "A responsive dashboard for that showcases real-time crypto prices and crypto news built with Vite, React, and Tailwind CSS. Includes search and dynamic routing.",
        image: "/assets/crypto_icon.png",
        liveUrl: "https://vite-crypto-app.netlify.app",
        github: "https://github.com/krischald-21/cryptoverse",
    },
    {
        title: "Jumpnations",
        description: "India based school-student-sport management systems that tracks the sports progress of the students in Indian Schools using .NET Framework, jQuery and Azure DevOps.",
        image: "/assets/jn.png",
        liveUrl: "https://jumpnations.azurewebsites.net",
        github: "#",
    },
];

export default function Projects() {
    return (
        <main className="min-h-screen px-6 py-24 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold mb-12"
            >
                Projects
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-xl transition"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={300}
                            className="rounded-md mb-4 object-contain w-full h-48"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex gap-4">
                            <Link
                                href={project.liveUrl}
                                className="text-blue-500 hover:underline p-1"
                                target="_blank"
                            >
                                <LinkIcon size={20} />
                            </Link>
                            <Link
                                href={project.github}
                                className="text-gray-500 hover:underline rounded-full bg-white p-1"
                                target="_blank"
                            >
                                <Github size={20} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
