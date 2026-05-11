import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Junior Software Engineer",
    company: "EBI Resources Sdn Bhd",
    duration: "2026 - Present",
    details: [
      "Led User Acceptance Testing (UAT) for the e-Lesen Perikanan system, ensuring 100% alignment between stakeholder requirements and functional delivery.",
      "Perform minor system fixes based on user feedback during testing phase",
      "Optimized technical documentation and reporting workflows, reducing communication gaps between end-users and the development core team.",
    ],
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "UAT",
      "Technical Documentation",
      "Stakeholder Communication",
      "SDLC",
      "Blackbox Testing",
      "Requirements Analysis",
      "Bug Fixing",
      "Stakeholder Management",
    ],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Fiuu (formerly known as Razer Merchant Services Sdn Bhd)",
    duration: "August 2025 - January 2026",
    details: [
      "Contributed to the development and maintenance of the Fiuu Back-Office System, a core platform supporting thousands of merchants in managing digital payments.",
      "Resolved complex bugs using C# and VB.NET to ensure seamless merchant transactions.",
      "Managed end-to-end SDLC workflows including issue tracking in GitLab and initiating Merge Requests (MRs) for peer reviews to maintain high code quality standards.",
      "Monitored system performance and logs via AWS CloudWatch",
      "Ensured production stability by conducting rigorous unit testing and debugging",
    ],
    skills: [
      "C#",
      "VB.NET",
      "Node.js",
      "TypeScript",
      "GitLab",
      "SDLC",
      "AWS CloudWatch",
      "Git Version Control",
      "Debugging",
      "GitHub",
    ],
  },
  {
    id: 3,
    role: "Part-Time Barista (not related to my field, but yeah, it does sounds cool to be included here)",
    company: "Kopi Kenangan",
    duration: "January 2026 - February 2026",
    details: [
      "Not related to software, but learned extreme multitasking!",
      "Handled high-pressure environments during peak hours.",
      "Enhanced communication skills with various types of customers.",
    ],
    skills: [
      "Multitasking",
      "Crisis Management",
      "Attention to Detail",
      "Operational Efficiency",
      "Coffee Mastery",
    ],
  },
];

const Experience = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-black text-[#4A0E4E] mb-12 tracking-tighter uppercase text-center">
        Working Experiences
      </h2>

      <div className="w-full max-w-2xl space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-b-2 border-[#4A0E4E]/10">
            <button
              onClick={() => toggleAccordion(exp.id)}
              className={`w-full flex justify-between items-center py-6 px-8 rounded-2xl transition-all duration-300 ${
                activeId === exp.id
                  ? "bg-[#4A0E4E] text-white shadow-xl scale-[1.02]"
                  : "bg-white text-[#4A0E4E] hover:bg-[#4A0E4E]/5"
              }`}
            >
              <span className="text-lg font-bold">{exp.role}</span>
              <span className="text-2xl">
                {activeId === exp.id ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {activeId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-8 text-[#4A0E4E]">
                    <div className="flex justify-between items-center mb-4 border-b border-[#4A0E4E]/10 pb-2">
                      <p className="font-black italic">{exp.company}</p>
                      <p className="text-sm font-bold opacity-60">
                        {exp.duration}
                      </p>
                    </div>

                    <ul className="list-disc list-inside space-y-2 mb-6 opacity-80">
                      {exp.details.map((detail, index) => (
                        <li key={index} className="text-sm leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-[#4A0E4E]/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
