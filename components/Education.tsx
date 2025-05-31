"use client";

export default function Education() {
    const education = [
        {
            school: "Wright State University",
            degree: "M.S. in Computer Science",
            year: "2023 – 2025 (expected)",
            location: "Ohio, USA",
        },
        {
            school: "Islington College (London Met)",
            degree: "B.Sc. (Hons) in Computing",
            year: "2019 – 2023",
            location: "Kathmandu, Nepal",
        },
    ];

    return (
        <section id="education" className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
            <h1 className="text-4xl font-semibold mb-12 text-center">Education</h1>

            <div className="relative border-l border-gray-300 dark:border-gray-600">
                {education.map((item, index) => (
                    <div key={index} className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-15"></div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold">{item.school}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                            <p className="text-md mt-1">{item.degree}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.year}</p>
                            <div className="absolute w-3 h-3 border-2 border-blue-500 bg-gray-300 rounded-full -left-1.5 bottom-15"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
