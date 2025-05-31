// app/contact/page.tsx or pages/contact.tsx
"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
    return (
        <AnimatedSection>
            <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-semibold mb-6"
                >
                    Get in Touch
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
                >
                    I’m currently open to opportunities and collaborations—whether it's full-time roles, projects, or just a chat about AI and software development.
                    <br />
                    Drop me an email and I’ll get back to you soon!
                </motion.p>

                <motion.a
                    href="mailto:krischaldhungel21@gmail.com"
                    className="flex gap-2 justify-between mt-8 text-blue-500 hover:underline text-lg font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Mail size={20} /><span>krischaldhungel21@gmail.com</span>
                </motion.a>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 flex gap-6 text-gray-500 dark:text-gray-400"
                >
                    <a href="https://github.com/krischald-21" target="_blank" className="hover:text-blue-500 transition p-2 bg-white rounded-full">
                        <Github size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/krischal-dhungel-742306202/" target="_blank" className="hover:text-blue-500 transition rounded-xl text-white bg-blue-900 p-2">
                        <Linkedin size={30} />
                    </a>
                </motion.div>
            </main>
        </AnimatedSection>
    );
}
