import r23 from '../assets/r23.jpg'

function About() {

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#12363a]/80">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <img className="h-50 w-40 rounded-2xl object-cover md:h-64 md:w-48" src={r23} alt="Romy" />
          <div className="flex-1">
            <h1 className="mb-4 text-3xl font-black text-gray-900 dark:text-white">
              About Me
            </h1>
            <p className="text-base font-medium text-gray-600 dark:text-gray-300">
              Hello i'm Romy, a Graphic Artist with a passion for creating joyful and attractive visuals. 
              I have experience in various editing softwares, and I enjoy working on social media poster, mockup, and illustration projects. 
              In my free time, I like to explore new design trends and techniques.
            </p>
            <p className="pt-2 text-sm font-medium text-gray-600 dark:text-gray-300">Software Used:</p>
            <div className="item-start mt-2 flex gap-2">
              <img className="size-15" src="/photoshop.png" alt="Photoshop" />
              <img className="size-15" src="/illustrator.png" alt="Illustrator" />
              <img className="size-15" src="/canva.png" alt="Canva" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About
