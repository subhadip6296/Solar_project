import React from 'react'

const Videoo = () => {
  return (
    <div>

      <div className="relative overflow-hidden bg-gradient-to-r from-sky-200 to-blue-400">
        <video
          className="max-w-5xl mx-auto w-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={'/assets/Videos/evoltrivt.mp4'} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Videoo
