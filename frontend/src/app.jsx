import { Toaster } from "sonner";
import CommentSection from "./components/CommentSection";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="min-h-screen bg-[#F3D7FB] flex flex-col items-center">
      <Toaster position="top-right" richColors />

      {/* SECTION 1. INTRO */}
      <section className="w-full py-20 px-4">
        <Hero />
      </section>

      {/* SECTION 2. ABOUT ME */}
      <section className="w-full py-16 px-4">
        <AboutMe />
      </section>

      {/* SECTION 3. SKILLS */}
      <section className="w-full py-20 px-4 bg-white/20">
        <Experience />
      </section>

      {/* SECTION 4. SKILLS */}
      <section className="w-full py-16 px-4">
        <Skills />
      </section>

      {/* SECTION 5. SKILLS */}
      <section className="w-full py-20 px-4 bg-white/20">
        <Hobbies />
      </section>

      {/* SECTION 6: CONTACT ME */}
      <section className="w-full py-16 px-4">
        <ContactMe />
      </section>

      {/* SECTION 7: COMMENT SECTION */}
      <section className="w-full py-20 px-4 bg-white/20">
        <CommentSection />
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 text-center text-[#4A0E4E]/50 text-[10px] font-black tracking-widest">
        &copy; {new Date().getFullYear()} AMIRAH ZULAIKHA • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
export default App;
