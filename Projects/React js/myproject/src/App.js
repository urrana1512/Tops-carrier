import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Website Components
import Footer from "./website/components/Footer";
import Header from "./website/components/Header";
import Index from "./website/pages/Index";
import About from "./website/pages/About";
import Signup from "./website/components/Signup";
import Login from "./website/components/Login";
import Cart from "./website/pages/Cart";
import Checkout from "./website/pages/Checkout";
import TraditionalSweets from "./website/pages/TraditionalSweets";
import Contact from "./website/pages/Contact";
import Feedback from "./website/pages/Feedback";
import CustomerProfile from "./website/components/CustomerProfile";

import Adminheader from "./admin/components/Adminheader";
import MainLayout from "./website/components/MainLayout";
import AdminLayout from "./admin/components/AdminLayout";

// ✅ Admin Pages
import Dashboard from "./admin/Pages/Dashboard";
import AddCategory from "./admin/Pages/AddCategory";
import ManageCategories from "./admin/Pages/ManageCategories";
import AddProduct from "./admin/Pages/AddProduct";
import ManageProducts from "./admin/Pages/ManageProduct";
import ManageContact from "./admin/Pages/ManageContact";
import ManageCustomers from "./admin/Pages/ManageCustomers";
import ManageOrders from "./admin/Pages/ManageOrders";
import ManageFeedback from "./admin/Pages/ManageFeedback";
import AddEmployee from "./admin/Pages/AddEmployee";
import ManageEmployees from "./admin/Pages/ManageEmployee";
import AddCoupon from "./admin/Pages/AddCoupon";
import ManageCoupons from "./admin/Pages/ManageCoupon";
import DryFruitSweets from "./website/pages/DryfruitSweets";
import AdminLogin from "./admin/components/AdminLogin";
import ProtectRoute from "./admin/components/ProtectRoute";
import AfterUserProtectedRoute from "./website/components/AfterUserProtectedRoute";
import BeforeUserProtectedRoute from "./website/components/BeforeUserProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <ToastContainer />
      {/* ✅ Always show Admin Header for now */}
      {/* <Adminheader /> */}

      <Routes>
        {/* ✅ Website Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/traditional-sweets" element={<TraditionalSweets />} />
          <Route path="/category/Dryfruit-sweets" element={<DryFruitSweets />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          
          <Route element={<AfterUserProtectedRoute />}>
             <Route path="/checkout" element={<Checkout />} />
             <Route path="/profile" element={<CustomerProfile />} />
          </Route>
        </Route>

        {/* ✅ Auth Routes (Self-contained) */}
        <Route element={<BeforeUserProtectedRoute />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/admin-login" element={<AdminLogin />} />
        {/* ✅ Admin Routes with AdminLayout */}
        <Route element={<ProtectRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/manage-categories" element={<ManageCategories />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/manage-products" element={<ManageProducts />} />
            <Route path="/manage-contact" element={<ManageContact />} />
            <Route path="/manage-customers" element={<ManageCustomers />} />
            <Route path="/manage-orders" element={<ManageOrders />} />
            <Route path="/manage-feedback" element={<ManageFeedback />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/manage-employee" element={<ManageEmployees />} />
            <Route path="/add-coupon" element={<AddCoupon />} />
            <Route path="/manage-coupons" element={<ManageCoupons />} />
          </Route>
        </Route>
      </Routes>

      {/* ✅ Show Footer always */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
