import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const CommentSection = () => {
  //1. save what user type
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  //2 fetch comment
  const fetchComments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch data : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  //3 fx to send data to laravel
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await axios.post("http://127.0.0.1:8000/api/comments", {
        name: name,
        message: message,
      });

      toast.success("Commented Successfully!");
      setName("");
      setMessage(""); //empty textfield after submission
      fetchComments(); // fetch comment after submission
    } catch (error) {
      console.error("Failed to comment", error);
      toast.error("Ops, Error in Commenting");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full py-20 flex flex-col items-center text-[#4A0E4E]">
      {/* Title & Description terus atas pink cair */}
      <h2 className="text-[#4A0E4E] text-5xl font-black mb-2 uppercase tracking-tighter">
        Comment Section
      </h2>
      <p className="text-[#4A0E4E] text-[10px] font-bold text-center mb-12 max-w-xs uppercase leading-tight">
        Please drop your thoughts about my portfolio website. I'll appreciate
        every single feedbacks!
      </p>

      <div className="w-full max-w-2xl px-4">
        {/* --- FORM KOMEN (Plum Box) --- */}
        <div className="bg-[#4A0E4E] w-full rounded-[45px] p-8 mb-16 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="NAME"
              className="w-full p-4 rounded-xl bg-white text-[#4A0E4E] font-bold outline-none border-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="WRITE YOUR THOUGHTS"
              className="w-full p-4 rounded-xl bg-white text-[#4A0E4E] font-bold outline-none h-32 resize-none border-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="flex justify-end">
              <button className="bg-[#938194] px-10 py-3 rounded-2xl text-white font-black hover:bg-[#7A6A7A] transition-all">
                {isSending ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>

        {/* --- DISPLAY LIST KOMEN (Terapung atas pink cair) --- */}
        <div className="w-full space-y-6">
          <h3 className="text-[#4A0E4E] font-black text-3xl mb-8 tracking-tighter uppercase">
            Thoughts ({comments.length})
          </h3>

          {loading ? (
            <p className="text-center animate-pulse font-bold">
              Loading comments...
            </p>
          ) : (
            <div className="grid gap-6">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="bg-white/70 p-7 rounded-[35px] border-b-4 border-r-4 border-[#4A0E4E] shadow-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-black text-[#4A0E4E] text-lg uppercase tracking-tight">
                      {c.name}
                    </h4>
                    <span className="text-[10px] font-bold opacity-40 italic">
                      {new Date(c.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-[#4A0E4E] font-medium text-sm leading-relaxed">
                    "{c.message}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {!loading && comments.length === 0 && (
            <p className="text-center italic opacity-40 py-10">
              No comment yet. Be the first!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
