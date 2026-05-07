import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  // ✅ Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ File Change → Store Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Signup Handler
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setMessage("⚠ Please Fill All Fields");
      hideMessage();
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("⚠ Passwords Do Not Match");
      hideMessage();
      return;
    }

    try {
      // ✅ Check If Email Already Exists
      const existingUser = await axios.get(
        `http://localhost:5000/customers?email=${formData.email}`
      );

      if (existingUser.data.length > 0) {
        setMessage("⚠ Email Already Registered. Please Log In.");
        hideMessage();
        return;
      }

      // ✅ Proceed To Signup
      await axios.post("http://localhost:5000/customers", {
        id: Date.now(),
        name: formData.name,
        image:
          formData.image ||
          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        email: formData.email,
        password: formData.password,
        status: "Active",
      });

      setMessage("✅ Signup Successful! You Can Now Log In.");
      setFormData({
        name: "",
        image: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      hideMessage();
    } catch (error) {
      console.error("Signup Error:", error);
      setMessage("❌ Failed To Signup. Try Again.");
      hideMessage();
    }
  };

  // ✅ Auto-Hide Message After 2s
  const hideMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>We Sale Fresh Sweets</p>
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Section */}
      <div className="container pt-100 pb-100">
        <div className="signup-page">
          {/* Left Side */}
          <div className="signup-left">
            <div className="signup-left-overlay">
              <h2>Welcome To Jayhind Sweets</h2>
              <p>Get Fresh Sweets Delivered At Your Doorstep!</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="signup-right animate-slide">
            <div className="signup-container">
              <h2 className="signup-title">Create Your Account</h2>
              <p className="signup-subtitle">
                Join Us And Enjoy Fresh & Organic Sweets
              </p>

              <form className="signup-form" onSubmit={handleSignup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                {/* ✅ Success / Error */}
                {message && (
                  <p className="text-center mt-2 fw-bold">{message}</p>
                )}

                <button type="submit">Sign Up</button>

                <p className="signup-login">
                  Already Have An Account? <a href="/login">Log In</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
