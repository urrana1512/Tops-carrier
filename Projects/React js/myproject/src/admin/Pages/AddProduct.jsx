import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { LuPlus, LuImage, LuInfo, LuTag, LuBox, LuSave, LuRotateCcw, LuTrash2, LuSparkles, LuClock } from "react-icons/lu";

function AddProduct() {
  const API_URL = "http://localhost:5000/products";

  const [previewImages, setPreviewImages] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    type: "",
    shelfLife: "",
    ingredients: "",
    description: "",
    tag: "",
    images: [],
    status: "Active",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
    setFormData({ ...formData, images: previews });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.category || !formData.price) {
      Swal.fire({
        title: "Incomplete Details",
        text: "Please provide the artisan name, collection, and price.",
        icon: "warning",
        confirmButtonColor: "var(--accent-primary)"
      });
      return;
    }

    setIsSubmitting(true);
    const newProduct = {
      id: Date.now(),
      ...formData,
    };

    try {
      await axios.post(API_URL, newProduct);
      Swal.fire({
        title: "Creation Successful",
        text: "The new artisan sweet has been added to the collection.",
        icon: "success",
        confirmButtonColor: "var(--accent-primary)"
      });

      setFormData({
        name: "", category: "", price: "", stock: "", type: "",
        shelfLife: "", ingredients: "", description: "", tag: "",
        images: [], status: "Active",
      });
      setPreviewImages([]);
    } catch (error) {
      console.error("Add product error:", error);
      Swal.fire({
        title: "System Error",
        text: "Could not preserve the new creation. Check database connection.",
        icon: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-page-content">
      <header className="admin-page-header mb-5">
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <h1 className="font-display">New Creation</h1>
            <p className="text-secondary">Introduce a new masterpiece to the Jayhind collection.</p>
          </div>
          <button className="btn-ghost" onClick={() => window.history.back()}>
            <LuRotateCcw size={18} className="me-2" /> Discard Changes
          </button>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="row g-5">
        {/* ✅ Form Sections */}
        <div className="col-lg-8">
          <div className="card-premium p-5 mb-4">
            <h3 className="card-title-elegant mb-4 d-flex align-items-center">
              <LuInfo size={20} className="me-2 text-accent" /> Essential Information
            </h3>
            
            <div className="row g-4">
              <div className="col-12">
                <label className="label-elegant mb-2">Artisan Name</label>
                <input
                  type="text"
                  name="name"
                  className="input-elegant"
                  placeholder="e.g. Traditional Kaju Katli"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="label-elegant mb-2">Collection</label>
                <select
                  name="category"
                  className="input-elegant"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Collection</option>
                  <option>Traditional Sweets</option>
                  <option>Dry Fruit Sweets</option>
                  <option>Sugar-Free Sweets</option>
                  <option>Chocolates</option>
                </select>
              </div>

              <div className="col-md-3">
                <label className="label-elegant mb-2">Pricing (₹)</label>
                <input
                  type="number"
                  name="price"
                  className="input-elegant"
                  placeholder="Price / kg"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-3">
                <label className="label-elegant mb-2">Inventory</label>
                <input
                  type="number"
                  name="stock"
                  className="input-elegant"
                  placeholder="Qty"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="card-premium p-5 mb-4">
            <h3 className="card-title-elegant mb-4 d-flex align-items-center">
              <LuSparkles size={20} className="me-2 text-accent" /> Artisan Details
            </h3>
            
            <div className="row g-4">
              <div className="col-md-6">
                <label className="label-elegant mb-2">Consistency Type</label>
                <select name="type" className="input-elegant" value={formData.type} onChange={handleChange}>
                  <option value="">Select Type</option>
                  <option>Dry Sweet</option>
                  <option>Syrupy Sweet</option>
                  <option>Sugar-Free</option>
                  <option>Chocolate Based</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="label-elegant mb-2">Freshness Duration (Days)</label>
                <div className="input-with-icon">
                   <LuClock className="field-icon" />
                   <input type="number" name="shelfLife" className="input-elegant ps-5" placeholder="Shelf life..." value={formData.shelfLife} onChange={handleChange} />
                </div>
              </div>

              <div className="col-12">
                <label className="label-elegant mb-2">Pure Ingredients</label>
                <textarea
                  name="ingredients"
                  className="input-simple"
                  rows="2"
                  placeholder="e.g. Single-origin Cashews, Refined Sugar, Pure Cow Ghee"
                  value={formData.ingredients}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12">
                <label className="label-elegant mb-2">The Story / Description</label>
                <textarea
                  name="description"
                  className="input-simple"
                  rows="4"
                  placeholder="Describe the heritage and flavor profile of this creation..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12">
                <label className="label-elegant mb-2 d-flex align-items-center">
                  <LuTag size={14} className="me-2" /> Recognition Tag
                </label>
                <select name="tag" className="input-elegant" value={formData.tag} onChange={handleChange}>
                  <option value="">None</option>
                  <option>Best Seller</option>
                  <option>Festive Special</option>
                  <option>New Arrival</option>
                  <option>Signature</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Visuals Column */}
        <div className="col-lg-4">
          <div className="card-premium p-5 mb-4 sticky-top" style={{ top: '40px' }}>
            <h3 className="card-title-elegant mb-4 d-flex align-items-center">
              <LuImage size={20} className="me-2 text-accent" /> Visual Assets
            </h3>
            
            <div className="image-upload-laboratory mb-4">
               <input type="file" id="image-upload" multiple onChange={handleImageChange} className="d-none" />
               <label htmlFor="image-upload" className="upload-area">
                  <LuPlus size={32} className="mb-2 text-tertiary" />
                  <span className="small text-secondary">Upload Product Photography</span>
                  <span className="tiny text-tertiary mt-1">PNG, JPG up to 10MB</span>
               </label>
            </div>

            <div className="preview-laboratory">
              {previewImages.length > 0 ? (
                <div className="preview-grid-custom">
                  {previewImages.map((src, idx) => (
                    <div key={idx} className="preview-item-custom">
                      <img src={src} alt="Preview" />
                      <button type="button" className="remove-preview" onClick={() => {
                         const newPreviews = [...previewImages];
                         newPreviews.splice(idx, 1);
                         setPreviewImages(newPreviews);
                      }}><LuTrash2 size={12} /></button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="preview-empty text-center py-4">
                   <LuImage size={40} className="text-tertiary opacity-20 mb-2" />
                   <p className="tiny text-tertiary">No images captured yet.</p>
                </div>
              )}
            </div>

            <hr className="my-5 opacity-10" />

            <button type="submit" className="btn-primary w-100 py-3" disabled={isSubmitting}>
               {isSubmitting ? 'Preserving...' : <><LuSave size={18} className="me-2" /> Preserve Creation</>}
            </button>
            <p className="text-center tiny text-tertiary mt-3">All work is saved to the artisan repository immediately.</p>
          </div>
        </div>
      </form>

      <style>{`
        .input-with-icon { position: relative; }
        .field-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); pointer-events: none; }
        
        .image-upload-laboratory .upload-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px dashed var(--border-subtle);
          background: var(--bg-surface);
          border-radius: var(--radius-md);
          padding: 40px 20px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .image-upload-laboratory .upload-area:hover {
          border-color: var(--accent-primary);
          background: rgba(192, 98, 42, 0.02);
        }

        .preview-grid-custom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .preview-item-custom {
          position: relative;
          aspect-ratio: 1;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }

        .preview-item-custom img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-preview {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 24px;
          height: 24px;
          background: rgba(28, 25, 23, 0.8);
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .preview-item-custom:hover .remove-preview {
          opacity: 1;
        }

        .input-simple {
          width: 100%;
          border: 1px solid var(--border-subtle);
          background: var(--bg-surface);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          transition: var(--transition-smooth);
          outline: none;
        }

        .input-simple:focus {
          border-color: var(--accent-primary);
        }

        .tiny { font-size: 11px; }
        .uppercase { text-transform: uppercase; letter-spacing: 0.1em; }

      `}</style>
    </div>
  );
}

export default AddProduct;
