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
              <button className="rounded-full cursor-pointer border border-gray-200 bg-white px-8 py-3 font-bold text-gray-800 shadow-sm transition-all hover:-translate-y-1 hover:bg-gray-50 dark:border-white/10 dark:bg-white/10 dark:text-black">
                <Link to="/about">About Me</Link>
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
          className="animate-on-scroll relative w-full max-w-[960px] py-5"
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
        {/*Software Skills - Infinite Scroll Carousel*/}
        <section className="w-full overflow-hidden py-10">
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#ccf8d5] dark:from-[#0f1f2b]"></div>
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#ccf8d5] dark:from-[#0f1f2b]"></div>
            
            {/* Scrolling container */}
            <div className="flex items-center animate-scroll gap-16">
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
              <path fill="currentColor" d="M22.666 1.6C10.133 1.6 0 11.734 0 24.268v79.464C0 116.266 10.133 126.4 22.666 126.4h82.668c12.533 0 22.666-10.134 22.666-22.668V24.268C128 11.734 117.867 1.6 105.334 1.6zm23.201 31.734c4.373 0 8 .532 10.986 1.652A19.05 19.05 0 0 1 64 39.361a17 17 0 0 1 3.894 6.079c.8 2.24 1.225 4.533 1.225 6.933q0 6.88-3.2 11.36c-2.132 2.986-5.118 5.227-8.585 6.507c-3.627 1.334-7.627 1.813-12 1.813c-1.28 0-2.135 0-2.668-.053s-1.28-.053-2.293-.053v17.12c.053.373-.213.694-.586.747H29.44c-.426 0-.638-.215-.638-.695V34.24c0-.373.16-.588.533-.588c.907 0 1.76 0 2.986-.052c1.28-.054 2.613-.052 4.053-.106c1.44-.053 2.987-.054 4.64-.107c1.654-.054 3.254-.053 4.854-.053zm1.19 10.504a19 19 0 0 0-.817.002c-1.386 0-2.613.001-3.627.055c-1.066-.054-1.812-.001-2.185.052v17.92c.746.054 1.438.106 2.078.106h2.828c2.08 0 4.16-.32 6.133-.96c1.707-.48 3.2-1.494 4.373-2.827c1.12-1.334 1.654-3.146 1.654-5.493a8.8 8.8 0 0 0-1.226-4.746c-.907-1.386-2.188-2.454-3.735-3.04c-1.727-.7-3.576-1.033-5.476-1.07zm44.73 2.723c2.187 0 4.427.158 6.613.478c1.6.213 3.146.642 4.586 1.229c.214.053.427.265.533.478c.054.213.108.427.108.64v8.694a.66.66 0 0 1-.266.533c-.48.107-.747.107-.96 0c-1.6-.853-3.308-1.439-5.122-1.812c-1.973-.427-3.946-.695-5.972-.695c-1.067-.054-2.188.108-3.201.374c-.694.16-1.28.534-1.653 1.067c-.266.427-.426.96-.426 1.44s.214.96.534 1.386c.48.587 1.119 1.068 1.812 1.442a49 49 0 0 0 3.787 1.757c2.88.96 5.653 2.295 8.213 3.895c1.76 1.12 3.2 2.614 4.213 4.427a11.5 11.5 0 0 1 1.228 5.493a12.4 12.4 0 0 1-2.082 7.093a13.36 13.36 0 0 1-5.972 4.746c-2.614 1.12-5.814 1.707-9.654 1.707c-2.454 0-4.852-.213-7.252-.693a21.5 21.5 0 0 1-5.44-1.707c-.373-.213-.641-.587-.588-1.014V78.24c0-.16.053-.374.213-.48c.16-.107.32-.052.48.054a22.8 22.8 0 0 0 6.614 2.614c2.027.533 4.161.799 6.295.799c2.026 0 3.466-.267 4.426-.747c.853-.373 1.439-1.28 1.439-2.24c0-.746-.426-1.441-1.28-2.135c-.853-.693-2.613-1.492-5.226-2.505a32.6 32.6 0 0 1-7.574-3.84a13.8 13.8 0 0 1-4.053-4.533a11.44 11.44 0 0 1-1.226-5.44c0-2.293.639-4.48 1.812-6.453c1.333-2.133 3.308-3.84 5.602-4.906c2.506-1.28 5.652-1.867 9.44-1.867z"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
              <path fill="currentColor" d="M105.33 1.6H22.67A22.64 22.64 0 0 0 0 24.27v79.46a22.64 22.64 0 0 0 22.67 22.67h82.66A22.64 22.64 0 0 0 128 103.73V24.27A22.64 22.64 0 0 0 105.33 1.6m-27.09 88H67.09a.82.82 0 0 1-.85-.59l-4.37-12.74H42L38 88.8a.93.93 0 0 1-1 .75H27c-.58 0-.74-.32-.58-1l17.1-49.4c.16-.54.32-1.12.53-1.76a18 18 0 0 0 .32-3.47a.54.54 0 0 1 .43-.59h13.81c.43 0 .64.16.7.43l19.46 54.93c.16.59 0 .86-.53.86Zm18.4-.6c0 .59-.21.85-.69.85H85.49a.75.75 0 0 1-.8-.85V47.89c0-.53.22-.74.7-.74H96c.48 0 .69.26.69.74Zm-1.12-48.2a6.3 6.3 0 0 1-4.85 1.87a6.6 6.6 0 0 1-4.75-1.87a6.87 6.87 0 0 1-1.81-4.91A6.23 6.23 0 0 1 86 31.15a6.8 6.8 0 0 1 4.74-1.87a6.4 6.4 0 0 1 4.86 1.87a6.75 6.75 0 0 1 1.76 4.74a6.76 6.76 0 0 1-1.84 4.91M58.67 65.44H45.12c.8-2.24 1.6-4.75 2.35-7.47s1.65-5.33 2.45-7.89a65 65 0 0 0 1.81-6.88h.11c.37 1.28.75 2.67 1.17 4.16s.91 3.09 1.44 4.75s1 3.25 1.55 4.9s1 3.15 1.44 4.59s.91 2.72 1.23 3.84"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path fill="currentColor" d="M16 0C7.161 0 0 7.161 0 16s7.161 16 16 16s16-7.161 16-16S24.839 0 16 0M9.281 10.24c1.005 0 1.787.733 1.875 1.599c.095.781-.229 1.464-1.093 1.875c-.459.229-.641.229-.735.093c-.047-.093 0-.181.093-.276c.824-.681.824-1.233.729-2.009c-.047-.505-.411-.824-.776-.824c-1.604 0-3.885 3.563-3.568 6.172c.141 1.005.735 2.193 2.011 2.193c.412 0 .871-.136 1.281-.317c.667-.355 1.068-.625 1.464-1.068c-.099-1.183.937-2.729 2.468-2.729c.688 0 1.235.276 1.281.781c.089.683-.505.776-.687.776s-.505-.047-.505-.229c-.041-.183.411-.093.369-.505c-.047-.276-.323-.364-.593-.364c-.964 0-1.511 1.328-1.375 2.145c.047.369.228.735.599.735c.271 0 .683-.412.817-1.005c.093-.412.459-.688.781-.688c.136 0 .224.047.271.229v.183c-.041.183-.183.735-.135.869c0 .095.047.229.228.229c.12 0 .579-.24 1.037-.615c.151-.787.333-1.729.333-1.807c.047-.323.183-.641.823-.641c.14 0 .229.047.276.229v.183l-.183.823c.595-.776 1.464-1.323 2.011-1.323c.229 0 .412.135.412.364c0 .136 0 .365-.095.595c-.181.5-.411 1.281-.547 1.963c0 .183.047.365.276.365s.912-.271 1.459-1.005l.011-.005c0-.089-.011-.177-.011-.265c0-.552.047-1.005.141-1.328c.093-.365.547-.683.823-.683c.135 0 .276.088.276.224c0 .047 0 .14-.047.183c-.183.599-.324 1.145-.324 1.692c0 .323.048.776.141 1.052c0 .047.041.093.088.093c.095 0 .735-.593 1.188-1.375c-.412-.271-.641-.729-.641-1.276c0-.963.6-1.464 1.147-1.464c.459 0 .823.319.823.959c0 .412-.136.871-.364 1.281h.135c.292.011.579-.109.776-.317a.4.4 0 0 1 .183-.156c.448-.568 1.104-.989 1.88-.989c.64 0 1.229.276 1.276.776c.093.687-.505.823-.688.823c-.181 0-.504-.047-.504-.229s.411-.093.369-.5c-.047-.276-.323-.369-.599-.369c-.912 0-1.505 1.187-1.371 2.151c.047.364.229.776.595.776c.276 0 .687-.412.869-1.005c.088-.364.459-.688.776-.688c.14 0 .229.047.276.229c0 .095 0 .276-.183.871c-.229.411-.229.64-.181.823c.041.364.224.64.411.776a1 1 0 0 1 .089.135c0 .095-.048.188-.183.188c-.047 0-.089 0-.136-.047c-.687-.276-.963-.735-1.052-1.193c-.276.323-.593.505-.963.505c-.595 0-1.183-.547-1.276-1.235a2.1 2.1 0 0 1 .099-.864c-.271.172-.563.271-.833.271h-.224c-.599.869-1.24 1.464-1.693 1.735a1.2 1.2 0 0 1-.505.14c-.088 0-.228-.047-.271-.14c-.129-.203-.208-.521-.26-.885c-.641.697-1.527 1.072-1.937 1.072c-.459 0-.729-.276-.776-.733v-.5c.135-1.005.505-1.604.505-1.787a.105.105 0 0 0-.095-.093c-.317 0-1.369 1.099-1.552 1.833l-.14.593c-.089.411-.5.687-.776.687c-.136 0-.229-.047-.271-.228v-.183l.057-.312c-.579.411-1.157.676-1.433.676c-.411 0-.64-.229-.681-.552c-.276.371-.595.552-1.005.552c-.475 0-.932-.323-1.151-.791c-.329.369-.699.739-1.136 1.02c-.64.412-1.369.729-2.24.729c-.776 0-1.463-.412-1.828-.776c-.552-.505-.869-1.281-.916-2.011c-.271-2.239 1.099-5.12 3.197-6.401c.505-.276 1.011-.457 1.511-.457zm13.026 4.391c-.135 0-.228.229-.228.452c0 .371.181.781.411 1.011a2.3 2.3 0 0 0 .141-.781c0-.452-.183-.681-.324-.681z"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.8 12L6 14.5c0 1.178 0 1.268.352 1.634c.351.366.917.366 2.049.366h4.8c1.132 0 1.698 0 2.05-.366s.351-.456.351-1.634M10.8 12L18 8.25M10.8 12L6 9.5c0-1.179 0-1.268.352-1.634C6.703 7.5 7.269 7.5 8.4 7.5h4.8c1.132 0 1.698 0 2.05.366s.351.455.351 1.634M10.8 12l7.2 3.75"/><path d="M2.498 12c0-4.478 0-6.718 1.391-8.109S7.52 2.5 11.998 2.5s6.717 0 8.109 1.391c1.39 1.391 1.39 3.63 1.39 8.109c0 4.478 0 6.717-1.39 8.109c-1.392 1.39-3.63 1.39-8.11 1.39c-4.478 0-6.717 0-8.108-1.39c-1.391-1.392-1.391-3.63-1.391-8.11"/></g>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm2.382 6.022a3.478 3.478 0 0 1 5.58-2.125l-.008.005L8.82 7.288a.5.5 0 0 0-.25.435l.022 5.106l-1.263-.722V7.625q0-.31.052-.603Zm10.822.019a3.46 3.46 0 0 1 .43 2.241l-.01-.005l-4.133-2.387a.5.5 0 0 0-.502.002l-4.41 2.572l-.007-1.455l3.882-2.241a3.48 3.48 0 0 1 4.75 1.273m-8.62 3.578l.012 2.783l2.417 1.381l2.404-1.402l-.013-2.784l-2.416-1.38zm3.401-1.984l1.257-.733l3.882 2.24a3.478 3.478 0 0 1-.454 6.243v-4.783a.5.5 0 0 0-.252-.434zm3.686 3.257l-1.264-.722l.023 5.106a.5.5 0 0 1-.25.436l-4.133 2.386l-.01.005a3.478 3.478 0 0 0 5.633-2.728zm-2.249 2.644l.006 1.455l-3.881 2.24a3.478 3.478 0 0 1-5.18-3.514l.01.006l4.132 2.387a.5.5 0 0 0 .502-.002zm-4.664 1.562l1.257-.733l-4.433-2.533a.5.5 0 0 1-.252-.434V7.615a3.478 3.478 0 0 0-.454 6.243z" clip-rule="evenodd"/>
              </svg>
              
              {/* Duplicate icons for seamless loop */}
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
              <path fill="currentColor" d="M22.666 1.6C10.133 1.6 0 11.734 0 24.268v79.464C0 116.266 10.133 126.4 22.666 126.4h82.668c12.533 0 22.666-10.134 22.666-22.668V24.268C128 11.734 117.867 1.6 105.334 1.6zm23.201 31.734c4.373 0 8 .532 10.986 1.652A19.05 19.05 0 0 1 64 39.361a17 17 0 0 1 3.894 6.079c.8 2.24 1.225 4.533 1.225 6.933q0 6.88-3.2 11.36c-2.132 2.986-5.118 5.227-8.585 6.507c-3.627 1.334-7.627 1.813-12 1.813c-1.28 0-2.135 0-2.668-.053s-1.28-.053-2.293-.053v17.12c.053.373-.213.694-.586.747H29.44c-.426 0-.638-.215-.638-.695V34.24c0-.373.16-.588.533-.588c.907 0 1.76 0 2.986-.052c1.28-.054 2.613-.052 4.053-.106c1.44-.053 2.987-.054 4.64-.107c1.654-.054 3.254-.053 4.854-.053zm1.19 10.504a19 19 0 0 0-.817.002c-1.386 0-2.613.001-3.627.055c-1.066-.054-1.812-.001-2.185.052v17.92c.746.054 1.438.106 2.078.106h2.828c2.08 0 4.16-.32 6.133-.96c1.707-.48 3.2-1.494 4.373-2.827c1.12-1.334 1.654-3.146 1.654-5.493a8.8 8.8 0 0 0-1.226-4.746c-.907-1.386-2.188-2.454-3.735-3.04c-1.727-.7-3.576-1.033-5.476-1.07zm44.73 2.723c2.187 0 4.427.158 6.613.478c1.6.213 3.146.642 4.586 1.229c.214.053.427.265.533.478c.054.213.108.427.108.64v8.694a.66.66 0 0 1-.266.533c-.48.107-.747.107-.96 0c-1.6-.853-3.308-1.439-5.122-1.812c-1.973-.427-3.946-.695-5.972-.695c-1.067-.054-2.188.108-3.201.374c-.694.16-1.28.534-1.653 1.067c-.266.427-.426.96-.426 1.44s.214.96.534 1.386c.48.587 1.119 1.068 1.812 1.442a49 49 0 0 0 3.787 1.757c2.88.96 5.653 2.295 8.213 3.895c1.76 1.12 3.2 2.614 4.213 4.427a11.5 11.5 0 0 1 1.228 5.493a12.4 12.4 0 0 1-2.082 7.093a13.36 13.36 0 0 1-5.972 4.746c-2.614 1.12-5.814 1.707-9.654 1.707c-2.454 0-4.852-.213-7.252-.693a21.5 21.5 0 0 1-5.44-1.707c-.373-.213-.641-.587-.588-1.014V78.24c0-.16.053-.374.213-.48c.16-.107.32-.052.48.054a22.8 22.8 0 0 0 6.614 2.614c2.027.533 4.161.799 6.295.799c2.026 0 3.466-.267 4.426-.747c.853-.373 1.439-1.28 1.439-2.24c0-.746-.426-1.441-1.28-2.135c-.853-.693-2.613-1.492-5.226-2.505a32.6 32.6 0 0 1-7.574-3.84a13.8 13.8 0 0 1-4.053-4.533a11.44 11.44 0 0 1-1.226-5.44c0-2.293.639-4.48 1.812-6.453c1.333-2.133 3.308-3.84 5.602-4.906c2.506-1.28 5.652-1.867 9.44-1.867z"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
              <path fill="currentColor" d="M105.33 1.6H22.67A22.64 22.64 0 0 0 0 24.27v79.46a22.64 22.64 0 0 0 22.67 22.67h82.66A22.64 22.64 0 0 0 128 103.73V24.27A22.64 22.64 0 0 0 105.33 1.6m-27.09 88H67.09a.82.82 0 0 1-.85-.59l-4.37-12.74H42L38 88.8a.93.93 0 0 1-1 .75H27c-.58 0-.74-.32-.58-1l17.1-49.4c.16-.54.32-1.12.53-1.76a18 18 0 0 0 .32-3.47a.54.54 0 0 1 .43-.59h13.81c.43 0 .64.16.7.43l19.46 54.93c.16.59 0 .86-.53.86Zm18.4-.6c0 .59-.21.85-.69.85H85.49a.75.75 0 0 1-.8-.85V47.89c0-.53.22-.74.7-.74H96c.48 0 .69.26.69.74Zm-1.12-48.2a6.3 6.3 0 0 1-4.85 1.87a6.6 6.6 0 0 1-4.75-1.87a6.87 6.87 0 0 1-1.81-4.91A6.23 6.23 0 0 1 86 31.15a6.8 6.8 0 0 1 4.74-1.87a6.4 6.4 0 0 1 4.86 1.87a6.75 6.75 0 0 1 1.76 4.74a6.76 6.76 0 0 1-1.84 4.91M58.67 65.44H45.12c.8-2.24 1.6-4.75 2.35-7.47s1.65-5.33 2.45-7.89a65 65 0 0 0 1.81-6.88h.11c.37 1.28.75 2.67 1.17 4.16s.91 3.09 1.44 4.75s1 3.25 1.55 4.9s1 3.15 1.44 4.59s.91 2.72 1.23 3.84"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path fill="currentColor" d="M16 0C7.161 0 0 7.161 0 16s7.161 16 16 16s16-7.161 16-16S24.839 0 16 0M9.281 10.24c1.005 0 1.787.733 1.875 1.599c.095.781-.229 1.464-1.093 1.875c-.459.229-.641.229-.735.093c-.047-.093 0-.181.093-.276c.824-.681.824-1.233.729-2.009c-.047-.505-.411-.824-.776-.824c-1.604 0-3.885 3.563-3.568 6.172c.141 1.005.735 2.193 2.011 2.193c.412 0 .871-.136 1.281-.317c.667-.355 1.068-.625 1.464-1.068c-.099-1.183.937-2.729 2.468-2.729c.688 0 1.235.276 1.281.781c.089.683-.505.776-.687.776s-.505-.047-.505-.229c-.041-.183.411-.093.369-.505c-.047-.276-.323-.364-.593-.364c-.964 0-1.511 1.328-1.375 2.145c.047.369.228.735.599.735c.271 0 .683-.412.817-1.005c.093-.412.459-.688.781-.688c.136 0 .224.047.271.229v.183c-.041.183-.183.735-.135.869c0 .095.047.229.228.229c.12 0 .579-.24 1.037-.615c.151-.787.333-1.729.333-1.807c.047-.323.183-.641.823-.641c.14 0 .229.047.276.229v.183l-.183.823c.595-.776 1.464-1.323 2.011-1.323c.229 0 .412.135.412.364c0 .136 0 .365-.095.595c-.181.5-.411 1.281-.547 1.963c0 .183.047.365.276.365s.912-.271 1.459-1.005l.011-.005c0-.089-.011-.177-.011-.265c0-.552.047-1.005.141-1.328c.093-.365.547-.683.823-.683c.135 0 .276.088.276.224c0 .047 0 .14-.047.183c-.183.599-.324 1.145-.324 1.692c0 .323.048.776.141 1.052c0 .047.041.093.088.093c.095 0 .735-.593 1.188-1.375c-.412-.271-.641-.729-.641-1.276c0-.963.6-1.464 1.147-1.464c.459 0 .823.319.823.959c0 .412-.136.871-.364 1.281h.135c.292.011.579-.109.776-.317a.4.4 0 0 1 .183-.156c.448-.568 1.104-.989 1.88-.989c.64 0 1.229.276 1.276.776c.093.687-.505.823-.688.823c-.181 0-.504-.047-.504-.229s.411-.093.369-.5c-.047-.276-.323-.369-.599-.369c-.912 0-1.505 1.187-1.371 2.151c.047.364.229.776.595.776c.276 0 .687-.412.869-1.005c.088-.364.459-.688.776-.688c.14 0 .229.047.276.229c0 .095 0 .276-.183.871c-.229.411-.229.64-.181.823c.041.364.224.64.411.776a1 1 0 0 1 .089.135c0 .095-.048.188-.183.188c-.047 0-.089 0-.136-.047c-.687-.276-.963-.735-1.052-1.193c-.276.323-.593.505-.963.505c-.595 0-1.183-.547-1.276-1.235a2.1 2.1 0 0 1 .099-.864c-.271.172-.563.271-.833.271h-.224c-.599.869-1.24 1.464-1.693 1.735a1.2 1.2 0 0 1-.505.14c-.088 0-.228-.047-.271-.14c-.129-.203-.208-.521-.26-.885c-.641.697-1.527 1.072-1.937 1.072c-.459 0-.729-.276-.776-.733v-.5c.135-1.005.505-1.604.505-1.787a.105.105 0 0 0-.095-.093c-.317 0-1.369 1.099-1.552 1.833l-.14.593c-.089.411-.5.687-.776.687c-.136 0-.229-.047-.271-.228v-.183l.057-.312c-.579.411-1.157.676-1.433.676c-.411 0-.64-.229-.681-.552c-.276.371-.595.552-1.005.552c-.475 0-.932-.323-1.151-.791c-.329.369-.699.739-1.136 1.02c-.64.412-1.369.729-2.24.729c-.776 0-1.463-.412-1.828-.776c-.552-.505-.869-1.281-.916-2.011c-.271-2.239 1.099-5.12 3.197-6.401c.505-.276 1.011-.457 1.511-.457zm13.026 4.391c-.135 0-.228.229-.228.452c0 .371.181.781.411 1.011a2.3 2.3 0 0 0 .141-.781c0-.452-.183-.681-.324-.681z"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.8 12L6 14.5c0 1.178 0 1.268.352 1.634c.351.366.917.366 2.049.366h4.8c1.132 0 1.698 0 2.05-.366s.351-.456.351-1.634M10.8 12L18 8.25M10.8 12L6 9.5c0-1.179 0-1.268.352-1.634C6.703 7.5 7.269 7.5 8.4 7.5h4.8c1.132 0 1.698 0 2.05.366s.351.455.351 1.634M10.8 12l7.2 3.75"/><path d="M2.498 12c0-4.478 0-6.718 1.391-8.109S7.52 2.5 11.998 2.5s6.717 0 8.109 1.391c1.39 1.391 1.39 3.63 1.39 8.109c0 4.478 0 6.717-1.39 8.109c-1.392 1.39-3.63 1.39-8.11 1.39c-4.478 0-6.717 0-8.108-1.39c-1.391-1.392-1.391-3.63-1.391-8.11"/></g>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm2.382 6.022a3.478 3.478 0 0 1 5.58-2.125l-.008.005L8.82 7.288a.5.5 0 0 0-.25.435l.022 5.106l-1.263-.722V7.625q0-.31.052-.603Zm10.822.019a3.46 3.46 0 0 1 .43 2.241l-.01-.005l-4.133-2.387a.5.5 0 0 0-.502.002l-4.41 2.572l-.007-1.455l3.882-2.241a3.48 3.48 0 0 1 4.75 1.273m-8.62 3.578l.012 2.783l2.417 1.381l2.404-1.402l-.013-2.784l-2.416-1.38zm3.401-1.984l1.257-.733l3.882 2.24a3.478 3.478 0 0 1-.454 6.243v-4.783a.5.5 0 0 0-.252-.434zm3.686 3.257l-1.264-.722l.023 5.106a.5.5 0 0 1-.25.436l-4.133 2.386l-.01.005a3.478 3.478 0 0 0 5.633-2.728zm-2.249 2.644l.006 1.455l-3.881 2.24a3.478 3.478 0 0 1-5.18-3.514l.01.006l4.132 2.387a.5.5 0 0 0 .502-.002zm-4.664 1.562l1.257-.733l-4.433-2.533a.5.5 0 0 1-.252-.434V7.615a3.478 3.478 0 0 0-.454 6.243z" clip-rule="evenodd"/>
              </svg>
              
              {/* Third set for seamless loop */}
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
              <path fill="currentColor" d="M22.666 1.6C10.133 1.6 0 11.734 0 24.268v79.464C0 116.266 10.133 126.4 22.666 126.4h82.668c12.533 0 22.666-10.134 22.666-22.668V24.268C128 11.734 117.867 1.6 105.334 1.6zm23.201 31.734c4.373 0 8 .532 10.986 1.652A19.05 19.05 0 0 1 64 39.361a17 17 0 0 1 3.894 6.079c.8 2.24 1.225 4.533 1.225 6.933q0 6.88-3.2 11.36c-2.132 2.986-5.118 5.227-8.585 6.507c-3.627 1.334-7.627 1.813-12 1.813c-1.28 0-2.135 0-2.668-.053s-1.28-.053-2.293-.053v17.12c.053.373-.213.694-.586.747H29.44c-.426 0-.638-.215-.638-.695V34.24c0-.373.16-.588.533-.588c.907 0 1.76 0 2.986-.052c1.28-.054 2.613-.052 4.053-.106c1.44-.053 2.987-.054 4.64-.107c1.654-.054 3.254-.053 4.854-.053zm1.19 10.504a19 19 0 0 0-.817.002c-1.386 0-2.613.001-3.627.055c-1.066-.054-1.812-.001-2.185.052v17.92c.746.054 1.438.106 2.078.106h2.828c2.08 0 4.16-.32 6.133-.96c1.707-.48 3.2-1.494 4.373-2.827c1.12-1.334 1.654-3.146 1.654-5.493a8.8 8.8 0 0 0-1.226-4.746c-.907-1.386-2.188-2.454-3.735-3.04c-1.727-.7-3.576-1.033-5.476-1.07zm44.73 2.723c2.187 0 4.427.158 6.613.478c1.6.213 3.146.642 4.586 1.229c.214.053.427.265.533.478c.054.213.108.427.108.64v8.694a.66.66 0 0 1-.266.533c-.48.107-.747.107-.96 0c-1.6-.853-3.308-1.439-5.122-1.812c-1.973-.427-3.946-.695-5.972-.695c-1.067-.054-2.188.108-3.201.374c-.694.16-1.28.534-1.653 1.067c-.266.427-.426.96-.426 1.44s.214.96.534 1.386c.48.587 1.119 1.068 1.812 1.442a49 49 0 0 0 3.787 1.757c2.88.96 5.653 2.295 8.213 3.895c1.76 1.12 3.2 2.614 4.213 4.427a11.5 11.5 0 0 1 1.228 5.493a12.4 12.4 0 0 1-2.082 7.093a13.36 13.36 0 0 1-5.972 4.746c-2.614 1.12-5.814 1.707-9.654 1.707c-2.454 0-4.852-.213-7.252-.693a21.5 21.5 0 0 1-5.44-1.707c-.373-.213-.641-.587-.588-1.014V78.24c0-.16.053-.374.213-.48c.16-.107.32-.052.48.054a22.8 22.8 0 0 0 6.614 2.614c2.027.533 4.161.799 6.295.799c2.026 0 3.466-.267 4.426-.747c.853-.373 1.439-1.28 1.439-2.24c0-.746-.426-1.441-1.28-2.135c-.853-.693-2.613-1.492-5.226-2.505a32.6 32.6 0 0 1-7.574-3.84a13.8 13.8 0 0 1-4.053-4.533a11.44 11.44 0 0 1-1.226-5.44c0-2.293.639-4.48 1.812-6.453c1.333-2.133 3.308-3.84 5.602-4.906c2.506-1.28 5.652-1.867 9.44-1.867z"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
              <path fill="currentColor" d="M105.33 1.6H22.67A22.64 22.64 0 0 0 0 24.27v79.46a22.64 22.64 0 0 0 22.67 22.67h82.66A22.64 22.64 0 0 0 128 103.73V24.27A22.64 22.64 0 0 0 105.33 1.6m-27.09 88H67.09a .82.82 0 0 1-.85-.59l-4.37-12.74H42L38 88.8a.93.93 0 0 1-1 .75H27c-.58 0-.74-.32-.58-1l17.1-49.4c.16-.54.32-1.12.53-1.76a18 18 0 0 0 .32-3.47a.54.54 0 0 1 .43-.59h13.81c.43 0 .64.16.7.43l19.46 54.93c.16.59 0 .86-.53.86Zm18.4-.6c0 .59-.21.85-.69.85H85.49a.75.75 0 0 1-.8-.85V47.89c0-.53.22-.74.7-.74H96c.48 0 .69.26.69.74Zm-1.12-48.2a6.3 6.3 0 0 1-4.85 1.87a6.6 6.6 0 0 1-4.75-1.87a6.87 6.87 0 0 1-1.81-4.91A6.23 6.23 0 0 1 86 31.15a6.8 6.8 0 0 1 4.74-1.87a6.4 6.4 0 0 1 4.86 1.87a6.75 6.75 0 0 1 1.76 4.74a6.76 6.76 0 0 1-1.84 4.91M58.67 65.44H45.12c.8-2.24 1.6-4.75 2.35-7.47s1.65-5.33 2.45-7.89a65 65 0 0 0 1.81-6.88h.11c.37 1.28.75 2.67 1.17 4.16s.91 3.09 1.44 4.75s1 3.25 1.55 4.9s1 3.15 1.44 4.59s.91 2.72 1.23 3.84"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path fill="currentColor" d="M16 0C7.161 0 0 7.161 0 16s7.161 16 16 16s16-7.161 16-16S24.839 0 16 0M9.281 10.24c1.005 0 1.787.733 1.875 1.599c.095.781-.229 1.464-1.093 1.875c-.459.229-.641.229-.735.093c-.047-.093 0-.181.093-.276c.824-.681.824-1.233.729-2.009c-.047-.505-.411-.824-.776-.824c-1.604 0-3.885 3.563-3.568 6.172c.141 1.005.735 2.193 2.011 2.193c.412 0 .871-.136 1.281-.317c.667-.355 1.068-.625 1.464-1.068c-.099-1.183.937-2.729 2.468-2.729c.688 0 1.235.276 1.281.781c.089.683-.505.776-.687.776s-.505-.047-.505-.229c-.041-.183.411-.093.369-.505c-.047-.276-.323-.364-.593-.364c-.964 0-1.511 1.328-1.375 2.145c.047.369.228.735.599.735c.271 0 .683-.412.817-1.005c.093-.412.459-.688.781-.688c.136 0 .224.047.271.229v.183c-.041.183-.183.735-.135.869c0 .095.047.229.228.229c.12 0 .579-.24 1.037-.615c.151-.787.333-1.729.333-1.807c.047-.323.183-.641.823-.641c.14 0 .229.047.276.229v.183l-.183.823c.595-.776 1.464-1.323 2.011-1.323c.229 0 .412.135.412.364c0 .136 0 .365-.095.595c-.181.5-.411 1.281-.547 1.963c0 .183.047.365.276.365s.912-.271 1.459-1.005l.011-.005c0-.089-.011-.177-.011-.265c0-.552.047-1.005.141-1.328c.093-.365.547-.683.823-.683c.135 0 .276.088.276.224c0 .047 0 .14-.047.183c-.183.599-.324 1.145-.324 1.692c0 .323.048.776.141 1.052c0 .047.041.093.088.093c.095 0 .735-.593 1.188-1.375c-.412-.271-.641-.729-.641-1.276c0-.963.6-1.464 1.147-1.464c.459 0 .823.319.823.959c0 .412-.136.871-.364 1.281h.135c.292.011.579-.109.776-.317a.4.4 0 0 1 .183-.156c.448-.568 1.104-.989 1.88-.989c.64 0 1.229.276 1.276.776c.093.687-.505.823-.688.823c-.181 0-.504-.047-.504-.229s.411-.093.369-.5c-.047-.276-.323-.369-.599-.369c-.912 0-1.505 1.187-1.371 2.151c.047.364.229.776.595.776c.276 0 .687-.412.869-1.005c.088-.364.459-.688.776-.688c.14 0 .229.047.276.229c0 .095 0 .276-.183.871c-.229.411-.229.64-.181.823c.041.364.224.64.411.776a1 1 0 0 1 .089.135c0 .095-.048.188-.183.188c-.047 0-.089 0-.136-.047c-.687-.276-.963-.735-1.052-1.193c-.276.323-.593.505-.963.505c-.595 0-1.183-.547-1.276-1.235a2.1 2.1 0 0 1 .099-.864c-.271.172-.563.271-.833.271h-.224c-.599.869-1.24 1.464-1.693 1.735a1.2 1.2 0 0 1-.505.14c-.088 0-.228-.047-.271-.14c-.129-.203-.208-.521-.26-.885c-.641.697-1.527 1.072-1.937 1.072c-.459 0-.729-.276-.776-.733v-.5c.135-1.005.505-1.604.505-1.787a.105.105 0 0 0-.095-.093c-.317 0-1.369 1.099-1.552 1.833l-.14.593c-.089.411-.5.687-.776.687c-.136 0-.229-.047-.271-.228v-.183l.057-.312c-.579.411-1.157.676-1.433.676c-.411 0-.64-.229-.681-.552c-.276.371-.595.552-1.005.552c-.475 0-.932-.323-1.151-.791c-.329.369-.699.739-1.136 1.02c-.64.412-1.369.729-2.24.729c-.776 0-1.463-.412-1.828-.776c-.552-.505-.869-1.281-.916-2.011c-.271-2.239 1.099-5.12 3.197-6.401c.505-.276 1.011-.457 1.511-.457zm13.026 4.391c-.135 0-.228.229-.228.452c0 .371.181.781.411 1.011a2.3 2.3 0 0 0 .141-.781c0-.452-.183-.681-.324-.681z"/>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M10.8 12L6 14.5c0 1.178 0 1.268.352 1.634c.351.366.917.366 2.049.366h4.8c1.132 0 1.698 0 2.05-.366s.351-.456.351-1.634M10.8 12L18 8.25M10.8 12L6 9.5c0-1.179 0-1.268.352-1.634C6.703 7.5 7.269 7.5 8.4 7.5h4.8c1.132 0 1.698 0 2.05.366s.351.455.351 1.634M10.8 12l7.2 3.75"/><path d="M2.498 12c0-4.478 0-6.718 1.391-8.109S7.52 2.5 11.998 2.5s6.717 0 8.109 1.391c1.39 1.391 1.39 3.63 1.39 8.109c0 4.478 0 6.717-1.39 8.109c-1.392 1.39-3.63 1.39-8.11 1.39c-4.478 0-6.717 0-8.108-1.39c-1.391-1.392-1.391-3.63-1.391-8.11"/></g>
              </svg>
              <svg className="h-32 w-32 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm2.382 6.022a3.478 3.478 0 0 1 5.58-2.125l-.008.005L8.82 7.288a.5.5 0 0 0-.25.435l.022 5.106l-1.263-.722V7.625q0-.31.052-.603Zm10.822.019a3.46 3.46 0 0 1 .43 2.241l-.01-.005l-4.133-2.387a.5.5 0 0 0-.502.002l-4.41 2.572l-.007-1.455l3.882-2.241a3.48 3.48 0 0 1 4.75 1.273m-8.62 3.578l.012 2.783l2.417 1.381l2.404-1.402l-.013-2.784l-2.416-1.38zm3.401-1.984l1.257-.733l3.882 2.24a3.478 3.478 0 0 1-.454 6.243v-4.783a.5.5 0 0 0-.252-.434zm3.686 3.257l-1.264-.722l.023 5.106a.5.5 0 0 1-.25.436l-4.133 2.386l-.01.005a3.478 3.478 0 0 0 5.633-2.728zm-2.249 2.644l.006 1.455l-3.881 2.24a3.478 3.478 0 0 1-5.18-3.514l.01.006l4.132 2.387a.5.5 0 0 0 .502-.002zm-4.664 1.562l1.257-.733l-4.433-2.533a.5.5 0 0 1-.252-.434V7.615a3.478 3.478 0 0 0-.454 6.243z" clip-rule="evenodd"/>
              </svg>
            </div>
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
                  <span className="material-symbols-outlined text-sm cursor-pointer">
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
              <Link className="text-sm font-bold text-gray-600 transition-colors hover:text-primary dark:text-gray-400" to="/">
                Home
              </Link>
              <Link className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-400" to="/about">
                About
              </Link>
              <Link className="text-sm font-bold text-gray-600 transition-colors hover:text-primary dark:text-gray-400" to="/contact">
                Contact
              </Link>
            </div>
            <div className="flex gap-4">
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-primary hover:text-white dark:bg-white/5 dark:text-gray-300" href="https://www.instagram.com/jrfrmntr">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0"/><path fill="currentColor" fill-rule="evenodd" d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M17.258 2.833a47.7 47.7 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a46 46 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.8 47.8 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a46 46 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832m-10.35 1.49a46.2 46.2 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.4 44.4 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.2 46.2 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.4 44.4 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516" clip-rule="evenodd"/>
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

