import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contacts`,
        formData,
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 flex flex-col items-center justify-center p-6"
    >
      <h2 className="text-[#4A0E4E] text-5xl font-black mb-2 uppercase tracking-tighter">
        Contact
      </h2>
      <p className="text-[#4A0E4E] text-[10px] font-bold text-center mb-8 max-w-xs uppercase leading-tight">
        Always open to meaningful connections unless you're a scammer, then
        please 404 yourself out of here
      </p>

      <div className="bg-white w-full max-w-4xl rounded-[50px] shadow-2xl flex flex-col md:flex-row overflow-hidden border-8 border-white">
        {/* Left Side (Plum) */}
        <div className="bg-[#4A0E4E] md:w-2/5 p-12 flex flex-col items-center justify-center">
          <h3 className="text-white text-4xl font-black italic mb-10 leading-none">
            GET IN TOUCH!
          </h3>

          <div className="bg-[#F3D7FB]/20 p-8 rounded-[40px] flex flex-col gap-6 w-full">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amirah-zulaikha-3935042b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffff] p-4 pl-6 rounded-2xl flex items-center justify-start gap-4 text-black hover:scale-105 transition-all cursor-pointer group"
            >
              <FaLinkedinIn className="text-2xl" />
              <span className="font-bold uppercase tracking-widest text-sm">
                LinkedIn
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/60195393646"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffff] p-4 pl-6 rounded-2xl flex items-center justify-start gap-4 text-black hover:scale-105 transition-all cursor-pointer group"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="font-bold uppercase tracking-widest text-sm">
                WhatsApp
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mikaaaeee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffff] p-4 pl-6 rounded-2xl flex items-center justify-start gap-4 text-black hover:scale-105 transition-all cursor-pointer group"
            >
              <FaGithub className="text-2xl" />
              <span className="font-bold uppercase tracking-widest text-sm">
                GitHub
              </span>
            </a>
          </div>
        </div>

        <div className="bg-[#F3D7FB] md:w-3/5 p-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/60 p-5 rounded-2xl text-[#4A0E4E] font-bold outline-none placeholder:text-[#4A0E4E]/40"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/60 p-5 rounded-2xl text-[#4A0E4E] font-bold outline-none placeholder:text-[#4A0E4E]/40"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              className="bg-white/60 p-5 rounded-2xl text-[#4A0E4E] font-bold outline-none placeholder:text-[#4A0E4E]/40 resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
            <button className="bg-[#4A0E4E] text-white font-black py-4 rounded-2xl mt-2 uppercase tracking-widest hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
