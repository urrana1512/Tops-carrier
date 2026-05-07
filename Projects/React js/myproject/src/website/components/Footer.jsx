import React from "react";
import { NavLink } from "react-router-dom";
import { LuFacebook, LuTwitter, LuInstagram, LuLinkedin, LuSend } from "react-icons/lu";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-minimal">
        <div className="footer-grid">
          <div className="footer-column about">
            <h4 className="font-display">Jayhind Sweets</h4>
            <p className="text-secondary">
              Hand-crafted Indian delicacies since 1948. We preserve the art of traditional sweet-making with the finest natural ingredients and slow-process techniques.
            </p>
          </div>
          
          <div className="footer-column links">
            <h5 className="column-title">Experience</h5>
            <ul className="footer-links">
              <li><NavLink to="/">Our Story</NavLink></li>
              <li><NavLink to="/traditional-sweets">Traditional Collection</NavLink></li>
              <li><NavLink to="/about">Process & Purity</NavLink></li>
              <li><NavLink to="/contact">Visit Our Stores</NavLink></li>
            </ul>
          </div>

          <div className="footer-column contact">
            <h5 className="column-title">Connect</h5>
            <ul className="footer-contact-info">
              <li className="text-secondary">Ahmedabad, Gujarat, India</li>
              <li className="text-secondary">care@jayhindsweets.com</li>
              <li className="text-secondary">+91 79 2642 1234</li>
            </ul>
          </div>

          <div className="footer-column newsletter">
            <h5 className="column-title">Journal</h5>
            <p className="text-tertiary mb-3">Subscribe for limited seasonal releases and artisan insights.</p>
            <form className="footer-newsletter-form">
              <input type="email" placeholder="Email Address" className="newsletter-input" />
              <button type="submit" className="newsletter-submit"><LuSend size={18} /></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright text-tertiary">
            &copy; 2025 Jayhind Sweets. All Rights Reserved.
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><LuFacebook size={18} /></a>
            <a href="#" aria-label="Twitter"><LuTwitter size={18} /></a>
            <a href="#" aria-label="Instagram"><LuInstagram size={18} /></a>
            <a href="#" aria-label="LinkedIn"><LuLinkedin size={18} /></a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          padding-top: var(--space-2xl);
          padding-bottom: var(--space-lg);
          margin-top: var(--space-2xl);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: var(--space-2xl);
          padding-bottom: var(--space-2xl);
          border-bottom: 1px solid var(--border-subtle);
        }

        .footer-column h4 {
          font-size: 24px;
          margin-bottom: var(--space-md);
          color: var(--accent-primary);
        }

        .column-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
        }

        .footer-links li {
          margin-bottom: var(--space-sm);
        }

        .footer-links a {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }

        .footer-contact-info li {
          font-size: 14px;
          margin-bottom: var(--space-sm);
        }

        .newsletter-input {
          width: 100%;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          color: var(--text-primary);
          font-family: inherit;
        }

        .footer-newsletter-form {
          position: relative;
        }

        .newsletter-submit {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--accent-primary);
          cursor: pointer;
          display: flex;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-lg);
        }

        .footer-copyright {
          font-size: 12px;
        }

        .footer-social {
          display: flex;
          gap: 20px;
        }

        .footer-social a {
          color: var(--text-tertiary);
          transition: var(--transition-smooth);
        }

        .footer-social a:hover {
          color: var(--accent-primary);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          .footer-bottom {
            flex-direction: column;
            gap: var(--space-md);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
