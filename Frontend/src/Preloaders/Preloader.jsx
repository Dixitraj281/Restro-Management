import React from 'react'
import '../Preloaders/preloader.scss'
const Preloader = () => {
    const bubbles = [];
  for (let i = 0; i < 5; i++) {
    bubbles.push(<div key={i} className="bubble" />);
  }
  return (
   <>
    <div className='preload-body'>
    
      <h1 className='preload-title'>Welcome Foodies...</h1>
      <div id="cooking">
        {/* Render bubble elements */}
        {bubbles}
        <div id="area">
          <div id="sides">
            <div id="pan" />
            <div id="handle" />
          </div>
          <div id="pancake">
            <div id="pastry" />
          </div>
        </div>
      </div>
      </div>
    
   </>
  )
}

export default Preloader
