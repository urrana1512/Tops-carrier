import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* Page Content */}
      {/* Banner Starts Here */}
      <div className="heading-page header-text">
        <section className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-content">
                  <h4>Log in</h4>
                  <h2>let’s Interact With Us!</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Banner Ends Here */}
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>

            <div className="col-lg-6">
              <div className="down-contact">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sidebar-item contact-form">
                      <div className="sidebar-heading">
                        <h2>Log In</h2>
                      </div>
                      <div className="content">
                        <form id="contact" action method="post">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <fieldset>
                                <input
                                  name="name"
                                  type="text"
                                  id="name"
                                  placeholder="Your name"
                                  required
                                />
                              </fieldset>
                            </div>

                            <div className="col-md-12 col-sm-12">
                              <fieldset>
                                <input
                                  name="password"
                                  type="password"
                                  id="password"
                                  placeholder="Password"
                                />
                              </fieldset>
                            </div>

                            <div className="col-lg-12 ">
                              <fieldset>
                                <button
                                  type="submit"
                                  id="form-submit"
                                  className="main-button w-100"
                                >
                                  Log In
                                </button>
                              </fieldset>
                            </div>
                            <div className="col-lg-12 text-center my-2">
                              <NavLink
                                className="nav-link text-secondary"
                                to="/Signup"
                              >
                                Don't have an account? Sign Up
                              </NavLink>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
