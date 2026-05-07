import React from "react";

function Footer() {
  return (
    <footer className="bg-info text-center">
      <div className="container p-4">
        {/* Social Media Section */}
        <section className="mb-4">
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-google" />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
        </section>

        {/* Newsletter Signup */}
        <section>
          <form action="#">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign Up For Our Newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example24"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-dark mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Description Section */}
        <section className="mb-4">
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sunt
            Distinctio Earum Repellat Quaerat Voluptatibus Placeat Nam, Commodi
            Optio Pariatur Est Quia Magnam Eum Harum Corrupti Dicta, Aliquam
            Sequi Voluptate Quas.
          </p>
        </section>

        {/* Links Section */}
        <section>
          <div className="row">
            {[...Array(4)].map((_, index) => (
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0" key={index}>
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2020 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          {" "}
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
