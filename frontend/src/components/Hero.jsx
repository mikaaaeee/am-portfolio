import { motion } from "framer-motion";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import confetti from "canvas-confetti";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "ABOUT ME", id: "about" },
  { name: "HOBBIES", id: "hobbies" },
  { name: "CONTACT", id: "contact" },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("HOME");
  const scrollToSection = (id) => {
    setActiveTab(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClikMe = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#4A0E4E", "#FBCFFC", "#FFFFFF"],
    });
  };

  return (
    <section
      id="home"
      className="w-full py-20 px-4 flex flex-col items-center "
    >
      {/* --- NAVBAR --- */}
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 bg-[#4A0E4E] rounded-full px-2 py-2 flex items-center z-50 shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id, item.name)}
            onMouseEnter={() => setActiveTab(item.name)}
            className={`relative px-6 py-2 text-xs font-black tracking-widest transition-colors duration-300 z-10 ${
              activeTab === item.name ? "text-[#4A0E4E]" : "text-white"
            }`}
          >
            {activeTab === item.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {item.name}
          </button>
        ))}
      </nav>

      {/* --- CONTENT --- */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 mt-10">
        {/* Left Side: Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/40 backdrop-blur-md rounded-[40px] p-2 shadow-2xl w-full max-w-[350px] overflow-hidden border border-white/20"
        >
          <div className="bg-[#FBCFFC] rounded-[38px] pt-10 flex flex-col items-center">
            <img
              src="/am.png"
              alt="Amirah"
              className="w-90 h-90 object-contain mb-6"
            />

            <div className="text-center pb-10">
              <h3 className="text-[#4A0E4E] font-black text-xl leading-tight uppercase tracking-tighter">
                Amirah <br /> Zulaikha Azmi
              </h3>
              <div className="w-20 h-1 bg-[#4A0E4E] mx-auto my-3" />
              <p className="text-[#4A0E4E] font-black text-sm tracking-widest uppercase">
                Software Engineer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="flex-1 text-[#4A0E4E]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black uppercase leading-[0.9] mb-4"
          >
            你好 Peeps! <br />
            <div className="w-full py-4 ">
              <p className="text-[#4A0E4E] font-bold text-2xl uppercase">
                <Typewriter
                  words={[
                    "Nice to meet you!",
                    "Selamat berkenalan!",
                    "Apa kabar!",
                    "你好 (Nǐ hǎo)",
                    "初めまして (Hajimemashite)",
                    "만나서 반가워요 (Mannaseo bangawoyo)",
                    "ยินดีที่ได้รู้จัก (Yindī thī̀ dā h̄ı̂ rū̂cāk)",
                    "नमस्ते (Namaste)",
                    "مرحباً (Marhaban)",
                    "Bonjour!",
                    "¡Mucho gusto!",
                    "Ciao!",
                    "Olá!",
                    "Hallo!",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>
            <span className="text-4xl opacity-80 italic">
              (I'm Amirah Zulaikha)
            </span>
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClikMe}
            className="bg-[#4A0E4E] text-white px-6 py-2 rounded-full text-xs font-black tracking-widest mb-8 shadow-lg"
          >
            CLIKC HERE~~
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-sm font-medium leading-relaxed max-w-xl"
          >
            <p>
              Hi! I'm Amirah, a curious Software Engineer driven by logical
              thinking and the complex mechanics behind systems. I have a knack
              for breaking things but my heart is set on building them right. A
              logic seeker through and through.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
