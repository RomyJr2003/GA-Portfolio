import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from 'react-router-dom'
import { sileo } from 'sileo'

function Contacts() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const location = useLocation()

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          sileo.show({
            title: "Success!",
            description: "Email sent successfully! I'll get back to you soon.",
            type: "success",
            duration: 5000
          });
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          sileo.show({
            title: "Error",
            description: "Failed to send email. Please try again.",
            type: "error",
            duration: 5000
          });
          console.error(error);
          setIsSending(false);
        }
      );
  };

  useEffect(() => {
      const elements = document.querySelectorAll('[data-animate]')
      if (!elements.length) return undefined
  
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )
  
      elements.forEach((el) => observer.observe(el))
  
      return () => observer.disconnect()
  }, [location.pathname])

  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-grow flex-col items-center px-4 pb-20 pt-[35px] sm:px-6 sm:pt-10 lg:px-8">
      <div className="w-full max-w-[960px] pt-25">
        <div className="rounded-3xl animate-on-scroll border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#12363a]/80" data-animate>
          <h1 className="mb-1 text-left text-5xl font-black text-gray-900 dark:text-white font-head">
            DROP
          </h1>
          <h2 className="mb-2 text-left text-5xl font-black text-orange-700 font-head">
            A LINE
          </h2>
          <p className="text-base font-medium text-gray-600 dark:text-gray-300 mb-6">
              Have a vision in mind? Send us a message and let's create something 
              <br></br>extraordinary
              together.
            </p>
          <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex-1">
              <input
                name="from_name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/20 dark:bg-[#1a4044] dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div className="flex-1">
              <input
                name="from_email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/20 dark:bg-[#1a4044] dark:text-white dark:placeholder-gray-400"
              />
            </div>
            </div>
            <div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/20 dark:bg-[#1a4044] dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/20 dark:bg-[#1a4044] dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div className="justify-center flex">
            <button
              type="submit"
              disabled={isSending}
              className="w-80 rounded-lg bg-primary py-3 font-bold text-white transition hover:bg-primary/90 disabled:opacity-50
              text-center"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            </div>
          </form>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-6 italic">
              <b>Please Note:</b> To ensure I can respond to urgent and meaningful inquiries, 
              I kindly ask that this email address be used for serious inquiries or specific concerns only. 
              Please refrain from sending casual or "just for fun" messages. 
              Your cooperation helps me stay productive!
            </p>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
