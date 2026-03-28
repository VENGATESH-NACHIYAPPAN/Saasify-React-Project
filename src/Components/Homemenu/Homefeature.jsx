import React from 'react'
import './Home.css';
export default function Homefeature() {
  return (
    
<section className='feature'>
    <div className='fea-content'>
      <h5>Features</h5>
      <h1>Everything you need to ship faster</h1>
      <p>Powerful tools designed to streamline your workflow and boost team  productivity.</p>
    </div>


    <div className='grid-container'>
          <div className='grid'>
            <i class="bi bi-lightning-fill"></i>
             <h3>Workflow Automation</h3>
             <p>Automate repetitive tasks and focus on  what matters. set up triggers, actions, and conditions without code.</p>
          </div>

          <div className='grid'>
           <i class="bi bi-people"></i>
             <h3>Real-time Collaboration</h3>
             <p>Work together seamlessly with live cursors, comments, and instant sync across all devices.</p>
          </div>

          <div className='grid'>
            <i class="bi bi-bar-chart"></i>
             <h3>Advanced Analytics</h3>
             <p>Get deep insights into your team's performance with customizable dashboards and reports.</p>
          </div>
          <div className='grid'>
            <i class="bi bi-shield-check"></i>
             <h3>Enterprise Security</h3>
             <p>Bank-grade encryption, SSO, audit logs, and compliance certifications for peace of mind.</p>
          </div>

          <div className='grid'>
      <i class="bi bi-puzzle"></i>
             <h3>API & Integrations</h3>
             <p>Connect with 50+ tools you already use. REST API and webhooks for custom integrations.</p>
          </div>

          <div className='grid'>
           <i class="bi bi-gear-wide-connected"></i>
             <h3>24/7 Support</h3>
             <p>Get help when you need it with out dedicated support team and comprehensive documentation.</p>
          </div>
    

    </div>
</section>
  )
}
