import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

export default function CustomerProfile() {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/customers/${localStorage.getItem("customer_id")}`
      );
      setUser(res.data); // ✅ Corrected
      setFormData(res.data); // ✅ Corrected
    } catch {
      swal("⚠️ Error", "Failed To Load Profile Data!", "error");
    }
  };

  // ✅ Fetch Customer Profile From JSON API (using axios)
  useEffect(() => {
    fetchProfile();
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Save Profile (PUT API with axios)
  const handleSave = () => {
    axios
      .put(`http://localhost:5000/customers/${user.id}`, formData)
      .then((res) => {
        setUser(res.data);
        setIsEditing(false);
        swal("✅ Success", "Profile Updated Successfully!", "success");
      })
      .catch(() => swal("⚠️ Error", "Failed To Update Profile!", "error"));
  };

  const handleLogout = () => {
    localStorage.removeItem("customer_id");
    localStorage.removeItem("customer_name");
    localStorage.removeItem("customer_image");
    navigate("/login");
    swal("✅ Logged Out", "Customer logged out successfully.", "success");
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Your Profile</p>
                <h1>{user.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout With Sidebar */}
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 sidebar ">
            <ul className="list-unstyled">
              <img
                src={
                  formData.image ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt="Profile"
                className="profile-img rounded-circle mb-3"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <li>
                <NavLink to="/profile" className="active">
                  👤 My Account
                </NavLink>
              </li>

              <li>
                <NavLink to="/orders">📦 My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/wishlist">❤️ Wishlist</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">⭐ My Rating & Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/change-password">🔑 Change Password</NavLink>
              </li>

              <li>
                <NavLink to="/settings">⚙️ Settings</NavLink>
              </li>
              <li>
                <a href={void 0} onClick={handleLogout}>
                  🚪 Logout
                </a>
              </li>
            </ul>
          </div>

          {/* Profile Section */}
          <div className="col-md-9">
            <div className="profile-container  p-4  bg-white">
              <div className="profile-card row">
                {/* Profile Image */}
                <div className="col-md-12 text-center mb-4">
                  <h3 className="mb-4">My Profile</h3>
                  <hr
                    style={{
                      border: "1px solid #ff5722",
                      width: "30%",
                      margin: "0 auto",
                      borderRadius: "100%",
                    }}
                  />
                </div>

                {/* Profile Details */}
                <div className="col-md-12">
                  <div className="profile-content row">
                    <div className="col-md-6">
                      <label>Name:</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          value={setFormData.name || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.name}</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label>Email:</label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={formData.email || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.email}</p>
                      )}
                    </div>
                    <div className="col-md-12">
                      <label>Profile Bio:</label>
                      {isEditing ? (
                        <textarea
                          name="bio"
                          value={formData.bio || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.bio}</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label>Phone:</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.phone}</p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label>Profile Photo:</label>
                      {isEditing ? (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <img
                          src={user.profilePhoto}
                          alt="Profile"
                          style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </div>
                    <div className="col-md-6">
                      <label>Country:</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="country"
                          value={formData.country || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.country}</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label>City:</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="city"
                          value={formData.city || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.city}</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label>Gender:</label>
                      {isEditing ? (
                        <select
                          name="gender"
                          value={formData.gender || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                          <option value="Prefer Not To Say">
                            Prefer Not To Say
                          </option>
                        </select>
                      ) : (
                        <p>{user.gender}</p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label>Date of Birth:</label>
                      {isEditing ? (
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.dob}</p>
                      )}
                    </div>
                    <div className="col-md-12">
                      <label>Address:</label>
                      {isEditing ? (
                        <textarea
                          name="address"
                          value={formData.address || ""}
                          onChange={handleChange}
                          className="form-control mb-2"
                        />
                      ) : (
                        <p>{user.address}</p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="profile-actions mt-3">
                    {isEditing ? (
                      <>
                        <button
                          style={{ marginLeft: "-5px" }}
                          className="btn btn-success w-50"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary w-50"
                          onClick={() => {
                            setFormData(user);
                            setIsEditing(false);
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => setIsEditing(true)}
                      >
                        🖊️ Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Profile Section */}
        </div>
      </div>
    </>
  );
}
