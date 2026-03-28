
import React, { useState } from "react";
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    else if (formData.firstName.trim().length < 2)
      newErrors.firstName = "Must be at least 2 characters.";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    else if (formData.lastName.trim().length < 2)
      newErrors.lastName = "Must be at least 2 characters.";

    if (!formData.email.trim())
      newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.subject || formData.subject === '')
      newErrors.subject = "Please select a topic.";

    if (!formData.message.trim())
      newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ All valid — handle submission here
    setSubmitted(true);
    setErrors({});
  };

  const handleReset = () => {
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="Con-section">

      <div className="Con-content">
        <h1>Get in Touch</h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as <br />soon as possible.</p>
      </div>

      <div className="flex-section">

        <div className="left-section">
          <h3>Contact Information</h3>
          <p>Fill out the form and our team will get back to you within 24 hours.</p>

          <div className="inner-flex">
            <i className="bi bi-envelope"></i>
            <div className="in-con">
              <h2>Email</h2>
              <p>hello@saasify.com</p>
              <p>support@saasify.com</p>
            </div>
          </div>

          <div className="inner-flex">
            <i className="bi bi-telephone"></i>
            <div className="in-con">
              <h2>Contact</h2>
              <p>+91 6369771647</p>
              <p>Mon-Fri 9am-6pm</p>
            </div>
          </div>

          <div className="inner-flex">
            <i className="bi bi-geo-alt"></i>
            <div className="in-con">
              <h2>Office</h2>
              <p>123 Innovation Drive</p>
              <p>India, CA 94107</p>
            </div>
          </div>

          <div className="additional-icon">
            <h2>Follow Us</h2>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-github"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>

        <div className="right-section">

          {/* ✅ Success Message */}
          {submitted ? (
            <div className="success-box">
              <i className="bi bi-check-circle-fill"></i>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button className="submit-btn" onClick={handleReset}>Send Another Message</button>
            </div>
          ) : (
            <>
              <h3>Send us a Message</h3>

              <div className="input">
                <label>First Name</label>
                <div className={`inputbox ${errors.firstName ? 'error-border' : ''}`}>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                  />
                </div>
                {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
              </div>

              <div className="input">
                <label>Last Name</label>
                <div className={`inputbox ${errors.lastName ? 'error-border' : ''}`}>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </div>
                {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
              </div>

              <div className="input">
                <label>Email</label>
                <div className={`inputbox ${errors.email ? 'error-border' : ''}`}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="input">
                <label>Subject</label>
                <div className={`inputbox ${errors.subject ? 'error-border' : ''}`}>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">Select a topic</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className="input">
                <label>Message</label>
                <div className={`inputbox ${errors.message ? 'error-border' : ''}`}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    cols="30"
                    rows="7"
                    placeholder="Write your message here..."
                  />
                </div>
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <div className="input">
                <button className="submit-btn" type="submit" onClick={handleSubmit}>
                  Send Message &nbsp;<i className="bi bi-send-fill"></i>
                </button>
              </div>
            </>
          )}

        </div>
      </div>

    </section>
  );
}