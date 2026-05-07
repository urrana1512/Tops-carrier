import React from "react";

function Create() {
  return (
    <div>
      <div className="page-heading normal-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>Liberty NFT Market</h6>
              <h2>Create Your NFT Now.</h2>
              <span>
                Home &gt; <a href="#">Create Yours</a>
              </span>
              <div className="buttons">
                <div className="main-button">
                  <a href="explore.html">Explore Our Items</a>
                </div>
                <div className="border-button">
                  <a href="create.html">Create Your NFT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h2>
                  Apply For <em>Your Item</em> Here.
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <form id="contact" action method="post">
                <div className="row">
                  <div className="col-lg-4">
                    <fieldset>
                      <label htmlFor="title">Item Title</label>
                      <input
                        type="title"
                        name="title"
                        id="title"
                        placeholder="Ex. Lyon King"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <label htmlFor="description">Description For Item</label>
                      <input
                        type="description"
                        name="description"
                        id="description"
                        placeholder="Give us your idea"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <label htmlFor="username">Your Username</label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        placeholder="Ex. @alansmithee"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="price">Price Of Item</label>
                      <input
                        type="price"
                        name="price"
                        id="price"
                        placeholder="Price depends on quality. Ex. 0.06 ETH"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="royalities">Royalties</label>
                      <input
                        type="royalities"
                        name="royalities"
                        id="royalities"
                        placeholder="Common royalties 1-25%"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <label htmlFor="file">Your File</label>
                      <input type="file" id="file" name="myfiles[]" multiple />
                    </fieldset>
                  </div>
                  <div className="col-lg-8">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Submit Your Applying
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h2>
                  This Is <em>Your Item</em> Preview.
                </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="left-image">
                <img
                  src="assets/images/create-yours.jpg"
                  alt
                  style={{ borderRadius: 20 }}
                />
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <h4>Dolores Haze Westworld Eye</h4>
              <span className="author">
                <img
                  src="assets/images/author-02.jpg"
                  alt
                  style={{ maxWidth: 50, borderRadius: "50%" }}
                />
                <h6>
                  Kataleya Smithee
                  <br />
                  <a href="#">@kataleey</a>
                </h6>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-3">
                  <span className="bid">
                    Current Bid
                    <br />
                    <strong>0.06 ETH</strong>
                    <br />
                    <em>($8055,35)</em>
                  </span>
                </div>
                <div className="col-4">
                  <span className="owner">
                    Owner
                    <br />
                    <strong>Alan Smithee</strong>
                    <br />
                    <em>(@asmithee)</em>
                  </span>
                </div>
                <div className="col-5">
                  <span className="ends">
                    Ends In
                    <br />
                    <strong>3D 05H 20M 58S</strong>
                    <br />
                    <em>(January 22nd, 2021)</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
