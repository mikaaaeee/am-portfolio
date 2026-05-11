import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2019",
    title: "Pure Science",
    desc: "Took Pure Science course.",
    pos: "bottom",
  },
  {
    year: "2021",
    title: "Foundation in Science",
    desc: "Pursued Foundation in Science at UiTM Dengkil.",
    pos: "top",
  },
  {
    year: "2022",
    title: "Degree",
    desc: "Deep-dived into Computer Science majoring in Software Engineering at UTHM.",
    pos: "bottom",
  },
  {
    year: "2025",
    title: "Internship at Fiuu",
    desc: "Handled back-office systems for thousands of merchants.",
    pos: "top",
  },
  {
    year: "2026",
    title: "My First Job",
    desc: "Working as a Junior Software Engineer.",
    pos: "bottom",
  },
  {
    year: "???",
    title: "Future",
    desc: "Only God knows what's next.",
    pos: "top",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full py-20 bg-[#F3D7FB] flex flex-col items-center px-6 overflow-hidden"
    >
      {/* Header Section */}
      <div className="max-w-4xl text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-[#4A0E4E] mb-6 uppercase tracking-tighter"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#4A0E4E] font-medium leading-relaxed max-w-2xl mx-auto italic"
        >
          I am a certified ✨ Gen Z ✨ who’s constantly curious about the logic
          behind the screen and yeah sometimes I'm the one who always asks weird
          questions. My life pretty random because what do you mean I found my
          career path while scrolling TikTok during lunch, and now I’m on a 24/7
          learning streak. Wether I'm hunting bugs or buliding new features, I'm
          just here for the spoilers in this giant documentation we called life.
        </motion.p>
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="hidden md:block relative h-[450px]">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 50 350 L 250 100 L 450 350 L 650 100 L 850 350 L 1050 100"
              fill="none"
              stroke="#4A0E4E"
              strokeWidth="2"
              strokeDasharray="12 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Timeline Nodes */}
          <div className="absolute inset-0 flex justify-between px-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col items-center justify-center`}
                style={{ top: item.pos === "top" ? "-120px" : "130px" }}
              >
                <div
                  className={`absolute w-48 text-center ${item.pos === "top" ? "mb-60" : "mt-60"}`}
                >
                  <span className="block text-xl font-black text-[#4A0E4E]">
                    {item.year}
                  </span>
                  <h4 className="text-sm font-bold text-[#4A0E4E] uppercase tracking-widest">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#4A0E4E]/70 mt-2 font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="w-6 h-6 rounded-full bg-white border-4 border-[#4A0E4E] shadow-[0_0_15px_rgba(74,14,78,0.3)] z-20" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col space-y-12 relative before:absolute before:left-4 before:h-full before:w-0.5 before:bg-[#4A0E4E]/20">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-start pl-10 relative"
            >
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#4A0E4E] z-10" />

              <div>
                <span className="text-lg font-black text-[#4A0E4E]">
                  {item.year}
                </span>
                <h4 className="font-bold text-[#4A0E4E] uppercase text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-[#4A0E4E]/70 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
