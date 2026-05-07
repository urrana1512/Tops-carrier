import React, { useState } from "react";
import axios from "axios";
import { LuMessageSquare, LuStar, LuSend, LuUser, LuMail, LuSparkles, LuCircleCheck, LuCircleX, LuCamera, LuChevronRight, LuInfo } from "react-icons/lu";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    profilePhoto: "",
    email: "",
    rating: "5",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const API_URL = "http://localhost:5000/feedbacks";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewPhoto(url);
      setFormData(prev => ({ ...prev, profilePhoto: url }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.rating ||
      !formData.profilePhoto
    ) {
      setError("Please ensure all fields of the perspective are completed.");
      return;
    }

    const newFeedback = {
      ...formData,
      rating: parseInt(formData.rating),
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
    };

    try {
      await axios.post(API_URL, newFeedback);
      setSuccess("Your perspective has been consigned to our archives. We thank you.");
      setError("");
      setFormData({
        name: "",
        email: "",
        rating: "5",
        message: "",
        profilePhoto: "",
      });
      setPreviewPhoto(null);
    } catch (err) {
      setError("The archives are temporarily unreachable. Please attempt your submission later.");
      setSuccess("");
    }
  };

  return (
    <div className="feedback-page bg-surface min-vh-100">
      {/* ✅ Hero Header */}
      <section className="feedback-hero py-120 bg-primary text-white text-center position-relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="container position-relative z-index-1">
          <div className="tiny uppercase tracking-widest opacity-60 mb-3 d-flex align-items-center justify-content-center gap-2">
             <LuSparkles size={14} className="text-accent" /> Voices of Distinction
          </div>
          <h1 className="font-display display-3 mb-4">Patron's Perspective</h1>
          <p className="lead opacity-80 mx-auto" style={{ maxWidth: '600px' }}>
            We invite you to share your experience within the Jayhind estate. Your insights guide our pursuit of artisanal excellence.
          </p>
        </div>
      </section>

      {/* ✅ Feedback Form Section */}
      <div className="container py-150">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-lg border">
              <header className="p-4 bg-surface border-bottom d-flex justify-content-between align-items-center">
                 <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                    <LuMessageSquare size={20} className="text-accent" /> Appreciation Form
                 </h4>
                 <div className="tiny uppercase tracking-widest text-tertiary">Estate Archive • 2026</div>
              </header>

              <div className="p-5 bg-white">
                {success && (
                  <div className="alert-elegant alert-success-custom mb-5 d-flex align-items-center gap-3 slide-in-bottom">
                     <LuCircleCheck size={20} className="text-success" />
                     <span className="small">{success}</span>
                  </div>
                )}
                {error && (
                  <div className="alert-elegant alert-danger-custom mb-5 d-flex align-items-center gap-3 slide-in-bottom">
                     <LuCircleX size={20} className="text-danger" />
                     <span className="small">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="row g-4">
                  {/* Portrait Assembly */}
                  <div className="col-12 text-center mb-4">
                     <div className="portrait-upload-vessel mx-auto position-relative" style={{ width: '120px', height: '120px' }}>
                        <div className="portrait-circle overflow-hidden rounded-circle border bg-surface d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                           {previewPhoto ? (
                              <img src={previewPhoto} alt="Preview" className="img-fluid h-100 w-100 object-fit-cover" />
                           ) : (
                              <LuUser size={48} className="text-tertiary opacity-20" />
                           )}
                        </div>
                        <label htmlFor="portrait-input" className="btn-camera-upload position-absolute bottom-0 end-0 bg-accent text-white p-2 rounded-circle shadow-sm pointer hover-scale transition-smooth border-0">
                           <LuCamera size={18} />
                           <input type="file" id="portrait-input" hidden accept="image/*" onChange={handlePhotoChange} />
                        </label>
                     </div>
                     <p className="tiny uppercase tracking-widest text-tertiary mt-3 font-weight-600">Patron Portrait</p>
                  </div>

                  <div className="col-md-6">
                    <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuUser size={14} /> Full Name <span className="text-danger small">*</span></label>
                    <input
                      type="text"
                      name="name"
                      className="input-elegant"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aditya Vardhan"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuMail size={14} /> Official Email <span className="text-danger small">*</span></label>
                    <input
                      type="email"
                      name="email"
                      className="input-elegant"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. aditya@estate.com"
                    />
                  </div>

                  <div className="col-12">
                    <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuStar size={14} /> Satisfaction Index <span className="text-danger small">*</span></label>
                    <div className="rating-selector-premium d-flex gap-2">
                       {[5, 4, 3, 2, 1].map((r) => (
                         <div key={r} className="flex-grow-1">
                            <input 
                               type="radio" 
                               id={`rating-${r}`} 
                               name="rating" 
                               value={r} 
                               className="btn-check" 
                               checked={formData.rating === r.toString()}
                               onChange={handleChange}
                            />
                            <label className="btn-rating-pill w-100 text-center py-3 rounded border pointer transition-smooth" htmlFor={`rating-${r}`}>
                               <div className="small font-weight-700">{r}</div>
                               <div className="tiny uppercase opacity-60 letter-spacing-1">{r === 5 ? "Exquisite" : r === 1 ? "Inadequate" : ""}</div>
                            </label>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuMessageSquare size={14} /> Perspective Narrative <span className="text-danger small">*</span></label>
                    <textarea
                      name="message"
                      rows="6"
                      className="input-elegant py-3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Indite your experience within our halls..."
                    ></textarea>
                  </div>

                  <div className="col-12 pt-4">
                    <button type="submit" className="btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2 fs-5">
                      <LuSend size={20} /> Consign Perspective
                    </button>
                    <p className="tiny text-center text-tertiary uppercase tracking-widest mt-4 d-flex align-items-center justify-content-center gap-2">
                       <LuInfo size={12} /> Privacy assured by the estate trust
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-pattern { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: radial-gradient(white 1px, transparent 1px); background-size: 40px 40px; opacity: 0.1; }
        .z-index-1 { z-index: 1; }
        .pointer { cursor: pointer; }
        
        .btn-rating-pill { border-color: var(--border-subtle); background: var(--bg-surface); color: var(--text-tertiary); }
        .btn-check:checked + .btn-rating-pill { background: var(--accent-primary); border-color: var(--accent-primary); color: white; transform: translateY(-3px); box-shadow: 0 4px 15px rgba(192, 98, 42, 0.2); }
        
        .alert-elegant { padding: 20px; border-radius: 12px; border: 1px solid; }
        .alert-success-custom { background: rgba(25, 135, 84, 0.05); border-color: rgba(25, 135, 84, 0.2); color: #155724; }
        .alert-danger-custom { background: rgba(220, 53, 69, 0.05); border-color: rgba(220, 53, 69, 0.2); color: #721c24; }

        .btn-camera-upload:hover { transform: scale(1.1); }
        
        @media (max-width: 768px) {
           .feedback-hero { padding: 80px 0; }
           .display-3 { font-size: 2.5rem; }
           .rating-selector-premium { flex-wrap: wrap; }
           .rating-selector-premium > div { flex-basis: calc(33.33% - 10px); }
        }
      `}</style>
    </div>
  );
}

export default Feedback;
