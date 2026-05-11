import React from "react";
import { motion } from "framer-motion";

const hobbyData = [
  {
    id: 1,
    title: "Sunset",
    desc: "The sunset is beautiful isn't it?",
    img: "/src/assets/pantai.jpeg",
  },
  {
    id: 2,
    title: "Hiking",
    desc: "Chasing views at Bukit Singa",
    img: "/src/assets/hiking.jpeg",
  },
  {
    id: 3,
    title: "Fitness",
    desc: "Still in progress",
    img: "/src/assets/gym2.jpeg",
  },
  {
    id: 4,
    title: "Cat",
    desc: "Me and meow!",
    img: "/src/assets/cat.jpeg",
  },
  {
    id: 5,
    title: "Flower",
    desc: "Still figuring out my favorite flowers.",
    img: "/src/assets/flower.jpeg",
  },
  {
    id: 6,
    title: "Beach",
    desc: "My safe place",
    img: "/src/assets/beach2.jpeg",
  },
  {
    id: 7,
    title: "Cafe Hopping",
    desc: "Sometimes I went cafe hopping with friends",
    img: "/src/assets/cafe.jpeg",
  },
  {
    id: 8,
    title: "Err..",
    desc: "I have no words for this",
    img: "/src/assets/lovergirl.jpeg",
  },
  {
    id: 9,
    title: "Meow",
    desc: "Cute but nonchalant cat",
    img: "/src/assets/cat2.jpeg",
  },
  {
    id: 10,
    title: "Comfort Food",
    desc: "Forever aye gepuk lover",
    img: "/src/assets/ayegepuk.jpeg",
  },
  {
    id: 11,
    title: "Dessert",
    desc: "Llao llao hunting with ex-colleagues 🫶🏻",
    img: "/src/assets/llaollao.jpeg",
  },
  {
    id: 12,
    title: "Biggest dream in life",
    desc: "I really wanna be a biker.",
    img: "/src/assets/bike.jpeg",
  },
];

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="w-full py-20 px-4 flex flex-col items-center"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-[#4A0E4E] uppercase tracking-tighter"
        >
          My Hobbies
        </motion.h2>
        <p className="text-[#4A0E4E]/70 font-bold italic mt-2 uppercase text-[30px] tracking-widest">
          Half nature seeker, half modern soul.
          <br />
          <span className="text-[#4A0E4E] font-light">
            P/s: Just me romanticizing my life.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {hobbyData.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-square rounded-[40px] overflow-hidden shadow-2xl bg-[#4A0E4E]"
          >
            <img
              src={hobby.img}
              alt={hobby.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E4E] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-white font-black uppercase text-sm">
                {hobby.title}
              </h4>
              <p className="text-white/80 text-[10px] font-medium leading-tight">
                {hobby.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
