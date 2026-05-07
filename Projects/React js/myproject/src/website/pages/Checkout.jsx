import React, { useState } from "react";
import { LuShieldCheck, LuUser, LuMapPin, LuCreditCard, LuTruck, LuShoppingBag, LuChevronDown, LuChevronUp, LuInfo, LuPhone, LuMail, LuMessageSquare, LuChevronRight } from "react-icons/lu";

function Checkout() {
  const [activeStep, setActiveStep] = useState(1);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? 0 : step);
  };

  return (
    <div className="checkout-page bg-surface min-vh-100">
      {/* ✅ Hero Header */}
      <section className="checkout-hero py-120 bg-primary text-white text-center position-relative overflow-hidden">
        <div className="hero-pattern"></div>
        <div className="container position-relative z-index-1">
          <div className="tiny uppercase tracking-widest opacity-60 mb-3">Secure Acquisition</div>
          <h1 className="font-display display-4 mb-0">Procurement Finalization</h1>
        </div>
      </section>

      {/* ✅ Main Content */}
      <div className="container py-150">
        <div className="row g-5">
          {/* ✅ Left Column: Step-by-Step Details */}
          <div className="col-lg-8">
            <div className="procurement-steps d-flex flex-column gap-4">
              
              {/* Step 1: Billing */}
              <div className={`card-premium p-0 overflow-hidden slide-in-bottom ${activeStep === 1 ? 'shadow-lg border-accent' : 'opacity-80'}`}>
                <header 
                   className="p-4 bg-surface d-flex justify-content-between align-items-center pointer border-bottom"
                   onClick={() => toggleStep(1)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className={`step-number ${activeStep === 1 ? 'bg-accent text-white' : 'bg-surface border text-tertiary'}`}>01</div>
                    <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                       <LuUser size={20} className={activeStep === 1 ? 'text-accent' : 'text-tertiary'} /> Billing Provenance
                    </h4>
                  </div>
                  {activeStep === 1 ? <LuChevronUp className="text-accent" /> : <LuChevronDown className="text-tertiary" />}
                </header>
                
                {activeStep === 1 && (
                  <div className="p-5 bg-white slide-in-top">
                    <form className="row g-4">
                      <div className="col-md-6">
                        <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuUser size={14} /> Full Name</label>
                        <input type="text" className="input-elegant" placeholder="e.g. Vikram Aditya" />
                      </div>
                      <div className="col-md-6">
                        <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuMail size={14} /> Electronic Mail</label>
                        <input type="email" className="input-elegant" placeholder="e.g. vikram@estate.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuPhone size={14} /> Contact Line</label>
                        <input type="tel" className="input-elegant" placeholder="e.g. +91 98765 43210" />
                      </div>
                      <div className="col-md-6">
                        <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuMapPin size={14} /> Residential Hub</label>
                        <input type="text" className="input-elegant" placeholder="e.g. Mumbai, Maharashtra" />
                      </div>
                      <div className="col-12">
                        <label className="label-elegant mb-2 d-flex align-items-center gap-2 font-weight-600"><LuMessageSquare size={14} /> Special Requests / Narrative</label>
                        <textarea className="input-elegant py-3" rows="4" placeholder="Mention any specific artisanal requirements..."></textarea>
                      </div>
                      <div className="col-12 text-end">
                         <button type="button" className="btn-primary px-5 py-3" onClick={() => setActiveStep(2)}>Proceed to Logistics</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Step 2: Shipping */}
              <div className={`card-premium p-0 overflow-hidden slide-in-bottom ${activeStep === 2 ? 'shadow-lg border-accent' : 'opacity-80'}`}>
                <header 
                   className="p-4 bg-surface d-flex justify-content-between align-items-center pointer border-bottom"
                   onClick={() => toggleStep(2)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className={`step-number ${activeStep === 2 ? 'bg-accent text-white' : 'bg-surface border text-tertiary'}`}>02</div>
                    <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                       <LuTruck size={20} className={activeStep === 2 ? 'text-accent' : 'text-tertiary'} /> Logistic Logistics
                    </h4>
                  </div>
                  {activeStep === 2 ? <LuChevronUp className="text-accent" /> : <LuChevronDown className="text-tertiary" />}
                </header>
                
                {activeStep === 2 && (
                  <div className="p-5 bg-white slide-in-top">
                    <p className="text-secondary small italic mb-4">"Our white-glove logistics network ensures your artisanal selection arrives in pristine condition."</p>
                    <div className="shipping-option p-4 border rounded bg-surface border-accent mb-4 d-flex justify-content-between align-items-center">
                       <div className="d-flex align-items-center gap-3">
                          <LuShieldCheck className="text-accent" size={24} />
                          <div>
                             <span className="font-weight-600 text-primary d-block">Premium Estate Delivery</span>
                             <span className="tiny text-tertiary uppercase">2-3 Business Days • Tracked & Insured</span>
                          </div>
                       </div>
                       <span className="font-weight-600 text-primary">₹50.00</span>
                    </div>
                    <div className="text-end">
                       <button type="button" className="btn-primary px-5 py-3" onClick={() => setActiveStep(3)}>Proceed to Settlement</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Payment */}
              <div className={`card-premium p-0 overflow-hidden slide-in-bottom ${activeStep === 3 ? 'shadow-lg border-accent' : 'opacity-80'}`}>
                <header 
                   className="p-4 bg-surface d-flex justify-content-between align-items-center pointer border-bottom"
                   onClick={() => toggleStep(3)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className={`step-number ${activeStep === 3 ? 'bg-accent text-white' : 'bg-surface border text-tertiary'}`}>03</div>
                    <h4 className="card-title-elegant mb-0 d-flex align-items-center gap-2">
                       <LuCreditCard size={20} className={activeStep === 3 ? 'text-accent' : 'text-tertiary'} /> Financial Settlement
                    </h4>
                  </div>
                  {activeStep === 3 ? <LuChevronUp className="text-accent" /> : <LuChevronDown className="text-tertiary" />}
                </header>
                
                {activeStep === 3 && (
                  <div className="p-5 bg-white slide-in-top">
                    <div className="d-flex flex-column gap-3 mb-5">
                       <div className="payment-method p-4 border rounded pointer hover-border-accent transition-smooth d-flex align-items-center gap-3">
                          <div className="rounded-circle border p-1"><div className="bg-accent rounded-circle" style={{ width: '10px', height: '10px' }}></div></div>
                          <LuCreditCard size={20} className="text-accent" />
                          <span className="font-weight-600 text-primary">Credit / Debit Instrument</span>
                       </div>
                       <div className="payment-method p-4 border rounded pointer opacity-50 d-flex align-items-center gap-3">
                          <div className="rounded-circle border p-1" style={{ width: '20px', height: '20px' }}></div>
                          <LuInfo size={20} className="text-tertiary" />
                          <span className="font-weight-600 text-tertiary">Digital UPI (Temporarily Unavailable)</span>
                       </div>
                    </div>
                    <div className="text-end">
                       <button type="button" className="btn-primary px-5 py-3 d-flex align-items-center gap-2 ms-auto">
                          <LuShieldCheck size={18} /> Finalize Settlement
                       </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* ✅ Right Column: Order Composition Summary */}
          <div className="col-lg-4">
            <div className="card-premium p-0 overflow-hidden slide-in-bottom shadow-lg sticky-top" style={{ top: '120px' }}>
              <header className="p-4 bg-surface border-bottom text-center">
                 <h5 className="tiny uppercase tracking-widest mb-0 d-flex align-items-center justify-content-center gap-2">
                    <LuShoppingBag size={18} className="text-accent" /> Order Composition
                 </h5>
              </header>
              
              <div className="p-4">
                <table className="table table-borderless mb-0">
                  <tbody className="small">
                    <tr className="border-bottom">
                      <td className="py-3 text-secondary">Artisanal Saffron Pearl (1kg)</td>
                      <td className="py-3 text-end text-primary font-weight-600">₹850.00</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 text-secondary">Luxury Dryfruit Assemblage</td>
                      <td className="py-3 text-end text-primary font-weight-600">₹700.00</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 text-secondary">Traditional Cashew Crescents</td>
                      <td className="py-3 text-end text-primary font-weight-600">₹350.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-surface border-top">
                <div className="d-flex justify-content-between mb-2">
                   <span className="tiny uppercase text-tertiary">Sub-total</span>
                   <span className="small text-primary">₹1,900.00</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                   <span className="tiny uppercase text-tertiary">Logistics</span>
                   <span className="small text-primary">₹50.00</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                   <span className="font-display uppercase tracking-widest text-primary">Grand Total</span>
                   <span className="fs-4 font-weight-700 text-accent">₹1,950.00</span>
                </div>
              </div>
              
              <footer className="p-4 bg-white border-top">
                 <button className="btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                    Execute Secure Order <LuChevronRight size={16} />
                 </button>
              </footer>
            </div>
            <p className="text-center tiny text-tertiary uppercase tracking-widest mt-4">
               Securely processed by Jayhind Estate Network
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .hero-pattern { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: radial-gradient(white 1px, transparent 1px); background-size: 40px 40px; opacity: 0.1; }
        .step-number { width: 40px; height: 40px; border-radius: 50%; display: flex; alignItems: center; justify-content: center; font-family: var(--font-mono); font-weight: 700; font-size: 14px; }
        .pointer { cursor: pointer; }
        .hover-border-accent:hover { border-color: var(--accent-primary) !important; }
        .transition-smooth { transition: all 0.3s ease; }
        .z-index-1 { z-index: 1; }
        
        @media (max-width: 991px) {
           .checkout-hero { padding: 80px 0; }
        }
      `}</style>
    </div>
  );
}

export default Checkout;
