"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Home() {
    return (
        <AnimatedSection>
            <main className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full">

                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl md:text-6xl font-semibold"
                        >
                            Hey, I’m <span className="text-blue-500">Krischal</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl"
                        >
                            I craft intelligent software and creative AI experiences while exploring the world as an international student.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="mt-8 flex gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                            >
                                View Projects
                            </a>
                            <a
                                href="https://drive.google.com/uc?export=download&id=1d1xJJ_2RSkZcbpDicTzq9meKS2n6rcG8"
                                download
                                className="flex justify-around gap-2 px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                                <Download size={20} className="shrink-0" /> <span>Resume</span>
                            </a>
                            <a
                                href="#about"
                                className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                                About Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: 3D Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center items-center"
                    >
                        <Image
                            src="/assets/my_hero.png"
                            alt="3D Developer Illustration"
                            width={500}
                            height={500}
                            className="rounded-xl w-full max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </motion.div>
                </div>
            </main>
        </AnimatedSection>
    );
}
