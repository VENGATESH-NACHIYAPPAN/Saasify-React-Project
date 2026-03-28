import React from 'react';
import './Home.css';

export default function Herosection() {
  return (
    <section className='Herosection'>
     <div className='hero-content'>
          <h5>Now with AI-powered automation</h5>
          <h1>Build better products,</h1>
          <h1 className='in-h'>faster than ever</h1>
          <p>The all-in-one platform that helps teams ship quality software. <br></br>Automate workflows, collaborate seamlessly, and scale with <br></br>confidence.</p>

          <div className='hero-btn'>
             <button className='btn1'>Start free trial</button>
             <button className='btn2'>Watch demo</button>
          </div>
     </div>
    </section>
  )
}
