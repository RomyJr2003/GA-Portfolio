import React from 'react'
import './preloading.css'

function PreLoading() {
  return (
    <main className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-8 px-4 pb-20 pt-[35px] sm:px-6 lg:px-8">
      <img
        className="h-[280px] w-[380px] md:h-[280px] md:w-[380px]"
        src="/white.png"
        alt="r23"
      />
      <div className="mt-[15px]">
        <div className="loading-bar-container mt-[35px]">
          <div className="loading-bar-progress"></div>
        </div>
        <p className="loading-text text-center">Preparing your eyes...</p>
      </div>
    </main>
  )
}

export default PreLoading
