import r23 from '../assets/r23.jpg'

function About() {
  return (
    <main className="mx-auto w-full max-w-[960px] px-4 pb-20 pt-35 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#12363a]/80">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <img className="h-50 w-40 rounded-2xl object-cover md:h-64 md:w-48" src={r23} alt="Romy" />
          <div className="flex-1">
            <h1 className="mb-4 text-5xl font-black text-gray-900 dark:text-white font-bungee">
              Hello, I'm Romy!
            </h1>
            <p className="text-base font-medium text-gray-600 dark:text-gray-300">
              I'm a Graphic Artist with a passion for creating joyful and attractive visuals. 
              I have experience in various editing softwares, and I enjoy working on social media poster, mockup, and illustration projects. 
              In my free time, I like to explore new design trends and techniques.
            </p>
            <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">Software Skills:</p>
            <div className="item-start mt-2 flex gap-2">
              <img className="size-15" src="/photoshop.png" alt="Photoshop" />
              <img className="size-15" src="/illustrator.png" alt="Illustrator" />
              <img className="size-15" src="/canva.png" alt="Canva" />
              <img className="size-15" src="/capcut.png" alt="Capcut" />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">Personal Skills:</p>
            <div className="item-start mt-2 flex gap-2">
              <div className="rounded-xl border border-solid">
                <p className="text-center text-sm m-3 text-gray-600 dark:text-gray-300">Creativity</p>
              </div>
              <div className="rounded-xl border border-solid">
                <p className="text-center text-sm m-3 text-gray-600 dark:text-gray-300">Adaptive</p>
              </div>
              <div className="rounded-xl border border-solid">
                <p className="text-center text-sm m-3 text-gray-600 dark:text-gray-300">Time Management</p>
              </div>
              <div className="rounded-xl border border-solid">
                <p className="text-center text-sm m-3 text-gray-600 dark:text-gray-300">Team Work</p>
              </div>
            </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex-1">
          <h1 className="flex items-center gap-2 pt-8 text-xl font-bold text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-[22px] text-gray-900 dark:text-white">
              school
            </span>
            Educational Background
          </h1>
          <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            Bachelor of Science in Information Technology<br />
            Benedicto College<br />
            2022 - 2026
          </p>
          <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            General Academic Strand - GAS<br />
            Cabancalan National High School<br />
            2020 - 2022
          </p>
          <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            Banilad National High School<br />
            2016 - 2020
          </p>
          <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            Subangdaku Elementary School<br />
            2009 - 2016
          </p>
          </div>
          <div className="flex-1">
            <h1 className="flex items-center gap-2 pt-8 text-xl font-bold text-gray-900 dark:text-white">
            <span className="material-symbols-outlined text-[22px] text-gray-900 dark:text-white">
              work
            </span>
            Experience
          </h1>
          <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            Benedicto College ( College of Computer Studies )<br />
            Graphic Artist<br />
            2022 - 2026
          </p>
          <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            Freelance<br />
            Graphic Artist<br />
            2022 - Present
          </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About
