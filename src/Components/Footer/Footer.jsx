import React from 'react'
import './Footer.css';
import logo  from '../../Assets/logo.jpeg'


export default function Footer() {
  return (
   <footer>
 
     <div className='sa-footer'>
       <img src={logo} alt="logo" />
       <p>The modern platform for scaling your business</p>
       <div className='socialicon'>
        <i class="bi bi-twitter-x"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-linkedin"></i>
       </div>
     </div>

     <div className='footerlinks'>
           <h3>PRODUCT</h3>
           <a href="">Features</a>
            <a href="">Pricing</a>
             <a href="">Integrations</a>
              <a href="">Changelog</a>
     </div>

   <div className='footerlinks'>
           <h3>COMPANY</h3>
           <a href="">About</a>
            <a href="">Blog</a>
             <a href="">Careers</a>
              <a href="">Contact</a>
     </div>

     <div className='footerlinks last'>
           <h3>LEGAL</h3>
           <a href="">Privacy</a>
            <a href="">Terms</a>
             <a href="" className='secure'>Security</a>
              
     </div>


    <div className='formfooter'>
      <h3>STAY UPDATED</h3>
      <p>Get the latest news and updates delivered to your inbox.</p>
      <form action="">
         <input type="email" name="" id="" placeholder='Enter your email' />
         <button>Subscribe</button>
      </form>
    </div>

  
     
   </footer>
  )
}
