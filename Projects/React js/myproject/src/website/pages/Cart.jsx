import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LuX, LuShoppingBag, LuChevronRight, LuTag, LuArrowLeft, LuTrash2, LuMinus, LuPlus } from "react-icons/lu";

function Cart() {
  const API_URL = "http://localhost:5000/cart";

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(45);
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await axios.get(API_URL);
      setCartItems(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;
    try {
      await axios.patch(`${API_URL}/${id}`, { quantity });
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    } catch (err) {
      console.error("Update quantity error:", err);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Remove item error:", err);
    }
  };

  return (
    <div className="cart-page bg-surface min-vh-100 pb-100">
      {/* ✅ Minimal Header */}
      <header className="py-5 mb-5 text-center bg-main border-bottom">
        <div className="container">
          <span className="text-tertiary uppercase small tracking-widest mb-2 d-block">Your Selection</span>
          <h1 className="font-display">Shopping Bag</h1>
        </div>
      </header>

      <div className="container">
        {cartItems.length > 0 ? (
          <div className="row g-5">
            {/* ✅ Items Column */}
            <div className="col-lg-8">
              <div className="card-premium p-0 overflow-hidden">
                <div className="table-minimal-wrapper">
                  <table className="table-minimal mb-0">
                    <thead>
                      <tr>
                        <th className="ps-4">Masterpiece</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th className="text-end pe-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="ps-4 py-4">
                            <div className="d-flex align-items-center gap-3">
                              <div className="avatar-square rounded" style={{width: '60px', height: '60px'}}>
                                <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-cover" />
                              </div>
                              <div>
                                <span className="font-weight-600 text-primary d-block">{item.name}</span>
                                <span className="tiny text-tertiary uppercase tracking-tighter">Artisan Sweet</span>
                              </div>
                            </div>
                          </td>
                          <td><span className="mono text-secondary small">₹{item.price}</span></td>
                          <td>
                            <div className="quantity-control-minimal">
                               <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><LuMinus size={12} /></button>
                               <span className="mono px-3">{item.quantity}</span>
                               <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><LuPlus size={12} /></button>
                            </div>
                          </td>
                          <td><span className="mono text-primary font-weight-600">₹{item.price * item.quantity}</span></td>
                          <td className="text-end pe-4">
                            <button className="btn-ghost rounded-circle p-2 text-tertiary" onClick={() => removeItem(item.id)}>
                               <LuTrash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="btn-ghost text-secondary d-flex align-items-center gap-2" onClick={() => navigate(-1)}>
                   <LuArrowLeft size={16} /> Continue Exploring
                </button>
              </div>
            </div>

            {/* ✅ Order Summary Column */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '40px' }}>
                <div className="card-premium p-5 mb-4">
                  <h3 className="card-title-elegant mb-5">Bag Summary</h3>
                  
                  <div className="d-flex justify-content-between mb-3">
                    <span className="text-secondary small">Subtotal</span>
                    <span className="mono text-primary">₹{subtotal}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-4 pb-4 border-bottom border-subtle">
                    <span className="text-secondary small">Shipping Est.</span>
                    <span className="mono text-primary">₹{shipping}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-5">
                    <span className="font-weight-600 text-primary">Est. Total</span>
                    <span className="font-display fs-4 text-accent">₹{subtotal + shipping}</span>
                  </div>

                  <div className="coupon-area mb-5">
                     <label className="tiny text-tertiary uppercase mb-2 d-block">Promotional Code</label>
                     <div className="d-flex gap-2">
                        <input type="text" className="input-minimal flex-grow-1 px-3 py-2" placeholder="CODE10" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                        <button className="btn-ghost btn-sm px-3" style={{border: '1px solid var(--border-subtle)'}}>Apply</button>
                     </div>
                  </div>

                  <a href="/checkout" className="btn-primary w-100 py-3 text-center d-flex align-items-center justify-content-center gap-2">
                     Proceed to Checkout <LuChevronRight size={18} />
                  </a>
                  
                  <div className="mt-4 text-center">
                     <p className="tiny text-tertiary italic">Complimentary luxury packaging on orders above ₹2000</p>
                  </div>
                </div>
                
                <div className="card-premium p-4 bg-transparent border-dashed">
                   <div className="d-flex align-items-center gap-3 text-tertiary">
                      <LuTag size={20} className="text-accent opacity-50" />
                      <div>
                         <p className="tiny uppercase font-weight-600 mb-0">Seasonal Offer</p>
                         <p className="tiny mb-0">Get a free artisan box on your first purchase.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart-state text-center py-5">
             <div className="icon-burn mx-auto mb-4" style={{width: '100px', height: '100px'}}>
                <LuShoppingBag size={40} className="text-tertiary opacity-30" />
             </div>
             <h2 className="font-display mb-3">Your Bag is Empty</h2>
             <p className="text-secondary max-w-400 mx-auto mb-5">Start by exploring our artisan heritage collection to find your favorite treasures.</p>
             <button className="btn-primary px-5" onClick={() => navigate("/")}>Explore Collection</button>
          </div>
        )}
      </div>

      <style>{`
        .cart-page { color: var(--text-primary); }
        .border-dashed { border-style: dashed !important; border-width: 1px !important; }
        
        .quantity-control-minimal {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          overflow: hidden;
          background: var(--bg-surface);
        }
        .quantity-control-minimal button {
          background: transparent;
          border: none;
          padding: 4px 10px;
          color: var(--text-tertiary);
          transition: var(--transition-smooth);
        }
        .quantity-control-minimal button:hover {
          color: var(--accent-primary);
          background: var(--bg-main);
        }
        
        .empty-cart-state .icon-burn { background: var(--bg-main); border: 1px dashed var(--border-subtle); display: flex; align-items: center; justify-content: center; border-radius: 50%; }

        @media (max-width: 991px) {
          .cart-page .row { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}

export default Cart;
