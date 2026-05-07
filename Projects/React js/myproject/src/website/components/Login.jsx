import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Handle Input Change
  const changeHandel = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle Submit
  const hideMessage = () => {
    setTimeout(() => {
      setError("");
    }, 2000);
  };
  const submitHandel = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.get(
        `http://localhost:5000/customers?email=${formData.email}`,
      );

      if (res.data.length > 0) {
        const user = res.data[0];
        if (formData.password === user.password) {
          if (user.status === "Active") {
            // ✅ Store Session
            localStorage.setItem("customer_id", user.id);
            console.log(
              "Logged in user ID:",
              localStorage.getItem("customer_id"),
            );
            localStorage.setItem("customer_name", user.name);
            localStorage.setItem("customer_image", res.data[0].image || "");
            swal(
              "✅ Login Successful!",
              "Welcome back to your account.",
              "success",
            );
            navigate("/"); // Redirect To Homepage
          } else {
            setError("❌ Account Blocked");
            hideMessage();
          }
        } else {
          setError("❌ Invalid Password");
          hideMessage();
        }
      } else {
        setError("❌ Email Not Found");
        hideMessage();
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("❌ Something Went Wrong, Please Try Again");
      hideMessage();
    } finally {
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Welcome Back To Jayhind Sweets</p>
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* login section */}
      <div className="container pt-100 pb-100">
        <div className="signup-page">
          {/* ✅ LEFT SIDE IMAGE */}
          <div className="signup-left">
            <div className="signup-left-overlay">
              <h2>Welcome Back!</h2>
              <p>Log In To Continue Your Sweet Journey</p>
            </div>
          </div>

          {/* ✅ RIGHT SIDE LOGIN FORM */}
          <div className="signup-right animate-slide">
            <div className="signup-container">
              <h2 className="signup-title">Login To Your Account</h2>
              <p className="signup-subtitle">
                Access Exclusive Deals & Freshly Made Sweets
              </p>

              {/* ✅ Social Login Buttons */}
              <div className="social-signup">
                <button className="google-btn">
                  <i className="fab fa-google"></i> Login With Google
                </button>
                <button className="facebook-btn">
                  <i className="fab fa-facebook-f"></i> Login With Facebook
                </button>
              </div>

              <div className="divider">
                <span>OR</span>
              </div>

              {/* ✅ Normal Login Form */}
              <form className="signup-form" onSubmit={submitHandel}>
                {error && <p className="text-danger">{error}</p>}

                <input
                  type="email"
                  name="email"
                  onChange={changeHandel}
                  value={formData.email}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={changeHandel}
                  value={formData.password}
                  placeholder="Password"
                  required
                />
                <button type="submit" id="form-submit">
                  Login
                </button>
                <p className="signup-login">
                  Don’t Have An Account? <Link to="/signup">Sign Up</Link>
                </p>
                <p className="signup-login">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
