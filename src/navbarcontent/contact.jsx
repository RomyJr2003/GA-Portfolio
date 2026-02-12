import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

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
          showNotification("Email sent successfully! I'll get back to you soon.", "success");
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          showNotification("Failed to send email. Please try again.", "error");
          console.error(error);
          setIsSending(false);
        }
      );
  };

  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-grow flex-col items-center px-4 pb-20 pt-24 sm:px-6 sm:pt-10 lg:px-8">
      {/* Custom Notification Toast */}
      {notification && (
        <div
          className={`fixed top-20 z-50 flex items-center gap-3 rounded-2xl border px-6 py-4 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            notification.type === "success"
              ? "border-green-200 bg-green-50/95 text-green-800 dark:border-green-800 dark:bg-green-900/90 dark:text-green-100"
              : "border-red-200 bg-red-50/95 text-red-800 dark:border-red-800 dark:bg-red-900/90 dark:text-red-100"
          }`}
        >
          <span className="material-symbols-outlined text-2xl">
            {notification.type === "success" ? "check_circle" : "error"}
          </span>
          <p className="font-semibold">{notification.message}</p>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 rounded-full p-1 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      )}

      <div className="w-full max-w-[960px] pt-25">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#12363a]/80">
          <h1 className="mb-6 text-center text-3xl font-black text-gray-900 dark:text-white">
            Send Email
          </h1>
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
        </div>
      </div>
    </main>
  );
}

export default Contacts;
