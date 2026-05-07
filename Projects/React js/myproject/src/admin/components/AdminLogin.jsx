import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { LuLock, LuMail, LuShieldCheck } from "react-icons/lu";

function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin_id")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:5000/admin", {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });

      if (res.data.length > 0) {
        const admin = res.data[0];
        localStorage.setItem("admin_id", admin.id);

        Swal.fire({
          title: "Access Granted",
          text: "Welcome to the Jayhind Admin Portal.",
          icon: "success",
          confirmButtonColor: "var(--accent-primary)"
        });
        navigate("/dashboard");
      } else {
        Swal.fire({
          title: "Authentication Failed",
          text: "Please verify your credentials.",
          icon: "error"
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "System Error",
        text: "Could not connect to authentication service.",
        icon: "warning"
      });
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="login-header text-center">
          <div className="login-brand font-display mb-2">
            Jayhind <span>Sweets</span>
          </div>
          <h1 className="login-title font-display">Admin Portal</h1>
          <p className="text-secondary small">Unauthorized access is strictly prohibited.</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form mt-5">
          <div className="form-group-elegant mb-4">
            <label className="label-elegant"><LuMail size={14} className="me-2" /> Email Address</label>
            <input
              type="email"
              name="email"
              className="input-elegant"
              placeholder="admin@jayhindsweets.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-elegant mb-5">
            <label className="label-elegant"><LuLock size={14} className="me-2" /> Password</label>
            <input
              type="password"
              name="password"
              className="input-elegant"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary w-100 py-3">
             <LuShieldCheck size={18} className="me-2" /> Secure Login
          </button>
        </form>

        <div className="login-footer mt-5 text-center">
          <p className="text-tertiary font-display" style={{fontSize: '12px', letterSpacing: '0.1em'}}>
            PRESERVING TRADITION SINCE 1948
          </p>
        </div>
      </div>

      <style>{`
        .admin-login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-surface);
          background-image: radial-gradient(circle at 2px 2px, var(--border-subtle) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .admin-login-card {
          background-color: var(--bg-elevated);
          padding: 64px 48px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-elevated);
          width: 100%;
          max-width: 480px;
        }

        .login-brand {
          font-size: 28px;
          color: var(--accent-primary);
        }

        .login-brand span {
          color: var(--text-primary);
          font-weight: 400;
        }

        .login-title {
          font-size: 32px;
          color: var(--text-primary);
        }

        .form-group-elegant {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .label-elegant {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
        }

        .btn-primary.w-100 {
          justify-content: center;
          font-size: 16px;
          letter-spacing: 0.02em;
        }

        @media (max-width: 640px) {
          .admin-login-card {
             padding: 40px 24px;
             border-radius: 0;
             border: none;
             min-height: 100vh;
             display: flex;
             flex-direction: column;
             justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminLogin;
