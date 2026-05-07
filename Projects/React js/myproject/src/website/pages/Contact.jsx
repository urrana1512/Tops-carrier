import React, { useState } from "react";
import axios from "axios";
import { LuMapPin, LuClock, LuPhone, LuMail, LuSend, LuMessageSquare, LuGlobe, LuBadgeCheck } from "react-icons/lu";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = "http://localhost:5000/contacts";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(API_URL, {
        ...formData,
        date: new Date().toISOString().split("T")[0],
        status: "Unread",
      });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page bg-surface">
      {/* ✅ Minimalist Header */}
      <header className="contact-header py-5 mb-5 text-center bg-main border-bottom">
        <div className="container">
          <span className="text-tertiary uppercase small tracking-widest mb-2 d-block">Inquiry Portal</span>
          <h1 className="font-display">Get In Touch</h1>
          <p className="text-secondary max-w-600 mx-auto mt-3">We welcome your inquiries, feedback, and artisan requests.</p>
        </div>
      </header>

      <section className="container pb-100">
        <div className="row g-5">
          {/* ✅ Contact Form Column */}
          <div className="col-lg-7">
            <div className="card-premium p-5">
              <div className="mb-5">
                <h3 className="card-title-elegant mb-2 d-flex align-items-center">
                  <LuMessageSquare size={20} className="me-2 text-accent" /> Send a Message
                </h3>
                <p className="text-tertiary small">Our concierge team typically responds within 24 hours.</p>
              </div>

              <form className="contact-form-refined" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="label-elegant mb-2">Artisan/User Name</label>
                    <input
                      name="name"
                      className="input-elegant"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="label-elegant mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="input-elegant"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="label-elegant mb-2">Inquiry Subject</label>
                    <input
                      name="subject"
                      className="input-elegant"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="label-elegant mb-2">Detailed Message</label>
                    <textarea
                      name="message"
                      className="input-simple"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your interest or concern..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="mt-5 d-flex align-items-center gap-4">
                  <button type="submit" className="btn-primary px-5 py-3 d-flex align-items-center gap-2" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <><LuSend size={18} /> Send Message</>}
                  </button>
                  
                  {status === "success" && (
                    <span className="text-success small d-flex align-items-center gap-2 slide-in-right">
                       <LuBadgeCheck /> Message preserved successfully.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-danger small d-flex align-items-center gap-2 slide-in-right">
                       Could not reach the repository. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* ✅ Contact Info Column */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4 sticky-top" style={{ top: '40px' }}>
              <div className="card-premium p-5">
                <h4 className="font-display mb-5 fs-5">Visit Our Flagship</h4>
                
                <div className="contact-detail-item d-flex gap-4 mb-5">
                   <div className="icon-vessel"><LuMapPin size={20} /></div>
                   <div>
                      <p className="text-secondary small mb-1 uppercase tracking-widest font-weight-600">Location</p>
                      <p className="text-primary mb-0">34/8, East Heritage Plaza, <br/> Artisan District, Mumbai.</p>
                   </div>
                </div>

                <div className="contact-detail-item d-flex gap-4 mb-5">
                   <div className="icon-vessel"><LuClock size={20} /></div>
                   <div>
                      <p className="text-secondary small mb-1 uppercase tracking-widest font-weight-600">Studio Hours</p>
                      <p className="text-primary mb-0">Mon - Fri: 08:00 — 21:00 <br/> Sat - Sun: 10:00 — 20:00</p>
                   </div>
                </div>

                <div className="contact-detail-item d-flex gap-4">
                   <div className="icon-vessel"><LuPhone size={20} /></div>
                   <div>
                      <p className="text-secondary small mb-1 uppercase tracking-widest font-weight-600">Direct Inquiries</p>
                      <p className="text-primary mb-1">+91 111 222 3333</p>
                      <p className="text-primary mb-0 d-flex align-items-center gap-2"><LuMail size={14} className="text-tertiary" /> support@jayhindsweets.com</p>
                   </div>
                </div>
              </div>

              <div className="card-premium p-4 bg-transparent border-dashed d-flex align-items-center gap-3">
                 <div className="icon-vessel bg-white border"><LuGlobe size={18} /></div>
                 <div>
                    <p className="tiny uppercase text-tertiary font-weight-600 mb-0">International Delivery</p>
                    <p className="tiny text-secondary mb-0">We ship our treasures globally with climate control.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Premium Map Section */}
      <section className="map-portal py-100 bg-main border-top">
         <div className="container text-center mb-5">
            <h3 className="font-display">Find Our Direction</h3>
            <div className="bar-accent mx-auto mt-3"></div>
         </div>
         <div className="map-vessel overflow-hidden card-premium p-0 m-0 rounded-0" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.95)' }}
              allowFullScreen
              title="Jayhind Location"
            />
         </div>
      </section>

      <style>{`
        .icon-vessel { width: 44px; height: 44px; border-radius: 12px; background: var(--bg-surface); color: var(--accent-primary); display: flex; align-items: center; justify-content: center; }
        .border-dashed { border-style: dashed !important; border-width: 1px !important; }
        .input-simple { width: 100%; border: 1px solid var(--border-subtle); background: var(--bg-surface); padding: 12px 16px; border-radius: var(--radius-sm); font-size: 14px; transition: var(--transition-smooth); outline: none; }
        .input-simple:focus { border-color: var(--accent-primary); }
        .bar-accent { width: 40px; height: 2px; background: var(--accent-primary); }
        
        .contact-detail-item { transition: var(--transition-smooth); }
        .contact-detail-item:hover .icon-vessel { background: var(--accent-primary); color: white; transform: scale(1.1); }
      `}</style>
    </div>
  );
}

export default Contact;
