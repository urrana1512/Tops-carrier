import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Post_details from "./pages/Post_details";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Index />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Index />
                <Footer />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/Blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/Post-details"
            element={
              <>
                <Navbar />
                <Post_details />
                <Footer />
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/Login"
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/Signup"
            element={
              <>
                <Navbar />
                <Signup />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
