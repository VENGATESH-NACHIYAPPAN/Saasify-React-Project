import React from 'react'
import './Home.css';
export default function Testiesection() {
  return (
    <section className='testie'>
      <div className="testie-content">
        <h5>Testimonial</h5>
        <h1>Loved by teams worldwide</h1>
        <p>See what our customers have to say about their experience.</p>
      </div>


     

      
    <div className='boxes'>

      <div className="testie-grid">
        <div className='ic'>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
         </div>
        <p>"SaaSify has transformed how our team workds. We've cut our deployment time by 60% and haven't looked back."</p>
        <div className='in-flex'>
             <h2>S</h2>
             <div>
              <h3>Sarah Chen</h3>
              <p className='job'>CTO, TechFlow </p>
             </div>
        </div>
      </div>


       <div className="testie-grid">
        <div className='ic'>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
         </div>
        <p>"Best-in-class support and a product that actually delivers on its promises. Highly recommended."</p>
        <div className='in-flex'>
             <h2>E</h2>
             <div>
              <h3>Emily Rodriguez</h3>
              <p className='job'>Product Manager, CloudBase </p>
             </div>
        </div>
      </div>


       <div className="testie-grid">
        <div className='ic'>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
         </div>
        <p>"The automation features alone saved us 20+ hours per week. The ROI was evident within the first month."</p>
        <div className='in-flex'>
             <h2>M</h2>
             <div>
              <h3>Marcus Johnson</h3>
              <p className='job'>Head of Engineering, DataSync </p>
             </div>
        </div>
      </div>

    </div>  
    </section>
  )
}
