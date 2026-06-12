// Contact page - Contact form and information
// Demonstrates: form handling, state management, email validation

import { useState } from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.subject && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <main className="page contact-page">
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Send us a message!"
      />

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-item">
              <h3>📍 Address</h3>
              <p>EuroShop Headquarters<br />123 Commerce Street<br />Berlin, Germany 10115</p>
            </div>

            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+49 30 1234 5678<br />Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>

            <div className="info-item">
              <h3>✉️ Email</h3>
              <p>support@euroshop.de<br />sales@euroshop.de<br />info@euroshop.de</p>
            </div>

            <div className="info-item">
              <h3>🌐 Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>

            {submitted && (
              <div className="success-message">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="form contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <Button text="Send Message" onClick={handleSubmit} style="btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

