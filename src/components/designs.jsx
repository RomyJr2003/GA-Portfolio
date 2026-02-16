import { useEffect, useState } from 'react'

function Designs() {
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

  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-grow flex-col items-center px-4 pb-20 pt-24 sm:px-6 sm:pt-10 lg:px-8">
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

      {/* Projects */}
      <section className="relative w-full max-w-[960px] py-10">
          <div className="mb-10 flex items-end justify-between px-4 pt-20">
            <div>
              <h2 className="mb-2 flex items-center gap-2 text-3xl font-bold">
                <span className="material-symbols-outlined text-primary">
                  bubble_chart
                </span>
                Recent Works
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Not everything needs a client. My laboratory is where i break rules,<br></br>
                test new render engines, and explore the weird side of digital art.
              </p>
            </div>
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
      </main>
    );
}

export default Designs;