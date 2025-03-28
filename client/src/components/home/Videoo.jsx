import React from 'react'

const Videoo = () => {
  return (
    <div>

      <div className="relative  overflow-hidden">
        <video
          className="max-w-5xl mx-auto w-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={'/Videos/evoltrivt.mp4'} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Videoo
