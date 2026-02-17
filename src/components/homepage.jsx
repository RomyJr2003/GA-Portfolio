import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import r23 from '../assets/r23.jpg'

function Homepage() {
  const location = useLocation()
  const [selectedImage, setSelectedImage] = useState(null)

  // Function to open modal with image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc)
  }

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null)
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

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
    <>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-transform hover:scale-110 dark:bg-gray-800 dark:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Project"
              className="max-h-[90vh] w-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <main className="relative mx-auto flex w-full max-w-7xl flex-grow flex-col items-center px-4 pb-20 pt-24 sm:px-6 sm:pt-10 lg:px-8">
        <div className="pointer-events-none absolute left-[5%] top-20 text-primary opacity-20 float-animation">
          <span className="material-symbols-outlined text-6xl">star</span>
        </div>
        <div className="pointer-events-none absolute right-[10%] top-40 text-[#3DB2B6] opacity-20 float-animation-delayed">
          <span className="material-symbols-outlined text-5xl">auto_awesome</span>
        </div>
        <div className="pointer-events-none absolute bottom-[20%] left-[8%] text-[#3DB2B6] opacity-20 float-animation">
          <span className="material-symbols-outlined text-7xl">wb_sunny</span>
        </div>
        {/* Hero Section */}
        <section
          className="animate-on-scroll flex w-full max-w-[960px] flex-col items-center gap-10 py-12 md:flex-row md:py-20"
          data-animate
        >
          <div className="z-10 flex flex-1 flex-col gap-6 text-center md:text-left">
            <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:bg-white/10 md:mx-0">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Available for commissions
            </div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Making the World <br />
              <span className="relative inline-block text-primary pr-2">
                Brighter
              </span>
              One Pixel at a Time
            </h1>
            <p className="mx-auto max-w-md text-lg font-medium text-gray-600 dark:text-gray-300 md:mx-0">
              Hello! I&#39;m Romy, a Graphic Artist crafting joyful visual stories for
              playful brands. Let&#39;s turn your ideas into colorful reality.
            </p>
            <div className="flex justify-center gap-4 pt-2 md:justify-start">
              <button className="rounded-full bg-primary px-8 py-3 font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:bg-primary/90">
                <Link to="/designs">View My Work</Link>
              </button>
              <button className="rounded-full border border-gray-200 bg-white px-8 py-3 font-bold text-gray-800 shadow-sm transition-all hover:-translate-y-1 hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-black">
                About Me
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[400px] flex-1 md:max-w-none">
            <div className="relative aspect-square">
              <div className="absolute inset-0 translate-y-4 scale-90 rounded-full bg-[#3DB2B6]/40 blur-3xl dark:bg-[#3DB2B6]/10" />
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl transition-transform duration-500 hover:rotate-0 dark:border-[#1a4044]">
                <img
                  alt="Handsome"
                  className="h-full w-full object-cover"
                  src={r23}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-full bg-white p-4 shadow-lg dark:bg-[#12363a]">
                <div className="rounded-full bg-green-100 p-2 text-green-600 dark:bg-green-900 dark:text-green-300">
                  <span className="material-symbols-outlined text-xl">
                    verified
                  </span>
                </div>
                <div className="pr-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    Experience
                  </p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    5+ Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-10 w-full md:h-20" />
        {/* Projects */}
        <section
          className="animate-on-scroll relative w-full max-w-[960px] py-10"
          data-animate
        >
          <div className="mb-10 flex items-end justify-between px-4">
            <div>
              <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold">
                <span className="material-symbols-outlined text-primary">
                  bubble_chart
                </span>
                Design Experiments
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Not everything needs a client. My laboratory is where i break rules,<br></br>
                test new render engines, and explore the weird side of digital art.
              </p>
            </div>
            <Link className="hidden items-center gap-1 font-bold text-primary transition-all hover:gap-2 sm:flex" to="/designs">
              See All
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
            <div 
              className="group flex cursor-pointer flex-col gap-4"
              onClick={() => openModal('pizza.jpg')}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-white shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl dark:bg-[#12363a]">
                <img
                  alt="Pizza"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="pizza.jpg"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                    View Project
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  Social Media Poster
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Photoshop &amp; Illustrator
                </p>
              </div>
            </div>

            <div 
              className="group mt-0 flex cursor-pointer flex-col gap-4 sm:mt-12"
              onClick={() => openModal('Z&ZGUPPYFARM.png')}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-8 border-white shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl dark:border-[#12363a]">
                <img
                  alt="Logo"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="Z&ZGUPPYFARM.png"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-white">
                    visibility
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  Logo Design
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Illustrator
                </p>
              </div>
            </div>

            <div 
              className="group flex cursor-pointer flex-col gap-4"
              onClick={() => openModal('burger.jpg')}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-white shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl dark:bg-[#12363a]">
                <img
                  alt="Arrangement of colorful roses and flowers on a pink background"
                  className="burger"
                  src="burger.jpg"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                    View Project
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  Food Tarpaulin
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Identity
                </p>
              </div>
            </div>

            <div 
              className="group flex cursor-pointer flex-col gap-4 sm:mt-12 lg:mt-0"
              onClick={() => openModal('CEBU64.jpg')}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-white shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl dark:bg-[#12363a]">
                <img
                  alt="Poster"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="CEBU64.jpg"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                    View Project
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  Event Poster
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Photography
                </p>
              </div>
            </div>

            <div 
              className="group flex cursor-pointer flex-col gap-4 sm:mt-0 lg:mt-12"
              onClick={() => openModal('https://lh3.googleusercontent.com/aida-public/AB6AXuB1P2hUYpG6TswPUAMThA1Ab70lrbiKVtTLjQZgHYV6bGbdAwmjvornVlMR2KIBslRTdPF0aXaddRHvI1wqN8vklB53w2ZEa0_k0kwRl78HzuoQqUXyFVd_I3TFYqMVODZSIGtiXFHvYTPLyyXnOPht9_aWWTIafqWkM34yJNGAA7EQDUGJfV3MDkjCMk7lR482QNjK7JuNUxz7CfcZj_8BY3gNKbmxUd9Lm0j1lOI0HmtwniRO8nm6EPLMVeLD6GvxP5kjrOctUPFf')}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-8 border-white shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl dark:border-[#12363a]">
                <img
                  alt="Yellow and pink abstract fluid painting texture"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1P2hUYpG6TswPUAMThA1Ab70lrbiKVtTLjQZgHYV6bGbdAwmjvornVlMR2KIBslRTdPF0aXaddRHvI1wqN8vklB53w2ZEa0_k0kwRl78HzuoQqUXyFVd_I3TFYqMVODZSIGtiXFHvYTPLyyXnOPht9_aWWTIafqWkM34yJNGAA7EQDUGJfV3MDkjCMk7lR482QNjK7JuNUxz7CfcZj_8BY3gNKbmxUd9Lm0j1lOI0HmtwniRO8nm6EPLMVeLD6GvxP5kjrOctUPFf"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-4xl text-white">
                    visibility
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  Sunny Days
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Art Direction
                </p>
              </div>
            </div>
            
            <div 
              className="group flex cursor-pointer flex-col gap-4 sm:mt-12 lg:mt-0"
              onClick={() => openModal('CEBU64.jpg')}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-white shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl dark:bg-[#12363a]">
                <img
                  alt="Poster"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="CEBU64.jpg"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                    View Project
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                  Event Poster
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Photography
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center sm:hidden">
            <a className="rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary shadow-md dark:bg-[#12363a]" href="#">
              See All Projects
            </a>
          </div>
        </section>

        <div className="h-10 w-full md:h-20" />
        {/* Inquiries */}
        <section
          className="animate-on-scroll w-full max-w-[960px] px-4"
          data-animate
        >
          <div className="relative overflow-hidden rounded-[3rem] border border-white/50 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-[#12363a]/80 md:p-12">
            <svg
              className="absolute -right-20 -top-20 h-64 w-64 text-primary/5 dark:text-primary/10"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.2,32.7C60.2,43.9,49.5,53.4,37.6,60.1C25.7,66.8,12.6,70.7,-1.2,72.8C-15,74.9,-30,75.2,-43.3,69.5C-56.6,63.8,-68.2,52.1,-76.2,38.6C-84.2,25.1,-88.6,9.8,-86.6,-4.8C-84.6,-19.4,-76.2,-33.3,-65.4,-44.6C-54.6,-55.9,-41.4,-64.6,-28.1,-72.3C-14.8,-80,-1.4,-86.7,12.5,-85.8C26.4,-84.9,44.7,-76.4,44.7,-76.4Z"
                fill="currentColor"
                transform="translate(100 100)"
              />
            </svg>
            <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row">
              <div className="h-32 w-32 flex-shrink-0 md:h-40 md:w-40">
                <img
                  alt="Portrait of the artist smiling"
                  className="h-full w-full rounded-full border-4 border-[#58888B] object-cover shadow-md"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYHRMqlIPFo_C7JhPf7b7ZFObOyg0SSYViyUt3ZpnIlQYpLLlvFmhegt2R9qVRMhJU4IhcQj9G6ibwaAkhYaaSlG9wIL92iqtLsh1QevsZdB_VM1it3RmAWlrXEd5SqMaQMue-tpymiyV5fuAfqQ2wen8ePYzl3NpCxp-GFUNLLu3vW-rLyQj_YShTSBZj50l67cbKv7rGJpBAV5cLNznZ26YtIyiWXhMoS1icE2eaLLKr_QekaOBRzUg5E3BlJtF8Vdb_EWPztD0"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-4 text-3xl font-black">My Creative Process</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Every project starts with a spark of joy and a whole lot of
                  sketching. I believe in collaborative magic, where your vision
                  meets my colorful execution.
                </p>
                <div className="mb-6 flex flex-wrap justify-center gap-4 md:justify-start">
                  <div className="flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                    Sketching
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                    <span className="material-symbols-outlined text-lg">
                      palette
                    </span>
                    Coloring
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-300">
                    <span className="material-symbols-outlined text-lg">
                      rocket_launch
                    </span>
                    Launching
                  </div>
                </div>
                <button className="mx-auto flex items-center gap-2 font-bold text-primary transition-all hover:gap-3 md:mx-0">
                  For inquiries click here
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-auto w-full rounded-t-[3rem] border-t border-primary/10 bg-white px-4 pb-8 pt-16 shadow-top dark:bg-[#12363a]">
        <div className="mx-auto flex max-w-[960px] flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2">
              <img className="h-10 w-15" src="/white.png" alt="r23" />
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                R23 GFX
              </span>
            </div>
            <p className="max-w-xs text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
              Adding a splash of color to the digital world, one design at a
              time.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 md:items-end">
            <div className="flex gap-6">
              <a className="text-sm font-bold text-gray-600 transition-colors hover:text-primary dark:text-gray-400" href="/">
                Home
              </a>
              <a className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200" href="/about">
                About
              </a>
              <a className="text-sm font-bold text-gray-600 transition-colors hover:text-primary dark:text-gray-400" href="#">
                Services
              </a>
              <a className="text-sm font-bold text-gray-600 transition-colors hover:text-primary dark:text-gray-400" href="#">
                Shop
              </a>
            </div>
            <div className="flex gap-4">
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-white/5 dark:text-gray-300" href="https://www.instagram.com/jrfrmntr">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-3.77 4.962a7.484 7.484 0 01-.043.911v.006a7.484 7.484 0 01-.6 1.568l.004-.008a7.484 7.484 0 01-1.062 1.472l-.003.002a7.484 7.484 0 01-1.472 1.062l-.002.003a7.484 7.484 0 01-1.568.6l.008-.004a7.484 7.484 0 01-.911.043h.006L2 12.685v.63c0 2.507.012 2.873.06 3.935.048 1.034.214 1.708.452 2.304a4.114 4.114 0 00.957 1.488 4.114 4.114 0 001.488.957c.596.238 1.27.404 2.304.452 1.062.048 1.428.06 3.935.06h.63c2.507 0 2.873-.012 3.935-.06 1.034-.048 1.708-.214 2.304-.452a4.114 4.114 0 001.488-.957 4.114 4.114 0 00.957-1.488c.238-.596.404-1.27.452-2.304.048-1.062.06-1.428.06-3.935v-.63c0-2.507-.012-2.873-.06-3.935-.048-1.034-.214-1.708-.452-2.304a4.114 4.114 0 00-.957-1.488 4.114 4.114 0 00-1.488-.957c-.596-.238-1.27-.404-2.304-.452-1.062-.048-1.428-.06-3.935-.06h-.63zM12 5.833a6.167 6.167 0 110 12.334 6.167 6.167 0 010-12.334zm0 2a4.167 4.167 0 100 8.334 4.167 4.167 0 000-8.334zm6.666-2.583a1.333 1.333 0 110 2.666 1.333 1.333 0 010-2.666z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-white/5 dark:text-gray-300" href="https://www.behance.net/romyformentera">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-white/5 dark:text-gray-300" href="https://github.com/RomyJr2003">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[960px] flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-xs text-gray-400 dark:border-white/5 sm:flex-row">
          <p>2026 R23 GFX Portfolio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="transition-colors hover:text-primary" to="/privacy">
              Privacy
            </Link>
            <Link className="transition-colors hover:text-primary" to="/terms">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homepage
