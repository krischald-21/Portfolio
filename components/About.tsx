"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">

                {/* Left Column - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <Image
                        src="/assets/my_pic.png"
                        alt="Developer illustration"
                        width={500}
                        height={500}
                        className="rounded-xl w-full max-w-sm md:max-w-md"
                        priority
                    />
                </motion.div>

                {/* Right Column - Text */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-semibold mb-6"
                    >
                        About Me
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                    >
                        I’m <strong>Krischal Dhungel</strong>, a software engineer with a passion for building creative, intelligent systems. With experience in full-stack web development and growing expertise in AI, I enjoy working at the intersection of design, interactivity, and problem solving.
                        <br /><br />
                        I’ve led projects across EdTech, community platforms, and data dashboards—blending solid engineering with human-centered design.
                        <br /><br />
                        I also solve Rubik's cube really fast and I am into gaming. I also love to cook and travel.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 border-t pt-6 text-sm text-gray-500 dark:text-gray-400"
                    >
                        Currently building my portfolio and diving deeper into AI & systems design.
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
