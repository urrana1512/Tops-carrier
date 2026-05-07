import React from "react";

function Adminfooter() {
  return (
    <footer className="admin-footer-refined py-4 mt-auto border-top bg-surface">
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
             <div className="tiny uppercase tracking-widest text-tertiary">
                © {new Date().getFullYear()} <span className="font-weight-700 text-primary">Jayhind Estate</span> • Artisanal Governance
             </div>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <div className="admin-footer-links-minimal d-flex gap-4 justify-content-center justify-content-md-end">
              <a href="/admin/privacy" className="tiny uppercase tracking-widest text-tertiary hover-text-accent transition-smooth text-decoration-none">Privacy Directive</a>
              <a href="/admin/terms" className="tiny uppercase tracking-widest text-tertiary hover-text-accent transition-smooth text-decoration-none">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .admin-footer-refined {
           font-family: var(--font-secondary);
           border-top: 1px solid var(--border-subtle);
        }
        .admin-footer-links-minimal a {
           letter-spacing: 2px;
        }
      `}</style>
    </footer>
  );
}

export default Adminfooter;
